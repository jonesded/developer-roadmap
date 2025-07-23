function storeQuestionAnswerChatMessages(messages) {
  const sessionId = Date.now().toString();
  localStorage.setItem(sessionId, JSON.stringify(messages));
  localStorage.setItem("lastMessagesSessionId", sessionId);
  return sessionId;
}
function getQuestionAnswerChatMessages(sessionId) {
  const messages = localStorage.getItem(sessionId);
  if (!messages) {
    return [];
  }
  return JSON.parse(messages);
}
function clearQuestionAnswerChatMessages() {
  localStorage.removeItem("lastMessagesSessionId");
}

export { clearQuestionAnswerChatMessages as c, getQuestionAnswerChatMessages as g, storeQuestionAnswerChatMessages as s };
