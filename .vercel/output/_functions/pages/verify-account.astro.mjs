import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'js-cookie';
import { S as Spinner, h as httpPost, t as triggerUtmRegistration, q as setAuthToken, F as FIRST_LOGIN_PARAM } from '../chunks/BaseLayout_BrSKT5L_.mjs';
import { E as ErrorIcon2 } from '../chunks/ErrorIcon2_Bn_H4dmb.mjs';
import { $ as $$AccountLayout } from '../chunks/AccountLayout_CCCzwF3s.mjs';
export { renderers } from '../renderers.mjs';

function TriggerVerifyAccount() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const triggerVerify = (code) => {
    setIsLoading(true);
    httpPost(
      `${undefined                              }/v1-verify-account`,
      {
        code
      }
    ).then(({ response, error: error2 }) => {
      if (!response?.token) {
        setError(error2?.message || "Something went wrong. Please try again.");
        setIsLoading(false);
        return;
      }
      triggerUtmRegistration();
      setAuthToken(response.token);
      const url = new URL("/", window.location.origin);
      url.searchParams.set(
        FIRST_LOGIN_PARAM,
        response?.isNewUser ? "1" : "0"
      );
      window.location.href = url.toString();
    }).catch((err) => {
      setIsLoading(false);
      setError("Something went wrong. Please try again.");
    });
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (!code) {
      setIsLoading(false);
      setError("Something went wrong. Please try again later.");
      return;
    }
    triggerVerify(code);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-md flex-col items-center pt-0 sm:pt-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-md text-center", children: [
    isLoading && /* @__PURE__ */ jsx(Spinner, { className: "mx-auto h-16 w-16" }),
    error && /* @__PURE__ */ jsx(ErrorIcon2, { className: "mx-auto h-16 w-16" }),
    /* @__PURE__ */ jsx("h2", { className: "mb-1 mt-4 text-center text-xl font-semibold sm:mb-3 sm:mt-4 sm:text-2xl", children: "Verifying your account" }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm sm:text-base", children: [
      isLoading && /* @__PURE__ */ jsx("p", { children: "Please wait while we verify your account.." }),
      error && /* @__PURE__ */ jsx("p", { className: "text-red-700", children: error })
    ] })
  ] }) });
}

const $$VerifyAccount = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Verify account", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-16"> ${renderComponent($$result2, "TriggerVerifyAccount", TriggerVerifyAccount, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AuthenticationFlow/TriggerVerifyAccount", "client:component-export": "TriggerVerifyAccount" })} </div> ` })}`;
}, "/workspace/src/pages/verify-account.astro", void 0);

const $$file = "/workspace/src/pages/verify-account.astro";
const $$url = "/verify-account";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VerifyAccount,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
