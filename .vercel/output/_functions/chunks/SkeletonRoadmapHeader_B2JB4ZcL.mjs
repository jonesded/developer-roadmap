import { jsx, jsxs } from 'react/jsx-runtime';

function SkeletonRoadmapHeader() {
  return /* @__PURE__ */ jsx("div", { className: "border-b", children: /* @__PURE__ */ jsxs("div", { className: "container relative py-5 sm:py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "-mb-0.5 flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsx("div", { className: "h-5 w-5 animate-pulse rounded-full bg-gray-300" }),
      /* @__PURE__ */ jsx("div", { className: "h-5 w-5/12 animate-pulse rounded-md bg-gray-200" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-3 mt-4 sm:mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "h-8 w-1/2 animate-pulse rounded-md bg-gray-300 sm:mb-2 sm:h-10" }),
      /* @__PURE__ */ jsx("div", { className: "mt-0.5 h-5 w-1/3 animate-pulse rounded-md bg-gray-200 sm:h-7" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-2 sm:gap-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1 sm:gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-7 w-[35.04px] animate-pulse rounded-md bg-gray-300 sm:h-8 sm:w-32" }),
        /* @__PURE__ */ jsx("div", { className: "h-7 w-[35.04px] animate-pulse rounded-md bg-gray-300 sm:h-8 sm:w-[85px]" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-7 w-[60.52px] animate-pulse rounded-md bg-gray-300 sm:h-8 sm:w-[92px]" }),
        /* @__PURE__ */ jsx("div", { className: "h-7 w-[71.48px] animate-pulse rounded-md bg-gray-300 sm:h-8 sm:w-[139px]" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-0 mt-4 rounded-md border-0 sm:-mb-[65px] sm:mt-7 sm:border", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          "data-progress-nums-container": true,
          className: "striped-loader relative hidden h-8 items-center justify-between rounded-md bg-white sm:flex"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "data-progress-nums-container": true,
          className: "striped-loader relative -mb-2 flex h-[34px] items-center justify-between rounded-md border bg-white px-2 py-1.5 text-sm text-gray-700 sm:hidden"
        }
      )
    ] })
  ] }) });
}

export { SkeletonRoadmapHeader as S };
