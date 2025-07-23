import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { D as DashboardPage } from '../chunks/DashboardPage_BCaspuoU.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BrSKT5L_.mjs';
import { g as getAllBestPractices } from '../chunks/best-practice_BojAiq1X.mjs';
import { a as getRoadmapsByTag } from '../chunks/roadmap_VC9fOZso.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const roleRoadmaps = await getRoadmapsByTag("role-roadmap");
  const skillRoadmaps = await getRoadmapsByTag("skill-roadmap");
  const bestPractices = await getAllBestPractices();
  const enrichedRoleRoadmaps = roleRoadmaps.filter((roadmapItem) => !roadmapItem.frontmatter.isHidden).map((roadmap) => {
    const { frontmatter } = roadmap;
    return {
      id: roadmap.id,
      url: `/${roadmap.id}`,
      title: frontmatter.briefTitle,
      description: frontmatter.briefDescription,
      relatedRoadmapIds: frontmatter.relatedRoadmaps,
      renderer: frontmatter.renderer,
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Team", "noIndex": true, "permalink": "/team" }, { "changelog-banner": async ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardPage", DashboardPage, { "builtInRoleRoadmaps": enrichedRoleRoadmaps, "builtInSkillRoadmaps": enrichedSkillRoadmaps, "builtInBestPractices": enrichedBestPractices, "isTeamPage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Dashboard/DashboardPage", "client:component-export": "DashboardPage" })}   `, "open-source-banner": async ($$result2) => renderTemplate`<div></div>` })}`;
}, "/workspace/src/pages/team/index.astro", void 0);

const $$file = "/workspace/src/pages/team/index.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
