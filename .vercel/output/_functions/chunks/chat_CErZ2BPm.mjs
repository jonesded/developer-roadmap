const CHAT_RESPONSE_PREFIX = {
  message: "0",
  details: "d"
};
const NEWLINE = "\n".charCodeAt(0);
function concatChunks(chunks, totalLength) {
  const concatenatedChunks = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    concatenatedChunks.set(chunk, offset);
    offset += chunk.length;
  }
  chunks.length = 0;
  return concatenatedChunks;
}
async function readChatStream(stream, {
  onMessage,
  onMessageEnd,
  onDetails
}) {
  const reader = stream.getReader();
  const decoder = new TextDecoder("utf-8");
  const chunks = [];
  let totalLength = 0;
  let result = "";
  while (true) {
    const { value } = await reader.read();
    if (value) {
      chunks.push(value);
      totalLength += value.length;
      if (value[value.length - 1] !== NEWLINE) {
        continue;
      }
    }
    if (chunks.length === 0) {
      break;
    }
    const concatenatedChunks = concatChunks(chunks, totalLength);
    totalLength = 0;
    const streamParts = decoder.decode(concatenatedChunks, { stream: true }).split("\n").filter((line) => line !== "").map((line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) {
        throw new Error("Invalid line: " + line + ". No separator found.");
      }
      const prefix = line.slice(0, separatorIndex);
      const content = line.slice(separatorIndex + 1);
      switch (prefix) {
        case CHAT_RESPONSE_PREFIX.message:
          return { type: "message", content: JSON.parse(content) };
        case CHAT_RESPONSE_PREFIX.details:
          return { type: "details", content: JSON.parse(content) };
        default:
          throw new Error("Invalid prefix: " + prefix);
      }
    });
    for (const part of streamParts) {
      if (part.type === "message") {
        result += part.content;
        await onMessage?.(result);
      } else if (part.type === "details") {
        await onDetails?.(part.content);
      }
    }
  }
  await onMessageEnd?.(result);
  reader.releaseLock();
}

export { readChatStream as r };
