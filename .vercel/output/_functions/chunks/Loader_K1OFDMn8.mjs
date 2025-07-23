import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from './astro/server_Cqa-EqH9.mjs';
import { j as $$AstroIcon } from './BaseLayout_BrSKT5L_.mjs';

const $$Astro = createAstro("https://hnmdevs.com/");
const $$Loader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Loader;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center w-full"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "spinner", "class": "h-6 w-6 sm:w-12 sm:h-12 text-gray-200 animate-spin fill-blue-600" })} </div>`;
}, "/workspace/src/components/Loader.astro", void 0);

export { $$Loader as $ };
