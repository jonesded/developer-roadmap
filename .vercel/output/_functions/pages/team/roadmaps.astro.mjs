import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { T as TeamSidebar } from '../../chunks/TeamSidebar_DUS6JFMa.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_DPxxQUwD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Roadmaps = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Roadmaps", "noIndex": true, "initialLoadingMessage": "Loading Roadmaps" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamSidebar", TeamSidebar, { "activePageId": "roadmaps", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamSidebar", "client:component-export": "TeamSidebar" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TeamRoadmaps", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/TeamRoadmapsList/TeamRoadmaps", "client:component-export": "TeamRoadmaps" })} ` })} ` })}`;
}, "/workspace/src/pages/team/roadmaps.astro", void 0);

const $$file = "/workspace/src/pages/team/roadmaps.astro";
const $$url = "/team/roadmaps";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Roadmaps,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
