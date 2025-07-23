import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
import { u as useOutsideClick, S as Spinner, b as getUrlParams, s as setUrlParams, d as deleteUrlParam, e as httpGet, $ as $$BaseLayout } from '../../chunks/BaseLayout_B-BXcELP.mjs';
import { A as AIRoadmapAlert } from '../../chunks/AIRoadmapAlert_DSyGh6PZ.mjs';
import { ChevronDown, Check, Wand2, Map, Eye, Search } from 'lucide-react';
import { P as Pagination } from '../../chunks/Pagination_xm1ZIew_.mjs';
import { L as LoadingRoadmaps } from '../../chunks/LoadingRoadmaps_Dv_O4-tU.mjs';
import { g as getRelativeTimeString } from '../../chunks/date_iLNlXR7B.mjs';
import { u as useDebounceValue } from '../../chunks/use-debounce_BdAoSD5T.mjs';
export { renderers } from '../../renderers.mjs';

const sortingLabels = [
  {
    label: "Most Viewed",
    value: "viewCount"
  },
  {
    label: "Newest",
    value: "createdAt"
  },
  {
    label: "Oldest",
    value: "-createdAt"
  }
];
function ExploreAISorting(props) {
  const { sortBy, onSortChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selectedValue = sortingLabels.find((item) => item.value === sortBy);
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "min-auto relative flex shrink-0 sm:min-w-[140px]",
      ref: dropdownRef,
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex w-full items-center justify-between gap-2 rounded-md border px-2 text-sm",
            onClick: () => setIsOpen(!isOpen),
            children: [
              /* @__PURE__ */ jsx("span", { children: selectedValue?.label }),
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(ChevronDown, { className: "ml-4 h-3.5 w-3.5" }) })
            ]
          }
        ),
        isOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-10 right-0 z-10 min-w-40 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg", children: sortingLabels.map((item) => /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100",
            onClick: () => {
              onSortChange(item.value);
              setIsOpen(false);
            },
            children: [
              /* @__PURE__ */ jsx("span", { children: item.label }),
              item.value === sortBy && /* @__PURE__ */ jsx(Check, { className: "ml-auto h-4 w-4" })
            ]
          },
          item.value
        )) })
      ]
    }
  );
}

function EmptyRoadmaps() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-[250px] flex-col items-center justify-center rounded-xl border px-5 py-3 sm:px-0 sm:py-20", children: [
    /* @__PURE__ */ jsx(Wand2, { className: "mb-4 h-8 w-8 opacity-10 sm:h-14 sm:w-14" }),
    /* @__PURE__ */ jsx("h2", { className: "mb-1 text-lg font-semibold sm:text-xl", children: "No Roadmaps Found" }),
    /* @__PURE__ */ jsx("p", { className: "mb-3 text-balance text-center text-xs text-gray-800 sm:text-sm", children: "Try searching for something else or create a new roadmap with AI." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 sm:flex-row sm:gap-1.5", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/ai-roadmaps",
          className: "flex w-full items-center gap-1.5 rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white sm:w-auto sm:text-sm",
          children: [
            /* @__PURE__ */ jsx(Wand2, { className: "h-4 w-4" }),
            "Create one with AI"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/roadmaps",
          className: "flex w-full items-center gap-1.5 rounded-md bg-yellow-400 px-3 py-1.5 text-xs text-black hover:bg-yellow-500 sm:w-auto sm:text-sm",
          children: [
            /* @__PURE__ */ jsx(Map, { className: "h-4 w-4" }),
            "Visit Official Roadmaps"
          ]
        }
      )
    ] })
  ] });
}

function AIRoadmapsList(props) {
  const { response } = props;
  if (!response) {
    return null;
  }
  const roadmaps = response.data || [];
  return /* @__PURE__ */ jsx("ul", { className: "mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3", children: roadmaps.map((roadmap) => {
    const roadmapLink = `/ai-roadmaps/${roadmap.slug}`;
    return /* @__PURE__ */ jsxs(
      "a",
      {
        href: roadmapLink,
        className: "flex min-h-[95px] flex-col rounded-md border transition-colors hover:bg-gray-100",
        target: "_blank",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "grow px-2.5 py-2.5 text-base font-medium leading-tight", children: roadmap.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 px-2.5 py-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: [
              /* @__PURE__ */ jsx(Eye, { size: 15, className: "inline-block" }),
              Intl.NumberFormat("en-US", {
                notation: "compact"
              }).format(roadmap.viewCount),
              " ",
              "views"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "flex items-center gap-1.5 text-xs text-gray-400", children: getRelativeTimeString(String(roadmap?.createdAt)) })
          ] })
        ]
      },
      roadmap._id
    );
  }) });
}

