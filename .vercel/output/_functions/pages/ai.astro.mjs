import { a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { C as CheckSubscriptionVerification } from '../chunks/CheckSubscriptionVerification_D2DoKern.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { BookOpenIcon, FileTextIcon, MapIcon, SparklesIcon } from 'lucide-react';
import { useState, useEffect, useId } from 'react';
import { F as FormatItem, s as showUpgradeModal } from '../chunks/subscription_CtoZLdoP.mjs';
import { b as getUrlParams, i as isLoggedIn, c as cn } from '../chunks/BaseLayout_DfQviQZ5.mjs';
import { s as showLoginPopup } from '../chunks/popup_DWUkHIfQ.mjs';
import { U as UpgradeAccountModal } from '../chunks/UpgradeAccountModal_DhdxALHd.mjs';
import { u as useIsPaidUser } from '../chunks/billing_B5wE6dhK.mjs';
import { c as clearQuestionAnswerChatMessages, s as storeQuestionAnswerChatMessages } from '../chunks/ai-questions_vm3AhbaO.mjs';
import { Q as QuestionAnswerChat } from '../chunks/QuestionAnswerChat_v5qtNffn.mjs';
import { u as useToast } from '../chunks/use-toast_BYLkOsfO.mjs';
import { u as useParams } from '../chunks/use-params_B1NTvrba.mjs';
import { useQuery } from '@tanstack/react-query';
import { a as aiLimitOptions } from '../chunks/ai-course_ei-HsZ8o.mjs';
import { q as queryClient } from '../chunks/query-client_BnT_580V.mjs';
import { A as AITutorLayout } from '../chunks/AITutorLayout_D2lYDCfF.mjs';
import { $ as $$SkeletonLayout } from '../chunks/SkeletonLayout_CkmnKjD8.mjs';
export { renderers } from '../renderers.mjs';

function ContentGenerator() {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const { isPaidUser, isLoading: isPaidUserLoading } = useIsPaidUser();
  const params = useParams();
  const toast = useToast();
  const [title, setTitle] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("course");
  const { data: limits, isLoading: isLimitLoading } = useQuery(
    aiLimitOptions(),
    queryClient
  );
  useEffect(() => {
    const isValidFormat = allowedFormats2.find(
      (format) => format.value === params.format
    );
    if (isValidFormat) {
      setSelectedFormat(isValidFormat.value);
    } else {
      setSelectedFormat("course");
    }
  }, [params.format]);
  const [showFineTuneOptions, setShowFineTuneOptions] = useState(false);
  const [questionAnswerChatMessages, setQuestionAnswerChatMessages] = useState([]);
  const titleFieldId = useId();
  const fineTuneOptionsId = useId();
  useEffect(() => {
    const params2 = getUrlParams();
    const format = params2.format;
    if (format && allowedFormats2.find((f) => f.value === format)) {
      setSelectedFormat(format);
    }
  }, []);
  const allowedFormats2 = [
    {
      label: "Course",
      icon: BookOpenIcon,
      value: "course"
    },
    {
      label: "Guide",
      icon: FileTextIcon,
      value: "guide"
    },
    {
      label: "Roadmap",
      icon: MapIcon,
      value: "roadmap"
    }
  ];
  const selectedLimit = limits?.[selectedFormat];
  const showLimitWarning = !isPaidUser && !isPaidUserLoading && !isLimitLoading && isLoggedIn();
  const handleSubmit = () => {
    if (!isLoggedIn()) {
      showLoginPopup();
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
    const trimmedTitle2 = title.trim();
    if (selectedFormat === "course") {
      window.location.href = `/ai/course?term=${encodeURIComponent(trimmedTitle2)}&id=${sessionId}&format=${selectedFormat}`;
    } else if (selectedFormat === "guide") {
      window.location.href = `/ai/guide?term=${encodeURIComponent(trimmedTitle2)}&id=${sessionId}&format=${selectedFormat}`;
    } else if (selectedFormat === "roadmap") {
      window.location.href = `/ai/roadmap?term=${encodeURIComponent(trimmedTitle2)}&id=${sessionId}&format=${selectedFormat}`;
    }
  };
  useEffect(() => {
    window?.fireEvent({
      action: "tutor_user",
      category: "ai_tutor",
      label: "Visited AI Course Page"
    });
  }, []);
  const trimmedTitle = title.trim();
  const canGenerate = trimmedTitle && trimmedTitle.length >= 3;
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-2xl flex-grow flex-col pt-4 md:justify-center md:pt-10 lg:pt-28 lg:pb-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      isUpgradeModalOpen && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setIsUpgradeModalOpen(false) }),
      showLimitWarning && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-8 text-gray-500 max-md:hidden", children: [
        selectedLimit?.used,
        " of ",
        selectedLimit?.limit,
        " ",
        selectedFormat,
        "s",
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsUpgradeModalOpen(true),
            className: "ml-2 rounded-xl bg-yellow-600 px-2 py-1 text-sm text-white hover:opacity-80",
            children: "Need more? Upgrade"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mb-0.5 text-center text-4xl font-semibold max-md:text-left max-md:text-xl lg:mb-3", children: "What can I help you learn?" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-lg text-balance text-gray-600 max-md:text-left max-md:text-sm", children: "Enter a topic below to generate a personalized course for it" })
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
            /* @__PURE__ */ jsx("label", { htmlFor: titleFieldId, className: "inline-block text-gray-500", children: "What can I help you learn?" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: titleFieldId,
                placeholder: "Enter a topic",
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
                /* @__PURE__ */ jsxs("span", { className: "max-sm:hidden", children: [
                  "Answer the following questions for a better ",
                  selectedFormat
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "sm:hidden", children: [
                  "Customize your ",
                  selectedFormat
                ] })
              ]
            }
          ),
          showFineTuneOptions && /* @__PURE__ */ jsx(
            QuestionAnswerChat,
            {
              term: title,
              format: selectedFormat,
              questionAnswerChatMessages,
              setQuestionAnswerChatMessages
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              className: "flex w-full items-center justify-center gap-2 rounded-xl bg-black p-4 text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-80",
              disabled: !canGenerate || isLimitLoading,
              children: [
                /* @__PURE__ */ jsx(SparklesIcon, { className: "size-4" }),
                "Generate"
              ]
            }
          )
        ]
      }
    )
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const ogImage = "https://roadmap.sh/og-images/ai-tutor.png";
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "Roadmap AI", "noIndex": true, "ogImageUrl": ogImage, "description": "Learn anything with AI Tutor. Pick a topic, choose a difficulty level and the AI will guide you through the learning process." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AITutorLayout", AITutorLayout, { "activeTab": "new", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AITutor/AITutorLayout", "client:component-export": "AITutorLayout" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ContentGenerator", ContentGenerator, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/ContentGenerator/ContentGenerator", "client:component-export": "ContentGenerator" })} ${renderComponent($$result3, "CheckSubscriptionVerification", CheckSubscriptionVerification, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Billing/CheckSubscriptionVerification", "client:component-export": "CheckSubscriptionVerification" })} ` })} ` })}`;
}, "/workspace/src/pages/ai/index.astro", void 0);

const $$file = "/workspace/src/pages/ai/index.astro";
const $$url = "/ai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
