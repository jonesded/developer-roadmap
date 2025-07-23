import { queryOptions } from '@tanstack/react-query';
import { h as httpGet, q as queryClient } from './query-client_rwy39LWF.mjs';
import { g as generateAICourseRoadmapStructure } from './ai_D2DRO333.mjs';
import { generateAIRoadmapFromText, renderFlowJSON } from './index_DJK1nS1V.mjs';
import { a as aiLimitOptions } from './ai-course_sZQdwLbV.mjs';
import { r as readChatStream } from './chat_CErZ2BPm.mjs';
import { i as isLoggedIn } from './BaseLayout_BrSKT5L_.mjs';

function aiRoadmapOptions(roadmapSlug) {
  return queryOptions({
    queryKey: ["ai-roadmap", roadmapSlug],
    queryFn: async () => {
      const res = await httpGet(
        `/v1-get-ai-roadmap/${roadmapSlug}`
      );
      generateAICourseRoadmapStructure(res.data);
      const { nodes, edges } = generateAIRoadmapFromText();
      const svg = await renderFlowJSON();
      const svgHtml = svg.outerHTML;
      return {
        ...res,
        svgHtml
      };
    },
    enabled: !!roadmapSlug
  });
}
async function generateAIRoadmap(options) {
  const {
    term,
    roadmapSlug,
    onLoadingChange,
    onError,
    isForce = false,
    prompt,
    onDetailsChange,
    onFinish,
    questionAndAnswers,
    onRoadmapSvgChange,
    onStreamingChange
  } = options;
  onLoadingChange?.(true);
  onStreamingChange?.(false);
  try {
    let response = null;
    if (roadmapSlug && isForce) {
      response = await fetch(
        `${undefined                              }/v1-regenerate-ai-roadmap/${roadmapSlug}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({
            prompt
          })
        }
      );
    } else {
      response = await fetch(
        `${undefined                              }/v1-generate-ai-roadmap`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            term,
            isForce,
            customPrompt: prompt,
            questionAndAnswers
          }),
          credentials: "include"
        }
      );
    }
    if (!response.ok) {
      const data = await response.json();
      console.error(
        "Error generating course:",
        data?.message || "Something went wrong"
      );
      onLoadingChange?.(false);
      onError?.(data?.message || "Something went wrong");
      return;
    }
    const stream = response.body;
    if (!stream) {
      console.error("Failed to get stream from response");
      onError?.("Something went wrong");
      onLoadingChange?.(false);
      return;
    }
    onLoadingChange?.(false);
    onStreamingChange?.(true);
    await readChatStream(stream, {
      onMessage: async (message) => {
        const result = generateAICourseRoadmapStructure(message);
        const { nodes, edges } = generateAIRoadmapFromText(result);
        const svg = await renderFlowJSON({ nodes, edges });
        onRoadmapSvgChange?.(svg);
      },
      onMessageEnd: async () => {
        queryClient.invalidateQueries(aiLimitOptions());
        onStreamingChange?.(false);
      },
      onDetails: async (details) => {
        if (!details?.roadmapId || !details?.roadmapSlug) {
          throw new Error("Invalid details");
        }
        onDetailsChange?.(details);
      }
    });
    onFinish?.();
  } catch (error) {
    onError?.(error?.message || "Something went wrong");
    console.error("Error in course generation:", error);
    onLoadingChange?.(false);
    onStreamingChange?.(false);
  }
}
function listUserAiRoadmapsOptions(params = {
  perPage: "21",
  currPage: "1",
  query: ""
}) {
  return queryOptions({
    queryKey: ["user-ai-roadmaps", params],
    queryFn: () => {
      return httpGet(
        `/v1-list-user-ai-roadmaps`,
        params
      );
    },
    enabled: !!isLoggedIn()
  });
}

export { aiRoadmapOptions as a, generateAIRoadmap as g, listUserAiRoadmapsOptions as l };
