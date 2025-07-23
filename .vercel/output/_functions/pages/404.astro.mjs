import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, f as defineScriptVars } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$BaseLayout, j as $$AstroIcon } from '../chunks/BaseLayout_BrSKT5L_.mjs';
import { g as getRoadmapIds } from '../chunks/roadmap_VC9fOZso.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://hnmdevs.com/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const roadmapIds = await getRoadmapIds();
  const legacyRoadmapUrls = [...roadmapIds.map((id) => `/${id}/`), "/roadmaps/"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page not found", "permalink": "/404", "noIndex": true }, { "after-header": async ($$result2) => renderTemplate(_a || (_a = __template(["<script>(function(){", "\n    // If it's a roadmap page and it ends with a slash\n    // redirect to the same page without the slash\n    if (legacyRoadmapUrls.includes(window.location.pathname)) {\n      window.location.pathname = window.location.pathname.slice(0, -1);\n    }\n  })();<\/script>"])), defineScriptVars({ legacyRoadmapUrls })), "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<div class="bg-gray-100"> <div class="py-10 md:py-32 container flex flex-col md:flex-row items-center justify-center gap-7"> ${renderComponent($$result2, "Icon", $$AstroIcon, { "icon": "construction", "class": "hidden md:block" })} <div class="text-left md:text-left"> <h1 class="font-extrabold text-transparent text-2xl leading-normal md:text-5xl md:leading-normal bg-clip-text bg-linear-to-t from-black to-gray-600">
Page not found!
</h1> <p class="text-md md:text-xl mb-2">Sorry, we couldn't find the page you are looking for.</p> <p> <a class="underline text-blue-700" href="/">Homepage</a> &middot; <a href="/roadmaps" class="underline text-blue-700">Roadmaps</a> &middot; <a href="/best-practices" class="underline text-blue-700">Best Practices</a> </p> </div> </div> </div> ` })}`;
}, "/workspace/src/pages/404.astro", void 0);

const $$file = "/workspace/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
