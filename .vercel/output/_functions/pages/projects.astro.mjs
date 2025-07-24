import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { b as getUrlParams, c as cn, d as deleteUrlParam, s as setUrlParams, $ as $$BaseLayout } from '../chunks/BaseLayout_C3JOBLhD.mjs';
import { p as projectDifficulties, a as getRoadmapsProjects } from '../chunks/project_CvYjxAZ4.mjs';
import { c as getRoadmapsByIds } from '../chunks/roadmap_VC9fOZso.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'js-cookie';
import { useMemo, useState, useEffect } from 'react';
import { Filter, X, Box } from 'lucide-react';
import { C as CategoryFilterButton } from '../chunks/CategoryFilterButton_4opjYEUe.mjs';
import { P as ProjectCard, p as projectApi } from '../chunks/project_49krD14r.mjs';
export { renderers } from '../renderers.mjs';

function ProjectsPageHeader() {
  return /* @__PURE__ */ jsx("div", { className: "bg-white py-3 sm:py-12", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start bg-white sm:items-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold sm:text-5xl", children: "Project Ideas" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm sm:mt-4 sm:text-lg", children: "Browse the ever-growing list of projects ideas and solutions." })
  ] }) }) });
}

function ProjectsPage(props) {
  const { roadmapsProjects, userCounts } = props;
  const allUniqueProjectIds = new Set(
    roadmapsProjects.flatMap(
      (group) => group.projects.map((project) => project.id)
    )
  );
  const allUniqueProjects = useMemo(
    () => Array.from(allUniqueProjectIds).map(
      (id) => roadmapsProjects.flatMap((group) => group.projects).find((project) => project.id === id)
    ).filter(Boolean),
    [allUniqueProjectIds]
  );
  const [activeGroup, setActiveGroup] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(allUniqueProjects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  useEffect(() => {
    const { g } = getUrlParams();
    if (!g) {
      return;
    }
    setActiveGroup(g);
    const group = roadmapsProjects.find((group2) => group2.id === g);
    if (!group) {
      return;
    }
    setVisibleProjects(group.projects);
  }, []);
  const sortedVisibleProjects = useMemo(
    () => visibleProjects.sort((a, b) => {
      const projectADifficulty = a?.frontmatter.difficulty || "beginner";
      const projectBDifficulty = b?.frontmatter.difficulty || "beginner";
      return projectDifficulties.indexOf(projectADifficulty) - projectDifficulties.indexOf(projectBDifficulty);
    }),
    [visibleProjects]
  );
  const activeGroupDetail = roadmapsProjects.find(
    (group) => group.id === activeGroup
  );
  const requiredSortOrder = [
    "Frontend",
    "Backend",
    "DevOps",
    "Full-stack",
    "JavaScript",
    "Go",
    "Python",
    "Node.js",
    "Java"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "border-t bg-gray-100", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          setIsFilterOpen(!isFilterOpen);
        },
        id: "filter-button",
        className: cn(
          "-mt-1 flex w-full items-center justify-center bg-gray-300 py-2 text-sm text-black focus:shadow-none focus:outline-0 sm:hidden",
          {
            "mb-3": !isFilterOpen
          }
        ),
        children: [
          !isFilterOpen && /* @__PURE__ */ jsx(Filter, { size: 13, className: "mr-1" }),
          isFilterOpen && /* @__PURE__ */ jsx(X, { size: 13, className: "mr-1" }),
          "Categories"
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container relative flex flex-col gap-4 sm:flex-row", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "hidden w-full flex-col from-gray-100 sm:w-[160px] sm:shrink-0 sm:border-r sm:bg-linear-to-l sm:pt-6",
            {
              "hidden sm:flex": !isFilterOpen,
              "z-50 flex": isFilterOpen
            }
          ),
          children: /* @__PURE__ */ jsx("div", { className: "absolute top-0 -mx-4 w-full bg-white pb-0 shadow-xl sm:sticky sm:top-10 sm:mx-0 sm:bg-transparent sm:pb-20 sm:shadow-none", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1", children: [
            /* @__PURE__ */ jsx(
              CategoryFilterButton,
              {
                onClick: () => {
                  setActiveGroup("");
                  setVisibleProjects(allUniqueProjects);
                  setIsFilterOpen(false);
                  deleteUrlParam("g");
                },
                category: "All Projects",
                selected: activeGroup === ""
              }
            ),
            roadmapsProjects.sort((a, b) => {
              const aIndex = requiredSortOrder.indexOf(a.title);
              const bIndex = requiredSortOrder.indexOf(b.title);
              if (aIndex === -1 && bIndex === -1) {
                return a.title.localeCompare(b.title);
              }
              if (aIndex === -1) {
                return 1;
              }
              if (bIndex === -1) {
                return -1;
              }
              return aIndex - bIndex;
            }).map((group) => /* @__PURE__ */ jsx(
              CategoryFilterButton,
              {
                onClick: () => {
                  setActiveGroup(group.id);
                  setIsFilterOpen(false);
                  document?.getElementById("filter-button")?.scrollIntoView();
                  setVisibleProjects(group.projects);
                  setUrlParams({ g: group.id });
                },
                category: group.title,
                selected: activeGroup === group.id
              },
              group.id
            ))
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col pb-20 pt-2 sm:pt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between text-sm text-gray-500", children: [
          /* @__PURE__ */ jsxs("h3", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Box, { size: 15, className: "mr-1", strokeWidth: 2 }),
            activeGroupDetail ? `Projects in ${activeGroupDetail?.title}` : "All Projects"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-left", children: [
            "Matches found (",
            sortedVisibleProjects.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-1.5 sm:grid-cols-2", children: sortedVisibleProjects.map((project) => /* @__PURE__ */ jsx(
          ProjectCard,
          {
            project,
            userCount: userCounts[project.id] || 0,
            status: "none"
          },
          project.id
        )) })
      ] })
    ] })
  ] });
}

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const roadmapProjects = await getRoadmapsProjects();
  const allRoadmapIds = Object.keys(roadmapProjects);
  const allRoadmaps = await getRoadmapsByIds(allRoadmapIds);
  const enrichedRoadmaps = allRoadmaps.map((roadmap) => {
    const projects = (roadmapProjects[roadmap.id] || []).sort((a, b) => {
      return a.frontmatter.sort - b.frontmatter.sort;
    });
    return {
      id: roadmap.id,
      title: roadmap.frontmatter.briefTitle,
      projects
    };
  });
  const projectIds = allRoadmapIds.map((id) => roadmapProjects[id]).flat().map((project) => project.id);
  const projectApiClient = projectApi(Astro2);
  const { response: userCounts } = await projectApiClient.listProjectsUserCount(projectIds);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Project Ideas", "description": "Explore project ideas to take you from beginner to advanced in different technologies", "permalink": "/projects" }, { "changelog-banner": async ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectsPageHeader", ProjectsPageHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Projects/ProjectsPageHeader", "client:component-export": "ProjectsPageHeader" })} ${renderComponent($$result2, "ProjectsPage", ProjectsPage, { "roadmapsProjects": enrichedRoadmaps, "userCounts": userCounts || {}, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Projects/ProjectsPage", "client:component-export": "ProjectsPage" })}  ` })}`;
}, "/workspace/src/pages/projects/index.astro", void 0);

const $$file = "/workspace/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
