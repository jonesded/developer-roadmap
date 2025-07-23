import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MoreVertical, Play, Trash2, CalendarIcon, Loader2, BookOpen } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { u as useOutsideClick, l as useKeydown, c as cn, b as getUrlParams, s as setUrlParams, d as deleteUrlParam, i as isLoggedIn } from '../../chunks/BaseLayout_B-BXcELP.mjs';
import { q as queryClient, b as httpDelete } from '../../chunks/query-client_CBXGK_YM.mjs';
import { a as AICourseSearch, b as AITutorTallMessage } from '../../chunks/AITutorTallMessage_CK__x6UQ.mjs';
import { U as UpgradeAccountModal } from '../../chunks/UpgradeAccountModal_vuvdVS66.mjs';
import { P as Pagination } from '../../chunks/Pagination_xm1ZIew_.mjs';
import { s as showLoginPopup } from '../../chunks/popup_DWUkHIfQ.mjs';
import { l as listUserAiRoadmapsOptions } from '../../chunks/ai-roadmap_DTtRcDGR.mjs';
import { g as getRelativeTimeString } from '../../chunks/date_iLNlXR7B.mjs';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
import { a as aiLimitOptions } from '../../chunks/ai-course_C2IOZ4Jw.mjs';
import { u as useIsPaidUser } from '../../chunks/billing_5mov2PsZ.mjs';
import { A as AIUsageWarning, a as AILibraryLayout } from '../../chunks/AILibraryLayout_BvOzW0uA.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_CB584z4R.mjs';
export { renderers } from '../../renderers.mjs';

function AIRoadmapActions(props) {
  const { roadmapSlug, onDeleted } = props;
  const toast = useToast();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const { mutate: deleteRoadmap, isPending: isDeleting } = useMutation(
    {
      mutationFn: async () => {
        return httpDelete(`/v1-delete-ai-roadmap/${roadmapSlug}`);
      },
      onSuccess: () => {
        toast.success("Roadmap deleted");
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey?.[0] === "user-ai-roadmaps"
        });
        onDeleted?.();
      },
      onError: (error) => {
        toast.error(error?.message || "Failed to delete roadmap");
      }
    },
    queryClient
  );
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });
  useKeydown("Escape", () => {
    setIsOpen(false);
  });
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full", ref: dropdownRef, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "h-full text-gray-400 hover:text-gray-700",
        onClick: (e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        },
        children: /* @__PURE__ */ jsx(MoreVertical, { size: 16 })
      }
    ),
    isOpen && /* @__PURE__ */ jsxs("div", { className: "absolute top-8 right-0 z-10 w-48 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/ai-roadmaps/${roadmapSlug}`,
          className: "flex w-full items-center gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70",
          children: [
            /* @__PURE__ */ jsx(Play, { className: "h-3.5 w-3.5" }),
            "Visit Roadmap"
          ]
        }
      ),
      !isConfirming && /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex w-full items-center gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70",
          onClick: () => setIsConfirming(true),
          disabled: isDeleting,
          children: !isDeleting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }),
            "Delete Roadmap"
          ] }) : "Deleting..."
        }
      ),
      isConfirming && /* @__PURE__ */ jsxs("span", { className: "flex w-full items-center justify-between gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70", children: [
        "Are you sure?",
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setIsConfirming(false);
                deleteRoadmap();
              },
              disabled: isDeleting,
              className: "text-red-500 underline hover:text-red-800",
              children: "Yes"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsConfirming(false),
              className: "text-red-500 underline hover:text-red-800",
              children: "No"
            }
          )
        ] })
      ] })
    ] })
  ] });
}

function AIRoadmapCard(props) {
  const { roadmap, variant = "row", showActions = true } = props;
  const updatedAgo = getRelativeTimeString(roadmap?.updatedAt);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-grow", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/ai-roadmaps/${roadmap.slug}`,
        className: cn(
          "group relative flex h-full w-full gap-3 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 text-left transition-all hover:border-gray-300 hover:bg-gray-50 sm:gap-4",
          variant === "column" && "flex-col",
          variant === "row" && "sm:flex-col sm:items-start"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsx("h3", { className: "line-clamp-2 text-base font-semibold text-balance text-gray-900", children: roadmap.title }) }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 sm:gap-4", children: /* @__PURE__ */ jsxs("div", { className: "items-center text-xs text-gray-600 flex", children: [
            /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-1 h-3.5 w-3.5" }),
            /* @__PURE__ */ jsx("span", { children: updatedAgo })
          ] }) })
        ]
      }
    ),
    showActions && roadmap.slug && /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsx(AIRoadmapActions, { roadmapSlug: roadmap.slug }) })
  ] });
}

