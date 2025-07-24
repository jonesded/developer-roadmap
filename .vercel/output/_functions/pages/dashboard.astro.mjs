import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { D as DashboardPage } from '../chunks/DashboardPage_Di1UiaA-.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C3JOBLhD.mjs';
import { g as getAllBestPractices } from '../chunks/best-practice_BojAiq1X.mjs';
import { g as getAllQuestionGroups } from '../chunks/question-group_Ch4lCKsB.mjs';
import { a as getRoadmapsByTag } from '../chunks/roadmap_VC9fOZso.mjs';
import { c as getAllGuides } from '../chunks/guide_CTGroPUz.mjs';
import { a as getAllVideos } from '../chunks/video_B_9Z2g4L.mjs';
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const roleRoadmaps = await getRoadmapsByTag("role-roadmap");
  const skillRoadmaps = await getRoadmapsByTag("skill-roadmap");
  const bestPractices = await getAllBestPractices();
  const questionGroups = await getAllQuestionGroups();
  const guides = await getAllGuides();
  const videos = await getAllVideos();
  const enrichedRoleRoadmaps = roleRoadmaps.filter((roadmapItem) => !roadmapItem.frontmatter.isHidden).map((roadmap) => {
    const { frontmatter } = roadmap;
    return {
      id: roadmap.id,
      url: `/${roadmap.id}`,
      title: frontmatter.briefTitle,
      description: frontmatter.briefDescription,
      relatedRoadmapIds: frontmatter.relatedRoadmaps,
      renderer: frontmatter.renderer,
      isNew: frontmatter.isNew,
      metadata: {
        tags: frontmatter.tags
      }
    };
  });
  const enrichedSkillRoadmaps = skillRoadmaps.filter((roadmapItem) => !roadmapItem.frontmatter.isHidden).map((roadmap) => {
    const { frontmatter } = roadmap;
    return {
      id: roadmap.id,
      url: `/${roadmap.id}`,
      title: frontmatter.briefTitle === "Go" ? "Go Roadmap" : frontmatter.briefTitle,
      description: frontmatter.briefDescription,
      relatedRoadmapIds: frontmatter.relatedRoadmaps,
      renderer: frontmatter.renderer,
      isNew: frontmatter.isNew,
      metadata: {
        tags: frontmatter.tags
      }
    };
  });
  const enrichedBestPractices = bestPractices.map((bestPractice) => {
    const { frontmatter } = bestPractice;
    return {
      id: bestPractice.id,
      url: `/best-practices/${bestPractice.id}`,
      title: frontmatter.briefTitle,
      description: frontmatter.briefDescription
    };
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Dashboard", "noIndex": true, "permalink": "/dashboard" }, { "changelog-banner": async ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardPage", DashboardPage, { "builtInRoleRoadmaps": enrichedRoleRoadmaps, "builtInSkillRoadmaps": enrichedSkillRoadmaps, "builtInBestPractices": enrichedBestPractices, "questionGroups": questionGroups, "guides": guides.slice(0, 7), "videos": videos.slice(0, 7), "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Dashboard/DashboardPage", "client:component-export": "DashboardPage" })}   `, "open-source-banner": async ($$result2) => renderTemplate`<div></div>` })}`;
}, "/workspace/src/pages/dashboard.astro", void 0);

const $$file = "/workspace/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
