import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { jsx } from 'react/jsx-runtime';
import { useQuery } from '@tanstack/react-query';
import { g as getAiCourseOptions } from '../../chunks/ai-course_IUwlyb1o.mjs';
import { q as queryClient } from '../../chunks/query-client_B4F1D3EC.mjs';
import { useState, useEffect } from 'react';
import { A as AICourseContent, g as generateCourse } from '../../chunks/generate-ai-course_CKD8m6jl.mjs';
import 'js-cookie';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_ZOfUMIZI.mjs';
import { C as CheckSubscriptionVerification } from '../../chunks/CheckSubscriptionVerification_h4-ZR5FJ.mjs';
export { renderers } from '../../renderers.mjs';

function GetAICourse(props) {
  const { courseSlug } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [error, setError] = useState("");
  const { data: aiCourse, error: queryError } = useQuery(
    {
      ...getAiCourseOptions({ aiCourseSlug: courseSlug }),
      enabled: !!courseSlug
    },
    queryClient
  );
  useEffect(() => {
    if (!aiCourse) {
      return;
    }
    setIsLoading(false);
  }, [aiCourse]);
  useEffect(() => {
    if (!queryError) {
      return;
    }
    setIsLoading(false);
    setError(queryError.message);
  }, [queryError]);
  const handleRegenerateCourse = async (prompt) => {
    if (!aiCourse) {
      return;
    }
    queryClient.setQueryData(
      getAiCourseOptions({ aiCourseSlug: courseSlug }).queryKey,
      {
        ...aiCourse,
        title: "",
        difficulty: "",
        modules: []
      }
    );
    await generateCourse({
      term: aiCourse.keyword,
      slug: courseSlug,
      prompt,
      onCourseChange: (course, rawData) => {
        queryClient.setQueryData(
          getAiCourseOptions({ aiCourseSlug: courseSlug }).queryKey,
          {
            ...aiCourse,
            title: course.title,
            modules: course.modules
          }
        );
      },
      onLoadingChange: (isNewLoading) => {
        setIsRegenerating(isNewLoading);
      },
      onError: setError,
      isForce: true
    });
  };
  return /* @__PURE__ */ jsx(
    AICourseContent,
    {
      course: {
        title: aiCourse?.title || "",
        modules: aiCourse?.modules || [],
        done: aiCourse?.done || []
      },
      isLoading: isLoading || isRegenerating,
      courseSlug,
      error,
      onRegenerateOutline: handleRegenerateCourse,
      creatorId: aiCourse?.userId
    }
  );
}

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const prerender = false;
const $$courseSlug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$courseSlug;
  const { courseSlug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "AI Tutor", "briefTitle": "AI Tutor", "description": "AI Tutor", "keywords": ["ai", "tutor", "education", "learning"], "canonicalUrl": `/ai/${courseSlug}`, "noIndex": true }, { "course-announcement": ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "GetAICourse", GetAICourse, { "client:load": true, "courseSlug": courseSlug, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/GenerateCourse/GetAICourse", "client:component-export": "GetAICourse" })} ${renderComponent($$result2, "CheckSubscriptionVerification", CheckSubscriptionVerification, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Billing/CheckSubscriptionVerification", "client:component-export": "CheckSubscriptionVerification" })} ` })}`;
}, "/workspace/src/pages/ai/[courseSlug].astro", void 0);

const $$file = "/workspace/src/pages/ai/[courseSlug].astro";
const $$url = "/ai/[courseSlug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$courseSlug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
