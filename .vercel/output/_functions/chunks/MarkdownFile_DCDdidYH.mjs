import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderSlot, b as renderTemplate } from './astro/server_Cqa-EqH9.mjs';
import 'clsx';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$MarkdownFile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownFile;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "container prose prose-xl prose-h2:mb-3 prose-h2:mt-10 prose-h2:scroll-mt-5 prose-h2:text-balance prose-h2:text-3xl prose-h3:mt-2 prose-h4:text-2xl prose-h3:scroll-mt-5 prose-h3:text-balance prose-h4:text-balance prose-h5:text-balance prose-h5:font-medium prose-blockquote:font-normal prose-code:bg-transparent prose-img:mt-1 sm:prose-h2:scroll-mt-10 sm:prose-h3:scroll-mt-10",
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/workspace/src/components/MarkdownFile.astro", void 0);

export { $$MarkdownFile as $ };
