import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { A as AICourseCard } from '../../chunks/AICourseCard_JHGM-po4.mjs';
import { A as AITutorHeader, a as AICourseSearch, b as AITutorTallMessage } from '../../chunks/AITutorTallMessage_BGX738uL.mjs';
import { U as UpgradeAccountModal } from '../../chunks/UpgradeAccountModal_DhdxALHd.mjs';
import { l as listExploreAiCoursesOptions } from '../../chunks/ai-course_ei-HsZ8o.mjs';
import { q as queryClient } from '../../chunks/query-client_BnT_580V.mjs';
import { b as getUrlParams, s as setUrlParams, d as deleteUrlParam } from '../../chunks/BaseLayout_DfQviQZ5.mjs';
import { P as Pagination } from '../../chunks/Pagination_DCvqQ5el.mjs';
import { Loader2, BookOpen } from 'lucide-react';
import { h as humanizeNumber } from '../../chunks/number_D9-I_I5P.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_CkmnKjD8.mjs';
import { A as AITutorLayout } from '../../chunks/AITutorLayout_D2lYDCfF.mjs';
export { renderers } from '../../renderers.mjs';

function AIExploreCourseListing() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [pageState, setPageState] = useState({
    perPage: "42",
    currPage: "1",
    query: ""
  });
  const {
    data: exploreAiCourses,
    isFetching: isExploreAiCoursesLoading,
    isRefetching: isExploreAiCoursesRefetching
  } = useQuery(listExploreAiCoursesOptions(pageState), queryClient);
  useEffect(() => {
    setIsInitialLoading(false);
  }, [exploreAiCourses]);
  const courses = exploreAiCourses?.data ?? [];
  const isAnyLoading = isExploreAiCoursesLoading || isInitialLoading;
  useEffect(() => {
    const queryParams = getUrlParams();
    setPageState({
      ...pageState,
      currPage: queryParams?.p || "1"
    });
  }, []);
  useEffect(() => {
    if (pageState?.currPage !== "1") {
      setUrlParams({
        p: pageState?.currPage || "1"
      });
    } else {
      deleteUrlParam("p");
    }
  }, [pageState]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showUpgradePopup && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradePopup(false) }),
    /* @__PURE__ */ jsx(
      AITutorHeader,
      {
        title: "Explore Courses",
        subtitle: "Explore the AI courses created by community",
        onUpgradeClick: () => setShowUpgradePopup(true)
      }
    ),
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
        disabled: isAnyLoading
      }
    ),
    isAnyLoading && /* @__PURE__ */ jsxs("p", { className: "mb-4 flex flex-row items-center gap-2 text-sm text-gray-500", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
      "Loading courses..."
    ] }),
    !isAnyLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
          "Community has generated",
          " ",
          humanizeNumber(exploreAiCourses?.totalCount || 0),
          " courses"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(
          Pagination,
          {
            variant: "minimal",
            totalCount: exploreAiCourses?.totalCount || 0,
            totalPages: exploreAiCourses?.totalPages || 0,
            currPage: Number(exploreAiCourses?.currPage || 1),
            perPage: Number(exploreAiCourses?.perPage || 21),
            onPageChange: (page) => {
              setPageState({ ...pageState, currPage: String(page) });
            },
            className: ""
          }
        ) })
      ] }),
      courses && courses.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3", children: courses.map((course) => /* @__PURE__ */ jsx(
          AICourseCard,
          {
            course,
            showActions: false,
            showProgress: false,
            variant: "column"
          },
          course._id
        )) }),
        /* @__PURE__ */ jsx(
          Pagination,
          {
            totalCount: exploreAiCourses?.totalCount || 0,
            totalPages: exploreAiCourses?.totalPages || 0,
            currPage: Number(exploreAiCourses?.currPage || 1),
            perPage: Number(exploreAiCourses?.perPage || 21),
            onPageChange: (page) => {
              setPageState({ ...pageState, currPage: String(page) });
            },
            className: "rounded-lg border border-gray-200 bg-white p-4"
          }
        )
      ] }),
      courses.length === 0 && /* @__PURE__ */ jsx(
        AITutorTallMessage,
        {
          title: "No courses found",
          subtitle: "Try a different search or check back later.",
          icon: BookOpen,
          buttonText: "Create your first course",
          onButtonClick: () => {
            window.location.href = "/ai";
          }
        }
      )
    ] })
  ] });
}

const $$Community = createComponent(($$result, $$props, $$slots) => {
  const ogImage = "https://roadmap.sh/og-images/ai-tutor.png";
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "Roadmap AI", "noIndex": true, "ogImageUrl": ogImage, "description": "Learn anything with AI Tutor. Pick a topic, choose a difficulty level and the AI will guide you through the learning process." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AITutorLayout", AITutorLayout, { "activeTab": "community", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AITutor/AITutorLayout", "client:component-export": "AITutorLayout" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto flex w-full max-w-6xl flex-grow flex-col p-2"> ${renderComponent($$result3, "AIExploreCourseListing", AIExploreCourseListing, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AITutor/AIExploreCourseListing", "client:component-export": "AIExploreCourseListing" })} </div> ` })} ` })}`;
}, "/workspace/src/pages/ai/community.astro", void 0);

const $$file = "/workspace/src/pages/ai/community.astro";
const $$url = "/ai/community";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Community,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
