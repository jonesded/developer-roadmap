import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { A as AIRoadmap } from '../../chunks/AIRoadmap_BYiyAZY0.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_CkmnKjD8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://hnmdevs.com/");
const prerender = false;
const $$aiRoadmapSlug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$aiRoadmapSlug;
  const { aiRoadmapSlug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "AI Tutor", "briefTitle": "AI Tutor", "description": "AI Tutor", "keywords": ["ai", "tutor", "education", "learning"], "canonicalUrl": `/ai-roadmaps/${aiRoadmapSlug}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AIRoadmap", AIRoadmap, { "client:load": true, "roadmapSlug": aiRoadmapSlug, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIRoadmap/AIRoadmap", "client:component-export": "AIRoadmap" })} ` })}`;
}, "/workspace/src/pages/ai-roadmaps/[aiRoadmapSlug].astro", void 0);

const $$file = "/workspace/src/pages/ai-roadmaps/[aiRoadmapSlug].astro";
const $$url = "/ai-roadmaps/[aiRoadmapSlug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$aiRoadmapSlug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
