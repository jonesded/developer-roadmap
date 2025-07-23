import { c as createAstro, a as createComponent } from '../chunks/astro/server_Cqa-EqH9.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const prerender = false;
const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Twitter;
  const twitterLink = "https://twitter.com/roadmapsh";
  return Astro2.redirect(twitterLink);
}, "/workspace/src/pages/twitter.astro", void 0);

const $$file = "/workspace/src/pages/twitter.astro";
const $$url = "/twitter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Twitter,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
