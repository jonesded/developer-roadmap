import { c as createAstro, a as createComponent, r as renderComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_Cqa-EqH9.mjs';
import { Download, Calendar, ArrowLeftIcon, MapIcon, FolderKanbanIcon, BookOpenIcon, Bot, MessageCircle } from 'lucide-react';
import { i as isLoggedIn, c as cn, m as $$LoginPopup } from './BaseLayout_DfQviQZ5.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { $ as $$ProgressHelpPopup } from './ProgressHelpPopup_B5Zc-Oc-.mjs';
import 'clsx';
import { S as ScheduleEventModal } from './ScheduleEventModal_DedXn9xe.mjs';
import { S as ShareRoadmapButton } from './ShareRoadmapButton_CCL46gkQ.mjs';

function DownloadRoadmapButton(props) {
  const { roadmapId } = props;
  const [url, setUrl] = useState("#");
  useEffect(() => {
    if (isLoggedIn()) {
      setUrl(`/pdfs/roadmaps/${roadmapId}.pdf`);
    }
  }, []);
  return /* @__PURE__ */ jsxs(
    "a",
    {
      className: "inline-flex items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm",
      "aria-label": "Download Roadmap",
      target: "_blank",
      href: url,
      onClick: (e) => {
        if (isLoggedIn()) {
          return;
        }
        e.preventDefault();
        showLoginPopup();
      },
      children: [
        /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "ml-2 hidden sm:inline", children: "Download" })
      ]
    }
  );
}

function ScheduleButton(props) {
  const { resourceId, resourceType, resourceTitle } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isModalOpen && /* @__PURE__ */ jsx(
      ScheduleEventModal,
      {
        onClose: () => {
          setIsModalOpen(false);
        },
        roadmapId: resourceId
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "inline-flex items-center justify-center gap-2 rounded-md bg-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-300 sm:text-sm",
        onClick: () => {
          setIsModalOpen(true);
        },
        children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Schedule Learning Time" })
        ]
      }
    )
  ] });
}

function TabLink(props) {
  const {
    icon: Icon,
    badgeText,
    isExternal = false,
    url,
    text,
    mobileText,
    isActive,
    hideTextOnMobile = false,
    className: additionalClassName = ""
  } = props;
  const className = cn(
    "inline-flex group transition-colors items-center gap-1.5 border-b-2 px-2 pb-2.5 text-sm",
    {
      "cursor-default border-b-black font-medium text-black": isActive,
      "border-b-transparent font-normal text-gray-400 hover:text-gray-700": !isActive,
      "font-medium hover:text-black text-gray-500 px-0": isExternal
    },
    additionalClassName
  );
  const textClass = cn({
    "hidden sm:inline": hideTextOnMobile
  });
  const badgeNode = badgeText && /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "ml-0.5 hidden items-center gap-0.5 rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-black transition-colors sm:flex",
        {
          "bg-gray-200 text-black group-hover:bg-gray-300": badgeText?.toLowerCase() == "soon",
          "bg-yellow-200 text-black group-hover:bg-yellow-300": badgeText?.toLowerCase() == "new"
        }
      ),
      children: /* @__PURE__ */ jsx("span", { className: "relative -top-px", children: badgeText })
    }
  );
  if (isActive) {
    return /* @__PURE__ */ jsxs("span", { className, children: [
      /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 shrink-0" }),
      /* @__PURE__ */ jsx("span", { className: textClass, children: text }),
      badgeNode
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "a",
    {
      target: isExternal ? "_blank" : void 0,
      onClick: (e) => {
        e.preventDefault();
      },
      href: url,
      className,
      children: [
        /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: cn(textClass, "hidden sm:inline"), children: text }),
        /* @__PURE__ */ jsx("span", { className: cn(textClass, "inline sm:hidden"), children: mobileText || text }),
        badgeNode
      ]
    }
  );
}

