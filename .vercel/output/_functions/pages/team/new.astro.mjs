import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountSidebar } from '../../chunks/AccountSidebar_CmRcSHZn.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_BpeWaMTO.mjs';
export { renderers } from '../../renderers.mjs';

const $$New = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Create Team", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "hasDesktopSidebar": false, "activePageId": "create-team", "activePageTitle": "Create Team" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CreateTeamForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/CreateTeam/CreateTeamForm", "client:component-export": "CreateTeamForm" })} ` })} ` })}`;
}, "/workspace/src/pages/team/new.astro", void 0);

const $$file = "/workspace/src/pages/team/new.astro";
const $$url = "/team/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
