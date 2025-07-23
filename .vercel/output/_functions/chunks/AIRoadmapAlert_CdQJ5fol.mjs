import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { BadgeCheck, HeartHandshake, Telescope, Bot } from 'lucide-react';
import { c as cn } from './BaseLayout_BrSKT5L_.mjs';

function RoadmapAlert(props) {
  const {
    title,
    badgeText,
    description,
    floatingIcon: FloatingIcon,
    className
  } = props;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative mb-3 w-full rounded-xl bg-yellow-100 px-4 py-3 text-yellow-800",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("h2", { className: "flex items-center text-base font-semibold text-yellow-800 sm:text-lg", children: [
          title,
          " ",
          badgeText && /* @__PURE__ */ jsx("span", { className: "ml-1.5 rounded-md border border-yellow-500 bg-yellow-200 px-1.5 text-xs uppercase tracking-wide text-yellow-800", children: badgeText })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mb-2 mt-1 text-balance", children: description }),
        /* @__PURE__ */ jsxs("p", { className: "mb-1.5 mt-2 flex flex-col gap-2 text-sm md:flex-row", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/roadmaps",
              className: "flex items-center gap-1.5 rounded-md border border-yellow-600 bg-yellow-200 px-2 py-1 text-yellow-800 transition-colors hover:bg-yellow-300",
              children: [
                /* @__PURE__ */ jsx(BadgeCheck, { size: 15 }),
                "Visit Official Roadmaps"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/community",
              className: "flex items-center gap-1.5 rounded-md border border-yellow-600 px-2 py-1 text-yellow-700 transition-colors hover:bg-yellow-300 hover:text-yellow-800",
              children: [
                /* @__PURE__ */ jsx(HeartHandshake, { size: 15 }),
                "Community Roadmaps"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/ai-roadmaps/explore",
              className: "flex items-center gap-1.5 rounded-md border border-yellow-600 px-2 py-1 text-yellow-700 transition-colors hover:bg-yellow-300 hover:text-yellow-800",
              children: [
                /* @__PURE__ */ jsx(Telescope, { size: 15 }),
                "AI Generated Roadmaps"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(FloatingIcon, { className: "pointer-events-none absolute right-2 top-2 hidden h-12 w-12 text-yellow-500 opacity-50 sm:block md:bottom-2 md:top-auto" })
      ]
    }
  );
}

function AIRoadmapAlert(props) {
  const { isListing = false } = props;
  return /* @__PURE__ */ jsx(
    RoadmapAlert,
    {
      title: `AI Generated Roadmap${isListing ? "s" : ""}`,
      badgeText: "Beta",
      description: /* @__PURE__ */ jsxs(Fragment, { children: [
        isListing ? "These are AI generated roadmaps and are not verified by" : "This is an AI generated roadmap and is not verified by",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "roadmap.sh" }),
        ". We are currently in beta and working hard to improve the quality of the generated roadmaps."
      ] }),
      floatingIcon: Bot
    }
  );
}

export { AIRoadmapAlert as A };
