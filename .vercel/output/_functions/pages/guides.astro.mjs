import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { G as GuideListItem } from '../chunks/GuideListItem_CQjuUUaV.mjs';
import { $ as $$SimplePageHeader } from '../chunks/SimplePageHeader_Dl8X198H.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DfQviQZ5.mjs';
import { c as getAllGuides } from '../chunks/guide_CTGroPUz.mjs';
import { g as getAllQuestionGroups } from '../chunks/question-group_Ch4lCKsB.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const guides = await getAllGuides();
  const questionGuides = (await getAllQuestionGroups()).filter(
    (questionGroup) => questionGroup.frontmatter.authorId
  );
  const allGuides = [...guides, ...questionGuides];
  const sortedGuides = allGuides.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date);
    const bDate = new Date(b.frontmatter.date);
    return bDate.getTime() - aDate.getTime();
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Guides - roadmap.sh", "description": "Detailed guides on Software Engineering Topics", "permalink": `/guides` }, { "changelog-banner": async ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SimplePageHeader", $$SimplePageHeader, { "title": "Guides", "description": "Succinct graphical explanations to engineering topics." })} <div class="bg-gray-50 pb-20 pt-2"> <div class="container"> <div class="mt-3 sm:my-5"> ${sortedGuides.map((guide) => renderTemplate`${renderComponent($$result2, "GuideListItem", GuideListItem, { "guide": guide })}`)} </div> </div> </div>  ` })}`;
}, "/workspace/src/pages/guides/index.astro", void 0);

const $$file = "/workspace/src/pages/guides/index.astro";
const $$url = "/guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
