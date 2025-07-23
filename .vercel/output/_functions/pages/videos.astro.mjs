import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$SimplePageHeader } from '../chunks/SimplePageHeader_CaJW-2KW.mjs';
import { V as VideoListItem } from '../chunks/VideoListItem_C5x0kUX1.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B-BXcELP.mjs';
import { a as getAllVideos } from '../chunks/video_B_9Z2g4L.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const videos = await getAllVideos();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Illustrated Videos - roadmap.sh", "description": "Graphical video demonstrations on software engineering topics.", "permalink": `/videos` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SimplePageHeader", $$SimplePageHeader, { "title": "Videos", "description": "Graphical video demonstrations on software engineering topics." })} ${maybeRenderHead()}<div class="pb-20 pt-2 bg-gray-50"> <div class="container"> <div class="mt-3 sm:my-5"> ${videos.map((video) => renderTemplate`${renderComponent($$result2, "VideoListItem", VideoListItem, { "video": video })}`)} </div> </div> </div> ` })}`;
}, "/workspace/src/pages/videos/index.astro", void 0);

const $$file = "/workspace/src/pages/videos/index.astro";
const $$url = "/videos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
