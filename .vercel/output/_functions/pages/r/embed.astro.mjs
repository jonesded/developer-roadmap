import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$Loader } from '../../chunks/Loader_D0GX2Nmm.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_ZOfUMIZI.mjs';
import { j as $$AstroIcon } from '../../chunks/BaseLayout_C3JOBLhD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$Embed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Embed;
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "Roadmaps", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex min-h-[550px] flex-col"> <div data-roadmap-loader class="flex w-full grow flex-col"> <div class="flex grow items-center justify-center"> ${renderComponent($$result2, "Loader", $$Loader, {})} </div> </div> ${renderComponent($$result2, "CustomRoadmap", null, { "isEmbed": true, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/CustomRoadmap/CustomRoadmap", "client:component-export": "CustomRoadmap" })} <div class="fixed bottom-5 right-4"> <a target="_blank" class="rounded-md bg-gray-600 py-2 pr-2 pl-1.5 text-white hover:bg-black flex items-center gap-0.5" href="https://roadmap.sh"> ${renderComponent($$result2, "Icon", $$AstroIcon, { "icon": "logo", "class": "h-5" })}
roadmap.sh
</a> </div> </div> ` })}`;
}, "/workspace/src/pages/r/embed.astro", void 0);

const $$file = "/workspace/src/pages/r/embed.astro";
const $$url = "/r/embed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Embed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
