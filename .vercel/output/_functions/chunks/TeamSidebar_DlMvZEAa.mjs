import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { T as TeamDropdown } from './TeamDropdown_DgaJMsDd.mjs';
import { u as useTeamId } from './use-team-id_YU7lJR0h.mjs';
import { c as createSvgComponent } from './runtime_DNZNsqd4.mjs';
import { useRef, useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { a as $currentTeam } from './team_B533nqZG.mjs';
import './toast_BJ-iAXal.mjs';
import { u as useOutsideClick, l as useKeydown, h as httpPost, G as GroupIcon } from './BaseLayout_DfQviQZ5.mjs';
import { C as CheckIcon } from './CheckIcon_B3c1RSNy.mjs';
import { C as ChevronDownIcon } from './ChevronDownIcon_BYQqw4ne.mjs';
import { BarChart2, MapIcon, MessageCircle } from 'lucide-react';

createSvgComponent({"meta":{"src":"/_astro/chat.D-nhwTma.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","strokeLinejoin":"round","class":"lucide lucide-message-circle"},"children":"<path d=\"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z\" />"});

function SubmitFeedbackPopup(props) {
  const { onClose } = props;
  const popupBodyEl = useRef(null);
  const inputEl = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { teamId } = useTeamId();
  useOutsideClick(popupBodyEl, () => {
    onClose();
  });
  useKeydown("Escape", () => {
    onClose();
  });
  useEffect(() => {
    inputEl.current?.focus();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const { response, error: error2 } = await httpPost(
      `${"https://api.hnmdevs.com"}/v1-submit-team-feedback/${teamId}`,
      {
        feedback: feedbackText
      }
    );
    if (error2 || !response) {
      setIsLoading(false);
      setError(error2?.message || "Something went wrong");
      return;
    }
    setIsSuccess(true);
  };
  const handleClosePopup = () => {
    setIsLoading(false);
    setError("");
    setFeedbackText("");
    onClose();
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50", children: /* @__PURE__ */ jsx("div", { className: "relative h-full w-full max-w-md p-4 md:h-auto", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: popupBodyEl,
      className: "popup-body relative rounded-lg bg-white p-4 shadow-sm",
      children: [
        !isSuccess && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-1 text-xl font-semibold text-black", children: "Enter your feedback" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Help us improve your experience." }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
            /* @__PURE__ */ jsxs("div", { className: "my-4", children: [
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  ref: inputEl,
                  name: "submit-feedback",
                  id: "submit-feedback",
                  className: "mt-2 block min-h-[150px] w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-hidden placeholder:text-gray-400",
                  placeholder: "Enter your feedback",
                  required: true,
                  autoFocus: true,
                  value: feedbackText,
                  onInput: (e) => setFeedbackText(e.target.value)
                }
              ),
              error && /* @__PURE__ */ jsx("p", { className: "mt-2 rounded-md bg-red-100 p-2 text-red-700", children: error })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  disabled: isLoading,
                  onClick: handleClosePopup,
                  className: "grow cursor-pointer rounded-md bg-gray-200 py-2 text-center",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  disabled: isLoading,
                  type: "submit",
                  className: "grow cursor-pointer rounded-md bg-black py-2 text-white disabled:opacity-40",
                  children: isLoading ? "Please wait .." : "Send"
                }
              )
            ] })
          ] })
        ] }),
        isSuccess && /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col items-center", children: [
          /* @__PURE__ */ jsx(CheckIcon, { additionalClasses: "w-14 h-14 text-green-500 mt-4" }),
          /* @__PURE__ */ jsx("h1", { className: "mt-4 text-xl font-semibold text-black sm:text-2xl", children: "Feedback Submitted" }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-gray-500 sm:text-base", children: "Thank you for submitting your feedback." }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: handleClosePopup,
              className: "mt-4 w-full grow cursor-pointer rounded-lg bg-black py-2 text-center text-white disabled:opacity-40",
              children: "Close"
            }
          )
        ] })
      ]
    }
  ) }) });
}

function TeamProgressIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M3 3v18h18" }),
        /* @__PURE__ */ jsx("path", { d: "m19 9-5 5-4-4-3 3" })
      ]
    }
  );
}

function CogIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      className,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          }
        )
      ]
    }
  );
}

