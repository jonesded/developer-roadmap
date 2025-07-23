import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$ChangelogBanner } from '../chunks/ChangelogBanner_BkAi8mru.mjs';
import { C as CreateRoadmapButton, F as FeaturedGuideList, a as FeaturedVideoList } from '../chunks/CreateRoadmapButton_BXYVD-Ti.mjs';
import 'react/jsx-runtime';
import 'react';
import 'clsx';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DfQviQZ5.mjs';
import { g as getAllBestPractices } from '../chunks/best-practice_BojAiq1X.mjs';
import { c as getAllGuides } from '../chunks/guide_CTGroPUz.mjs';
import { g as getAllQuestionGroups } from '../chunks/question-group_Ch4lCKsB.mjs';
import { a as getRoadmapsByTag } from '../chunks/roadmap_VC9fOZso.mjs';
import { a as getAllVideos } from '../chunks/video_B_9Z2g4L.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://hnmdevs.com/");
const $$FeaturedItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedItem;
  const {
    isUpcoming = false,
    isNew = false,
    text,
    url,
    allowBookmark = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "group border border-slate-800 bg-slate-900 p-2.5 sm:p-3.5 block no-underline rounded-lg relative text-slate-400 font-regular text-md hover:border-slate-600 hover:text-slate-100 overflow-hidden",
    {
      "opacity-50": isUpcoming
    }
  ], "class:list")}${addAttribute(url, "href")}> <span class="relative z-20 text-slate-400"> ${text} </span> ${allowBookmark && renderTemplate`${renderComponent($$result, "MarkFavorite", null, { "resourceId": url.split("/").pop(), "resourceType": url.includes("best-practices") ? "best-practice" : "roadmap", "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/FeaturedItems/MarkFavorite", "client:component-export": "MarkFavorite" })}`} ${isNew && renderTemplate`<span class="absolute bottom-1.5 right-2 flex items-center rounded-br rounded-tl text-xs font-medium text-purple-300"> <span class="mr-1.5 flex h-2 w-2"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span> </span>
New
</span>`} ${isUpcoming && renderTemplate`<span class="absolute bottom-1.5 right-2 flex items-center rounded-br rounded-tl text-xs font-medium text-slate-500"> <span class="mr-1.5 flex h-2 w-2"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-slate-500 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-slate-600"></span> </span>
Upcoming
</span>`} <span data-progress class="absolute bottom-0 left-0 top-0 z-10 w-0 bg-[#172a3a] transition-[width] duration-300"></span> </a>`;
}, "/workspace/src/components/FeaturedItems/FeaturedItem.astro", void 0);

const $$Astro = createAstro("https://hnmdevs.com/");
const $$FeaturedItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturedItems;
  const {
    featuredItems,
    heading,
    showCreateRoadmap,
    allowBookmark = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative border-b border-b-[#1e293c] py-10 sm:py-14"> <div class="container"> <h2 class="text-md font-regular absolute -top-[17px] flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2"> ${heading} </h2> <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3"> ${featuredItems.map((featuredItem) => renderTemplate`<li> ${renderComponent($$result, "FeaturedItem", $$FeaturedItem, { "allowBookmark": allowBookmark, "text": featuredItem.text, "url": featuredItem.url, "isNew": featuredItem.isNew, "isUpcoming": featuredItem.isUpcoming })} </li>`)} ${showCreateRoadmap && renderTemplate`<li> ${renderComponent($$result, "CreateRoadmapButton", CreateRoadmapButton, { "client:load": true, "className": "min-h-[54px]", "client:component-hydration": "load", "client:component-path": "/workspace/src/components/CustomRoadmap/CreateRoadmap/CreateRoadmapButton", "client:component-export": "CreateRoadmapButton" })} </li>`} </ul> </div> </div>`;
}, "/workspace/src/components/FeaturedItems/FeaturedItems.astro", void 0);

