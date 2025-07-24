import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { h as httpGet, q as queryClient } from './query-client_B4F1D3EC.mjs';
import { Loader2Icon, RefreshCcwIcon, Trash2, SendIcon } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { c as cn } from './BaseLayout_C3JOBLhD.mjs';
import { flushSync } from 'react-dom';
import { C as CheckIcon } from './CheckIcon_B3c1RSNy.mjs';
import { T as Tooltip } from './Tooltip_B3pH7xnQ.mjs';

function aiQuestionSuggestionsOptions(query, defaultQuestions) {
  return queryOptions({
    queryKey: ["ai-question-suggestions", query],
    queryFn: () => {
      if (defaultQuestions) {
        return {
          questions: defaultQuestions
        };
      }
      return httpGet(
        `/v1-ai-question-suggestions`,
        query
      );
    },
    enabled: !!query.term && !!query.format && !!query.from,
    refetchOnMount: false
  });
}

function QuestionAnswerChat(props) {
  const {
    term,
    format,
    defaultQuestions,
    questionAnswerChatMessages,
    setQuestionAnswerChatMessages,
    type = "create",
    className = "",
    from = "content"
  } = props;
  const [activeMessageIndex, setActiveMessageIndex] = useState(
    defaultQuestions?.length ?? 0
  );
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("answering");
  const scrollAreaRef = useRef(null);
  const inputRef = useRef(null);
  const {
    data: aiQuestionSuggestions,
    isLoading: isLoadingAiQuestionSuggestions
  } = useQuery(
    aiQuestionSuggestionsOptions({ term, format, from }, defaultQuestions),
    queryClient
  );
  const activeMessage = aiQuestionSuggestions?.questions[activeMessageIndex];
  const scrollToBottom = () => {
    if (!scrollAreaRef.current) {
      return;
    }
    scrollAreaRef.current.scrollTo({
      top: scrollAreaRef.current.scrollHeight,
      behavior: "instant"
    });
  };
  const handleAnswerSelect = (answer) => {
    const trimmedAnswer = answer.trim();
    if (!activeMessage || !trimmedAnswer) {
      return;
    }
    const newMessages = [
      ...questionAnswerChatMessages,
      {
        role: "assistant",
        ...activeMessage
      },
      {
        role: "user",
        answer: trimmedAnswer
      }
    ];
    setQuestionAnswerChatMessages(newMessages);
    setMessage("");
    const hasMoreMessages = activeMessageIndex < aiQuestionSuggestions.questions.length - 1;
    if (!hasMoreMessages) {
      setStatus("done");
      return;
    }
    flushSync(() => {
      setActiveMessageIndex(activeMessageIndex + 1);
      setStatus("answering");
      inputRef.current?.focus();
    });
    scrollToBottom();
  };
  const handleReset = () => {
    setQuestionAnswerChatMessages([]);
    setActiveMessageIndex(0);
    setStatus("answering");
  };
  const handleEditMessage = (messageIndex) => {
    const assistantMessageIndex = messageIndex - 1;
    const newMessages = questionAnswerChatMessages.slice(
      0,
      assistantMessageIndex
    );
    setQuestionAnswerChatMessages(newMessages);
    const questionIndex = Math.floor(assistantMessageIndex / 2);
    setActiveMessageIndex(questionIndex);
    setStatus("answering");
    setMessage("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  useEffect(() => {
    scrollToBottom();
  }, [defaultQuestions, type]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative h-[350px] w-full overflow-hidden rounded-xl border border-gray-200 bg-white",
        className
      ),
      children: [
        isLoadingAiQuestionSuggestions && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex animate-pulse items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-2 px-4 text-sm", children: [
          /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" }),
          /* @__PURE__ */ jsx("span", { children: "Generating personalized questions..." })
        ] }) }),
        !isLoadingAiQuestionSuggestions && status === "done" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx(CheckIcon, { additionalClasses: "size-12" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-lg font-semibold", children: "Preferences saved" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
            "You can now start generating ",
            format
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "mt-4 flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-1.5 text-sm text-gray-500 hover:bg-gray-200 focus:outline-none",
              onClick: handleReset,
              children: [
                /* @__PURE__ */ jsx(RefreshCcwIcon, { className: "size-3.5" }),
                "Reanswer questions"
              ]
            }
          )
        ] }) }),
        !isLoadingAiQuestionSuggestions && status === "answering" && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex h-full w-full flex-col bg-white", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              ref: scrollAreaRef,
              className: "relative h-full w-full grow overflow-y-auto",
              children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full grow flex-col justify-end gap-2 p-2", children: [
                questionAnswerChatMessages.map((message2, index) => /* @__PURE__ */ jsx(
                  QuestionAnswerChatMessage,
                  {
                    role: message2.role,
                    question: message2.role === "assistant" ? message2.question : void 0,
                    answer: message2.role === "user" ? message2.answer : void 0,
                    onEdit: message2.role === "user" ? () => handleEditMessage(index) : void 0
                  },
                  index
                )),
                activeMessage && /* @__PURE__ */ jsx(
                  QuestionAnswerChatMessage,
                  {
                    role: "assistant",
                    question: activeMessage?.question ?? "",
                    possibleAnswers: activeMessage.possibleAnswers,
                    onAnswerSelect: handleAnswerSelect
                  }
                )
              ] }) })
            }
          ),
          !activeMessage && type === "update" && /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxs(
            "button",
            {
              className: "flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-200 p-2 hover:bg-gray-300",
              onClick: () => {
                setQuestionAnswerChatMessages([]);
                setActiveMessageIndex(0);
                setStatus("answering");
              },
              children: [
                /* @__PURE__ */ jsx(Trash2, { className: "size-4" }),
                "Reanswer all questions"
              ]
            }
          ) }),
          activeMessage && /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-gray-200 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between gap-2 p-2", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                value: message,
                onChange: (e) => setMessage(e.target.value),
                className: "w-full bg-transparent text-sm focus:outline-none",
                placeholder: activeMessage.possibleAnswers ? "Type your answer..." : "Or type your own answer...",
                autoFocus: true,
                onKeyDown: (e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleAnswerSelect(message);
                    setMessage("");
                  }
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-gray-100 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                disabled: !message,
                onClick: () => {
                  handleAnswerSelect(message);
                  setMessage("");
                },
                children: /* @__PURE__ */ jsx(SendIcon, { className: "size-4" })
              }
            )
          ] }) }) })
        ] }) })
      ]
    }
  ) });
}
function QuestionAnswerChatMessage(props) {
  const { role, question, answer, possibleAnswers, onAnswerSelect, onEdit } = props;
  const hasAnswers = possibleAnswers && possibleAnswers.length > 0;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex w-fit items-center gap-2 rounded-lg border p-2 text-pretty",
        role === "user" && "self-end border-gray-200 bg-gray-300/30",
        role === "assistant" && "border-yellow-200 bg-yellow-300/30"
      ),
      children: [
        role === "assistant" && /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("div", { className: cn(hasAnswers && "mb-2"), children: question }),
          hasAnswers && onAnswerSelect && /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: possibleAnswers.map((answer2) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "cursor-pointer rounded-md border border-yellow-300/50 bg-white/70 px-2 py-1 text-xs text-gray-700 hover:bg-white hover:shadow-sm focus:outline-none",
              onClick: () => {
                onAnswerSelect(answer2);
              },
              children: answer2
            },
            answer2
          )) }) })
        ] }),
        role === "user" && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm", children: answer }),
          onEdit && /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "flex size-6 shrink-0 items-center justify-center rounded-md text-gray-500 opacity-70 hover:bg-gray-100 hover:opacity-100 focus:outline-none",
                onClick: onEdit,
                children: /* @__PURE__ */ jsx(Trash2, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsx(Tooltip, { additionalClass: "-translate-y-2", position: "top-right", children: "Reanswer after this point" })
          ] })
        ] })
      ]
    }
  );
}

export { QuestionAnswerChat as Q };
