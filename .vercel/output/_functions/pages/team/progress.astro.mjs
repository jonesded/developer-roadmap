import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { T as TeamSidebar } from '../../chunks/TeamSidebar_CP9wugJX.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_CCCzwF3s.mjs';
export { renderers } from '../../renderers.mjs';

const $$Progress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Team Progress", "noIndex": true, "initialLoadingMessage": "Loading Progress" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamSidebar", TeamSidebar, { "activePageId": "progress", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamSidebar", "client:component-export": "TeamSidebar" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TeamProgressPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/TeamProgress/TeamProgressPage", "client:component-export": "TeamProgressPage" })} ` })} ` })}`;
}, "/workspace/src/pages/team/progress.astro", void 0);

const $$file = "/workspace/src/pages/team/progress.astro";
const $$url = "/team/progress";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Progress,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
