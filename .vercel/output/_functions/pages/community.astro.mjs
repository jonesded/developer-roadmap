import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { S as Spinner, u as useOutsideClick, b as getUrlParams, s as setUrlParams, d as deleteUrlParam, e as httpGet, $ as $$BaseLayout } from '../chunks/BaseLayout_B-BXcELP.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Search, Map, Wand2, ChevronDown, Check, Shapes } from 'lucide-react';
import { P as Pagination } from '../chunks/Pagination_xm1ZIew_.mjs';
import { useState, useEffect, useRef } from 'react';
import { u as useDebounceValue } from '../chunks/use-debounce_BdAoSD5T.mjs';
import { C as CreateRoadmapModal } from '../chunks/CreateRoadmapModal_DH4tXRQM.mjs';
import { R as Rating } from '../chunks/Rating_DHoReL0Z.mjs';
import { L as LoadingRoadmaps } from '../chunks/LoadingRoadmaps_Dv_O4-tU.mjs';
import { u as useToast } from '../chunks/use-toast_BYLkOsfO.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

function SearchRoadmap(props) {
  const { total, value: defaultValue, onValueChange, isLoading } = props;
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
    onValueChange(debouncedTerm);
  }, [debouncedTerm]);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex w-full items-center gap-3", children: [
    /* @__PURE__ */ jsxs(
      "form",
      {
        className: "relative flex w-full max-w-[310px] items-center",
        onSubmit: (e) => {
          e.preventDefault();
          onValueChange(term);
        },
        children: [
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
              id: "q",
              name: "q",
              type: "text",
              minLength: 3,
              placeholder: "Type 3 or more characters to search...",
              className: "w-full rounded-md border border-gray-200 px-3 py-2 pl-9 text-sm transition-colors focus:border-black focus:outline-hidden",
              value: term,
              onChange: (e) => setTerm(e.target.value)
            }
          ),
          isLoading && /* @__PURE__ */ jsx("span", { className: "absolute right-3 top-0 flex h-full items-center text-gray-500", children: /* @__PURE__ */ jsx(Spinner, { isDualRing: false, className: `h-3 w-3` }) })
        ]
      }
    ),
    total > 0 && /* @__PURE__ */ jsxs("p", { className: "hidden shrink-0 text-sm text-gray-500 sm:block", children: [
      Intl.NumberFormat("en-US", {
        notation: "compact"
      }).format(total),
      " ",
      "result",
      total > 1 ? "s" : "",
      " found"
    ] })
  ] });
}

function EmptyDiscoverRoadmaps() {
  const [isCreatingRoadmap, setIsCreatingRoadmap] = useState(false);
  const creatingRoadmapModal = isCreatingRoadmap && /* @__PURE__ */ jsx(
    CreateRoadmapModal,
    {
      onClose: () => setIsCreatingRoadmap(false),
      onCreated: (roadmap) => {
        window.location.href = `${"https://draw.imoogleai.xyz"}/${roadmap?._id}`;
      }
    }
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    creatingRoadmapModal,
    /* @__PURE__ */ jsxs("div", { className: "flex min-h-[250px] flex-col items-center justify-center rounded-xl border px-5 py-3 sm:px-0 sm:py-20 bg-white", children: [
      /* @__PURE__ */ jsx(Map, { className: "mb-4 h-8 w-8 opacity-10 sm:h-14 sm:w-14" }),
      /* @__PURE__ */ jsx("h2", { className: "mb-1 text-lg font-semibold sm:text-xl", children: "No Roadmaps Found" }),
      /* @__PURE__ */ jsx("p", { className: "mb-3 text-balance text-center text-xs text-gray-800 sm:text-sm", children: "Try searching for something else or create a new roadmap." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 sm:flex-row sm:gap-1.5", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex w-full items-center gap-1.5 rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white sm:w-auto sm:text-sm",
            type: "button",
            onClick: () => {
              setIsCreatingRoadmap(true);
            },
            children: [
              /* @__PURE__ */ jsx(Wand2, { className: "h-4 w-4" }),
              "Create your Roadmap"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/roadmaps",
            className: "flex w-full items-center gap-1.5 rounded-md bg-gray-300 px-3 py-1.5 text-xs text-black hover:bg-gray-400 sm:w-auto sm:text-sm",
            children: [
              /* @__PURE__ */ jsx(Map, { className: "h-4 w-4" }),
              "Visit Official Roadmaps"
            ]
          }
        )
      ] })
    ] })
  ] });
}

