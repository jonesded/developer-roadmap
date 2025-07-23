import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountSidebar } from '../../chunks/AccountSidebar_C_DQmMJ7.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_C4SmqpML.mjs';
export { renderers } from '../../renderers.mjs';

const $$RoadCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Road Card", "noIndex": true, "initialLoadingMessage": "Preparing card", "permalink": "/account/road-card" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "road-card", "activePageTitle": "Road Card" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "RoadCardPage", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/RoadCard/RoadCardPage", "client:component-export": "RoadCardPage" })} ` })} ` })}`;
}, "/workspace/src/pages/account/road-card.astro", void 0);

const $$file = "/workspace/src/pages/account/road-card.astro";
const $$url = "/account/road-card";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RoadCard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
