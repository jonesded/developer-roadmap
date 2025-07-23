import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_Cqa-EqH9.mjs';
import { g as getGuideTableOfContent } from './guide_CTGroPUz.mjs';
import { $ as $$MarkdownFile } from './MarkdownFile_3ObwnEIx.mjs';
import { R as RelatedGuides, T as TableOfContent } from './RelatedGuides_FPMgr0Z9.mjs';

const $$Astro = createAstro("https://hnmdevs.com/");
const $$GuideContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GuideContent;
  const { guide } = Astro2.props;
  const allHeadings = guide.getHeadings();
  const tableOfContent = getGuideTableOfContent(allHeadings);
  const showTableOfContent = tableOfContent.length > 0;
  const showRelatedGuides = guide?.relatedGuides && Object.keys(guide?.relatedGuides).length > 0;
  const { frontmatter: guideFrontmatter, author } = guide;
  return renderTemplate`${maybeRenderHead()}<article class="lg:grid lg:max-w-full lg:grid-cols-[1fr_minmax(0,700px)_1fr]"> ${(showTableOfContent || showRelatedGuides) && renderTemplate`<div class="sticky top-0 lg:relative bg-linear-to-r from-gray-50 py-0 lg:col-start-3 lg:col-end-4 lg:row-start-1"> ${renderComponent($$result, "RelatedGuides", RelatedGuides, { "relatedTitle": guideFrontmatter?.relatedTitle, "relatedGuides": guide?.relatedGuides || {}, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Guide/RelatedGuides", "client:component-export": "RelatedGuides" })} ${renderComponent($$result, "TableOfContent", TableOfContent, { "toc": tableOfContent, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TableOfContent/TableOfContent", "client:component-export": "TableOfContent" })} </div>`} <div${addAttribute([
    "col-start-2 col-end-3 row-start-1 mx-auto max-w-[700px] py-5 sm:py-10",
    {
      "lg:border-r": showTableOfContent
    }
  ], "class:list")}> ${renderComponent($$result, "MarkdownFile", $$MarkdownFile, {}, { "default": ($$result2) => renderTemplate` <h1 class="mb-3 text-balance text-4xl font-bold"> ${guideFrontmatter.title} </h1> <p class="my-0 flex items-center justify-start text-sm text-gray-400"> <a${addAttribute(`/authors/${author.id}`, "href")} class="inline-flex items-center font-medium underline-offset-2 hover:text-gray-600 hover:underline"> <img${addAttribute(author.frontmatter.name, "alt")}${addAttribute(author.frontmatter.imageUrl, "src")} class="mb-0 mr-2 inline h-5 w-5 rounded-full"> ${author.frontmatter.name} </a> <span class="mx-2 hidden sm:inline">&middot;</span> <a class="hidden underline-offset-2 hover:text-gray-600 sm:inline"${addAttribute(`https://github.com/kamranahmedse/developer-roadmap/tree/master/src/data/guides/${guide.id}.md`, "href")} target="_blank">
Improve this Guide
</a> </p> ${renderComponent($$result2, "guide.Content", guide.Content, {})} ` })} </div> </article>`;
}, "/workspace/src/components/Guide/GuideContent.astro", void 0);

export { $$GuideContent as $ };
