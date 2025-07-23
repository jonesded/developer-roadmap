import { c as createAstro, a as createComponent } from '../chunks/astro/server_Cqa-EqH9.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const prerender = false;
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$X;
  const twitterLink = "https://x.com/roadmapsh";
  return Astro2.redirect(twitterLink);
}, "/workspace/src/pages/x.astro", void 0);

const $$file = "/workspace/src/pages/x.astro";
const $$url = "/x";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$X,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