function ExploreAISearch(props) {
  const { onSubmit, isLoading = false, total, value: defaultValue } = props;
  const [term, setTerm] = useState(defaultValue);
  const debouncedTerm = useDebounceValue(term, 500);
  useEffect(() => {
    setTerm(defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    if (debouncedTerm && debouncedTerm.length < 3) {
      return;
    }
    if (debouncedTerm === defaultValue) {
      return;
    }
    onSubmit(debouncedTerm);
  }, [debouncedTerm]);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex w-full items-center gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex w-full max-w-[310px] items-center", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          className: "absolute left-3 flex h-full items-center text-gray-500",
          htmlFor: "search",
          children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "search",
          name: "search",
          type: "text",
          placeholder: "Type 3 or more characters to search...",
          className: "w-full rounded-md border border-gray-200 px-3 py-2 pl-9 text-sm transition-colors focus:border-black focus:outline-hidden",
          value: term,
          onChange: (e) => setTerm(e.target.value)
        }
      ),
      isLoading && /* @__PURE__ */ jsx("span", { className: "absolute right-3 top-0 flex h-full items-center text-gray-500", children: /* @__PURE__ */ jsx(Spinner, { isDualRing: false, className: `h-3 w-3` }) })
    ] }),
    total > 0 && /* @__PURE__ */ jsxs("p", { className: "shrink-0 text-sm text-gray-500 hidden sm:block", children: [
      Intl.NumberFormat("en-US", {
        notation: "compact"
      }).format(total),
      " ",
      "results found"
    ] })
  ] });
}

function ExploreAIRoadmap() {
  const toast = useToast();
  const [pageState, setPageState] = useState({
    searchTerm: "",
    sortBy: "createdAt",
    currentPage: 0
  });
  useEffect(() => {
    const queryParams = getUrlParams();
    setPageState({
      searchTerm: queryParams.q || "",
      sortBy: queryParams.s || "createdAt",
      currentPage: +(queryParams.p || "1")
    });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    if (!pageState.currentPage) {
      return;
    }
    if (pageState.currentPage !== 1 || pageState.searchTerm !== "" || pageState.sortBy !== "createdAt") {
      setUrlParams({
        q: pageState.searchTerm,
        s: pageState.sortBy,
        p: String(pageState.currentPage)
      });
    } else {
      deleteUrlParam("q");
      deleteUrlParam("s");
      deleteUrlParam("p");
    }
    loadAIRoadmaps(
      pageState.currentPage,
      pageState.searchTerm,
      pageState.sortBy
    ).finally(() => {
      setIsLoading(false);
    });
  }, [pageState]);
  const [isLoading, setIsLoading] = useState(true);
  const [roadmapsResponse, setRoadmapsResponse] = useState(null);
  const loadAIRoadmaps = async (currPage = 1, searchTerm = "", sortBy = "createdAt") => {
    const { response, error } = await httpGet(
      `${"https://api.imoogleai.xyz"}/v1-list-ai-roadmaps`,
      {
        currPage,
        ...searchTerm && { term: searchTerm },
        ...sortBy && { sortBy }
      }
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      return;
    }
    setRoadmapsResponse(response);
  };
  const roadmaps = roadmapsResponse?.data || [];
  const loadingIndicator = isLoading && /* @__PURE__ */ jsx(LoadingRoadmaps, {});
  const emptyRoadmaps = !isLoading && roadmaps.length === 0 && /* @__PURE__ */ jsx(EmptyRoadmaps, {});
  const roadmapsList = !isLoading && roadmaps.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AIRoadmapsList, { response: roadmapsResponse }),
    /* @__PURE__ */ jsx(
      Pagination,
      {
        currPage: roadmapsResponse?.currPage || 1,
        totalPages: roadmapsResponse?.totalPages || 1,
        perPage: roadmapsResponse?.perPage || 0,
        isDisabled: isLoading,
        totalCount: roadmapsResponse?.totalCount || 0,
        onPageChange: (page) => {
          setPageState({
            ...pageState,
            currentPage: page
          });
        }
      }
    )
  ] });
  return /* @__PURE__ */ jsxs("section", { className: "container mx-auto py-3 sm:py-6", children: [
    /* @__PURE__ */ jsx(AIRoadmapAlert, { isListing: true }),
    /* @__PURE__ */ jsxs("div", { className: "my-3.5 flex items-stretch justify-between gap-2.5", children: [
      /* @__PURE__ */ jsx(
        ExploreAISearch,
        {
          total: roadmapsResponse?.totalCount || 0,
          isLoading,
          value: pageState.searchTerm,
          onSubmit: (term) => {
            setPageState({
              ...pageState,
              searchTerm: term,
              currentPage: 1
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        ExploreAISorting,
        {
          sortBy: pageState.sortBy,
          onSortChange: (sortBy) => {
            setPageState({
              ...pageState,
              sortBy,
              currentPage: 1
            });
          }
        }
      )
    ] }),
    loadingIndicator,
    emptyRoadmaps,
    roadmapsList
  ] });
}

const $$Explore = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Explore AI Generated Roadmaps", "permalink": "/ai-roadmaps/explore" }, { "changelog-banner": ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ExploreAIRoadmap", ExploreAIRoadmap, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/ExploreAIRoadmap/ExploreAIRoadmap", "client:component-export": "ExploreAIRoadmap" })}  ` })}`;
}, "/workspace/src/pages/ai-roadmaps/explore.astro", void 0);

const $$file = "/workspace/src/pages/ai-roadmaps/explore.astro";
const $$url = "/ai-roadmaps/explore";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Explore,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
