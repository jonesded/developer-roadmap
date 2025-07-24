import { c as createAstro, a as createComponent } from '../chunks/astro/server_Cqa-EqH9.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const prerender = false;
const $$Discord = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Discord;
  const discordLink = "https://discord.gg/GBY7zEc3uB";
  return Astro2.redirect(discordLink);
}, "/workspace/src/pages/discord.astro", void 0);

const $$file = "/workspace/src/pages/discord.astro";
const $$url = "/discord";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Discord,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
