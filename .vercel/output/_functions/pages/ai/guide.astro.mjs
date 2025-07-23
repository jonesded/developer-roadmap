import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { A as AIGuide } from '../../chunks/AIGuide_aa0h_DQg.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_CkmnKjD8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "AI Tutor", "briefTitle": "AI Tutor", "description": "AI Tutor", "keywords": ["ai", "tutor", "education", "learning"], "canonicalUrl": "/ai/guide", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AIGuide", AIGuide, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/GenerateGuide/AIGuide", "client:component-export": "AIGuide" })} ` })}`;
}, "/workspace/src/pages/ai/guide/index.astro", void 0);

const $$file = "/workspace/src/pages/ai/guide/index.astro";
const $$url = "/ai/guide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
