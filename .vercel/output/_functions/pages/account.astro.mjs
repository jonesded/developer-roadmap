import { a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountSidebar } from '../chunks/AccountSidebar_CmRcSHZn.mjs';
import { $ as $$AccountLayout } from '../chunks/AccountLayout_BpeWaMTO.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Activity", "noIndex": true, "initialLoadingMessage": "Loading activity", "permalink": "/account" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "activity", "activePageTitle": "Activity" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ActivityPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/Activity/ActivityPage", "client:component-export": "ActivityPage" })} ` })} ` })}`;
}, "/workspace/src/pages/account/index.astro", void 0);

const $$file = "/workspace/src/pages/account/index.astro";
const $$url = "/account";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
