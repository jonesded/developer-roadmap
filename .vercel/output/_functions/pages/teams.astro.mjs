import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { i as isLoggedIn, c as cn, $ as $$BaseLayout } from '../chunks/BaseLayout_DfQviQZ5.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { CheckCircle, Shrub, Barcode, UserRoundPlus, PieChart, AlertTriangle, BookOpenIcon, SquareIcon, Copy } from 'lucide-react';
import { useState, useEffect } from 'react';
import { u as useCopyText } from '../chunks/use-copy-text_Bqwbcq8G.mjs';
export { renderers } from '../renderers.mjs';

const featureList = [
  "Create custom roadmaps for your team",
  "Plan, track and document your team's skills and growth",
  "Invite your team members",
  "Get insights on your team's skills and growth"
];
function fireTeamCreationClick() {
  window.fireEvent({
    category: "FeatureClick",
    action: `Pages / Teams`,
    label: "Create your Team"
  });
}
function TeamHeroBanner() {
  const [isAuthenticated, setIsAuthenticated] = useState();
  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "bg-white py-8 lg:py-12", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-start text-left lg:justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-0.5 text-2xl font-bold sm:mb-2.5 sm:text-4xl lg:mb-4 lg:text-5xl", children: "Roadmaps for Teams" }),
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-base leading-normal text-gray-600 sm:mb-0 sm:leading-none lg:text-lg", children: "Train, plan and track your team's skills and career growth." }),
      /* @__PURE__ */ jsx("ul", { className: "mb-4 mt-0 hidden text-sm leading-7 sm:mb-4 sm:mt-4 sm:flex sm:flex-col lg:mb-6 lg:mt-6 lg:text-base lg:leading-8", children: featureList.map((feature, index) => /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "hidden h-6 w-6 text-green-500 sm:inline-block" }),
        /* @__PURE__ */ jsx("span", { className: "ml-0 sm:ml-2", children: feature })
      ] }, feature)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-2 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            onClick: () => {
              fireTeamCreationClick();
            },
            href: isAuthenticated ? "/team/new" : "/signup",
            className: "flex w-full items-center justify-center rounded-lg border border-transparent bg-purple-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 sm:w-auto sm:text-base",
            children: "Create your Team"
          }
        ),
        !isAuthenticated && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { className: "ml-1 hidden text-base sm:inline", children: [
            "or  ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/login",
                onClick: () => {
                  fireTeamCreationClick();
                  localStorage.setItem("authRedirect", "/team/new");
                },
                className: "text-purple-600 underline  hover:text-purple-700",
                children: "Login to your account"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/login",
              onClick: () => {
                fireTeamCreationClick();
                localStorage.setItem("authRedirect", "/team/new");
              },
              className: "flex w-full items-center justify-center rounded-lg border border-purple-600 px-5 py-2 text-base text-sm font-medium text-purple-600 hover:bg-blue-700 sm:hidden sm:text-base",
              children: "Login to your account"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        alt: "team roadmaps",
        className: "hidden h-64 md:block lg:h-80",
        src: "/images/team-promo/hero-img.png"
      }
    )
  ] }) }) });
}

const toolsList = [
  {
    icon: Shrub,
    title: "Growth plans",
    description: "Prepare shared or individual growth plans for members."
  },
  {
    icon: Barcode,
    title: "Progress tracking",
    description: "Track and compare the progress of team members."
  },
  {
    icon: UserRoundPlus,
    title: "Onboarding",
    description: "Prepare onboarding plans for new team members."
  },
  {
    icon: PieChart,
    title: "Team insights",
    description: "Get insights about your team skills, progress and more."
  },
  {
    icon: AlertTriangle,
    title: "Skill gap analysis",
    description: "Understand the skills of your team and identify gaps."
  },
  {
    icon: BookOpenIcon,
    title: "Documentation",
    description: "Create and share visual team documentation."
  }
];
function TeamTools() {
  return /* @__PURE__ */ jsx("div", { className: "py-4 sm:py-8 md:py-12 border-t", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-1 sm:mb-1.5 md:mb-2 text-xl sm:text-2xl md:text-3xl font-bold", children: "Track and guide your team’s knowledge" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base", children: "Individual and team level growth plans, progress tracking, skill gap analysis, team insights and more." }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 sm:mt-5 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4", children: toolsList.map((tool) => {
      return /* @__PURE__ */ jsxs("div", { className: "rounded-md sm:rounded-xl border p-2 sm:p-5 text-left sm:text-center md:text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white", children: tool.icon ? /* @__PURE__ */ jsx(tool.icon, { size: 23 }) : /* @__PURE__ */ jsx(SquareIcon, { size: 24 }) }),
        /* @__PURE__ */ jsx("h3", { className: "mb-0.5 sm:mb-2 text-lg sm:text-2xl font-bold", children: tool.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base", children: tool.description })
      ] });
    }) })
  ] }) });
}