function TeamSidebar({ activePageId, children }) {
  const [menuShown, setMenuShown] = useState(false);
  const currentTeam = useStore($currentTeam);
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  const { teamId } = useTeamId();
  const sidebarLinks = [
    {
      title: "Activity",
      href: `/team/activity?t=${teamId}`,
      id: "activity",
      icon: BarChart2
    },
    {
      title: "Progress",
      href: `/team/progress?t=${teamId}`,
      id: "progress",
      icon: TeamProgressIcon
    },
    {
      title: "Roadmaps",
      href: `/team/roadmaps?t=${teamId}`,
      id: "roadmaps",
      icon: MapIcon,
      hasWarning: currentTeam?.roadmaps?.length === 0
    },
    {
      title: "Members",
      href: `/team/members?t=${teamId}`,
      id: "members",
      icon: GroupIcon
    },
    {
      title: "Settings",
      href: `/team/settings?t=${teamId}`,
      id: "settings",
      icon: CogIcon
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative mb-5 block border-b p-4 shadow-inner md:hidden", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex h-10 w-full items-center justify-between rounded-md border bg-white px-2 text-center text-sm font-medium text-gray-900",
          id: "settings-menu",
          "aria-haspopup": "true",
          "aria-expanded": "true",
          onClick: () => setMenuShown(!menuShown),
          children: [
            sidebarLinks.find((sidebarLink) => sidebarLink.id === activePageId)?.title,
            /* @__PURE__ */ jsx(ChevronDownIcon, { className: "h-4 w-4" })
          ]
        }
      ),
      menuShown && /* @__PURE__ */ jsxs(
        "ul",
        {
          id: "settings-menu-dropdown",
          className: "absolute left-0 right-0 z-50 mt-1 space-y-1.5 bg-white p-2 shadow-lg",
          children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/team",
                className: `flex w-full items-center rounded px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-200 ${activePageId === "team" ? "bg-slate-100" : ""}`,
                children: [
                  /* @__PURE__ */ jsx(GroupIcon, { className: "mr-2 h-4 w-4" }),
                  "Personal Account / Teams"
                ]
              }
            ) }),
            sidebarLinks.map((sidebarLink) => {
              const isActive = activePageId === sidebarLink.id;
              return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: sidebarLink.href,
                  className: `flex w-full items-center rounded px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-200 ${isActive ? "bg-slate-100" : ""}`,
                  children: [
                    /* @__PURE__ */ jsx(sidebarLink.icon, { className: "mr-2 h-4 w-4" }),
                    sidebarLink.title
                  ]
                }
              ) }, sidebarLink.id);
            }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex w-full items-center rounded-sm px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-200`,
                onClick: () => setShowFeedbackPopup(true),
                children: [
                  /* @__PURE__ */ jsx(MessageCircle, { className: "mr-2 h-4 w-4" }),
                  "Send Feedback"
                ]
              }
            ) })
          ]
        }
      )
    ] }),
    showFeedbackPopup && /* @__PURE__ */ jsx(
      SubmitFeedbackPopup,
      {
        onClose: () => {
          setShowFeedbackPopup(false);
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container flex min-h-screen items-stretch", children: [
      /* @__PURE__ */ jsxs("aside", { className: "hidden w-44 shrink-0 border-r border-slate-200 py-10 md:block", children: [
        /* @__PURE__ */ jsx(TeamDropdown, {}),
        /* @__PURE__ */ jsxs("nav", { children: [
          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: sidebarLinks.map((sidebarLink) => {
            const isActive = activePageId === sidebarLink.id;
            return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: sidebarLink.href,
                className: `font-regular flex w-full items-center border-r-2 px-2 py-1.5 text-sm ${isActive ? "border-r-black bg-gray-100 text-black" : "border-r-transparent text-gray-500 hover:border-r-gray-300"}`,
                children: /* @__PURE__ */ jsxs("span", { className: "flex grow items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex", children: [
                    /* @__PURE__ */ jsx(sidebarLink.icon, { className: "mr-2 h-4 w-4" }),
                    sidebarLink.title
                  ] }),
                  sidebarLink.hasWarning && /* @__PURE__ */ jsxs("span", { className: "relative mr-1 flex items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "relative rounded-full bg-red-200 p-1 text-xs" }),
                    /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 right-0 top-0 animate-ping rounded-full bg-red-400 p-1 text-xs" })
                  ] })
                ] })
              }
            ) }, sidebarLink.id);
          }) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "mr-3 mt-4 flex items-center justify-center rounded-md border p-2 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-black",
              onClick: () => setShowFeedbackPopup(true),
              children: [
                /* @__PURE__ */ jsx(MessageCircle, { className: "mr-2 h-4 w-4" }),
                "Send Feedback"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grow px-0 py-0 md:px-10 md:py-10", children })
    ] })
  ] });
}

export { TeamSidebar as T };
