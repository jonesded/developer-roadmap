import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C3JOBLhD.mjs';
import { S as SkeletonRoadmapHeader } from '../chunks/SkeletonRoadmapHeader_B2JB4ZcL.mjs';
import { $ as $$Loader } from '../chunks/Loader_D0GX2Nmm.mjs';
import { $ as $$ProgressHelpPopup } from '../chunks/ProgressHelpPopup_BHpdnDjM.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Roadmaps", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProgressHelpPopup", $$ProgressHelpPopup, {})} ${maybeRenderHead()}<div> <div class="flex min-h-[550px] flex-col"> <div data-roadmap-loader class="flex w-full grow flex-col"> ${renderComponent($$result2, "SkeletonRoadmapHeader", SkeletonRoadmapHeader, {})} <div class="flex grow items-center justify-center"> ${renderComponent($$result2, "Loader", $$Loader, {})} </div> </div> ${renderComponent($$result2, "CustomRoadmap", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/CustomRoadmap/CustomRoadmap", "client:component-export": "CustomRoadmap" })} </div> </div> ` })}`;
}, "/workspace/src/pages/r/index.astro", void 0);

const $$file = "/workspace/src/pages/r/index.astro";
const $$url = "/r";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
