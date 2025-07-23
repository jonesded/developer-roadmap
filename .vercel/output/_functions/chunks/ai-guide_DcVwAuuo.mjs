import { h as httpGet } from './query-client_BnT_580V.mjs';
import { i as isLoggedIn } from './BaseLayout_DfQviQZ5.mjs';
import { queryOptions } from '@tanstack/react-query';
import { m as markdownToHtmlWithHighlighting, a as markdownToHtml } from './markdown_rbU7j7cH.mjs';

function getAiGuideOptions(guideSlug) {
  return queryOptions({
    queryKey: ["ai-guide", guideSlug],
    queryFn: async () => {
      const res = await httpGet(
        `/v1-get-ai-guide/${guideSlug}`
      );
      return {
        ...res,
        html: await markdownToHtmlWithHighlighting(res.content)
      };
    },
    enabled: !!guideSlug
  });
}
function aiGuideSuggestionsOptions(guideSlug) {
  return queryOptions({
    queryKey: ["ai-guide-suggestions", guideSlug],
    queryFn: () => {
      return httpGet(
        `/v1-ai-guide-suggestions/${guideSlug}`
      );
    },
    enabled: !!guideSlug && !!isLoggedIn(),
    refetchOnMount: false
  });
}
function listUserAIGuidesOptions(params = {
  perPage: "21",
  currPage: "1",
  query: ""
}) {
  return queryOptions({
    queryKey: ["ai-guides", params],
    queryFn: async () => {
      const response = await httpGet(
        `/v1-list-user-ai-guides`,
        params
      );
      return {
        ...response,
        data: response.data.map((guide) => {
          const preview = guide.content.slice(0, 500);
          return {
            ...guide,
            html: markdownToHtml(preview, false)
          };
        })
      };
    },
    enabled: !!isLoggedIn()
  });
}

export { aiGuideSuggestionsOptions as a, getAiGuideOptions as g, listUserAIGuidesOptions as l };
