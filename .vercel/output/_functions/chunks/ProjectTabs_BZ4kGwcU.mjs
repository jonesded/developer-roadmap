import { jsxs, jsx } from 'react/jsx-runtime';
import { c as cn } from './BaseLayout_C3JOBLhD.mjs';
import { ArrowLeft, Text, Blocks } from 'lucide-react';

function TabButton(props) {
  const { text, icon: ButtonIcon, smText, isActive, href } = props;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      className: cn("relative flex items-center gap-1 p-2", {
        "text-black": isActive,
        "opacity-40 hover:opacity-90": !isActive
      }),
      children: [
        ButtonIcon && /* @__PURE__ */ jsx(ButtonIcon, { className: "mr-1 inline-block h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: text }),
        smText && /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: smText }),
        isActive && /* @__PURE__ */ jsx("span", { className: "absolute right-0 bottom-0 left-0 h-0.5 translate-y-1/2 rounded-t-md bg-black" })
      ]
    }
  );
}
function ProjectTabs(props) {
  const {
    activeTab,
    parentRoadmapId,
    projectId,
    hasNoSubmission = false
  } = props;
  return /* @__PURE__ */ jsxs("div", { className: "my-3 flex flex-row flex-wrap items-center gap-1.5 overflow-hidden rounded-md border bg-white px-2.5 text-sm", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/${parentRoadmapId}/projects`,
        className: "-ml-1.5 flex items-center rounded-md bg-gray-300 px-2 py-1.5 text-xs tracking-wide text-black hover:bg-gray-400/60",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-1 inline-block h-3.5 w-3.5", strokeWidth: 2 }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Back to Projects" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      TabButton,
      {
        text: "Project Detail",
        icon: Text,
        smText: "Details",
        isActive: activeTab === "details",
        href: `/projects/${projectId}`
      }
    ),
    !hasNoSubmission && /* @__PURE__ */ jsx(
      TabButton,
      {
        text: "Community Solutions",
        icon: Blocks,
        smText: "Solutions",
        isActive: activeTab === "solutions",
        href: `/projects/${projectId}/solutions`
      }
    )
  ] });
}

export { ProjectTabs as P };
