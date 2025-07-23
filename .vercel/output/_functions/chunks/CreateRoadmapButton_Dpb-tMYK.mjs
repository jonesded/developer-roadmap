import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { G as GuideListItem } from './GuideListItem_CQjuUUaV.mjs';
import { V as VideoListItem } from './VideoListItem_C5x0kUX1.mjs';
import { Plus } from 'lucide-react';
import { c as cn, i as isLoggedIn } from './BaseLayout_BrSKT5L_.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { C as CreateRoadmapModal } from './CreateRoadmapModal_Cd1DCEI6.mjs';
import { useState } from 'react';
import { u as useIsPaidUser } from './billing_raRJBpT1.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_B2RF3Ir7.mjs';
import 'js-cookie';
import 'clsx';
import './toast_BJ-iAXal.mjs';
import './team_B533nqZG.mjs';
import { c as createSvgComponent } from './runtime_DNZNsqd4.mjs';
import './query-client_rwy39LWF.mjs';

function FeaturedGuideList(props) {
  const { heading, guides, questions = [] } = props;
  const sortedGuides = [
    ...guides,
    ...questions
  ].sort((a, b) => {
    const aDate = new Date(a.frontmatter.date);
    const bDate = new Date(b.frontmatter.date);
    return bDate.getTime() - aDate.getTime();
  });
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "block text-2xl font-bold sm:text-3xl", children: heading }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 sm:my-5", children: sortedGuides.map((guide) => /* @__PURE__ */ jsx(GuideListItem, { guide }, guide.id)) }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/guides",
        className: "hidden rounded-full bg-linear-to-r from-slate-600 to-black px-3 py-2 text-xs font-medium text-white transition-colors hover:from-blue-600 hover:to-blue-800 sm:inline",
        children: "View All Guides →"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-3 block sm:hidden", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "/guides",
        className: "font-regular block rounded-md border border-black p-2 text-center text-sm text-black hover:bg-black hover:text-gray-50",
        children: "View All Guides  →"
      }
    ) })
  ] });
}

function FeaturedVideoList(props) {
  const { heading, videos } = props;
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "block text-2xl font-bold sm:text-3xl", children: heading }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 sm:my-5", children: videos.map((video) => /* @__PURE__ */ jsx(VideoListItem, { video }, video.id)) }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/videos",
        className: "hidden rounded-full bg-linear-to-r from-slate-600 to-black px-3 py-2 text-xs font-medium text-white transition-colors hover:from-blue-600 hover:to-blue-800 sm:inline",
        children: "View All Videos →"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-3 block sm:hidden", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "/videos",
        className: "font-regular block rounded-md border border-black p-2 text-center text-sm text-black hover:bg-black hover:text-gray-50",
        children: "View All Videos  →"
      }
    ) })
  ] });
}

createSvgComponent({"meta":{"src":"/_astro/roadmap.5FpLxumP.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"1.5","stroke-linecap":"round","strokeLinejoin":"round","class":"lucide lucide-milestone"},"children":"<path d=\"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z\"></path><path d=\"M12 13v8\"></path><path d=\"M12 3v3\"></path>"});

const MAX_ROADMAP_LIMIT = 3;

function CreateRoadmapButton(props) {
  const {
    teamId,
    className,
    text = "Create your own Roadmap",
    existingRoadmapCount = 0
  } = props;
  const [isCreatingRoadmap, setIsCreatingRoadmap] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const { isPaidUser} = useIsPaidUser();
  function toggleCreateRoadmapHandler() {
    if (!isLoggedIn()) {
      return showLoginPopup();
    }
    const hasExceededLimit = !isPaidUser && existingRoadmapCount > 0 && existingRoadmapCount >= MAX_ROADMAP_LIMIT;
    if (hasExceededLimit) {
      setShowUpgradeModal(true);
      return;
    }
    setIsCreatingRoadmap(true);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showUpgradeModal && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradeModal(false) }),
    isCreatingRoadmap && /* @__PURE__ */ jsx(
      CreateRoadmapModal,
      {
        teamId,
        onClose: () => {
          setIsCreatingRoadmap(false);
        }
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(
          "flex h-full w-full items-center justify-center gap-1 overflow-hidden rounded-md border border-dashed border-gray-800 p-3 text-sm text-gray-400 hover:border-gray-600 hover:bg-gray-900 hover:text-gray-300",
          className
        ),
        onClick: toggleCreateRoadmapHandler,
        children: [
          /* @__PURE__ */ jsx(Plus, { size: 16 }),
          text
        ]
      }
    )
  ] });
}

export { CreateRoadmapButton as C, FeaturedGuideList as F, FeaturedVideoList as a };
