import { _ as __variableDynamicImportRuntimeHelper } from '../../chunks/dynamic-import-helper_uMTE3ehW.mjs';
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$RoadmapHeader } from '../../chunks/RoadmapHeader_QRCcxtUY.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { FolderKanbanIcon, Bell, Check, Trash2, HeartHandshake } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { i as isLoggedIn, c as cn, b as getUrlParams, s as setUrlParams, d as deleteUrlParam, h as httpPost, $ as $$BaseLayout } from '../../chunks/BaseLayout_B-BXcELP.mjs';
import { s as showLoginPopup } from '../../chunks/popup_DWUkHIfQ.mjs';
import { P as ProjectCard, p as projectApi } from '../../chunks/project_nhp1QVeo.mjs';
import { p as projectDifficulties, g as getProjectsByRoadmapId } from '../../chunks/project_CvYjxAZ4.mjs';
import { g as getOpenGraphImageUrl } from '../../chunks/open-graph_BMQllw-Q.mjs';
import { g as getRoadmapIds } from '../../chunks/roadmap_VC9fOZso.mjs';
export { renderers } from '../../renderers.mjs';

function EmptyProjects() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsSubscribed(isLoggedIn());
    setIsLoading(false);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative mt-2.5 mb-5 flex min-h-[400px] flex-col items-center justify-center rounded-lg border bg-white", children: [
    /* @__PURE__ */ jsx(FolderKanbanIcon, { className: "h-14 w-14 text-gray-300", strokeWidth: 1.5 }),
    /* @__PURE__ */ jsxs("h2", { className: "mb-0.5 mt-2 text-center text-base font-medium text-gray-900 sm:text-xl", children: [
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Projects are coming soon!" }),
      /* @__PURE__ */ jsx("span", { className: "inline sm:hidden", children: "Coming soon!" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-3 text-balance text-center text-sm text-gray-500 sm:text-base", children: "Sign up to get notified when projects are available." }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          if (isSubscribed) {
            return;
          }
          showLoginPopup();
        },
        className: cn(
          "flex items-center rounded-md bg-gray-800 py-1.5 pl-3 pr-4 text-xs text-white opacity-0 transition-opacity duration-500 hover:bg-black sm:text-sm",
          {
            "cursor-default bg-gray-300 text-black hover:bg-gray-300": isSubscribed,
            "opacity-100": !isLoading
          }
        ),
        children: [
          !isSubscribed && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Bell, { className: "mr-2 h-4 w-4" }),
            "Signup to get Notified"
          ] }),
          isSubscribed && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Check, { className: "mr-2 h-4 w-4" }),
            "We will notify you by email"
          ] })
        ]
      }
    )
  ] });
}