const demoItems = [
  {
    title: "Roadmap Editor",
    description: '<span class="font-semibold">Powerful editor</span> to create custom roadmaps and other trackable documents',
    image: "/images/team-promo/roadmap-editor.png"
  },
  {
    title: "Invite Members",
    description: 'Invite your <span class="font-semibold">team members and assign roles</span>',
    image: "/images/team-promo/invite-members.png"
  },
  {
    title: "Track Progress",
    description: 'You and your team can <span class="font-semibold">track progress</span> on the roadmaps',
    image: "/images/team-promo/update-progress.png"
  },
  {
    title: "Team Dashboard",
    description: 'Keep an eye on the team progress through <span class="font-semibold">team dashboards</span>',
    image: "/images/team-promo/team-dashboard.png"
  },
  {
    title: "Roadmaps and Documents",
    description: 'Create as many <span class="font-semibold">roadmaps or trackable documents</span> as you want',
    image: "/images/team-promo/many-roadmaps.png"
  },
  {
    title: "Community Roadmaps",
    description: 'Create custom roadmaps or customize <span class="font-semibold">community roadmaps</span> to fit your needs',
    image: "/images/team-promo/our-roadmaps.png"
  },
  {
    title: "Sharing Settings",
    description: 'Share a roadmap or trackable document with <span class="font-semibold">everyone or specific people</span>',
    image: "/images/team-promo/sharing-settings.png"
  },
  {
    title: "More Coming Soon!",
    description: '<span class="font-semibold">We have a lot more coming soon!</span>'
  }
];
function TeamDemo() {
  const [hasViewed, setHasViewed] = useState([0]);
  const [activeItem, setActiveItem] = useState(demoItems[0]);
  const [isAuthenticated, setIsAuthenticated] = useState();
  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "hidden border-t py-12 sm:block", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-2 text-3xl font-bold", children: "See how it works" }),
    /* @__PURE__ */ jsx("p", { children: "Here is a sneak peek of what you can do today (more coming soon!)" }),
    /* @__PURE__ */ jsx("div", { className: "relative mt-7 flex flex-row items-center gap-2.5", children: demoItems.map((item, counter) => {
      const isActive = item === activeItem;
      const hasAlreadyViewed = hasViewed.includes(counter);
      if (!isActive) {
        return /* @__PURE__ */ jsxs("span", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              onClick: () => {
                setHasViewed([...hasViewed, counter]);
                setActiveItem(item);
              },
              className: cn("z-50 cursor-pointer rounded-full p-[6px]", {
                "bg-black": item === activeItem,
                "bg-gray-300 hover:bg-gray-400": item !== activeItem
              })
            }
          ),
          !hasAlreadyViewed && /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75" })
        ] }, item.title);
      }
      return /* @__PURE__ */ jsx(
        "span",
        {
          className: " rounded-full bg-black px-3 py-0.5 text-sm text-white",
          children: activeItem.title
        },
        item.title
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 overflow-hidden rounded-xl border border-gray-300", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3", children: /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-base text-black",
          dangerouslySetInnerHTML: { __html: activeItem.description }
        }
      ) }),
      activeItem.image && /* @__PURE__ */ jsx(
        "img",
        {
          className: "rounded-b-xl border-t",
          src: activeItem.image,
          alt: ""
        }
      ),
      !activeItem.image && /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 py-4 pl-3", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Register your team now and help us shape the future of teams in roadmap.sh!" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              onClick: () => {
                fireTeamCreationClick();
                if (isAuthenticated) {
                  return;
                }
                localStorage.setItem("authRedirect", "/team/new");
              },
              href: isAuthenticated ? "/team/new" : "/signup",
              className: "inline-flex items-center justify-center rounded-lg border border-transparent bg-purple-600 px-5 py-2 text-base font-medium text-white hover:bg-purple-700",
              children: "Create your Team"
            }
          ),
          !isAuthenticated && /* @__PURE__ */ jsxs("span", { className: "ml-1 text-base", children: [
            "or  ",
            /* @__PURE__ */ jsx(
              "a",
              {
                onClick: () => {
                  fireTeamCreationClick();
                  localStorage.setItem("authRedirect", "/team/new");
                },
                href: "/login",
                className: "text-purple-600 underline  hover:text-purple-700",
                children: "Login to your account"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] }) });
}

