import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { T as TeamSidebar } from '../../chunks/TeamSidebar_DlMvZEAa.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_C4SmqpML.mjs';
export { renderers } from '../../renderers.mjs';

const $$Activity = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Team Activity", "noIndex": true, "initialLoadingMessage": "Loading activity" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamSidebar", TeamSidebar, { "activePageId": "activity", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamSidebar", "client:component-export": "TeamSidebar" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TeamActivityPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/TeamActivity/TeamActivityPage", "client:component-export": "TeamActivityPage" })} ` })} ` })}`;
}, "/workspace/src/pages/team/activity.astro", void 0);

const $$file = "/workspace/src/pages/team/activity.astro";
const $$url = "/team/activity";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Activity,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