const $$Astro = createAstro("https://hnmdevs.com/");
const $$RoadmapHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RoadmapHeader;
  const {
    title,
    description,
    roadmapId,
    partner,
    isUpcoming = false,
    note,
    hasTopics = false,
    hasAIChat = false,
    projectCount = 0,
    question,
    activeTab = "roadmap",
    coursesCount = 0
  } = Astro2.props;
  const hasCourses = coursesCount > 0;
  const hasProjects = projectCount > 0;
  return renderTemplate`${renderComponent($$result, "LoginPopup", $$LoginPopup, {})} ${renderComponent($$result, "ProgressHelpPopup", $$ProgressHelpPopup, {})} ${maybeRenderHead()}<div class="container mt-0 flex flex-col gap-2.5 px-0 sm:mt-3 sm:px-4"> ${partner && renderTemplate`<div class="hidden rounded-md border bg-white px-2 py-1.5 sm:block"> <p class="py-0.5 text-left text-sm"> <span class="badge mr-1">Partner</span> ${partner.description} <a${addAttribute(partner.link, "href")} target="_blank" class="font-medium underline"> ${partner.linkText} </a> </p> </div>`} <div class="relative rounded-none border bg-white px-5 pt-4 pb-0 sm:rounded-lg"> <div class="flex items-start justify-between"> <a class="inline-flex items-center justify-center rounded-md bg-gray-300 px-2 py-1.5 text-xs font-medium hover:bg-gray-400 sm:hidden sm:text-sm" aria-label="Back to roadmaps"${addAttribute("/roadmaps", "href")}> ${renderComponent($$result, "ArrowLeftIcon", ArrowLeftIcon, { "className": "h-4 w-4" })} </a> <a href="/roadmaps" class="hidden rounded-md text-sm font-medium text-gray-500 transition-all hover:text-black focus:outline-0 sm:block" aria-label="Back to All Roadmaps">
&larr;&nbsp;<span>&nbsp;All Roadmaps</span> </a> <div class="relative top-0 right-0 flex items-center gap-1 sm:-top-0.5 sm:-right-2"> ${renderComponent($$result, "MarkFavorite", null, { "resourceId": roadmapId, "resourceType": "roadmap", "className": "relative top-px mr-2 text-gray-500 opacity-100! hover:text-gray-600 focus:outline-0 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:stroke-gray-400 [&>svg]:stroke-[0.4] [&>svg]:hover:stroke-gray-600 sm:[&>svg]:h-4 sm:[&>svg]:w-4", "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/FeaturedItems/MarkFavorite", "client:component-export": "MarkFavorite" })} ${renderComponent($$result, "ScheduleButton", ScheduleButton, { "resourceId": roadmapId, "resourceType": "roadmap", "resourceTitle": title, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Schedule/ScheduleButton", "client:component-export": "ScheduleButton" })} ${renderComponent($$result, "DownloadRoadmapButton", DownloadRoadmapButton, { "roadmapId": roadmapId, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/workspace/src/components/DownloadRoadmapButton", "client:component-export": "DownloadRoadmapButton" })} ${renderComponent($$result, "ShareRoadmapButton", ShareRoadmapButton, { "description": description, "pageUrl": `https://roadmap.sh/${roadmapId}`, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/workspace/src/components/ShareRoadmapButton", "client:component-export": "ShareRoadmapButton" })} </div> </div> <div${addAttribute(["mt-5 mb-5 sm:mt-12 sm:mb-12"], "class:list")}> <h1 class="mb-0.5 text-2xl font-bold sm:mb-3.5 sm:text-5xl"> ${title} </h1> <p class="text-sm text-balance text-gray-500 sm:text-lg"> ${description} </p> </div> ${renderTemplate`<div class="flex justify-between gap-2 sm:gap-0"> <div class="relative top-px flex gap-1 sm:gap-2"> ${renderComponent($$result, "TabLink", TabLink, { "url": `/${roadmapId}`, "icon": MapIcon, "isActive": activeTab === "roadmap", "text": "Roadmap" })} ${hasProjects && renderTemplate`${renderComponent($$result, "TabLink", TabLink, { "url": `/${roadmapId}/projects`, "icon": FolderKanbanIcon, "text": "Projects", "isActive": activeTab === "projects", "badgeText": projectCount > 0 ? "" : "soon" })}`} ${hasCourses && renderTemplate`${renderComponent($$result, "TabLink", TabLink, { "url": `/${roadmapId}/courses`, "icon": BookOpenIcon, "text": "Courses", "isActive": activeTab === "courses", "className": "hidden md:flex" })}`} ${hasAIChat && renderTemplate`${renderComponent($$result, "TabLink", TabLink, { "url": `/${roadmapId}/ai`, "icon": Bot, "text": "AI Tutor", "mobileText": "AI", "isActive": false, "badgeText": "New" })}`} </div> ${renderComponent($$result, "TabLink", TabLink, { "url": `https://github.com/kamranahmedse/developer-roadmap/issues/new/choose`, "icon": MessageCircle, "text": "Suggest Changes", "isExternal": true, "hideTextOnMobile": true, "isActive": false, "className": "hidden sm:flex" })} </div>`} </div> </div>`;
}, "/workspace/src/components/RoadmapHeader.astro", void 0);

export { $$RoadmapHeader as $ };
