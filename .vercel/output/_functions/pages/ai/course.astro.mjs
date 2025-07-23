import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { b as getUrlParams, i as isLoggedIn } from '../../chunks/BaseLayout_BrSKT5L_.mjs';
import { g as generateCourse, A as AICourseContent } from '../../chunks/generate-ai-course_BxGiCWei.mjs';
import { useQuery } from '@tanstack/react-query';
import { g as getAiCourseOptions, a as aiLimitOptions } from '../../chunks/ai-course_sZQdwLbV.mjs';
import { q as queryClient } from '../../chunks/query-client_rwy39LWF.mjs';
import { g as getQuestionAnswerChatMessages } from '../../chunks/ai-questions_vm3AhbaO.mjs';
import { u as useIsPaidUser } from '../../chunks/billing_raRJBpT1.mjs';
import { U as UpgradeAccountModal } from '../../chunks/UpgradeAccountModal_B2RF3Ir7.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_BiNdppmE.mjs';
import { C as CheckSubscriptionVerification } from '../../chunks/CheckSubscriptionVerification_DrySdgR7.mjs';
export { renderers } from '../../renderers.mjs';

function GenerateAICourse(props) {
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [creatorId, setCreatorId] = useState("");
  const [courseSlug, setCourseSlug] = useState("");
  const [course, setCourse] = useState({
    title: "",
    modules: [],
    done: []
  });
  const { data: aiCourse } = useQuery(
    getAiCourseOptions({ aiCourseSlug: courseSlug }),
    queryClient
  );
  const { isPaidUser, isLoading: isPaidUserLoading } = useIsPaidUser();
  const { data: limits, isLoading: isLimitLoading } = useQuery(
    aiLimitOptions(),
    queryClient
  );
  useEffect(() => {
    if (!aiCourse) {
      return;
    }
    setCourse(aiCourse);
  }, [aiCourse]);
  const isLimitDataLoading = isPaidUserLoading || isLimitLoading;
  useEffect(() => {
    if (term || isLimitDataLoading) {
      return;
    }
    if (!isPaidUser && limits && limits?.course?.used >= limits?.course?.limit) {
      setError("You have reached the limit for this format");
      setIsLoading(false);
      setShowUpgradeModal(true);
      return;
    }
    const params = getUrlParams();
    const paramsTerm = params?.term;
    const paramsSrc = params?.src || "search";
    if (!paramsTerm) {
      return;
    }
    setTerm(paramsTerm);
    const sessionId = params?.id;
    let questionAndAnswers = [];
    if (sessionId) {
      questionAndAnswers = getQuestionAnswerChatMessages(sessionId);
    }
    handleGenerateCourse({
      term: paramsTerm,
      src: paramsSrc,
      questionAndAnswers
    });
  }, [term, isLimitDataLoading]);
  const handleGenerateCourse = async (options) => {
    const { term: term2, isForce, prompt, src, questionAndAnswers } = options;
    if (!isLoggedIn()) {
      window.location.href = "/ai";
      return;
    }
    await generateCourse({
      term: term2,
      slug: courseSlug,
      onCourseSlugChange: setCourseSlug,
      onCreatorIdChange: setCreatorId,
      onCourseChange: setCourse,
      onLoadingChange: setIsLoading,
      onError: setError,
      questionAndAnswers,
      isForce,
      prompt,
      src
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showUpgradeModal && /* @__PURE__ */ jsx(
      UpgradeAccountModal,
      {
        onClose: () => {
          window.location.href = "/ai";
        }
      }
    ),
    /* @__PURE__ */ jsx(
      AICourseContent,
      {
        courseSlug,
        creatorId,
        course,
        isLoading,
        error,
        onRegenerateOutline: (prompt) => {
          handleGenerateCourse({
            term,
            isForce: true,
            prompt
          });
        }
      }
    )
  ] });
}

const $$Course = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "AI Tutor", "briefTitle": "AI Tutor", "description": "AI Tutor", "keywords": ["ai", "tutor", "education", "learning"], "canonicalUrl": "/ai/course", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GenerateAICourse", GenerateAICourse, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/GenerateCourse/GenerateAICourse", "client:component-export": "GenerateAICourse" })} ${renderComponent($$result2, "CheckSubscriptionVerification", CheckSubscriptionVerification, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Billing/CheckSubscriptionVerification", "client:component-export": "CheckSubscriptionVerification" })} ` })}`;
}, "/workspace/src/pages/ai/course.astro", void 0);

const $$file = "/workspace/src/pages/ai/course.astro";
const $$url = "/ai/course";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Course,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
