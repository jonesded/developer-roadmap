import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { M as Modal } from './BaseLayout_C3JOBLhD.mjs';
import { Q as QuestionAnswerChat } from './QuestionAnswerChat_CMfkgZwX.mjs';

function ModifyCoursePrompt(props) {
  const {
    onClose,
    onSubmit,
    title = "Give AI more context",
    description = "Pass additional information to the AI to generate a course outline."
  } = props;
  const [prompt, setPrompt] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prompt);
  };
  return /* @__PURE__ */ jsx(
    Modal,
    {
      onClose,
      wrapperClassName: "rounded-xl max-w-xl w-full h-auto",
      bodyClassName: "p-6",
      overlayClassName: "items-start md:items-center",
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-2 text-left text-xl font-semibold", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: description })
        ] }),
        /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-2", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "prompt",
              autoFocus: true,
              rows: 3,
              value: prompt,
              onChange: (e) => setPrompt(e.target.value),
              className: "w-full rounded-md border border-gray-200 p-2 placeholder:text-sm focus:outline-black",
              placeholder: "e.g. make sure to add a section on React hooks"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: 'Complete the sentence: "I want AI to..."' }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "rounded-md bg-gray-200 px-4 py-2.5 text-sm text-black hover:opacity-80",
                onClick: onClose,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: !prompt.trim(),
                className: "rounded-md bg-black px-4 py-2.5 text-sm text-white hover:opacity-80 disabled:opacity-50",
                children: "Modify Prompt"
              }
            )
          ] })
        ] })
      ] })
    }
  );
}

function UpdatePreferences(props) {
  const {
    onClose,
    questionAndAnswers: defaultQuestionAndAnswers,
    term,
    format,
    onUpdatePreferences,
    isUpdating
  } = props;
  const [questionAnswerChatMessages, setQuestionAnswerChatMessages] = useState(defaultQuestionAndAnswers || []);
  const defaultQuestions = defaultQuestionAndAnswers?.filter((message) => message.role === "assistant").map((message) => ({
    question: message.question,
    possibleAnswers: message.possibleAnswers
  }));
  const hasChangedQuestionAndAnswers = useMemo(() => {
    return JSON.stringify(questionAnswerChatMessages) !== JSON.stringify(defaultQuestionAndAnswers);
  }, [questionAnswerChatMessages, defaultQuestionAndAnswers]);
  console.log(questionAnswerChatMessages);
  console.log(defaultQuestionAndAnswers);
  const userAnswers = questionAnswerChatMessages.filter(
    (message) => message.role === "user"
  );
  const hasAnsweredAllQuestions = userAnswers.length === defaultQuestions?.length;
  return /* @__PURE__ */ jsxs(
    Modal,
    {
      onClose,
      bodyClassName: "p-4 flex flex-col gap-4",
      wrapperClassName: "max-w-xl  h-auto",
      overlayClassName: "items-start md:items-center",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium", children: "Update Preferences" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Update your preferences for better content" })
        ] }),
        /* @__PURE__ */ jsx(
          QuestionAnswerChat,
          {
            term,
            format,
            questionAnswerChatMessages,
            setQuestionAnswerChatMessages,
            defaultQuestions,
            onGenerateNow: () => {
              onUpdatePreferences(questionAnswerChatMessages);
            },
            className: "-mx-2 h-[400px] border-none p-0",
            type: "update"
          }
        ),
        hasChangedQuestionAndAnswers && hasAnsweredAllQuestions && /* @__PURE__ */ jsx(
          "button",
          {
            className: "rounded-lg bg-black px-4 py-2 text-white hover:opacity-80 disabled:opacity-50",
            disabled: isUpdating || !hasChangedQuestionAndAnswers,
            onClick: () => {
              onUpdatePreferences(questionAnswerChatMessages);
            },
            children: isUpdating ? "Updating..." : "Apply preferences"
          }
        )
      ]
    }
  );
}

export { ModifyCoursePrompt as M, UpdatePreferences as U };
