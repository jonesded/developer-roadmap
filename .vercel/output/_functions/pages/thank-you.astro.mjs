import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { b as getUrlParams, S as Spinner, $ as $$BaseLayout } from '../chunks/BaseLayout_BrSKT5L_.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { V as VerifyUpgrade } from '../chunks/VerifyUpgrade_Z_ucYoBE.mjs';
import { ChevronRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

function ThankYouPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [shouldVerifyUpgrade, setShouldVerifyUpgrade] = useState(false);
  useEffect(() => {
    const params = getUrlParams();
    const next = params?.next;
    const shouldVerifyUpgrade2 = params?.s === "1";
    if (!next) {
      window.location.href = "/";
      return;
    }
    let decodedNextPage = decodeURIComponent(next);
    if (decodedNextPage === "/courses/sql") {
      decodedNextPage = `${undefined                                     }/sql`;
      window?.fireEvent({
        action: "sql_course_purchase_complete",
        category: "course",
        label: "SQL Course Purchase Completed"
      });
    }
    setNextPage(decodedNextPage);
    setIsLoading(false);
    setShouldVerifyUpgrade(shouldVerifyUpgrade2);
  }, []);
  const pageType = nextPage?.startsWith("/courses/") ? "course" : nextPage?.startsWith("/ai") ? "ai-tutor" : "other";
  if (isLoading) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-grow flex-col items-center justify-center py-20", children: [
      /* @__PURE__ */ jsx(Spinner, { isDualRing: false, className: "mb-5 h-7 w-7" }),
      /* @__PURE__ */ jsx("p", { className: "mb-1 text-xl font-medium", children: "Please wait" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "This may take a few seconds" })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    shouldVerifyUpgrade && /* @__PURE__ */ jsx(VerifyUpgrade, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-grow flex-col items-center justify-center px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex max-w-2xl flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/gifs/party-popper.gif",
            alt: "Thank you",
            className: "relative left-6 mb-6 aspect-square w-24"
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "mb-3 text-4xl font-bold text-gray-800 md:text-5xl", children: "Thank you!" }),
        /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg text-gray-600 max-w-lg text-balance", children: "Your transaction was successful and your access has been activated." }),
        nextPage && /* @__PURE__ */ jsxs(
          "a",
          {
            href: nextPage,
            className: "group flex items-center gap-2 rounded-lg bg-purple-500 px-5 py-2.5 font-medium text-white transition-all hover:bg-blue-600",
            children: [
              pageType === "course" ? "Continue to Course" : pageType === "ai-tutor" ? "Continue to AI Tutor" : "Continue",
              /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex gap-4 text-sm text-gray-500", children: [
        /* @__PURE__ */ jsx("a", { href: "/terms", className: "hover:text-gray-800", children: "Terms of Use" }),
        /* @__PURE__ */ jsx("a", { href: "/privacy", className: "hover:text-gray-800", children: "Privacy Policy" })
      ] })
    ] })
  ] });
}

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Thank you" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThankYouPage", ThankYouPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/ThankYou/ThankYouPage", "client:component-export": "ThankYouPage" })}  `, "page-footer": ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>` })}`;
}, "/workspace/src/pages/thank-you.astro", void 0);

const $$file = "/workspace/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
