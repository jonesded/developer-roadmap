import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_Cqa-EqH9.mjs';
import { A as AIGuide } from '../../../chunks/AIGuide_aa0h_DQg.mjs';
import { $ as $$SkeletonLayout } from '../../../chunks/SkeletonLayout_CkmnKjD8.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://hnmdevs.com/");
const prerender = false;
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "AI Tutor", "briefTitle": "AI Tutor", "description": "AI Tutor", "keywords": ["ai", "tutor", "education", "learning"], "canonicalUrl": `/ai/guide/${slug}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AIGuide", AIGuide, { "client:load": true, "guideSlug": slug, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/GenerateGuide/AIGuide", "client:component-export": "AIGuide" })} ` })}`;
}, "/workspace/src/pages/ai/guide/[slug].astro", void 0);

const $$file = "/workspace/src/pages/ai/guide/[slug].astro";
const $$url = "/ai/guide/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
