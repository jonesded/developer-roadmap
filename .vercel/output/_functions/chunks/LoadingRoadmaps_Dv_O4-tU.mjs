import { jsx } from 'react/jsx-runtime';

function LoadingRoadmaps() {
  return /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3", children: new Array(21).fill(0).map((_, index) => /* @__PURE__ */ jsx(
    "li",
    {
      className: "h-[175px] animate-pulse rounded-md border bg-gray-200"
    },
    index
  )) });
}

export { LoadingRoadmaps as L };
