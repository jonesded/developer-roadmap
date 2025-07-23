import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useMutation, useQuery } from '@tanstack/react-query';
import { MoreVertical, Play, Trash2, CalendarIcon, ClipboardCheck, Loader2, BookOpen } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { u as useOutsideClick, l as useKeydown, c as cn, b as getUrlParams, s as setUrlParams, d as deleteUrlParam, i as isLoggedIn } from '../../chunks/BaseLayout_DfQviQZ5.mjs';
import { q as queryClient, b as httpDelete } from '../../chunks/query-client_BnT_580V.mjs';
import { a as AICourseSearch, b as AITutorTallMessage } from '../../chunks/AITutorTallMessage_BGX738uL.mjs';
import { U as UpgradeAccountModal } from '../../chunks/UpgradeAccountModal_DhdxALHd.mjs';
import { P as Pagination } from '../../chunks/Pagination_DCvqQ5el.mjs';
import { s as showLoginPopup } from '../../chunks/popup_DWUkHIfQ.mjs';
import { l as listUserAiQuizzesOptions } from '../../chunks/ai-quiz_0kia9WZf.mjs';
import { g as getRelativeTimeString } from '../../chunks/date_iLNlXR7B.mjs';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
import { a as aiLimitOptions } from '../../chunks/ai-course_ei-HsZ8o.mjs';
import { u as useIsPaidUser } from '../../chunks/billing_B5wE6dhK.mjs';
import { A as AIUsageWarning, a as AILibraryLayout } from '../../chunks/AILibraryLayout_D3LwefsU.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_CkmnKjD8.mjs';
export { renderers } from '../../renderers.mjs';

function AIQuizActions(props) {
  const { quizSlug, onDeleted } = props;
  const toast = useToast();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const { mutate: deleteQuiz, isPending: isDeleting } = useMutation(
    {
      mutationFn: async () => {
        return httpDelete(`/v1-delete-ai-quiz/${quizSlug}`);
      },
      onSuccess: () => {
        toast.success("Quiz deleted");
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey?.[0] === "user-ai-quizzes"
        });
        onDeleted?.();
      },
      onError: (error) => {
        toast.error(error?.message || "Failed to delete quiz");
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
          href: `/ai/quiz/${quizSlug}`,
          className: "flex w-full items-center gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70",
          children: [
            /* @__PURE__ */ jsx(Play, { className: "h-3.5 w-3.5" }),
            "Take Quiz"
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
            "Delete Quiz"
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
                deleteQuiz();
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

function AIQuizCard(props) {
  const { quiz, variant = "row", showActions = true } = props;
  const updatedAgo = getRelativeTimeString(quiz?.updatedAt);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-grow", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/ai/quiz/${quiz.slug}`,
        className: cn(
          "group relative flex h-full w-full gap-3 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 text-left transition-all hover:border-gray-300 hover:bg-gray-50 sm:gap-4",
          variant === "column" && "flex-col",
          variant === "row" && "sm:flex-col sm:items-start"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsx("h3", { className: "line-clamp-2 text-base font-semibold text-balance text-gray-900", children: quiz.title }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center gap-4 sm:gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-xs text-gray-600", children: [
            /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-1 h-3.5 w-3.5" }),
            /* @__PURE__ */ jsx("span", { children: updatedAgo }),
            /* @__PURE__ */ jsxs("div", { className: "ml-3 flex items-center text-xs text-gray-600", children: [
              /* @__PURE__ */ jsx(ClipboardCheck, { className: "mr-1 h-3.5 w-3.5" }),
              /* @__PURE__ */ jsx("span", { className: "capitalize", children: quiz.format === "mcq" ? "MCQ" : quiz.format })
            ] })
          ] }) })
        ]
      }
    ),
    showActions && quiz.slug && /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsx(AIQuizActions, { quizSlug: quiz.slug }) })
  ] });
}

function UserQuizzesList() {
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
  const selectedLimit = limits?.quiz;
  const { data: userAiQuizzes, isFetching: isUserAiQuizzesLoading } = useQuery(
    listUserAiQuizzesOptions(pageState),
    queryClient
  );
  useEffect(() => {
    setIsInitialLoading(false);
  }, [userAiQuizzes]);
  const quizzes = userAiQuizzes?.data ?? [];
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
  const isAnyLoading = isUserAiQuizzesLoading || isInitialLoading || isPaidUserLoading || isLimitLoading;
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
        placeholder: "Search Quizzes...",
        disabled: isAnyLoading
      }
    ),
    isAnyLoading && /* @__PURE__ */ jsxs("p", { className: "mb-4 flex flex-row items-center gap-2 text-sm text-gray-500", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
      "Loading your quizzes..."
    ] }),
    !isAnyLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        AIUsageWarning,
        {
          type: "quiz",
          totalCount: userAiQuizzes?.totalCount,
          isPaidUser,
          usedCount: selectedLimit?.used,
          limitCount: selectedLimit?.limit,
          onUpgrade: () => setShowUpgradePopup(true)
        }
      ),
      isUserAuthenticated && !isAnyLoading && quizzes.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3", children: quizzes.map((quiz) => /* @__PURE__ */ jsx(AIQuizCard, { variant: "column", quiz }, quiz._id)) }),
        /* @__PURE__ */ jsx(
          Pagination,
          {
            totalCount: userAiQuizzes?.totalCount || 0,
            totalPages: userAiQuizzes?.totalPages || 0,
            currPage: Number(userAiQuizzes?.currPage || 1),
            perPage: Number(userAiQuizzes?.perPage || 10),
            onPageChange: (page) => {
              setPageState({ ...pageState, currPage: String(page) });
            },
            className: "rounded-lg border border-gray-200 bg-white p-4"
          }
        )
      ] }),
      !isAnyLoading && quizzes.length === 0 && /* @__PURE__ */ jsx(
        AITutorTallMessage,
        {
          title: isUserAuthenticated ? "No quizzes found" : "Sign up or login",
          subtitle: isUserAuthenticated ? "You haven't generated any quizzes yet." : "Takes 2s to sign up and generate your first quiz.",
          icon: BookOpen,
          buttonText: isUserAuthenticated ? "Create your first quiz" : "Sign up or login",
          onButtonClick: () => {
            if (isUserAuthenticated) {
              window.location.href = "/ai/quiz";
            } else {
              showLoginPopup();
            }
          }
        }
      )
    ] })
  ] });
}

const $$Quizzes = createComponent(($$result, $$props, $$slots) => {
  const ogImage = "https://roadmap.sh/og-images/ai-tutor.png";
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "Quiz AI", "noIndex": true, "ogImageUrl": ogImage, "description": "Learn anything with AI Tutor. Pick a topic, choose a difficulty level and the AI will guide you through the learning process." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AILibraryLayout", AILibraryLayout, { "activeTab": "quizzes", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIGuide/AILibraryLayout", "client:component-export": "AILibraryLayout" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "UserQuizzesList", UserQuizzesList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIQuiz/UserQuizzesList", "client:component-export": "UserQuizzesList" })} ` })} ` })}`;
}, "/workspace/src/pages/ai/quizzes.astro", void 0);

const $$file = "/workspace/src/pages/ai/quizzes.astro";
const $$url = "/ai/quizzes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Quizzes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
