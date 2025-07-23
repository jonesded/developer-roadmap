import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { i as isLoggedIn, c as cn } from './BaseLayout_BrSKT5L_.mjs';
import { useState } from 'react';
import { A as AITutorHeader } from './AITutorTallMessage_hW-mNMq6.mjs';
import { A as AITutorLayout } from './AITutorLayout_CJilm_5H.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_B2RF3Ir7.mjs';
import { BookOpen, FileTextIcon, MapIcon, ListCheckIcon } from 'lucide-react';

function AIUsageWarning(props) {
  const { type, totalCount, isPaidUser, usedCount, limitCount, onUpgrade } = props;
  const isUserAuthenticated = isLoggedIn();
  const typeLabels = {
    course: "courses",
    guide: "guides",
    roadmap: "roadmaps",
    quiz: "quizzes"
  };
  const typeLabel = typeLabels[type];
  return /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm text-gray-500", children: isUserAuthenticated ? isPaidUser ? `You have generated ${totalCount} ${typeLabel} so far.` : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "You have used" }),
    " ",
    /* @__PURE__ */ jsxs("span", { className: "text-gray-500", children: [
      usedCount,
      " of ",
      limitCount,
      " ",
      typeLabel
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onUpgrade,
        className: "ml-2 text-blue-600 underline underline-offset-2 hover:text-blue-700",
        children: "Need more? Upgrade"
      }
    )
  ] }) : `Sign up or login to generate your first ${type}. Takes 2s to do so.` });
}

function LibraryTabs(props) {
  const { activeTab } = props;
  return /* @__PURE__ */ jsxs("div", { className: "mb-6 flex gap-2 border-b border-gray-300", children: [
    /* @__PURE__ */ jsx(
      LibraryTabButton,
      {
        isActive: activeTab === "courses",
        icon: BookOpen,
        label: "Courses",
        href: "/ai/courses"
      }
    ),
    /* @__PURE__ */ jsx(
      LibraryTabButton,
      {
        isActive: activeTab === "guides",
        icon: FileTextIcon,
        label: "Guides",
        href: "/ai/guides"
      }
    ),
    /* @__PURE__ */ jsx(
      LibraryTabButton,
      {
        isActive: activeTab === "roadmaps",
        icon: MapIcon,
        label: "Roadmaps",
        href: "/ai/roadmaps"
      }
    ),
    /* @__PURE__ */ jsx(
      LibraryTabButton,
      {
        isActive: activeTab === "quizzes",
        icon: ListCheckIcon,
        label: "Quizzes",
        href: "/ai/quizzes"
      }
    )
  ] });
}
function LibraryTabButton(props) {
  const { isActive, icon: Icon, label, href } = props;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      className: cn(
        "flex items-center gap-1 rounded-t-md px-4 py-2 text-sm font-medium",
        isActive ? "bg-gray-300" : "bg-gray-100 transition-colors hover:bg-gray-200"
      ),
      children: [
        /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }),
        label
      ]
    }
  );
}

function AILibraryLayout(props) {
  const { activeTab, children } = props;
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  return /* @__PURE__ */ jsxs(AITutorLayout, { activeTab: "library", children: [
    showUpgradePopup && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradePopup(false) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-6xl flex-grow flex-col p-2", children: [
      /* @__PURE__ */ jsx(
        AITutorHeader,
        {
          title: "Library",
          subtitle: "Explore your AI-generated guides, courses and roadmaps",
          onUpgradeClick: () => setShowUpgradePopup(true)
        }
      ),
      /* @__PURE__ */ jsx(LibraryTabs, { activeTab }),
      children
    ] })
  ] });
}

export { AIUsageWarning as A, AILibraryLayout as a };
