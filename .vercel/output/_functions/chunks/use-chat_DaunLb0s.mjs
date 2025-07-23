import { useRef, useState, useCallback } from 'react';
import { r as removeAuthToken } from './BaseLayout_BrSKT5L_.mjs';
import { r as readChatStream } from './chat_CErZ2BPm.mjs';
import { m as markdownToHtmlWithHighlighting } from './markdown_rbU7j7cH.mjs';
import { flushSync } from 'react-dom';

function useChat(options) {
  const { endpoint, initialMessages, onError, data = {}, onFinish } = options;
  const abortControllerRef = useRef(null);
  const [messages, setMessages] = useState(
    initialMessages || []
  );
  const [streamedMessageHtml, setStreamedMessageHtml] = useState(
    null
  );
  const [status, setStatus] = useState("idle");
  const sendMessages = useCallback(
    async (messages2) => {
      try {
        setStatus("loading");
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ messages: messages2, ...data }),
          signal: abortControllerRef.current?.signal,
          credentials: "include"
        });
        if (!response.ok) {
          const data2 = await response.json();
          setStatus("error");
          setMessages([...messages2].slice(0, messages2.length - 1));
          if (data2.status === 401) {
            removeAuthToken();
            window.location.reload();
          }
          throw new Error(data2?.message || "Something went wrong");
        }
        const stream = response.body;
        if (!stream) {
          setStatus("error");
          setMessages([...messages2].slice(0, messages2.length - 1));
          throw new Error("Something went wrong");
        }
        await readChatStream(stream, {
          onMessage: async (content) => {
            const html = await markdownToHtmlWithHighlighting(content);
            flushSync(() => {
              setStatus("streaming");
              setStreamedMessageHtml(html);
            });
          },
          onMessageEnd: async (content) => {
            const html = await markdownToHtmlWithHighlighting(content);
            flushSync(() => {
              setStreamedMessageHtml(null);
              setStatus("ready");
              setMessages((prevMessages) => {
                return [
                  ...prevMessages,
                  {
                    role: "assistant",
                    content,
                    html
                  }
                ];
              });
            });
          }
        });
        setStatus("idle");
        abortControllerRef.current = null;
        onFinish?.();
      } catch (error) {
        if (abortControllerRef.current?.signal.aborted) {
          return;
        }
        onError?.(error);
        setStatus("error");
      }
    },
    [endpoint, onError]
  );
  const stop = useCallback(() => {
    if (!abortControllerRef.current) {
      return;
    }
    abortControllerRef.current.abort();
    abortControllerRef.current = null;
  }, []);
  return {
    messages,
    setMessages,
    sendMessages,
    status,
    streamedMessageHtml,
    stop
  };
}

export { useChat as u };
