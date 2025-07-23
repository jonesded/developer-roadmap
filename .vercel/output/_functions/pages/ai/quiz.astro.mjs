import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { ListTodoIcon, FileTextIcon, ListIcon, SparklesIcon } from 'lucide-react';
import { useState, useId, useEffect } from 'react';
import { i as isLoggedIn, b as getUrlParams, c as cn } from '../../chunks/BaseLayout_BrSKT5L_.mjs';
import { s as showLoginPopup } from '../../chunks/popup_DWUkHIfQ.mjs';
import { U as UpgradeAccountModal } from '../../chunks/UpgradeAccountModal_B2RF3Ir7.mjs';
import { b as billingDetailsOptions } from '../../chunks/billing_raRJBpT1.mjs';
import { c as clearQuestionAnswerChatMessages, s as storeQuestionAnswerChatMessages } from '../../chunks/ai-questions_vm3AhbaO.mjs';
import { Q as QuestionAnswerChat } from '../../chunks/QuestionAnswerChat_CKVmbt5q.mjs';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
import { F as FormatItem, s as showUpgradeModal } from '../../chunks/subscription_CTb2az1C.mjs';
import { q as queryClient } from '../../chunks/query-client_rwy39LWF.mjs';
import { useQuery } from '@tanstack/react-query';
import { a as aiLimitOptions } from '../../chunks/ai-course_sZQdwLbV.mjs';
import { A as AITutorLayout } from '../../chunks/AITutorLayout_CJilm_5H.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_BiNdppmE.mjs';
export { renderers } from '../../renderers.mjs';

