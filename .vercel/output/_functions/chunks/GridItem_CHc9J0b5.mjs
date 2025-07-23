import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, b as renderTemplate } from './astro/server_Cqa-EqH9.mjs';
import 'clsx';

const $$Astro = createAstro("https://hnmdevs.com/");
const $$GridItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { url, title, description, isNew } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"> <span class="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl"> ${title} </span> <span class="hidden text-sm leading-normal text-gray-400 sm:block">${unescapeHTML(description)}</span> ${isNew && renderTemplate`<span class="flex items-center gap-1.5 absolute bottom-1.5 right-1 rounded-xs text-xs font-semibold uppercase text-purple-500 sm:px-1.5"> <span class="relative flex h-2 w-2"> <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span> </span>
New
</span>`} </a>`;
}, "/workspace/src/components/GridItem.astro", void 0);

export { $$GridItem as $ };
