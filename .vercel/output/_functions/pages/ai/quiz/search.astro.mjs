import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_Cqa-EqH9.mjs';
import { A as AIQuiz } from '../../../chunks/AIQuiz_7J8pcUG4.mjs';
import { $ as $$SkeletonLayout } from '../../../chunks/SkeletonLayout_CkmnKjD8.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "AI Quiz", "briefTitle": "AI Quiz", "description": "AI Quiz", "keywords": ["ai", "quiz", "education", "learning"], "canonicalUrl": "/ai/quiz", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AIQuiz", AIQuiz, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIQuiz/AIQuiz", "client:component-export": "AIQuiz" })} ` })}`;
}, "/workspace/src/pages/ai/quiz/search.astro", void 0);

const $$file = "/workspace/src/pages/ai/quiz/search.astro";
const $$url = "/ai/quiz/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
