import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { h as httpPost, q as setAuthToken } from '../chunks/BaseLayout_DfQviQZ5.mjs';
import 'js-cookie';
import { $ as $$AccountLayout } from '../chunks/AccountLayout_C4SmqpML.mjs';
export { renderers } from '../renderers.mjs';

function ResetPasswordForm() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code2 = urlParams.get("code");
    if (!code2) {
      window.location.href = "/login";
    } else {
      setCode(code2);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== passwordConfirm) {
      setIsLoading(false);
      setError("Passwords do not match.");
      return;
    }
    const { response, error: error2 } = await httpPost(
      `${"https://api.hnmdevs.com"}/v1-reset-forgotten-password`,
      {
        newPassword: password,
        confirmPassword: passwordConfirm,
        code
      }
    );
    if (error2?.message) {
      setIsLoading(false);
      setError(error2.message);
      return;
    }
    if (!response?.token) {
      setIsLoading(false);
      setError("Something went wrong. Please try again later.");
      return;
    }
    response.token;
    setAuthToken(response.token);
    window.location.href = "/";
  };
  return /* @__PURE__ */ jsxs("form", { className: "mx-auto w-full", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "password",
        className: "mb-2 mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
        required: true,
        minLength: 6,
        placeholder: "New Password",
        value: password,
        onInput: (e) => setPassword(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "password",
        className: "mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
        required: true,
        minLength: 6,
        placeholder: "Confirm New Password",
        value: passwordConfirm,
        onInput: (e) => setPasswordConfirm(e.target.value)
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "mt-2 rounded-lg bg-red-100 p-2 text-red-700", children: error }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: isLoading,
        className: "mt-2 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",
        children: isLoading ? "Please wait..." : "Reset Password"
      }
    )
  ] });
}

const $$ResetPassword = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Reset Password", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="mx-auto flex flex-col items-start justify-start pb-28 pt-10 sm:max-w-[400px] sm:items-center sm:justify-center sm:pt-20"> <div class="mb-2 text-left sm:mb-5 sm:text-center"> <h1 class="mb-2 text-3xl font-semibold sm:mb-5 sm:text-5xl">
Reset Password
</h1> <p class="mb-3 text-base leading-6 text-gray-600">
Enter and confirm your new password below.
</p> </div> ${renderComponent($$result2, "ResetPasswordForm", ResetPasswordForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AuthenticationFlow/ResetPasswordForm", "client:component-export": "ResetPasswordForm" })} </div> </div> ` })}`;
}, "/workspace/src/pages/reset-password.astro", void 0);

const $$file = "/workspace/src/pages/reset-password.astro";
const $$url = "/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