const sortingLabels = [
  {
    label: "Newest",
    value: "createdAt"
  },
  {
    label: "Oldest",
    value: "-createdAt"
  },
  {
    label: "Highest Rated",
    value: "rating"
  },
  {
    label: "Lowest Rated",
    value: "-rating"
  }
];
function DiscoverRoadmapSorting(props) {
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
            className: "flex w-full items-center justify-between gap-2 rounded-md border bg-white px-2 text-sm",
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

function DiscoverRoadmaps(props) {
  const toast = useToast();
  const [pageState, setPageState] = useState({
    searchTerm: "",
    sortBy: "createdAt",
    currentPage: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [roadmapsResponse, setRoadmapsResponse] = useState(null);
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
  const loadAIRoadmaps = async (currPage = 1, searchTerm = "", sortBy = "createdAt") => {
    const { response, error } = await httpGet(
      `${"https://api.imoogleai.xyz"}/v1-list-showcase-roadmap`,
      {
        currPage,
        ...searchTerm && { searchTerm },
        ...sortBy && { sortBy }
      }
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      return;
    }
    setRoadmapsResponse(response);
  };
  const [isCreatingRoadmap, setIsCreatingRoadmap] = useState(false);
  const roadmaps = roadmapsResponse?.data || [];
  const loadingIndicator = isLoading && /* @__PURE__ */ jsx(LoadingRoadmaps, {});
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isCreatingRoadmap && /* @__PURE__ */ jsx(
      CreateRoadmapModal,
      {
        onClose: () => {
          setIsCreatingRoadmap(false);
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "border-b bg-white pt-10 pb-7", children: /* @__PURE__ */ jsx("div", { className: "container text-left", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start bg-white", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-2 text-3xl font-bold sm:text-4xl", children: "Community Roadmaps" }),
      /* @__PURE__ */ jsx("p", { className: "mb-5 text-base text-gray-500", children: "A selected list of community-created roadmaps" }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "group relative normal-case", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "rounded-md bg-black px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-black",
            onClick: () => {
              setIsCreatingRoadmap(true);
            },
            children: "Create your own roadmap"
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "group relative normal-case", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/roadmaps",
            className: "inline-block rounded-md bg-gray-300 px-3.5 py-1.5 text-sm text-black sm:py-1.5 sm:text-sm",
            children: "Visit our official roadmaps"
          }
        ) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-50 py-3", children: /* @__PURE__ */ jsxs("section", { className: "container mx-auto py-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-3.5 flex items-stretch justify-between gap-2.5", children: [
        /* @__PURE__ */ jsx(
          SearchRoadmap,
          {
            total: roadmapsResponse?.totalCount || 0,
            value: pageState.searchTerm,
            isLoading,
            onValueChange: (value) => {
              setPageState({
                ...pageState,
                searchTerm: value,
                currentPage: 1
              });
            }
          }
        ),
        /* @__PURE__ */ jsx(
          DiscoverRoadmapSorting,
          {
            sortBy: pageState.sortBy,
            onSortChange: (sortBy) => {
              setPageState({
                ...pageState,
                sortBy
              });
            }
          }
        )
      ] }),
      loadingIndicator,
      roadmaps.length === 0 && !isLoading && /* @__PURE__ */ jsx(EmptyDiscoverRoadmaps, {}),
      roadmaps.length > 0 && !isLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("ul", { className: "mb-4 grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3", children: roadmaps.map((roadmap) => {
          const roadmapLink = `/r/${roadmap.slug}`;
          const totalRatings = Object.keys(
            roadmap.ratings?.breakdown || []
          ).reduce(
            (acc, key) => acc + roadmap.ratings.breakdown[key],
            0
          );
          return /* @__PURE__ */ jsx("li", { className: "h-full min-h-[175px]", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: roadmapLink,
              className: "flex h-full flex-col rounded-lg border bg-white p-3.5 transition-colors hover:border-gray-300 hover:bg-gray-50",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "grow", children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-balance text-base font-bold leading-tight", children: roadmap.title }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-500", children: roadmap.description })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-xs text-gray-400", children: [
                    /* @__PURE__ */ jsx(Shapes, { size: 15, className: "inline-block" }),
                    Intl.NumberFormat("en-US", {
                      notation: "compact"
                    }).format(roadmap.topicCount),
                    " "
                  ] }),
                  /* @__PURE__ */ jsx(
                    Rating,
                    {
                      rating: roadmap?.ratings?.average || 0,
                      readOnly: true,
                      starSize: 16,
                      total: totalRatings
                    }
                  )
                ] })
              ]
            },
            roadmap._id
          ) }, roadmap._id);
        }) }),
        /* @__PURE__ */ jsx(
          Pagination,
          {
            currPage: roadmapsResponse?.currPage || 1,
            totalPages: roadmapsResponse?.totalPages || 1,
            perPage: roadmapsResponse?.perPage || 0,
            totalCount: roadmapsResponse?.totalCount || 0,
            onPageChange: (page) => {
              setPageState({
                ...pageState,
                currentPage: page
              });
            }
          }
        )
      ] })
    ] }) })
  ] });
}

const $$Community = createComponent(($$result, $$props, $$slots) => {
  const title = "Discover Custom Roadmaps";
  const description = "Explore the community-created roadmaps to learn new skills, tools, and technologies. You can also create your own roadmap and share it with the world.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "permalink": "/community" }, { "changelog-banner": ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DiscoverRoadmaps", DiscoverRoadmaps, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/DiscoverRoadmaps/DiscoverRoadmaps", "client:component-export": "DiscoverRoadmaps" })}  ` })}`;
}, "/workspace/src/pages/community.astro", void 0);

const $$file = "/workspace/src/pages/community.astro";
const $$url = "/community";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Community,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
