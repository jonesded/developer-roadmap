import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { A as AuthenticationForm, o as AccountTerms } from '../chunks/BaseLayout_BrSKT5L_.mjs';
import { $ as $$AccountLayout } from '../chunks/AccountLayout_CCCzwF3s.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Login - roadmap.sh", "description": "Register yourself to receive occasional emails about new roadmaps, updates, guides and videos", "permalink": "/login", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20"> <div class="mb-2 text-left sm:mb-5 sm:text-center"> <h1 class="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">Login</h1> <p class="mb-3 text-base leading-6 text-gray-600">
Welcome back! Let's take you to your account.
</p> </div> ${renderComponent($$result2, "AuthenticationForm", AuthenticationForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AuthenticationFlow/AuthenticationForm", "client:component-export": "AuthenticationForm" })} <div class="mt-3 w-full rounded-md border py-2 text-center text-sm text-slate-600">
Don't have an account?${" "} <a href="/signup" class="font-medium text-blue-700 hover:text-blue-600 hover:underline">
Sign up
</a> </div> ${renderComponent($$result2, "AccountTerms", AccountTerms, {})} </div> </div> ` })}`;
}, "/workspace/src/pages/login.astro", void 0);

const $$file = "/workspace/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
