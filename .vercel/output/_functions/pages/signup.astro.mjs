import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { A as AuthenticationForm, o as AccountTerms } from '../chunks/BaseLayout_C3JOBLhD.mjs';
import { $ as $$AccountLayout } from '../chunks/AccountLayout_DPxxQUwD.mjs';
export { renderers } from '../renderers.mjs';

const $$Signup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Signup - roadmap.sh", "description": "Create an account to track your progress, showcase your skillset", "permalink": "/signup", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20"> <div class="mb-2 text-left sm:mb-5 sm:text-center"> <h1 class="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">Sign Up</h1> <p class="mb-3 hidden text-base leading-6 text-gray-600 sm:block">
Create an account to track your progress, showcase your skill-set and
          be a part of the community.
</p> <p class="mb-3 block text-sm text-gray-600 sm:hidden">
Create an account to track your progress, showcase your skill-set and
          be a part of the community.
</p> </div> ${renderComponent($$result2, "AuthenticationForm", AuthenticationForm, { "type": "signup", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AuthenticationFlow/AuthenticationForm", "client:component-export": "AuthenticationForm" })} <div class="mt-3 w-full rounded-md border py-2 text-center text-sm text-slate-600">
Already have an account? <a href="/login" class="font-medium text-blue-700 hover:text-blue-600">Login</a> </div> ${renderComponent($$result2, "AccountTerms", AccountTerms, {})} </div> </div> ` })}`;
}, "/workspace/src/pages/signup.astro", void 0);

const $$file = "/workspace/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
