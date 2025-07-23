import { atom, computed } from 'nanostores';

const currentRoadmap = atom(void 0);
const isCurrentRoadmapPersonal = computed(
  currentRoadmap,
  (roadmap) => !roadmap?.teamId
);
computed(
  currentRoadmap,
  (roadmap) => roadmap?.canManage
);
const roadmapProgress = atom();
const totalRoadmapNodes = atom();

export { currentRoadmap as c, isCurrentRoadmapPersonal as i, roadmapProgress as r, totalRoadmapNodes as t };
