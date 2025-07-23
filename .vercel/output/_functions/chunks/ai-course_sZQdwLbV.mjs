import { h as httpGet } from './query-client_rwy39LWF.mjs';
import { i as isLoggedIn } from './BaseLayout_BrSKT5L_.mjs';
import { queryOptions } from '@tanstack/react-query';

function getAiCourseOptions(params) {
  return {
    queryKey: ["ai-course", params],
    queryFn: () => {
      return httpGet(
        `/v1-get-ai-course/${params.aiCourseSlug}`
      );
    },
    enabled: !!params.aiCourseSlug,
    refetchOnMount: false
  };
}
function aiLimitOptions() {
  return queryOptions({
    queryKey: ["ai-course-limit"],
    queryFn: () => {
      return httpGet(`/v1-get-ai-course-limit`);
    },
    enabled: !!isLoggedIn(),
    retryOnMount: false,
    refetchOnMount: false
  });
}
function listUserAiCoursesOptions(params = {
  perPage: "21",
  currPage: "1",
  query: ""
}) {
  return {
    queryKey: ["user-ai-courses", params],
    queryFn: () => {
      return httpGet(
        `/v1-list-user-ai-courses`,
        params
      );
    },
    enabled: !!isLoggedIn()
  };
}
function listFeaturedAiCoursesOptions(params = {
  perPage: "21",
  currPage: "1"
}) {
  return {
    queryKey: ["featured-ai-courses", params],
    queryFn: () => {
      return httpGet(
        `/v1-list-featured-ai-courses`,
        params
      );
    }
  };
}
function listExploreAiCoursesOptions(params = {
  perPage: "21",
  currPage: "1",
  query: ""
}) {
  return {
    queryKey: ["explore-ai-courses", params],
    queryFn: () => {
      return httpGet(
        `/v1-list-explore-ai-courses`,
        params
      );
    }
  };
}

export { aiLimitOptions as a, listUserAiCoursesOptions as b, listFeaturedAiCoursesOptions as c, getAiCourseOptions as g, listExploreAiCoursesOptions as l };
