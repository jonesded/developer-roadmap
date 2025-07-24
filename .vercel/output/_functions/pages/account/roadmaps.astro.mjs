import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountSidebar } from '../../chunks/AccountSidebar_CVrXcpx7.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_DPxxQUwD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Roadmaps = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Roadmaps", "noIndex": true, "initialLoadingMessage": "Loading roadmaps", "permalink": "/account/roadmaps" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "roadmaps", "activePageTitle": "Roadmaps" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "RoadmapListPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/CustomRoadmap/RoadmapListPage", "client:component-export": "RoadmapListPage" })} ` })} ` })}`;
}, "/workspace/src/pages/account/roadmaps.astro", void 0);

const $$file = "/workspace/src/pages/account/roadmaps.astro";
const $$url = "/account/roadmaps";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Roadmaps,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