function UserRoadmapsList() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [pageState, setPageState] = useState({
    perPage: "21",
    currPage: "1",
    query: ""
  });
  const { isPaidUser, isLoading: isPaidUserLoading } = useIsPaidUser();
  const { data: limits, isLoading: isLimitLoading } = useQuery(
    aiLimitOptions(),
    queryClient
  );
  const selectedLimit = limits?.roadmap;
  const { data: userAiRoadmaps, isFetching: isUserAiRoadmapsLoading } = useQuery(listUserAiRoadmapsOptions(pageState), queryClient);
  useEffect(() => {
    setIsInitialLoading(false);
  }, [userAiRoadmaps]);
  const roadmaps = userAiRoadmaps?.data ?? [];
  useEffect(() => {
    const queryParams = getUrlParams();
    setPageState({
      ...pageState,
      currPage: queryParams?.p || "1",
      query: queryParams?.q || ""
    });
  }, []);
  useEffect(() => {
    if (pageState?.currPage !== "1" || pageState?.query !== "") {
      setUrlParams({
        p: pageState?.currPage || "1",
        q: pageState?.query || ""
      });
    } else {
      deleteUrlParam("p");
      deleteUrlParam("q");
    }
  }, [pageState]);
  const isUserAuthenticated = isLoggedIn();
  const isAnyLoading = isUserAiRoadmapsLoading || isInitialLoading || isPaidUserLoading || isLimitLoading;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showUpgradePopup && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradePopup(false) }),
    /* @__PURE__ */ jsx(
      AICourseSearch,
      {
        value: pageState?.query || "",
        onChange: (value) => {
          setPageState({
            ...pageState,
            query: value,
            currPage: "1"
          });
        },
        placeholder: "Search Roadmaps...",
        disabled: isAnyLoading
      }
    ),
    isAnyLoading && /* @__PURE__ */ jsxs("p", { className: "mb-4 flex flex-row items-center gap-2 text-sm text-gray-500", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
      "Loading your roadmaps..."
    ] }),
    !isAnyLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        AIUsageWarning,
        {
          type: "roadmap",
          totalCount: userAiRoadmaps?.totalCount,
          isPaidUser,
          usedCount: selectedLimit?.used,
          limitCount: selectedLimit?.limit,
          onUpgrade: () => setShowUpgradePopup(true)
        }
      ),
      isUserAuthenticated && !isAnyLoading && roadmaps.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3", children: roadmaps.map((roadmap) => /* @__PURE__ */ jsx(
          AIRoadmapCard,
          {
            variant: "column",
            roadmap
          },
          roadmap._id
        )) }),
        /* @__PURE__ */ jsx(
          Pagination,
          {
            totalCount: userAiRoadmaps?.totalCount || 0,
            totalPages: userAiRoadmaps?.totalPages || 0,
            currPage: Number(userAiRoadmaps?.currPage || 1),
            perPage: Number(userAiRoadmaps?.perPage || 10),
            onPageChange: (page) => {
              setPageState({ ...pageState, currPage: String(page) });
            },
            className: "rounded-lg border border-gray-200 bg-white p-4"
          }
        )
      ] }),
      !isAnyLoading && roadmaps.length === 0 && /* @__PURE__ */ jsx(
        AITutorTallMessage,
        {
          title: isUserAuthenticated ? "No roadmaps found" : "Sign up or login",
          subtitle: isUserAuthenticated ? "You haven't generated any roadmaps yet." : "Takes 2s to sign up and generate your first roadmap.",
          icon: BookOpen,
          buttonText: isUserAuthenticated ? "Create your first roadmap" : "Sign up or login",
          onButtonClick: () => {
            if (isUserAuthenticated) {
              window.location.href = "/ai";
            } else {
              showLoginPopup();
            }
          }
        }
      )
    ] })
  ] });
}

const $$Roadmaps = createComponent(($$result, $$props, $$slots) => {
  const ogImage = "https://roadmap.sh/og-images/ai-tutor.png";
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "Roadmap AI", "noIndex": true, "ogImageUrl": ogImage, "description": "Learn anything with AI Tutor. Pick a topic, choose a difficulty level and the AI will guide you through the learning process." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AILibraryLayout", AILibraryLayout, { "activeTab": "roadmaps", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIGuide/AILibraryLayout", "client:component-export": "AILibraryLayout" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "UserRoadmapsList", UserRoadmapsList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIRoadmap/UserRoadmapsList", "client:component-export": "UserRoadmapsList" })} ` })} ` })}`;
}, "/workspace/src/pages/ai/roadmaps.astro", void 0);

const $$file = "/workspace/src/pages/ai/roadmaps.astro";
const $$url = "/ai/roadmaps";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Roadmaps,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
