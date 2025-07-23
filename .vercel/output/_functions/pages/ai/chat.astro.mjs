import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_BiNdppmE.mjs';
import { A as AIChatHistory } from '../../chunks/AIChatHistory_C8aIabMK.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "AI Chat", "noIndex": true, "description": "Learn anything with AI Tutor. Pick a topic, choose a difficulty level and the AI will guide you through the learning process." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AIChatHistory", AIChatHistory, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIChatHistory/AIChatHistory", "client:component-export": "AIChatHistory" })} ` })}`;
}, "/workspace/src/pages/ai/chat/index.astro", void 0);

const $$file = "/workspace/src/pages/ai/chat/index.astro";
const $$url = "/ai/chat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
