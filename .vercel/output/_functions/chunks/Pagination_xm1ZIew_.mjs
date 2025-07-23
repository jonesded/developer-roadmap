import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { c as cn } from './BaseLayout_B-BXcELP.mjs';
import { f as formatCommaNumber } from './number_D9-I_I5P.mjs';

function usePagination(currentPage, totalPages, maxPagesToShow) {
  return useMemo(() => {
    const pages = [];
    const half = Math.floor(maxPagesToShow / 2);
    const start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, currentPage + half);
    if (start > 1) {
      pages.push(1);
    }
    if (start > 2) {
      pages.push("more");
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (end < totalPages - 1) {
      pages.push("more");
    }
    if (end < totalPages) {
      pages.push(totalPages);
    }
    return pages;
  }, [currentPage, totalPages, maxPagesToShow]);
}

function Pagination(props) {
  const {
    variant = "default",
    onPageChange,
    totalCount,
    totalPages,
    currPage,
    perPage,
    isDisabled = false,
    className
  } = props;
  if (!totalPages || totalPages === 1) {
    return null;
  }
  const pages = usePagination(currPage, totalPages, 5);
  const showingFrom = (currPage - 1) * perPage + 1;
  const showingTo = Math.min(showingFrom + perPage - 1, totalCount);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex items-center",
        {
          "justify-between": variant === "default",
          "justify-start": variant === "minimal"
        },
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-xs font-medium", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                onPageChange(currPage - 1);
              },
              disabled: currPage === 1 || isDisabled,
              className: "rounded-md bg-white border px-2 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",
              children: "←"
            }
          ),
          variant === "default" && /* @__PURE__ */ jsx(Fragment, { children: pages.map((page, counter) => {
            if (page === "more") {
              return /* @__PURE__ */ jsx(
                "span",
                {
                  className: "hidden sm:block",
                  children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "text-gray-400", size: 14 })
                },
                `page-${page}-${counter}`
              );
            }
            return /* @__PURE__ */ jsx(
              "button",
              {
                disabled: isDisabled,
                onClick: () => {
                  onPageChange(page);
                },
                className: cn(
                  "hidden rounded-md border px-2 py-1 hover:bg-gray-100 sm:block",
                  {
                    "border-black text-black": currPage === page
                  }
                ),
                children: page
              },
              `page-${page}`
            );
          }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              disabled: currPage === totalPages || isDisabled,
              className: "rounded-md bg-white border px-2 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",
              onClick: () => {
                onPageChange(currPage + 1);
              },
              children: "→"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "ml-2 hidden text-sm font-normal text-gray-500 sm:block", children: [
          "Showing ",
          formatCommaNumber(showingFrom),
          " to",
          " ",
          formatCommaNumber(showingTo),
          " of ",
          formatCommaNumber(totalCount),
          " ",
          "entries"
        ] })
      ]
    }
  );
}

export { Pagination as P };