function TeamPricing() {
  const { isCopied, copyText } = useCopyText();
  const teamEmail = "teams@roadmap.sh";
  const [isAuthenticated, setIsAuthenticated] = useState();
  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "border-t py-4 sm:py-8 md:py-12", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-1 text-xl font-bold sm:mb-1.5 sm:text-2xl md:mb-2 md:text-3xl", children: "Beta Pricing" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4 text-base text-gray-600 sm:mb-8 sm:text-lg", children: "We are currently in public beta and are offering free access to all features." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 sm:flex-row sm:gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-purple-500", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-8 pb-2 pt-5 text-center sm:pt-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-1 text-2xl font-bold", children: "Free" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "No credit card required" }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-start justify-center gap-1 py-6 text-3xl", children: [
            /* @__PURE__ */ jsx("span", { className: "text-base text-gray-600", children: "$" }),
            /* @__PURE__ */ jsx("span", { className: "text-5xl font-bold", children: "0" })
          ] }),
          /* @__PURE__ */ jsx(
            "a",
            {
              onClick: () => {
                fireTeamCreationClick();
                if (isAuthenticated) {
                  return;
                }
                localStorage.setItem("redirect", "/team/new");
              },
              href: isAuthenticated ? "/team/new" : "/signup",
              className: "block rounded-md bg-purple-600 px-6 py-2 text-center text-sm font-medium leading-6 text-white shadow-sm transition hover:bg-gray-700 hover:shadow-lg focus:outline-hidden",
              children: isAuthenticated ? "Create your Team" : "Sign up for free"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1 border-t px-8 py-5 text-center sm:py-3", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-black", children: "All the features" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Roles and Permissions" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Custom Roadmaps" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Sharing Options" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Progress Tracking" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Team Insights" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Onboarding support" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col items-center justify-center rounded-md border border-gray-300 py-8", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            alt: "waving hand",
            src: "/images/team-promo/contact.png",
            className: "mb-3 h-40"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mb-2 font-medium text-gray-500", children: "Questions? We are here to help!" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              copyText(teamEmail);
            },
            className: cn(
              "relative flex items-center justify-between gap-3 overflow-hidden rounded-md border border-black bg-white px-4 py-2 text-black hover:bg-gray-100"
            ),
            children: [
              teamEmail,
              /* @__PURE__ */ jsx(
                Copy,
                {
                  className: "relative top-[1px] ml-2 inline-block text-black transition-opacity",
                  size: 16
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black text-white transition-all",
                    {
                      "top-full": !isCopied,
                      "top-0": isCopied,
                      "opacity-0": !isCopied
                    }
                  ),
                  children: "Email copied!"
                }
              )
            ]
          }
        ) })
      ] })
    ] })
  ] }) });
}

const $$Teams = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Roadmaps for teams", "permalink": "/teams" }, { "changelog-banner": ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamHeroBanner", TeamHeroBanner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamMarketing/TeamHeroBanner", "client:component-export": "TeamHeroBanner" })} ${renderComponent($$result2, "TeamTools", TeamTools, {})} ${renderComponent($$result2, "TeamDemo", TeamDemo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamMarketing/TeamDemo", "client:component-export": "TeamDemo" })} ${renderComponent($$result2, "TeamPricing", TeamPricing, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamMarketing/TeamPricing", "client:component-export": "TeamPricing" })}  ` })}`;
}, "/workspace/src/pages/teams.astro", void 0);

const $$file = "/workspace/src/pages/teams.astro";
const $$url = "/teams";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Teams,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
