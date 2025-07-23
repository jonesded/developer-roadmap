import { queryOptions } from '@tanstack/react-query';
import { h as httpGet } from './query-client_BnT_580V.mjs';
import { i as isLoggedIn } from './BaseLayout_DfQviQZ5.mjs';

function userResourceProgressOptions(resourceType, resourceId) {
  return queryOptions({
    queryKey: ["resource-progress", resourceId, resourceType],
    queryFn: () => {
      return httpGet(
        `/v1-get-user-resource-progress`,
        {
          resourceId,
          resourceType
        }
      );
    },
    enabled: !!isLoggedIn(),
    refetchOnMount: false
  });
}

function roadmapTreeMappingOptions(roadmapId) {
  return queryOptions({
    queryKey: ["roadmap-tree-mapping", { roadmapId }],
    queryFn: () => {
      return httpGet(
        `${"https://api.hnmdevs.com"}/v1-roadmap-tree-mapping/${roadmapId}`
      );
    },
    refetchOnMount: false
  });
}

export { roadmapTreeMappingOptions as r, userResourceProgressOptions as u };
