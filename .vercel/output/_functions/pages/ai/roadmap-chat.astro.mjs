import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_CB584z4R.mjs';
import { A as AITutorLayout } from '../../chunks/AITutorLayout_Cb7hPswk.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect, useMemo } from 'react';
import { c as cn } from '../../chunks/BaseLayout_B-BXcELP.mjs';
import { g as getRoadmapIds, b as getRoadmapById, r as resourceTitleFromId } from '../../chunks/roadmap_VC9fOZso.mjs';
export { renderers } from '../../renderers.mjs';

function RoadmapChatListing(props) {
  const { roadmaps, className } = props;
  const [search, setSearch] = useState("");
  const searchInputRef = useRef(null);
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);
  const filteredRoadmaps = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) {
      return roadmaps;
    }
    return roadmaps.filter((roadmap) => {
      return roadmap.title.toLowerCase().includes(term) || roadmap.id.toLowerCase().includes(term);
    });
  }, [search, roadmaps]);
  const roleRoadmaps = filteredRoadmaps.filter((rm) => rm.category === "role");
  const skillRoadmaps = filteredRoadmaps.filter(
    (rm) => rm.category === "skill"
  );
  return /* @__PURE__ */ jsxs("div", { className: cn("flex w-full flex-col", className), children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: searchInputRef,
        type: "text",
        placeholder: "Search roadmaps...",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        className: "mb-6 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm placeholder-gray-400 focus:border-gray-300 focus:outline-none"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
      roleRoadmaps.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xs tracking-wide text-gray-400 uppercase", children: "Role-based Roadmaps" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-3", children: [
          roleRoadmaps.map((roadmap) => /* @__PURE__ */ jsx(
            "a",
            {
              href: `/${roadmap.id}/ai`,
              className: "relative truncate rounded-md border bg-white p-2.5 text-left text-sm shadow-xs hover:border-gray-400 hover:bg-gray-50",
              children: roadmap.title
            },
            roadmap.id
          )),
          roleRoadmaps.length === 0 && /* @__PURE__ */ jsx("div", { className: "col-span-full py-4 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "No role-based roadmaps found." }) })
        ] })
      ] }),
      skillRoadmaps.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xs tracking-wide text-gray-400 uppercase", children: "Skill-based Roadmaps" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-3", children: [
          skillRoadmaps.map((roadmap) => /* @__PURE__ */ jsx(
            "a",
            {
              href: `/${roadmap.id}/ai`,
              className: "relative truncate rounded-md border bg-white p-2.5 text-left text-sm shadow-xs hover:border-gray-400 hover:bg-gray-50",
              children: roadmap.title
            },
            roadmap.id
          )),
          skillRoadmaps.length === 0 && /* @__PURE__ */ jsx("div", { className: "col-span-full py-4 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "No skill-based roadmaps found." }) })
        ] })
      ] })
    ] })
  ] });
}

const $$RoadmapChat = createComponent(async ($$result, $$props, $$slots) => {
  const ids = await getRoadmapIds();
  const roadmapsRaw = await Promise.all(ids.map((id) => getRoadmapById(id)));
  const roadmaps = roadmapsRaw.map((rm) => {
    const tags = rm.frontmatter.tags || [];
    const category = tags.includes("role-roadmap") ? "role" : tags.includes("skill-roadmap") ? "skill" : "other";
    return {
      id: rm.id,
      title: rm.frontmatter.title || resourceTitleFromId(rm.id),
      description: rm.frontmatter.briefDescription || rm.frontmatter.description || "",
      category
    };
  });
  const ogImage = "https://roadmap.sh/og-images/ai-tutor.png";
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": "Roadmap AI Chat", "noIndex": true, "ogImageUrl": ogImage, "description": "Chat with AI Tutor on any roadmap. Pick a roadmap to start chatting." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AITutorLayout", AITutorLayout, { "activeTab": "roadmap-chat", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AITutor/AITutorLayout", "client:component-export": "AITutorLayout" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto flex w-full max-w-3xl flex-grow flex-col p-4"> <div class="mb-6 text-left"> <h1 class="mb-2 text-4xl font-semibold max-md:text-xl">
Chat with a Roadmap
</h1> <p class="text-base text-gray-600 max-md:text-sm">
Select a roadmap and start learning with AI as a guide.
</p> </div> ${renderComponent($$result3, "RoadmapChatListing", RoadmapChatListing, { "client:load": true, "roadmaps": roadmaps, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/RoadmapAIChat/RoadmapChatListing", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "/workspace/src/pages/ai/roadmap-chat.astro", void 0);

const $$file = "/workspace/src/pages/ai/roadmap-chat.astro";
const $$url = "/ai/roadmap-chat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RoadmapChat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
