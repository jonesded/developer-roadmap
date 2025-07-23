import { c as createAstro, a as createComponent } from '../chunks/astro/server_Cqa-EqH9.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const prerender = false;
const $$Youtube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Youtube;
  const youtubeLink = "https://youtube.com/@roadmapsh";
  return Astro2.redirect(youtubeLink);
}, "/workspace/src/pages/youtube.astro", void 0);

const $$file = "/workspace/src/pages/youtube.astro";
const $$url = "/youtube";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Youtube,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
