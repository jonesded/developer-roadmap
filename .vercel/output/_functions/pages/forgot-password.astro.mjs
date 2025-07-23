import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { h as httpPost } from '../chunks/BaseLayout_B-BXcELP.mjs';
import { $ as $$AccountLayout } from '../chunks/AccountLayout_BpeWaMTO.mjs';
export { renderers } from '../renderers.mjs';

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const { response, error: error2 } = await httpPost(
      `${"https://api.imoogleai.xyz"}/v1-forgot-password`,
      {
        email
      }
    );
    setIsLoading(false);
    if (error2) {
      setError(error2.message);
    } else {
      setEmail("");
      setSuccess("Check your email for a link to reset your password.");
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "w-full", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "email",
        name: "email",
        className: "mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
        required: true,
        placeholder: "Email Address",
        value: email,
        onInput: (e) => setEmail(e.target.value)
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "mt-2 rounded-lg bg-red-100 p-2 text-sm text-red-700", children: error }),
    success && /* @__PURE__ */ jsx("p", { className: "mt-2 rounded-lg bg-green-100 p-2 text-sm text-green-700", children: success }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: isLoading,
        className: "mt-3 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",
        children: isLoading ? "Please wait..." : "Continue"
      }
    )
  ] });
}

const $$ForgotPassword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Forgot Password", "noIndex": true, "permalink": "/forgot-password" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20"> <div class="mb-2 text-left sm:mb-5 sm:text-center"> <h1 class="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">
Forgot Password?
</h1> <p class="mb-3 text-base leading-6 text-gray-600">
Enter your email address below and we will send you a link to reset
          your password.
</p> </div> ${renderComponent($$result2, "ForgotPasswordForm", ForgotPasswordForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AuthenticationFlow/ForgotPasswordForm", "client:component-export": "ForgotPasswordForm" })} <div class="mt-3 w-full rounded-md border py-2 text-center text-sm text-slate-600">
Don't have an account?${" "} <a href="/signup" class="font-medium text-blue-700 hover:text-blue-600 hover:underline">
Sign up
</a> </div> </div> </div> ` })}`;
}, "/workspace/src/pages/forgot-password.astro", void 0);

const $$file = "/workspace/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
