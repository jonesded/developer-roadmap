import { a as createComponent, m as maybeRenderHead, b as renderTemplate, c as createAstro, r as renderComponent } from './astro/server_Cqa-EqH9.mjs';
import 'clsx';

const $$YouTubeAlert = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://youtube.com/theroadmap?sub_confirmation=1" target="_blank" class="text-md hidden sm:flex items-center text-red-600 group hover:text-red-900"> <span class="bg-red-600 group-hover:bg-red-800 group-hover: px-1.5 py-0.5 rounded-xs text-white text-xs uppercase font-medium mr-2">New</span> <span class="underline mr-1">We also have a YouTube channel with visual content</span> <span>&raquo;</span> </a>`;
}, "/workspace/src/components/YouTubeAlert.astro", void 0);

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$SimplePageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SimplePageHeader;
  const { title, description, showYouTubeAlert = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white border-b pt-6 pb-5 sm:pt-12 sm:pb-10"> <div class="container"> ${showYouTubeAlert && renderTemplate`<div class="mb-4 hidden sm:block"> ${renderComponent($$result, "YouTubeAlert", $$YouTubeAlert, {})} </div>`} <h1 class="text-3xl sm:text-5xl mb-1 sm:mb-2 font-bold">${title}</h1> <p class="text-gray-500 text-sm sm:text-lg">${description}</p> </div> </div>`;
}, "/workspace/src/components/SimplePageHeader.astro", void 0);

export { $$SimplePageHeader as $ };
