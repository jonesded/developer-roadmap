import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { T as TeamSidebar } from '../../chunks/TeamSidebar_DUS6JFMa.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_DPxxQUwD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Members = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Team Members", "noIndex": true, "initialLoadingMessage": "Loading members" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamSidebar", TeamSidebar, { "activePageId": "members", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamSidebar", "client:component-export": "TeamSidebar" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TeamMembersPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/TeamMembers/TeamMembersPage", "client:component-export": "TeamMembersPage" })} ` })} ` })}`;
}, "/workspace/src/pages/team/members.astro", void 0);

const $$file = "/workspace/src/pages/team/members.astro";
const $$url = "/team/members";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Members,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
