import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$GridItem } from '../chunks/GridItem_CHc9J0b5.mjs';
import { $ as $$SimplePageHeader } from '../chunks/SimplePageHeader_Dl8X198H.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DfQviQZ5.mjs';
import { g as getAllBestPractices } from '../chunks/best-practice_BojAiq1X.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const bestPractices = await getAllBestPractices();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Best Practices", "description": "Best practices on different topics with detailed implementation guidelines", "permalink": "/best-practices" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SimplePageHeader", $$SimplePageHeader, { "title": "Best Practices", "description": "Best practices on different topics with detailed implementation guidelines" })} ${maybeRenderHead()}<div class="bg-gray-100 pt-4 pb-14 sm:pt-8 sm:pb-16"> <div class="container"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-0.5 sm:gap-3"> ${bestPractices.map((bestPractice) => renderTemplate`${renderComponent($$result2, "GridItem", $$GridItem, { "url": `/best-practices/${bestPractice.id}`, "isNew": bestPractice.frontmatter.isNew, "title": bestPractice.frontmatter.briefTitle, "description": bestPractice.frontmatter.description })}`)} </div> </div> </div> ` })}`;
}, "/workspace/src/pages/best-practices/index.astro", void 0);

const $$file = "/workspace/src/pages/best-practices/index.astro";
const $$url = "/best-practices";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