function DifficultyButton(props) {
  const { difficulty, onClick, isActive } = props;
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: cn(
        "rounded-md border bg-white px-3 py-1 text-sm capitalize transition-colors hover:border-gray-300 hover:bg-gray-100",
        {
          "border-black bg-gray-100 hover:border-black hover:bg-gray-100 hover:text-black": isActive
        }
      ),
      children: difficulty
    }
  );
}
function ProjectsList(props) {
  const { projects, userCounts } = props;
  const { difficulty: urlDifficulty } = getUrlParams();
  const [difficulty, setDifficulty] = useState(urlDifficulty);
  const [projectStatuses, setProjectStatuses] = useState();
  const loadProjectStatuses = async () => {
    if (!isLoggedIn()) {
      setProjectStatuses({});
      return;
    }
    const projectIds = projects.map((project) => project.id);
    const { response, error } = await httpPost(
      `${"https://api.imoogleai.xyz"}/v1-list-project-statuses`,
      {
        projectIds
      }
    );
    if (error || !response) {
      console.error(error);
      return;
    }
    setProjectStatuses(response);
  };
  const projectsByDifficulty = useMemo(() => {
    const result = /* @__PURE__ */ new Map();
    for (const project of projects) {
      const difficulty2 = project.frontmatter.difficulty;
      if (!result.has(difficulty2)) {
        result.set(difficulty2, []);
      }
      result.get(difficulty2)?.push(project);
    }
    return result;
  }, [projects]);
  const matchingProjects = difficulty ? projectsByDifficulty.get(difficulty) || [] : projects;
  useEffect(() => {
    loadProjectStatuses().finally();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "my-2.5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1", children: [
        projectDifficulties.map((projectDifficulty) => /* @__PURE__ */ jsx(
          DifficultyButton,
          {
            onClick: () => {
              setDifficulty(projectDifficulty);
              setUrlParams({ difficulty: projectDifficulty });
            },
            difficulty: projectDifficulty,
            isActive: projectDifficulty === difficulty
          },
          projectDifficulty
        )),
        difficulty && /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setDifficulty(void 0);
              deleteUrlParam("difficulty");
            },
            className: "flex items-center gap-1.5 rounded-md border border-red-500 bg-transparent px-2 py-0.5 text-sm text-red-500 transition-colors hover:bg-red-500 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5", strokeWidth: 2.25 }),
              "Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://github.com/kamranahmedse/developer-roadmap/issues/new?assignees=&labels=project+contribution&projects=&template=05-project-contribution.yml",
          target: "_blank",
          className: "hidden items-center gap-2 rounded-md border border-transparent px-2 py-0.5 text-sm underline underline-offset-2 hover:bg-black hover:text-white hover:no-underline sm:flex",
          children: [
            /* @__PURE__ */ jsx(HeartHandshake, { className: "h-4 w-4" }),
            "Submit a Project Idea"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-24 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3", children: [
      matchingProjects.length === 0 && /* @__PURE__ */ jsx("div", { className: "col-span-3 rounded-md border bg-white p-4 text-left text-sm text-gray-500", children: /* @__PURE__ */ jsx("p", { children: "No matching projects found." }) }),
      matchingProjects.sort((project) => {
        return project.frontmatter.difficulty === "beginner" ? -1 : project.frontmatter.difficulty === "intermediate" ? 0 : 1;
      }).sort((a, b) => {
        return a.frontmatter.sort - b.frontmatter.sort;
      }).map((matchingProject) => {
        const count = userCounts[matchingProject?.id] || 0;
        return /* @__PURE__ */ jsx(
          ProjectCard,
          {
            project: matchingProject,
            userCount: count,
            status: projectStatuses ? projectStatuses?.[matchingProject.id] || "none" : void 0
          },
          matchingProject.id
        );
      })
    ] })
  ] });
}

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const prerender = false;
async function getStaticPaths() {
  const roadmapIds = await getRoadmapIds();
  return roadmapIds.map((roadmapId) => ({
    params: { roadmapId }
  }));
}
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const { roadmapId } = Astro2.params;
  const roadmapFile = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../data/roadmaps/ai-agents/ai-agents.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.a4),"../../data/roadmaps/ai-data-scientist/ai-data-scientist.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.a3),"../../data/roadmaps/ai-engineer/ai-engineer.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.a2),"../../data/roadmaps/ai-red-teaming/ai-red-teaming.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.a1),"../../data/roadmaps/android/android.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.a0),"../../data/roadmaps/angular/angular.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.$),"../../data/roadmaps/api-design/api-design.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.Z),"../../data/roadmaps/aspnet-core/aspnet-core.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.Y),"../../data/roadmaps/aws/aws.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.X),"../../data/roadmaps/backend/backend.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.W),"../../data/roadmaps/blockchain/blockchain.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.V),"../../data/roadmaps/cloudflare/cloudflare.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.U),"../../data/roadmaps/code-review/code-review.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.T),"../../data/roadmaps/computer-science/computer-science.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.S),"../../data/roadmaps/cpp/cpp.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.R),"../../data/roadmaps/cyber-security/cyber-security.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.Q),"../../data/roadmaps/data-analyst/data-analyst.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.P),"../../data/roadmaps/datastructures-and-algorithms/datastructures-and-algorithms.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.O),"../../data/roadmaps/design-system/design-system.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.N),"../../data/roadmaps/devops/devops.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.M),"../../data/roadmaps/devrel/devrel.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.L),"../../data/roadmaps/docker/docker.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.K),"../../data/roadmaps/engineering-manager/engineering-manager.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.J),"../../data/roadmaps/flutter/flutter.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.I),"../../data/roadmaps/frontend/frontend.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.H),"../../data/roadmaps/full-stack/full-stack.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.G),"../../data/roadmaps/game-developer/game-developer.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.F),"../../data/roadmaps/git-github/git-github.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.E),"../../data/roadmaps/golang/golang.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.D),"../../data/roadmaps/graphql/graphql.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.C),"../../data/roadmaps/ios/ios.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.B),"../../data/roadmaps/java/java.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.A),"../../data/roadmaps/javascript/javascript.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.z),"../../data/roadmaps/kubernetes/kubernetes.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.y),"../../data/roadmaps/linux/linux.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.x),"../../data/roadmaps/mlops/mlops.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.w),"../../data/roadmaps/mongodb/mongodb.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.v),"../../data/roadmaps/nodejs/nodejs.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.u),"../../data/roadmaps/php/php.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.t),"../../data/roadmaps/postgresql-dba/postgresql-dba.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.s),"../../data/roadmaps/product-manager/product-manager.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.r),"../../data/roadmaps/prompt-engineering/prompt-engineering.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.q),"../../data/roadmaps/python/python.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.p),"../../data/roadmaps/qa/qa.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.o),"../../data/roadmaps/react-native/react-native.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.n),"../../data/roadmaps/react/react.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.m),"../../data/roadmaps/redis/redis.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.l),"../../data/roadmaps/rust/rust.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.k),"../../data/roadmaps/server-side-game-developer/server-side-game-developer.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.j),"../../data/roadmaps/software-architect/software-architect.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.i),"../../data/roadmaps/software-design-architecture/software-design-architecture.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.h),"../../data/roadmaps/spring-boot/spring-boot.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.g),"../../data/roadmaps/sql/sql.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.f),"../../data/roadmaps/system-design/system-design.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.e),"../../data/roadmaps/technical-writer/technical-writer.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.d),"../../data/roadmaps/terraform/terraform.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.c),"../../data/roadmaps/typescript/typescript.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.b),"../../data/roadmaps/ux-design/ux-design.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n.a),"../../data/roadmaps/vue/vue.md": () => import('../../chunks/vue_BzN9pC3K.mjs').then(n => n._)})), `../../data/roadmaps/${roadmapId}/${roadmapId}.md`, 6);
  const roadmapData = roadmapFile.frontmatter;
  const ogImageUrl = roadmapData?.seo?.ogImageUrl || getOpenGraphImageUrl({
    group: "roadmap",
    resourceId: roadmapId
  });
  const descriptionNoun = {
    "AI and Data Scientist": "AI and Data Science",
    "Game Developer": "Game Development",
    "Technical Writer": "Technical Writing",
    "Product Manager": "Product Management"
  };
  const title = `${roadmapData.briefTitle} Projects`;
  const description = `Project ideas to take you from beginner to advanced in ${descriptionNoun[roadmapData.briefTitle] || roadmapData.briefTitle}`;
  const seoTitle = `${roadmapData.briefTitle} Projects`;
  const nounTitle = descriptionNoun[roadmapData?.briefTitle] || roadmapData.briefTitle;
  const seoDescription = `Seeking ${nounTitle.toLowerCase()} projects to enhance your skills? Explore our top 20 project ideas, from simple apps to complex systems. Start building today!`;
  const projects = await getProjectsByRoadmapId(roadmapId);
  const projectIds = projects.map((project) => project.id);
  let userCounts = {};
  try {
    const projectApiClient = projectApi(Astro2);
    const { response } = await projectApiClient.listProjectsUserCount(projectIds);
    userCounts = response || {};
  } catch (error) {
    console.warn("Project API call failed, using empty user counts:", error);
    userCounts = {};
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "permalink": `/${roadmapId}/projects`, "title": seoTitle, "description": seoDescription, "briefTitle": roadmapData.briefTitle, "ogImageUrl": ogImageUrl, "keywords": roadmapData.seo.keywords, "noIndex": projects.length === 0, "resourceId": roadmapId, "resourceType": "roadmap" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50"> ${renderComponent($$result2, "RoadmapHeader", $$RoadmapHeader, { "title": title, "description": description, "note": roadmapData.note, "partner": roadmapData.partner, "roadmapId": roadmapId, "hasTopics": roadmapData.hasTopics, "isUpcoming": roadmapData.isUpcoming, "isForkable": roadmapData.isForkable, "question": roadmapData.question, "activeTab": "projects", "projectCount": projects.length, "coursesCount": roadmapData.courses?.length || 0 })} <div class="container"> ${projects.length === 0 && renderTemplate`${renderComponent($$result2, "EmptyProjects", EmptyProjects, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Projects/EmptyProjects", "client:component-export": "EmptyProjects" })}`} ${projects.length > 0 && renderTemplate`${renderComponent($$result2, "ProjectsList", ProjectsList, { "projects": projects, "userCounts": userCounts || {}, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Projects/ProjectsList", "client:component-export": "ProjectsList" })}`} </div> </div> ` })}`;
}, "/workspace/src/pages/[roadmapId]/projects.astro", void 0);

const $$file = "/workspace/src/pages/[roadmapId]/projects.astro";
const $$url = "/[roadmapId]/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
