import { a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountLayout } from '../chunks/AccountLayout_CCCzwF3s.mjs';
import { m as $$LoginPopup } from '../chunks/BaseLayout_BrSKT5L_.mjs';
export { renderers } from '../renderers.mjs';

const $$Befriend = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Respond Invite", "noIndex": true, "initialLoadingMessage": "Loading invite" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LoginPopup", $$LoginPopup, {})} ${renderComponent($$result2, "Befriend", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/Befriend", "client:component-export": "Befriend" })} ` })}`;
}, "/workspace/src/pages/befriend.astro", void 0);

const $$file = "/workspace/src/pages/befriend.astro";
const $$url = "/befriend";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Befriend,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
