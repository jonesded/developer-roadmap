import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountLayout } from '../chunks/AccountLayout_DPxxQUwD.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { b as getUrlParams, S as Spinner, n as httpPatch, q as setAuthToken } from '../chunks/BaseLayout_C3JOBLhD.mjs';
import { E as ErrorIcon2 } from '../chunks/ErrorIcon2_Bn_H4dmb.mjs';
import { C as CheckIcon } from '../chunks/CheckIcon_B3c1RSNy.mjs';
export { renderers } from '../renderers.mjs';

function TriggerVerifyEmail() {
  const { code } = getUrlParams();
  const [status, setStatus] = useState(
    "loading"
  );
  const [error, setError] = useState("");
  const triggerVerify = (code2) => {
    setStatus("loading");
    httpPatch(
      `${"https://api.roadmap.sh"}/v1-verify-new-email/${code2}`,
      {}
    ).then(({ response, error: error2 }) => {
      if (!response?.token) {
        setError(error2?.message || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setAuthToken(response.token);
      setStatus("success");
    }).catch((err) => {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    });
  };
  useEffect(() => {
    if (!code) {
      setStatus("error");
      setError("Something went wrong. Please try again later.");
      return;
    }
    triggerVerify(code);
  }, [code]);
  const isLoading = status === "loading";
  if (status === "success") {
    return /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-md flex-col items-center pt-0 sm:pt-12", children: [
      /* @__PURE__ */ jsx(CheckIcon, { additionalClasses: "h-16 w-16 opacity-100" }),
      /* @__PURE__ */ jsx("h2", { className: "mb-1 mt-4 text-center text-xl font-semibold sm:mb-3 sm:mt-4 sm:text-2xl", children: "Email Update Successful" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base", children: "Your email has been changed successfully. Happy learning!" })
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-md flex-col items-center pt-0 sm:pt-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-md text-center", children: [
    isLoading && /* @__PURE__ */ jsx(Spinner, { className: "mx-auto h-16 w-16" }),
    error && /* @__PURE__ */ jsx(ErrorIcon2, { className: "mx-auto h-16 w-16" }),
    /* @__PURE__ */ jsx("h2", { className: "mb-1 mt-4 text-center text-xl font-semibold sm:mb-3 sm:mt-4 sm:text-2xl", children: "Verifying your new Email" }),
    /* @__PURE__ */ jsxs("div", { className: "text-sm sm:text-base", children: [
      isLoading && /* @__PURE__ */ jsx("p", { children: "Please wait while we verify your new Email." }),
      error && /* @__PURE__ */ jsx("p", { className: "text-red-700", children: error })
    ] })
  ] }) });
}

const $$VerifyEmail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Verify email", "noIndex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container py-16"> ${renderComponent($$result2, "TriggerVerifyEmail", TriggerVerifyEmail, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AuthenticationFlow/TriggerVerifyEmail", "client:component-export": "TriggerVerifyEmail" })} </div> ` })}`;
}, "/workspace/src/pages/verify-email.astro", void 0);

const $$file = "/workspace/src/pages/verify-email.astro";
const $$url = "/verify-email";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VerifyEmail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
