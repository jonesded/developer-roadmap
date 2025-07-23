import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { T as TeamSidebar } from '../../chunks/TeamSidebar_DlMvZEAa.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_C4SmqpML.mjs';
export { renderers } from '../../renderers.mjs';

const $$Member = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Team Members", "noIndex": true, "initialLoadingMessage": "Loading member" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamSidebar", TeamSidebar, { "activePageId": "members", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamSidebar", "client:component-export": "TeamSidebar" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TeamMemberDetailsPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/TeamMemberDetails/TeamMemberDetailsPage", "client:component-export": "TeamMemberDetailsPage" })} ` })} ` })}`;
}, "/workspace/src/pages/team/member.astro", void 0);

const $$file = "/workspace/src/pages/team/member.astro";
const $$url = "/team/member";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Member,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