function AIQuizGenerator() {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const toast = useToast();
  const [title, setTitle] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("mcq");
  const [showFineTuneOptions, setShowFineTuneOptions] = useState(false);
  const [questionAnswerChatMessages, setQuestionAnswerChatMessages] = useState([]);
  const {
    data: tokenUsage,
    isLoading: isTokenUsageLoading,
    refetch: refetchTokenUsage
  } = useQuery(aiLimitOptions(), queryClient);
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const isLimitExceeded = (tokenUsage?.used || 0) >= (tokenUsage?.limit || 0);
  const isPaidUser = userBillingDetails?.status === "active";
  const selectedLimit = tokenUsage?.quiz;
  const showLimitWarning = !isPaidUser && !isBillingDetailsLoading && !isTokenUsageLoading && isLoggedIn();
  const titleFieldId = useId();
  const fineTuneOptionsId = useId();
  useEffect(() => {
    const params = getUrlParams();
    const format = params.format;
    if (format && allowedFormats2.find((f) => f.value === format)) {
      setSelectedFormat(format);
    }
  }, []);
  const allowedFormats2 = [
    {
      label: "Multi-Choice",
      formatTitle: "Multiple Choice Question",
      icon: ListTodoIcon,
      value: "mcq"
    },
    {
      label: "Open-Ended",
      formatTitle: "Open-Ended Question",
      icon: FileTextIcon,
      value: "open-ended"
    },
    {
      label: "Mixed",
      formatTitle: "Mixed Question (MCQ + Open-Ended)",
      icon: ListIcon,
      value: "mixed"
    }
  ];
  const handleSubmit = () => {
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    if (!isPaidUser && isLimitExceeded) {
      setIsUpgradeModalOpen(true);
      return;
    }
    if (!isPaidUser && selectedLimit && selectedLimit?.used >= selectedLimit?.limit) {
      showUpgradeModal();
      return;
    }
    let sessionId = "";
    if (showFineTuneOptions) {
      clearQuestionAnswerChatMessages();
      sessionId = storeQuestionAnswerChatMessages(questionAnswerChatMessages);
    }
    window.location.href = `/ai/quiz/search?term=${title}&format=${selectedFormat}&id=${sessionId}`;
  };
  useEffect(() => {
    window?.fireEvent({
      action: "tutor_user",
      category: "ai_tutor",
      label: "Visited AI Quiz Generator Page"
    });
  }, []);
  const trimmedTitle = title.trim();
  const canGenerate = trimmedTitle && trimmedTitle.length >= 3;
  const selectedFormatTitle = allowedFormats2.find(
    (f) => f.value === selectedFormat
  )?.formatTitle;
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-2xl flex-grow flex-col pt-4 md:justify-center md:pt-10 lg:pt-28 lg:pb-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      isUpgradeModalOpen && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setIsUpgradeModalOpen(false) }),
      showLimitWarning && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-8 text-gray-500 max-md:hidden", children: [
        selectedLimit?.used,
        " of ",
        selectedLimit?.limit,
        " quizzes",
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsUpgradeModalOpen(true),
            className: "ml-2 rounded-xl bg-yellow-600 px-2 py-1 text-sm text-white hover:opacity-80",
            children: "Need more? Upgrade"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mb-0.5 text-center text-4xl font-semibold max-md:text-left max-md:text-xl lg:mb-3", children: "Test your Knowledge" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-lg text-balance text-gray-600 max-md:text-left max-md:text-sm", children: "Create a personalized quiz to test your understanding of any topic" })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        className: "mt-10 space-y-4",
        onSubmit: (e) => {
          e.preventDefault();
          handleSubmit();
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: titleFieldId, className: "inline-block text-gray-500", children: "What topic would you like to quiz yourself on?" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: titleFieldId,
                placeholder: "e.g., JavaScript Variables, Go Routines, System Design",
                value: title,
                onChange: (e) => {
                  setTitle(e.target.value);
                  setShowFineTuneOptions(false);
                },
                className: "block w-full rounded-xl border border-gray-200 bg-white p-4 outline-none placeholder:text-gray-500 focus:border-gray-500",
                required: true,
                minLength: 3
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("label", { className: "inline-block text-gray-500", children: "Choose the format" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: allowedFormats2.map((format) => {
              const isSelected = format.value === selectedFormat;
              return /* @__PURE__ */ jsx(
                FormatItem,
                {
                  label: format.label,
                  onClick: () => setSelectedFormat(format.value),
                  icon: format.icon,
                  isSelected
                },
                format.value
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxs(
            "label",
            {
              className: cn(
                "flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 transition-all"
              ),
              htmlFor: fineTuneOptionsId,
              children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: fineTuneOptionsId,
                    checked: showFineTuneOptions,
                    onChange: (e) => {
                      if (!isLoggedIn()) {
                        showLoginPopup();
                        return;
                      }
                      if (!isPaidUser && isLimitExceeded) {
                        setIsUpgradeModalOpen(true);
                        return;
                      }
                      if (!trimmedTitle) {
                        toast.error("Please enter a topic first");
                        return;
                      }
                      if (trimmedTitle.length < 3) {
                        toast.error("Topic must be at least 3 characters long");
                        return;
                      }
                      setShowFineTuneOptions(e.target.checked);
                    }
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "max-sm:hidden", children: "Answer the following questions for a better result" }),
                /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Customize your quiz" })
              ]
            }
          ),
          showFineTuneOptions && /* @__PURE__ */ jsx(
            QuestionAnswerChat,
            {
              term: title,
              format: selectedFormatTitle || selectedFormat,
              questionAnswerChatMessages,
              setQuestionAnswerChatMessages,
              from: "quiz"
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              className: "flex h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-black p-4 text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-80",
              disabled: !canGenerate || isTokenUsageLoading || isBillingDetailsLoading,
              children: [
                /* @__PURE__ */ jsx(SparklesIcon, { className: "size-4" }),
                "Generate Quiz"
              ]
            }
          )
        ]
      }
    )
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "AI Quiz", "briefTitle": "AI Quiz", "description": "AI Quiz", "keywords": ["ai", "quiz", "education", "learning"], "canonicalUrl": "/ai/quiz", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AITutorLayout", AITutorLayout, { "activeTab": "quiz", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AITutor/AITutorLayout", "client:component-export": "AITutorLayout" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AIQuizGenerator", AIQuizGenerator, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIQuiz/AIQuizGenerator", "client:component-export": "AIQuizGenerator" })} ` })} ` })}`;
}, "/workspace/src/pages/ai/quiz/index.astro", void 0);

const $$file = "/workspace/src/pages/ai/quiz/index.astro";
const $$url = "/ai/quiz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