function FeatureAnnouncement(props) {
  return null;
}

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-auto relative min-h-[192px] border-b border-b-[#1e293c] transition-all sm:min-h-[281px]"> <div class="container px-5 py-6 pb-14 text-left transition-opacity duration-300 sm:px-0 sm:py-20 sm:text-center" id="hero-text"> <p class="-mt-4 mb-7 sm:-mt-10 sm:mb-4"> ${renderComponent($$result, "FeatureAnnouncement", FeatureAnnouncement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/FeatureAnnouncement", "client:component-export": "FeatureAnnouncement" })} </p> <h1 class="mb-2 bg-linear-to-b from-amber-50 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:mb-4 sm:text-5xl sm:leading-tight">
HNM Devs - Developer Roadmaps
</h1> <p class="hidden px-4 text-lg text-gray-400 sm:block"> <span class="font-medium text-gray-400">HNM Devs</span> is a community effort
      to create roadmaps, guides and other educational content to help guide developers
      in picking up a path and guide their learnings.
</p> <p class="text-md block px-0 text-gray-400 sm:hidden">
Community created roadmaps, guides and articles to help developers grow in
      their career.
</p> </div> </div>`;
}, "/workspace/src/components/HeroSection/HeroSection.astro", void 0);

const projectGroups = [
  {
    title: "Frontend",
    id: "frontend"
  },
  {
    title: "Backend",
    id: "backend"
  },
  {
    title: "DevOps",
    id: "devops"
  }
];
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const roleRoadmaps = await getRoadmapsByTag("role-roadmap");
  const skillRoadmaps = await getRoadmapsByTag("skill-roadmap");
  const bestPractices = await getAllBestPractices();
  const questionGroups = await getAllQuestionGroups();
  const guides = await getAllGuides();
  const questionGuides = (await getAllQuestionGroups()).filter(
    (questionGroup) => questionGroup.frontmatter.authorId
  );
  const videos = await getAllVideos();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Developer Roadmaps - HNM Devs", "description": "Community driven roadmaps, articles and guides for developers to grow in their career.", "permalink": "/" }, { "changelog-banner": async ($$result2) => renderTemplate`${renderComponent($$result2, "ChangelogBanner", $$ChangelogBanner, { "slot": "changelog-banner" })}`, "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-linear-to-b from-slate-900 to-black"> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "FeaturedItems", $$FeaturedItems, { "heading": "Role-based Roadmaps", "featuredItems": roleRoadmaps.filter((roadmapItem) => !roadmapItem.frontmatter.isHidden).map((roadmapItem) => ({
    text: roadmapItem.frontmatter.briefTitle,
    url: `/${roadmapItem.id}`,
    isNew: roadmapItem.frontmatter.isNew,
    isUpcoming: roadmapItem.frontmatter.isUpcoming
  })), "showCreateRoadmap": true })} ${renderComponent($$result2, "FeaturedItems", $$FeaturedItems, { "heading": "Skill-based Roadmaps", "featuredItems": skillRoadmaps.filter((roadmapItem) => !roadmapItem.frontmatter.isHidden).map((roadmapItem) => ({
    text: roadmapItem.frontmatter.briefTitle === "Go" ? "Go Roadmap" : roadmapItem.frontmatter.briefTitle.replace(
      "Software Design",
      "Design"
    ),
    url: `/${roadmapItem.id}`,
    isNew: roadmapItem.frontmatter.isNew,
    isUpcoming: roadmapItem.frontmatter.isUpcoming
  })), "showCreateRoadmap": true })} ${renderComponent($$result2, "FeaturedItems", $$FeaturedItems, { "heading": "Project Ideas", "allowBookmark": false, "featuredItems": projectGroups.map((projectGroup) => ({
    text: projectGroup.title,
    url: `${projectGroup.id}/projects`
  })) })} ${renderComponent($$result2, "FeaturedItems", $$FeaturedItems, { "heading": "Best Practices", "featuredItems": bestPractices.map((bestPractice) => ({
    text: bestPractice.frontmatter.briefTitle,
    url: `/best-practices/${bestPractice.id}`,
    isNew: bestPractice.frontmatter.isNew,
    isUpcoming: bestPractice.frontmatter.isUpcoming
  })) })} ${renderComponent($$result2, "FeaturedItems", $$FeaturedItems, { "heading": "Questions", "allowBookmark": false, "featuredItems": questionGroups.map((questionGroup) => ({
    text: questionGroup.frontmatter.briefTitle,
    url: `/questions/${questionGroup.id}`,
    isNew: questionGroup.frontmatter.isNew
  })) })} <div class="grid grid-cols-1 gap-7 bg-gray-50 py-7 sm:gap-16 sm:py-16"> ${renderComponent($$result2, "FeaturedGuideList", FeaturedGuideList, { "heading": "Guides", "guides": guides.slice(0, 7), "questions": questionGuides.slice(0, 7) })} ${renderComponent($$result2, "FeaturedVideoList", FeaturedVideoList, { "heading": "Videos", "videos": videos.slice(0, 7) })} </div> </div>  ` })}`;
}, "/workspace/src/pages/index.astro", void 0);

const $$file = "/workspace/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  projectGroups,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
