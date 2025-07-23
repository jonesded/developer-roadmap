import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$GridItem } from '../chunks/GridItem_CHc9J0b5.mjs';
import { $ as $$SimplePageHeader } from '../chunks/SimplePageHeader_Dl8X198H.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BrSKT5L_.mjs';
import { g as getAllQuestionGroups } from '../chunks/question-group_Ch4lCKsB.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const questionGroups = await getAllQuestionGroups();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Questions", "description": "Step by step guides and paths to learn different tools or technologies", "permalink": "/questions" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SimplePageHeader", $$SimplePageHeader, { "title": "Questions", "description": "Quizzes to help you test and improve your knowledge and skill up", "showYouTubeAlert": false })} ${maybeRenderHead()}<div class="flex bg-gray-100 pb-14 pt-4 sm:pb-16 sm:pt-8"> <div class="container"> <div class="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3"> ${questionGroups.map((questionGroup) => renderTemplate`${renderComponent($$result2, "GridItem", $$GridItem, { "url": `/questions/${questionGroup.id}`, "isNew": questionGroup.frontmatter.isNew, "title": questionGroup.frontmatter.briefTitle, "description": `${questionGroup.questions.length} Questions &middot; ${questionGroup.allTopics.length} topics` })}`)} </div> </div> </div> ` })}`;
}, "/workspace/src/pages/questions/index.astro", void 0);

const $$file = "/workspace/src/pages/questions/index.astro";
const $$url = "/questions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
