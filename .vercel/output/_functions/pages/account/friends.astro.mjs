import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountSidebar } from '../../chunks/AccountSidebar_C_DQmMJ7.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_C4SmqpML.mjs';
export { renderers } from '../../renderers.mjs';

const $$Friends = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Friends", "noIndex": true, "initialLoadingMessage": "Loading friends", "permalink": "/account/friends" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "friends", "activePageTitle": "Friends" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FriendsPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/Friends/FriendsPage", "client:component-export": "FriendsPage" })} ` })} ` })}`;
}, "/workspace/src/pages/account/friends.astro", void 0);

const $$file = "/workspace/src/pages/account/friends.astro";
const $$url = "/account/friends";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Friends,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
