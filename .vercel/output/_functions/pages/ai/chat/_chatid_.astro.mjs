import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$SkeletonLayout } from '../../../chunks/SkeletonLayout_ZOfUMIZI.mjs';
import { A as AIChatHistory } from '../../../chunks/AIChatHistory_nTDSu-p8.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$chatId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$chatId;
  const { chatId } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "AI Chat", "noIndex": true, "description": "Learn anything with AI Tutor. Pick a topic, choose a difficulty level and the AI will guide you through the learning process." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AIChatHistory", AIChatHistory, { "client:load": true, "chatHistoryId": chatId, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIChatHistory/AIChatHistory", "client:component-export": "AIChatHistory" })} ` })}`;
}, "/workspace/src/pages/ai/chat/[chatId].astro", void 0);

const $$file = "/workspace/src/pages/ai/chat/[chatId].astro";
const $$url = "/ai/chat/[chatId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$chatId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
