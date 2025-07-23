import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useQuery } from '@tanstack/react-query';
import { Loader2, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { b as getUrlParams, s as setUrlParams, d as deleteUrlParam, i as isLoggedIn } from '../../chunks/BaseLayout_B-BXcELP.mjs';
import { a as aiLimitOptions, b as listUserAiCoursesOptions } from '../../chunks/ai-course_C2IOZ4Jw.mjs';
import { q as queryClient } from '../../chunks/query-client_CBXGK_YM.mjs';
import { a as AICourseSearch, b as AITutorTallMessage } from '../../chunks/AITutorTallMessage_CK__x6UQ.mjs';
import { U as UpgradeAccountModal } from '../../chunks/UpgradeAccountModal_vuvdVS66.mjs';
import { P as Pagination } from '../../chunks/Pagination_xm1ZIew_.mjs';
import { A as AICourseCard } from '../../chunks/AICourseCard_ClRrxybU.mjs';
import { s as showLoginPopup } from '../../chunks/popup_DWUkHIfQ.mjs';
import { u as useIsPaidUser } from '../../chunks/billing_5mov2PsZ.mjs';
import { A as AIUsageWarning, a as AILibraryLayout } from '../../chunks/AILibraryLayout_BvOzW0uA.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_CB584z4R.mjs';
export { renderers } from '../../renderers.mjs';

function UserCoursesList() {
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
  const selectedLimit = limits?.course;
  const { data: userAiCourses, isFetching: isUserAiCoursesLoading } = useQuery(
    listUserAiCoursesOptions(pageState),
    queryClient
  );
  useEffect(() => {
    setIsInitialLoading(false);
  }, [userAiCourses]);
  const courses = userAiCourses?.data ?? [];
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
  const isAnyLoading = isUserAiCoursesLoading || isInitialLoading || isPaidUserLoading || isLimitLoading;
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
        disabled: isAnyLoading
      }
    ),
    isAnyLoading && /* @__PURE__ */ jsxs("p", { className: "mb-4 flex flex-row items-center gap-2 text-sm text-gray-500", children: [
      /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
      "Loading your courses..."
    ] }),
    !isAnyLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        AIUsageWarning,
        {
          type: "course",
          totalCount: userAiCourses?.totalCount,
          isPaidUser,
          usedCount: selectedLimit?.used,
          limitCount: selectedLimit?.limit,
          onUpgrade: () => setShowUpgradePopup(true)
        }
      ),
      isUserAuthenticated && !isAnyLoading && courses.length > 0 && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3", children: [
        courses.map((course) => /* @__PURE__ */ jsx(
          AICourseCard,
          {
            variant: "column",
            course
          },
          course._id
        )),
        /* @__PURE__ */ jsx(
          Pagination,
          {
            totalCount: userAiCourses?.totalCount || 0,
            totalPages: userAiCourses?.totalPages || 0,
            currPage: Number(userAiCourses?.currPage || 1),
            perPage: Number(userAiCourses?.perPage || 10),
            onPageChange: (page) => {
              setPageState({ ...pageState, currPage: String(page) });
            },
            className: "rounded-lg border border-gray-200 bg-white p-4"
          }
        )
      ] }),
      !isAnyLoading && courses.length === 0 && /* @__PURE__ */ jsx(
        AITutorTallMessage,
        {
          title: isUserAuthenticated ? "No courses found" : "Sign up or login",
          subtitle: isUserAuthenticated ? "You haven't generated any courses yet." : "Takes 2s to sign up and generate your first course.",
          icon: BookOpen,
          buttonText: isUserAuthenticated ? "Create your first course" : "Sign up or login",
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

const $$Courses = createComponent(($$result, $$props, $$slots) => {
  const ogImage = "https://roadmap.sh/og-images/ai-tutor.png";
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "Roadmap AI", "noIndex": true, "ogImageUrl": ogImage, "description": "Learn anything with AI Tutor. Pick a topic, choose a difficulty level and the AI will guide you through the learning process." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AILibraryLayout", AILibraryLayout, { "activeTab": "courses", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AIGuide/AILibraryLayout", "client:component-export": "AILibraryLayout" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "UserCoursesList", UserCoursesList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/GenerateCourse/UserCoursesList", "client:component-export": "UserCoursesList" })} ` })} ` })}`;
}, "/workspace/src/pages/ai/courses.astro", void 0);

const $$file = "/workspace/src/pages/ai/courses.astro";
const $$url = "/ai/courses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Courses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
