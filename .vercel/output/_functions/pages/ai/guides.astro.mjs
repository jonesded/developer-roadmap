import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MoreVertical, ArrowUpRightIcon, Trash2, Loader2, BookOpen } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { u as useOutsideClick, l as useKeydown, b as getUrlParams, s as setUrlParams, d as deleteUrlParam, i as isLoggedIn } from '../../chunks/BaseLayout_DfQviQZ5.mjs';
import { s as showLoginPopup } from '../../chunks/popup_DWUkHIfQ.mjs';
import { l as listUserAIGuidesOptions } from '../../chunks/ai-guide_DcVwAuuo.mjs';
import { q as queryClient, b as httpDelete } from '../../chunks/query-client_BnT_580V.mjs';
import { a as AICourseSearch, b as AITutorTallMessage } from '../../chunks/AITutorTallMessage_BGX738uL.mjs';
import { U as UpgradeAccountModal } from '../../chunks/UpgradeAccountModal_DhdxALHd.mjs';
import { P as Pagination } from '../../chunks/Pagination_DCvqQ5el.mjs';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
import { u as useIsPaidUser } from '../../chunks/billing_B5wE6dhK.mjs';
import { a as aiLimitOptions } from '../../chunks/ai-course_ei-HsZ8o.mjs';
import { A as AIUsageWarning, a as AILibraryLayout } from '../../chunks/AILibraryLayout_D3LwefsU.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_CkmnKjD8.mjs';
export { renderers } from '../../renderers.mjs';

function AIGuideActions(props) {
  const { guideSlug, onDeleted } = props;
  const toast = useToast();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const { mutate: deleteCourse, isPending: isDeleting } = useMutation(
    {
      mutationFn: async () => {
        return httpDelete(`/v1-delete-ai-guide/${guideSlug}`);
      },
      onSuccess: () => {
        toast.success("Guide deleted");
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey?.[0] === "user-ai-guides"
        });
        onDeleted?.();
      },
      onError: (error) => {
        toast.error(error?.message || "Failed to delete guide");
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
          href: `/ai/guide/${guideSlug}`,
          className: "flex w-full items-center gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70",
          children: [
            /* @__PURE__ */ jsx(ArrowUpRightIcon, { className: "h-3.5 w-3.5" }),
            "View Guide"
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
            "Delete Guide"
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
                deleteCourse();
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

function AIGuideCard(props) {
  const { guide, showActions = true } = props;
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-grow flex-col", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: `/ai/guide/${guide.slug}`,
        className: "group relative flex h-full min-h-[120px] w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-3 text-left hover:border-gray-300 hover:bg-gray-50 sm:p-4",
        children: /* @__PURE__ */ jsxs("div", { className: "relative max-h-[180px] min-h-[140px] overflow-y-hidden sm:max-h-[200px] sm:min-h-[160px]", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "prose prose-sm prose-pre:bg-gray-100 [&_h1]:hidden [&_h1:first-child]:block [&_h1:first-child]:text-base [&_h1:first-child]:leading-[1.35] [&_h1:first-child]:font-bold [&_h1:first-child]:text-pretty sm:[&_h1:first-child]:text-lg [&_h2]:hidden [&_h3]:hidden [&_h4]:hidden [&_h5]:hidden [&_h6]:hidden",
              dangerouslySetInnerHTML: { __html: guide.html }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent group-hover:from-gray-50 sm:h-16" })
        ] })
      }
    ),
    showActions && guide.slug && /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsx(AIGuideActions, { guideSlug: guide.slug }) })
  ] });
}

function UserGuidesList() {
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
  const selectedLimit = limits?.guide;
  const { data: userAiGuides, isFetching: isUserAiGuidesLoading } = useQuery(
    listUserAIGuidesOptions(pageState),
    queryClient
  );
  useEffect(() => {
    setIsInitialLoading(false);
  }, [userAiGuides]);
  const guides = userAiGuides?.data ?? [];
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
  const isAnyLoading = isUserAiGuidesLoading || isInitialLoading || isPaidUserLoading || isLimitLoading;
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
        disabled: isAnyLoading,
        placeholder: "Search guides..."
      }
    ),
    isAnyLoading && /* @__PURE__ */ jsxs("p", { className: "mb-4 flex flex-row items-center gap-2 text-sm text-gray-500", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
      "Loading your guides..."
    ] }),
    !isAnyLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        AIUsageWarning,
        {
          type: "guide",
          totalCount: userAiGuides?.totalCount,
          isPaidUser,
          usedCount: selectedLimit?.used,
          limitCount: selectedLimit?.limit,
          onUpgrade: () => setShowUpgradePopup(true)
        }
      ),
      isUserAuthenticated && !isAnyLoading && guides.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3", children: guides.map((guide) => /* @__PURE__ */ jsx(AIGuideCard, { guide }, guide._id)) }),
        /* @__PURE__ */ jsx(
          Pagination,
          {
            totalCount: userAiGuides?.totalCount || 0,
            totalPages: userAiGuides?.totalPages || 0,
            currPage: Number(userAiGuides?.currPage || 1),
            perPage: Number(userAiGuides?.perPage || 10),
            onPageChange: (page) => {
              setPageState({ ...pageState, currPage: String(page) });
            },
            className: "rounded-lg border border-gray-200 bg-white p-4"
          }
        )
      ] }),
      !isAnyLoading && guides.length === 0 && /* @__PURE__ */ jsx(
        AITutorTallMessage,
        {
          title: isUserAuthenticated ? "No guides found" : "Sign up or login",
          subtitle: isUserAuthenticated ? "You haven't generated any guides yet." : "Takes 2s to sign up and generate your first guide.",
          icon: BookOpen,
          buttonText: isUserAuthenticated ? "Create your first guide" : "Sign up or login",
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

const $$Guides = createComponent(($$result, $$props, $$slots) => {
  const ogImage = "https://roadmap.sh/og-images/ai-tutor.png";
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "Roadmap AI", "noIndex": true, "ogImageUrl": ogImage, "description": "Learn anything with AI Tutor. Pick a topic, choose a difficulty level and the AI will guide you through the learning process." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AILibraryLayout", AILibraryLayout, { "activeTab": "guides", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIGuide/AILibraryLayout", "client:component-export": "AILibraryLayout" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "UserGuidesList", UserGuidesList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/GenerateGuide/UserGuidesList", "client:component-export": "UserGuidesList" })} ` })} ` })}`;
}, "/workspace/src/pages/ai/guides.astro", void 0);

const $$file = "/workspace/src/pages/ai/guides.astro";
const $$url = "/ai/guides";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Guides,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
