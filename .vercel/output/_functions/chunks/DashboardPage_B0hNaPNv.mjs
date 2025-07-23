import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { useState, useEffect, useMemo, useRef } from 'react';
import { u as useParams } from './use-params_B1NTvrba.mjs';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';
import { c as cn, S as Spinner, e as httpGet, M as Modal, b as getUrlParams, p as pageProgressMessage, u as useOutsideClick, l as useKeydown, h as httpPost, g as getUser, R as RoadmapIcon, w as httpPut } from './BaseLayout_B-BXcELP.mjs';
import { a as $currentTeam, $ as $teamList } from './team_B533nqZG.mjs';
import { ThumbsUp, ChevronsUpDown, ChevronsDownUp, SquareCheckBig, MapIcon, Plus, EyeOff, Eye, FolderKanban, CheckSquare, SquarePen, Gift, ChevronsUp, ChevronsDown, ArrowUpRight, Check, BookOpen, ListTodo, ChartNoAxesGantt, MoreVertical, X, Map, Shapes, XIcon, Users2 } from 'lucide-react';
import { atom } from 'nanostores';
import { C as CreateRoadmapButton, F as FeaturedGuideList, a as FeaturedVideoList } from './CreateRoadmapButton_CRkoaX8n.mjs';
import { C as CheckIcon } from './CheckIcon_B3c1RSNy.mjs';
import { g as getRelativeTimeString } from './date_iLNlXR7B.mjs';
import { M as MarkFavorite } from './MarkFavorite_C6Awxxwc.mjs';
import { C as CreateRoadmapModal } from './CreateRoadmapModal_DH4tXRQM.mjs';
import { u as useIsPaidUser } from './billing_5mov2PsZ.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_vuvdVS66.mjs';
import 'js-cookie';
import { P as Pagination } from './Pagination_xm1ZIew_.mjs';
import { T as Tooltip } from './Tooltip_B3pH7xnQ.mjs';
import { u as useAuth } from './use-auth_X5yd_BRu.mjs';
import { u as useCopyText } from './use-copy-text_Bqwbcq8G.mjs';
import { S as ShareIcon } from './ShareIcon_DtrcqZOt.mjs';
import { g as getPercentage } from './number_D9-I_I5P.mjs';
import { u as useTeamId } from './use-team-id_YU7lJR0h.mjs';
import { C as ChevronDownIcon } from './ChevronDownIcon_BYQqw4ne.mjs';

function DashboardTabButton(props) {
  const { isActive, onClick, label, className, href, avatar, icon } = props;
  const Slot = href ? "a" : "button";
  return /* @__PURE__ */ jsxs(
    Slot,
    {
      onClick,
      className: cn(
        "flex h-[30px] shrink-0 items-center gap-1 rounded-md border border-slate-700 bg-slate-800 p-1.5 pl-2 pr-3 text-sm leading-none text-gray-400 transition-colors hover:bg-slate-700",
        isActive ? "border-slate-200 bg-slate-200 text-gray-900 hover:bg-slate-200" : "",
        className
      ),
      ...href ? { href } : {},
      children: [
        avatar && /* @__PURE__ */ jsx(
          "img",
          {
            src: avatar,
            alt: "avatar",
            className: "mr-0.5 h-4 w-4 rounded-full object-cover"
          }
        ),
        icon,
        label
      ]
    }
  );
}

atom();

function HeroProject({ project }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: `/projects/${project.projectId}`,
      className: "group relative flex flex-col justify-between gap-2 rounded-md border border-slate-800 bg-slate-900 p-3.5 hover:border-slate-600",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "truncate font-medium text-slate-300 group-hover:text-slate-100", children: project.title }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "absolute -right-2 -top-2 flex shrink-0 items-center gap-1 rounded-full text-xs uppercase tracking-wide",
                {
                  "text-green-600/50": project.submittedAt && project.repositoryUrl,
                  "text-yellow-600": !project.submittedAt || !project.repositoryUrl
                }
              ),
              children: project.submittedAt && project.repositoryUrl ? "Done" : ""
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center gap-2 text-xs text-slate-400", children: [
          project.submittedAt && project.repositoryUrl && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(ThumbsUp, { className: "h-3 w-3" }),
            project.upvotes
          ] }),
          project.startedAt && /* @__PURE__ */ jsxs("span", { children: [
            "Started ",
            getRelativeTimeString(project.startedAt)
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-md bg-linear-to-br from-slate-800/50 via-transparent to-transparent" }),
        project.submittedAt && project.repositoryUrl && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-md bg-linear-to-br from-green-950/20 via-transparent to-transparent" })
      ]
    }
  );
}

function HeroRoadmap(props) {
  const {
    url,
    percentageDone,
    resourceType,
    resourceId,
    resourceTitle,
    isFavorite,
    allowFavorite = true,
    isTrackable = true,
    isNew = false
  } = props;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: url,
      className: cn(
        "relative flex flex-col overflow-hidden rounded-md border p-3 text-sm text-slate-400 hover:text-slate-300",
        {
          "border-slate-800 bg-slate-900 hover:border-slate-600": isTrackable,
          "border-slate-700/50 bg-slate-800/50 hover:border-slate-600/70": !isTrackable
        }
      ),
      children: [
        /* @__PURE__ */ jsx("span", { title: resourceTitle, className: "relative z-20 truncate", children: resourceTitle }),
        isTrackable && /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute bottom-0 left-0 top-0 z-10 bg-[#172a3a]",
            style: { width: `${percentageDone}%` }
          }
        ),
        allowFavorite && /* @__PURE__ */ jsx(
          MarkFavorite,
          {
            resourceId,
            resourceType,
            favorite: isFavorite
          }
        ),
        isNew && /* @__PURE__ */ jsxs("span", { className: "absolute bottom-1.5 right-2 flex items-center rounded-br rounded-tl text-xs font-medium text-purple-300", children: [
          /* @__PURE__ */ jsxs("span", { className: "mr-1.5 flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-purple-500" })
          ] }),
          "New"
        ] })
      ]
    }
  );
}

function HeroTitle(props) {
  const {
    isLoading = false,
    title,
    icon,
    rightContent,
    isCollapsed = false,
    onToggleCollapse,
    isEmpty = false,
    emptyTitle
  } = props;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs(
      "p",
      {
        onClick: onToggleCollapse,
        className: "flex items-center cursor-default gap-0.5 text-sm text-gray-400",
        children: [
          !isLoading && icon,
          isLoading && /* @__PURE__ */ jsx("span", { className: "mr-1.5", children: /* @__PURE__ */ jsx(Spinner, {}) }),
          !isEmpty ? title : emptyTitle || title
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      !isCollapsed && rightContent,
      !isLoading && !isEmpty && /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onToggleCollapse,
          className: cn(
            "ml-2 inline-flex items-center gap-1 rounded-md bg-slate-800 py-0.5 pl-1 pr-1.5 text-xs uppercase tracking-wider text-slate-400 hover:bg-slate-700",
            {
              "bg-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-400": !isCollapsed
            }
          ),
          children: [
            isCollapsed && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(ChevronsUpDown, { className: "h-3.5 w-3.5" }),
              " Expand"
            ] }),
            !isCollapsed && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(ChevronsDownUp, { className: "h-3.5 w-3.5" }),
              " Collapse"
            ] })
          ]
        }
      )
    ] })
  ] });
}

function HeroItemsGroup(props) {
  const {
    icon,
    isLoading = false,
    isEmpty = false,
    emptyTitle,
    title,
    rightContent,
    children,
    className
  } = props;
  const storageKey = `hero-group-${title}-collapsed`;
  const [isCollapsed, setIsCollapsed] = useState(true);
  function isCollapsedByStorage() {
    const stored = localStorage.getItem(storageKey);
    return stored === "true";
  }
  useEffect(() => {
    setIsCollapsed(isCollapsedByStorage());
  }, [isLoading]);
  const isLoadingOrCollapsedOrEmpty = isLoading || isCollapsed || isEmpty;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "border-b border-gray-800/50",
        {
          "py-4": !isLoadingOrCollapsedOrEmpty,
          "py-4 ": isLoadingOrCollapsedOrEmpty
        },
        className
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          HeroTitle,
          {
            icon,
            isLoading,
            isEmpty,
            emptyTitle,
            title,
            rightContent,
            isCollapsed,
            onToggleCollapse: () => {
              setIsCollapsed(!isCollapsed);
              localStorage.setItem(storageKey, (!isCollapsed).toString());
            }
          }
        ),
        !isLoadingOrCollapsedOrEmpty && /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3", children })
      ] })
    }
  );
}

function FavoriteRoadmaps(props) {
  const { progress, isLoading, customRoadmaps, projects } = props;
  const [showCompleted, setShowCompleted] = useState(false);
  const [isCreatingCustomRoadmap, setIsCreatingCustomRoadmap] = useState(false);
  const completedProjects = projects.filter(
    (project) => project.submittedAt && project.repositoryUrl
  );
  const inProgressProjects = projects.filter(
    (project) => !project.submittedAt || !project.repositoryUrl
  );
  const projectsToShow = [
    ...inProgressProjects,
    ...showCompleted ? completedProjects : []
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    isCreatingCustomRoadmap && /* @__PURE__ */ jsx(
      CreateRoadmapModal,
      {
        onClose: () => {
          setIsCreatingCustomRoadmap(false);
        }
      }
    ),
    /* @__PURE__ */ jsx(
      HeroItemsGroup,
      {
        icon: /* @__PURE__ */ jsx(CheckIcon, { additionalClasses: "mr-1.5 h-[14px] w-[14px]" }),
        isLoading,
        title: "Your progress and bookmarks",
        isEmpty: !isLoading && progress.length === 0,
        emptyTitle: /* @__PURE__ */ jsxs(Fragment, { children: [
          "No bookmarks found",
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#role-based-roadmaps",
              className: "ml-1.5 inline-flex items-center gap-1 font-medium text-blue-500 underline-offset-2 hover:underline",
              children: [
                /* @__PURE__ */ jsx(SquareCheckBig, { className: "size-3.5", strokeWidth: 2.5 }),
                "Bookmark a roadmap"
              ]
            }
          )
        ] }),
        children: progress.map((resource) => /* @__PURE__ */ jsx(
          HeroRoadmap,
          {
            resourceId: resource.resourceId,
            resourceType: resource.resourceType,
            resourceTitle: resource.resourceTitle,
            isFavorite: resource.isFavorite,
            percentageDone: (resource.skipped + resource.done) / resource.total * 100,
            url: resource.resourceType === "roadmap" ? `/${resource.resourceId}` : `/best-practices/${resource.resourceId}`
          },
          `${resource.resourceType}-${resource.resourceId}`
        ))
      }
    ),
    /* @__PURE__ */ jsxs(
      HeroItemsGroup,
      {
        icon: /* @__PURE__ */ jsx(MapIcon, { className: "mr-1.5 h-[14px] w-[14px]" }),
        isLoading,
        title: "Your custom roadmaps",
        isEmpty: !isLoading && customRoadmaps.length === 0,
        emptyTitle: /* @__PURE__ */ jsxs(Fragment, { children: [
          "No custom roadmaps found",
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                setIsCreatingCustomRoadmap(true);
              },
              className: "ml-1.5 inline-flex items-center gap-1 font-medium text-blue-500 underline-offset-2 hover:underline",
              children: [
                /* @__PURE__ */ jsx(SquareCheckBig, { className: "size-3.5", strokeWidth: 2.5 }),
                "Create custom roadmap"
              ]
            }
          )
        ] }),
        children: [
          customRoadmaps.map((customRoadmap) => /* @__PURE__ */ jsx(
            HeroRoadmap,
            {
              resourceId: customRoadmap.resourceId,
              resourceType: "roadmap",
              resourceTitle: customRoadmap.resourceTitle,
              percentageDone: (customRoadmap.skipped + customRoadmap.done) / customRoadmap.total * 100,
              url: `/r/${customRoadmap?.roadmapSlug}`,
              allowFavorite: false
            },
            customRoadmap.resourceId
          )),
          /* @__PURE__ */ jsx(CreateRoadmapButton, { existingRoadmapCount: customRoadmaps.length })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      HeroItemsGroup,
      {
        icon: /* @__PURE__ */ jsx(FolderKanban, { className: "mr-1.5 h-[14px] w-[14px]" }),
        isLoading,
        title: "Your active projects",
        isEmpty: !isLoading && projectsToShow.length === 0,
        emptyTitle: /* @__PURE__ */ jsxs(Fragment, { children: [
          "No active projects found",
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/projects",
              className: "ml-1.5 inline-flex items-center gap-1 font-medium text-blue-500 underline-offset-2 hover:underline",
              children: [
                /* @__PURE__ */ jsx(SquareCheckBig, { className: "size-3.5", strokeWidth: 2.5 }),
                "Start a new project"
              ]
            }
          )
        ] }),
        rightContent: completedProjects.length > 0 && /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setShowCompleted(!showCompleted),
            className: "hidden items-center gap-2 rounded-md text-xs text-slate-400 hover:text-slate-300 sm:flex",
            children: [
              showCompleted ? /* @__PURE__ */ jsx(EyeOff, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsx(Eye, { className: "h-3.5 w-3.5" }),
              completedProjects.length,
              " Completed"
            ]
          }
        ),
        className: "border-b-0",
        children: [
          projectsToShow.map((project) => /* @__PURE__ */ jsx(HeroProject, { project }, project._id)),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/projects",
              className: "flex min-h-[80px] items-center justify-center gap-2 rounded-md border border-dashed border-slate-800 p-4 text-sm text-slate-400 hover:border-slate-600 hover:bg-slate-900/50 hover:text-slate-300",
              children: [
                /* @__PURE__ */ jsx(Plus, { size: 16 }),
                "Start a new project"
              ]
            }
          )
        ]
      }
    )
  ] });
}

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
function UpgradeAccountButton(props) {
  const { isLoading } = props;
  const { isPaidUser, isLoading: isPaidUserLoading } = useIsPaidUser();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  if (isPaidUser) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showUpgradeModal && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradeModal(false) }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClickCapture: () => setShowUpgradeModal(true),
        className: cn(
          "flex items-center gap-1.5 rounded-lg bg-white py-1.5 pr-3 pl-2.5 text-xs text-purple-700 duration-200 hover:bg-purple-600 hover:text-white",
          {
            "striped-loader-slate striped-loader-slate-fast border-transparent bg-slate-800/50 text-transparent hover:bg-transparent hover:text-transparent hover:shadow-none": isLoading || isPaidUserLoading
          }
        ),
        onClick: () => {
        },
        children: [
          /* @__PURE__ */ jsx(Gift, { size: 16, className: cn({ "text-transparent": isLoading }) }),
          /* @__PURE__ */ jsx("span", { children: "Upgrade Account" })
        ]
      }
    )
  ] });
}
function PersonalProfileButton(props) {
  const { isLoading, name, username, avatar } = props;
  if (isLoading || !username) {
    return /* @__PURE__ */ jsxs(
      "a",
      {
        href: "/account/update-profile",
        className: cn(
          "flex items-center gap-2 rounded-lg bg-slate-800/50 py-2 pr-3 pl-3 font-medium outline-slate-700 hover:bg-slate-800 hover:outline-slate-400",
          {
            "striped-loader-slate striped-loader-slate-fast text-transparent": isLoading,
            "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20": !isLoading
          }
        ),
        children: [
          /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4", strokeWidth: 2.5 }),
          "Set up your profile"
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/u/${username}`,
        className: "flex items-center gap-2 rounded-lg bg-slate-800/50 py-2 pr-3 pl-3 text-slate-300 transition-colors hover:bg-slate-800/70",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: avatar,
              alt: name || "Profile",
              className: "h-5 w-5 rounded-full ring-1 ring-slate-700"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Visit Profile" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/account/update-profile",
        className: "flex items-center gap-2 rounded-lg bg-slate-800/50 py-2 pr-3 pl-3 text-slate-400 transition-colors hover:bg-slate-800/70 hover:text-slate-300",
        title: "Edit Profile",
        children: /* @__PURE__ */ jsx(SquarePen, { className: "h-4 w-4" })
      }
    )
  ] });
}
function DashboardStats(props) {
  const { isLoading, profile } = props;
  return /* @__PURE__ */ jsx("div", { className: "container mb-3 flex flex-col gap-4 pt-6 pb-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
    /* @__PURE__ */ jsx(
      PersonalProfileButton,
      {
        isLoading,
        name: profile.name,
        username: profile.username,
        avatar: profile.avatar
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "hidden flex-wrap items-center gap-2 md:flex", children: /* @__PURE__ */ jsx(UpgradeAccountButton, { isLoading }) })
  ] }) });
}
function PersonalDashboard(props) {
  const {
    builtInRoleRoadmaps = [],
    builtInBestPractices = [],
    builtInSkillRoadmaps = [],
    questionGroups = [],
    guides = [],
    videos = []
  } = props;
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [personalDashboardDetails, setPersonalDashboardDetails] = useState();
  const [projectDetails, setProjectDetails] = useState([]);
  async function loadProgress() {
    const { response: progressList, error } = await httpGet(
      `${"https://api.imoogleai.xyz"}/v1-user-dashboard`
    );
    if (error || !progressList) {
      return;
    }
    progressList?.progresses?.forEach((progress) => {
      window.dispatchEvent(
        new CustomEvent("mark-favorite", {
          detail: {
            resourceId: progress.resourceId,
            resourceType: progress.resourceType,
            isFavorite: progress.isFavorite
          }
        })
      );
    });
    setPersonalDashboardDetails(progressList);
  }
  async function loadAllProjectDetails() {
    const { error, response } = await httpGet(`/pages.json`);
    if (error) {
      toast.error(error.message || "Something went wrong");
      return;
    }
    if (!response) {
      return [];
    }
    const allProjects = response.filter((page) => page.group === "Projects");
    setProjectDetails(allProjects);
  }
  useEffect(() => {
    Promise.allSettled([loadProgress(), loadAllProjectDetails()]).finally(
      () => setIsLoading(false)
    );
  }, []);
  useEffect(() => {
    window.addEventListener("refresh-favorites", loadProgress);
    return () => window.removeEventListener("refresh-favorites", loadProgress);
  }, []);
  const learningRoadmapsToShow = (personalDashboardDetails?.progresses || []).filter((progress) => !progress.isCustomResource).sort((a, b) => {
    const updatedAtA = new Date(a.updatedAt);
    const updatedAtB = new Date(b.updatedAt);
    if (a.isFavorite && !b.isFavorite) {
      return -1;
    }
    if (!a.isFavorite && b.isFavorite) {
      return 1;
    }
    return updatedAtB.getTime() - updatedAtA.getTime();
  });
  const customRoadmaps = (personalDashboardDetails?.progresses || []).filter((progress) => progress.isCustomResource).sort((a, b) => {
    const updatedAtA = new Date(a.updatedAt);
    const updatedAtB = new Date(b.updatedAt);
    return updatedAtB.getTime() - updatedAtA.getTime();
  });
  const { avatar, name } = personalDashboardDetails || {};
  const avatarLink = avatar ? `${"https://dodrc8eu8m09s.cloudfront.net/avatars"}/${avatar}` : "/images/default-avatar.png";
  const enrichedProjects = personalDashboardDetails?.projects.map((project) => {
    const projectDetail = projectDetails.find(
      (page) => page.id === project.projectId
    );
    return {
      ...project,
      title: projectDetail?.title || "N/A"
    };
  }).sort((a, b) => {
    if (a.repositoryUrl && !b.repositoryUrl) {
      return 1;
    }
    if (!a.repositoryUrl && b.repositoryUrl) {
      return -1;
    }
    return 0;
  });
  const { username } = personalDashboardDetails || {};
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      DashboardStats,
      {
        profile: {
          name,
          username,
          avatar: avatarLink,
          isLoading
        },
        isLoading
      }
    ),
    /* @__PURE__ */ jsx(
      FavoriteRoadmaps,
      {
        progress: learningRoadmapsToShow,
        customRoadmaps,
        projects: enrichedProjects || [],
        isLoading
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-linear-to-b from-slate-900 to-black pb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "relative mt-6 border-t border-t-[#1e293c] pt-12", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            id: "role-based-roadmaps",
            className: "text-md font-regular absolute -top-[17px] left-4 flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2",
            children: "Role Based Roadmaps"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3 px-2 sm:grid-cols-2 sm:px-0 lg:grid-cols-3", children: builtInRoleRoadmaps.map((roadmap) => {
          const roadmapProgress = learningRoadmapsToShow.find(
            (lr) => lr.resourceId === roadmap.id
          );
          const percentageDone = ((roadmapProgress?.skipped || 0) + (roadmapProgress?.done || 0)) / (roadmapProgress?.total || 1) * 100;
          return /* @__PURE__ */ jsx(
            HeroRoadmap,
            {
              resourceId: roadmap.id,
              resourceType: "roadmap",
              resourceTitle: roadmap.title,
              isFavorite: roadmap.isFavorite,
              percentageDone,
              isNew: roadmap.isNew,
              url: `/${roadmap.id}`
            },
            roadmap.id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "relative mt-12 border-t border-t-[#1e293c] pt-12", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-md font-regular absolute -top-[17px] left-4 flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2", children: "Skill Based Roadmaps" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3 px-2 sm:grid-cols-2 sm:px-0 lg:grid-cols-3", children: builtInSkillRoadmaps.map((roadmap) => {
          const roadmapProgress = learningRoadmapsToShow.find(
            (lr) => lr.resourceId === roadmap.id
          );
          const percentageDone = ((roadmapProgress?.skipped || 0) + (roadmapProgress?.done || 0)) / (roadmapProgress?.total || 1) * 100;
          return /* @__PURE__ */ jsx(
            HeroRoadmap,
            {
              resourceId: roadmap.id,
              resourceType: "roadmap",
              resourceTitle: roadmap.title,
              isFavorite: roadmap.isFavorite,
              percentageDone,
              isNew: roadmap.isNew,
              url: `/${roadmap.id}`
            },
            roadmap.id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "relative mt-12 border-t border-t-[#1e293c] pt-12", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-md font-regular absolute -top-[17px] left-4 flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2", children: "Project Ideas" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3 px-2 sm:grid-cols-2 sm:px-0 lg:grid-cols-3", children: projectGroups.map((projectGroup) => {
          return /* @__PURE__ */ jsx(
            HeroRoadmap,
            {
              percentageDone: 0,
              resourceId: projectGroup.id,
              resourceType: "roadmap",
              resourceTitle: projectGroup.title,
              url: `/${projectGroup.id}/projects`,
              allowFavorite: false
            },
            projectGroup.id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "relative mt-12 border-t border-t-[#1e293c] pt-12", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-md font-regular absolute -top-[17px] left-4 flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2", children: "Best Practices" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3 px-2 sm:grid-cols-2 sm:px-0 lg:grid-cols-3", children: builtInBestPractices.map((roadmap) => {
          const roadmapProgress = learningRoadmapsToShow.find(
            (lr) => lr.resourceId === roadmap.id
          );
          const percentageDone = ((roadmapProgress?.skipped || 0) + (roadmapProgress?.done || 0)) / (roadmapProgress?.total || 1) * 100;
          return /* @__PURE__ */ jsx(
            HeroRoadmap,
            {
              resourceId: roadmap.id,
              resourceType: "best-practice",
              resourceTitle: roadmap.title,
              isFavorite: roadmap.isFavorite,
              percentageDone,
              isNew: roadmap.isNew,
              url: `/best-practices/${roadmap.id}`
            },
            roadmap.id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "relative mt-12 border-t border-t-[#1e293c] pt-12", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-md font-regular absolute -top-[17px] left-4 flex rounded-lg border border-[#1e293c] bg-slate-900 px-3 py-1 text-slate-400 sm:left-1/2 sm:-translate-x-1/2", children: "Questions" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3 px-2 sm:grid-cols-2 sm:px-0 lg:grid-cols-3", children: questionGroups.map((questionGroup) => {
          return /* @__PURE__ */ jsx(
            HeroRoadmap,
            {
              percentageDone: 0,
              resourceId: questionGroup.id,
              resourceType: "roadmap",
              resourceTitle: questionGroup.frontmatter.briefTitle,
              url: `/questions/${questionGroup.id}`,
              allowFavorite: false,
              isNew: questionGroup.frontmatter.isNew
            },
            questionGroup.id
          );
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-5 bg-gray-50 px-4 py-5 sm:gap-16 sm:px-0 sm:py-16", children: [
      /* @__PURE__ */ jsx(
        FeaturedGuideList,
        {
          heading: "Guides",
          guides,
          questions: questionGroups.filter((questionGroup) => questionGroup.frontmatter.authorId).slice(0, 7)
        }
      ),
      /* @__PURE__ */ jsx(FeaturedVideoList, { heading: "Videos", videos })
    ] })
  ] });
}

function ActivityTopicTitles(props) {
  const { topicTitles, onSelectActivity, className } = props;
  const [showAll, setShowAll] = useState(false);
  const filteredTopicTitles = topicTitles.slice(
    0,
    showAll ? topicTitles.length : 3
  );
  const shouldShowButton = topicTitles.length > 3;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-wrap gap-1 text-sm font-normal text-gray-600",
        className
      ),
      children: [
        filteredTopicTitles.map((topicTitle, index) => /* @__PURE__ */ jsx("span", { className: "rounded-md bg-gray-200 px-1.5", children: topicTitle }, index)),
        shouldShowButton && !showAll && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowAll(!showAll),
            className: "bg-white border border-black text-black rounded-md px-1.5 hover:bg-black text-xs h-[20px] hover:text-white",
            children: showAll ? "- Show less" : `+${topicTitles.length - 3}`
          }
        )
      ]
    }
  );
}

function TeamActivityItem(props) {
  const { user, onTopicClick, teamId } = props;
  const { activities } = user;
  const currentTeam = useStore($currentTeam);
  const [showAll, setShowAll] = useState(false);
  const resourceLink = (activity) => {
    const {
      resourceId,
      resourceTitle,
      resourceType,
      isCustomResource,
      resourceSlug
    } = activity;
    const resourceUrl = resourceType === "question" ? `/questions/${resourceId}` : resourceType === "best-practice" ? `/best-practices/${resourceId}` : isCustomResource && resourceType === "roadmap" ? `/r/${resourceSlug}` : `/${resourceId}`;
    return /* @__PURE__ */ jsx(
      "a",
      {
        className: "font-medium underline transition-colors hover:cursor-pointer hover:text-black",
        target: "_blank",
        href: `${resourceUrl}?t=${teamId}`,
        children: resourceTitle
      }
    );
  };
  const timeAgo = (date) => /* @__PURE__ */ jsx("span", { className: "ml-1 text-xs text-gray-400", children: getRelativeTimeString(new Date(date).toISOString(), true) });
  const userAvatar = user.avatar ? `${"https://dodrc8eu8m09s.cloudfront.net/avatars"}/${user.avatar}` : "/images/default-avatar.png";
  const isPersonalProgressOnly = currentTeam?.personalProgressOnly && currentTeam.role === "member" && user.memberId !== currentTeam.memberId;
  const username = /* @__PURE__ */ jsxs(
    "a",
    {
      href: `/team/member?t=${teamId}&m=${user?.memberId}`,
      className: cn(
        "inline-flex items-center gap-1.5 underline underline-offset-2 hover:underline",
        isPersonalProgressOnly ? "pointer-events-none cursor-default no-underline" : ""
      ),
      onClick: (e) => {
        if (isPersonalProgressOnly) {
          e.preventDefault();
        }
      },
      "aria-disabled": isPersonalProgressOnly,
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "inline-block h-5 w-5 rounded-full",
            src: userAvatar,
            alt: user.name
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: user?.name || "Unknown" })
      ]
    }
  );
  if (activities.length === 1) {
    const activity = activities[0];
    const { actionType, topicTitles } = activity;
    const topicCount = topicTitles?.length || 0;
    return /* @__PURE__ */ jsxs(
      "li",
      {
        className: "flex flex-wrap items-center gap-1 rounded-md border px-2 py-2.5 text-sm bg-white",
        children: [
          actionType === "in_progress" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-1 flex w-full flex-wrap items-center", children: [
              username,
              " started ",
              topicCount,
              " topic",
              topicCount > 1 ? "s" : "",
              " in ",
              resourceLink(activity),
              " ",
              timeAgo(activity.updatedAt)
            ] }),
            /* @__PURE__ */ jsx(
              ActivityTopicTitles,
              {
                className: "pl-5",
                topicTitles: topicTitles || []
              }
            )
          ] }),
          actionType === "done" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-1 flex w-full flex-wrap items-center", children: [
              username,
              " completed ",
              topicCount,
              " topic",
              topicCount > 1 ? "s" : "",
              " in ",
              resourceLink(activity),
              " ",
              timeAgo(activity.updatedAt)
            ] }),
            /* @__PURE__ */ jsx(
              ActivityTopicTitles,
              {
                className: "pl-5",
                topicTitles: topicTitles || []
              }
            )
          ] }),
          actionType === "answered" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-1 flex w-full flex-wrap items-center", children: [
              username,
              " answered ",
              topicCount,
              " question",
              topicCount > 1 ? "s" : "",
              " in ",
              resourceLink(activity),
              " ",
              timeAgo(activity.updatedAt)
            ] }),
            /* @__PURE__ */ jsx(
              ActivityTopicTitles,
              {
                className: "pl-5",
                topicTitles: topicTitles || []
              }
            )
          ] })
        ]
      },
      user._id
    );
  }
  const uniqueResourcesCount = new Set(
    activities.map((activity) => activity.resourceId)
  ).size;
  const activityLimit = showAll ? activities.length : 5;
  return /* @__PURE__ */ jsxs("li", { className: "overflow-hidden bg-white rounded-md border", children: [
    /* @__PURE__ */ jsxs("h3", { className: "flex flex-wrap items-center gap-1 bg-gray-100 px-2 py-2.5 text-sm", children: [
      username,
      " has ",
      activities.length,
      " updates in ",
      uniqueResourcesCount,
      " resource(s)"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "py-3", children: [
      /* @__PURE__ */ jsx("ul", { className: "ml-2 flex flex-col divide-y pr-2 sm:ml-[36px]", children: activities.slice(0, activityLimit).map((activity, counter) => {
        const { actionType, topicTitles } = activity;
        const topicCount = topicTitles?.length || 0;
        return /* @__PURE__ */ jsxs(
          "li",
          {
            className: cn(
              "text-sm text-gray-600",
              counter === 0 ? "pb-2.5" : "py-2.5",
              counter === activities.length - 1 ? "pb-0" : ""
            ),
            children: [
              actionType === "in_progress" && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("p", { className: "mb-1", children: [
                  "Started ",
                  topicCount,
                  " topic",
                  topicCount > 1 ? "s" : "",
                  " in ",
                  resourceLink(activity),
                  " ",
                  timeAgo(activity.updatedAt)
                ] }),
                /* @__PURE__ */ jsx(ActivityTopicTitles, { topicTitles: topicTitles || [] })
              ] }),
              actionType === "done" && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("p", { className: "mb-1", children: [
                  "Completed ",
                  topicCount,
                  " topic",
                  topicCount > 1 ? "s" : "",
                  " in ",
                  resourceLink(activity),
                  " ",
                  timeAgo(activity.updatedAt)
                ] }),
                /* @__PURE__ */ jsx(ActivityTopicTitles, { topicTitles: topicTitles || [] })
              ] }),
              actionType === "answered" && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("p", { className: "mb-1", children: [
                  "Answered ",
                  topicCount,
                  " question",
                  topicCount > 1 ? "s" : "",
                  " in ",
                  resourceLink(activity),
                  " ",
                  timeAgo(activity.updatedAt)
                ] }),
                /* @__PURE__ */ jsx(ActivityTopicTitles, { topicTitles: topicTitles || [] })
              ] })
            ]
          },
          activity._id
        );
      }) }),
      activities.length > 5 && /* @__PURE__ */ jsx(
        "button",
        {
          className: "ml-2 mt-3 flex items-center gap-2 rounded-md border border-gray-300 p-1 text-xs uppercase tracking-wide text-gray-600 transition-colors hover:border-black hover:bg-black hover:text-white sm:ml-[36px]",
          onClick: () => setShowAll(!showAll),
          children: showAll ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(ChevronsUp, { size: 14 }),
            "Show less"
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(ChevronsDown, { size: 14 }),
            "Show more"
          ] })
        }
      )
    ] })
  ] }, user._id);
}

function TeamActivityTopicsModal(props) {
  const { activity, onClose } = props;
  const {
    resourceId,
    resourceType,
    isCustomResource,
    topicTitles = [],
    actionType
  } = activity;
  let pageUrl = "";
  if (resourceType === "roadmap") {
    pageUrl = isCustomResource ? `/r/${resourceId}` : `/${resourceId}`;
  } else if (resourceType === "best-practice") {
    pageUrl = `/best-practices/${resourceId}`;
  } else {
    pageUrl = `/questions/${resourceId}`;
  }
  return /* @__PURE__ */ jsx(
    Modal,
    {
      onClose: () => {
        onClose();
      },
      children: /* @__PURE__ */ jsxs("div", { className: `popup-body relative rounded-lg bg-white p-4 shadow-sm`, children: [
        /* @__PURE__ */ jsxs("span", { className: "mb-2 flex items-center justify-between text-lg font-semibold capitalize", children: [
          /* @__PURE__ */ jsx("span", { className: "flex items-center gap-2", children: actionType.replace("_", " ") }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: pageUrl,
              target: "_blank",
              className: "flex items-center gap-1 rounded-md border border-transparent py-0.5 pl-2 pr-1 text-sm font-normal text-gray-400 transition-colors hover:border-black hover:bg-black hover:text-white",
              children: [
                "Visit Page",
                " ",
                /* @__PURE__ */ jsx(
                  ArrowUpRight,
                  {
                    size: 16,
                    strokeWidth: 2,
                    className: "relative top-px"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "flex max-h-[50vh] flex-col gap-1 overflow-y-auto max-md:max-h-full", children: topicTitles.map((topicTitle) => {
          const ActivityIcon = actionType === "done" ? Check : actionType === "in_progress" ? BookOpen : Check;
          return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(
              ActivityIcon,
              {
                strokeWidth: 3,
                className: "relative top-[4px] text-green-500",
                size: 16
              }
            ),
            topicTitle
          ] }, topicTitle);
        }) })
      ] })
    }
  );
}

function TeamEmptyStream(props) {
  const { teamId } = props;
  return /* @__PURE__ */ jsx("div", { className: "rounded-md", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center p-7 text-center sm:p-14", children: [
    /* @__PURE__ */ jsx(ListTodo, { className: "mb-4 h-14 w-14 opacity-10" }),
    /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold sm:text-lg", children: "No Activity" }),
    /* @__PURE__ */ jsx("p", { className: "my-1 max-w-[400px] text-balance text-sm text-gray-500 sm:my-2 sm:text-base", children: "Team activity will appear here once members start tracking their progress." })
  ] }) });
}

function TeamActivityPage(props) {
  const { teamId: defaultTeamId, canManageCurrentTeam = false } = props;
  const { t: teamId = defaultTeamId } = getUrlParams();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [teamActivities, setTeamActivities] = useState(
    {
      data: {
        users: [],
        activities: []
      },
      totalCount: 0,
      totalPages: 0,
      currPage: 1,
      perPage: 21
    }
  );
  const [currPage, setCurrPage] = useState(1);
  const getTeamProgress = async (currPage2 = 1) => {
    const { response, error } = await httpGet(
      `${"https://api.imoogleai.xyz"}/v1-get-team-activity/${teamId}`,
      {
        currPage: currPage2
      }
    );
    if (error || !response) {
      toast.error(error?.message || "Failed to get team activity");
      return;
    }
    setTeamActivities(response);
    setCurrPage(response.currPage);
  };
  useEffect(() => {
    if (!teamId) {
      return;
    }
    setIsLoading(true);
    setTeamActivities({
      data: {
        users: [],
        activities: []
      },
      totalCount: 0,
      totalPages: 0,
      currPage: 1,
      perPage: 21
    });
    setCurrPage(1);
    getTeamProgress().then(() => {
      pageProgressMessage.set("");
      setIsLoading(false);
    });
  }, [teamId]);
  const { users, activities } = teamActivities?.data;
  const validActivities = useMemo(() => {
    return activities?.filter((activity) => {
      return activity.activity.length > 0 && activity.activity.some((t) => (t?.topicTitles?.length || 0) > 0);
    });
  }, [activities]);
  const sortedUniqueCreatedAt = useMemo(() => {
    return new Set(
      validActivities?.map((activity) => new Date(activity.createdAt).setHours(0, 0, 0, 0)).sort((a, b) => {
        return new Date(b).getTime() - new Date(a).getTime();
      })
    );
  }, [validActivities]);
  const usersWithActivities = useMemo(() => {
    const enrichedUsers = [];
    for (const uniqueCreatedAt of sortedUniqueCreatedAt) {
      const uniqueActivities = validActivities.filter(
        (activity) => new Date(activity.createdAt).setHours(0, 0, 0, 0) === uniqueCreatedAt
      );
      const usersWithUniqueActivities = users.map((user) => {
        const userActivities = uniqueActivities.filter((activity) => activity.userId === user._id).flatMap((activity) => activity.activity).filter((activity) => (activity?.topicTitles?.length || 0) > 0).sort((a, b) => {
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        });
        return {
          ...user,
          activities: userActivities
        };
      }).filter((user) => user.activities.length > 0).sort((a, b) => {
        return new Date(b.activities[0].updatedAt).getTime() - new Date(a.activities[0].updatedAt).getTime();
      });
      enrichedUsers.push(...usersWithUniqueActivities);
    }
    return enrichedUsers;
  }, [users, activities]);
  const sectionHeading = /* @__PURE__ */ jsxs("h3", { className: "mb-3 flex h-[20px] w-full items-center justify-between text-xs uppercase text-gray-400", children: [
    "Team Activity",
    /* @__PURE__ */ jsx("span", { className: "mx-3 h-[1px] grow bg-gray-200" }),
    canManageCurrentTeam && /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/team/progress?t=${teamId}`,
        className: "flex flex-row items-center rounded-full bg-gray-400 px-2.5 py-0.5 text-xs text-white transition-colors hover:bg-black",
        children: [
          /* @__PURE__ */ jsx(ChartNoAxesGantt, { className: "mr-1.5 size-3", strokeWidth: 2.5 }),
          "Progresses"
        ]
      }
    )
  ] });
  if (isLoading) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      sectionHeading,
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-[70px] w-full animate-pulse rounded-lg border bg-gray-100"
        },
        index
      )) })
    ] });
  }
  if (!teamId) {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    } else {
      return null;
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    selectedActivity && /* @__PURE__ */ jsx(
      TeamActivityTopicsModal,
      {
        activity: selectedActivity,
        onClose: () => setSelectedActivity(null)
      }
    ),
    usersWithActivities.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      sectionHeading,
      /* @__PURE__ */ jsx("ul", { className: "mb-4 mt-2 flex flex-col gap-3", children: usersWithActivities.map((user, index) => {
        return /* @__PURE__ */ jsx(
          TeamActivityItem,
          {
            user,
            teamId,
            onTopicClick: setSelectedActivity
          },
          `${user._id}-${index}`
        );
      }) }),
      /* @__PURE__ */ jsx(
        Pagination,
        {
          currPage,
          totalPages: teamActivities.totalPages,
          totalCount: teamActivities.totalCount,
          perPage: teamActivities.perPage,
          onPageChange: (page) => {
            setCurrPage(page);
            pageProgressMessage.set("Loading...");
            getTeamProgress(page).finally(() => {
              pageProgressMessage.set("");
            });
          }
        }
      )
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      sectionHeading,
      /* @__PURE__ */ jsx("div", { className: "rounded-lg border bg-white p-4", children: /* @__PURE__ */ jsx(TeamEmptyStream, { teamId }) })
    ] })
  ] });
}

function ProgressShareButton(props) {
  const {
    resourceId,
    resourceType,
    className,
    shareIconClassName,
    checkIconClassName,
    isCustomResource
  } = props;
  const user = useAuth();
  const { copyText, isCopied } = useCopyText();
  function handleCopyLink() {
    const newUrl = new URL(
      "https://roadmap.sh"
    );
    if (resourceType === "roadmap" && !isCustomResource) {
      newUrl.pathname = `/${resourceId}`;
    } else if (resourceType === "best-practice" && !isCustomResource) {
      newUrl.pathname = `/best-practices/${resourceId}`;
    } else {
      newUrl.pathname = `/r`;
      newUrl.searchParams.set("id", resourceId || "");
    }
    newUrl.searchParams.set("s", user?.id || "");
    copyText(newUrl.toString());
  }
  if (!user) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: cn(
        "flex items-center gap-1 text-xs sm:text-sm font-medium disabled:cursor-not-allowed disabled:opacity-70",
        isCopied ? "text-green-500" : "text-gray-500 hover:text-black",
        className
      ),
      onClick: handleCopyLink,
      children: isCopied ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(CheckIcon, { additionalClasses: `h-3.5 w-3.5 ${checkIconClassName}` }),
        " ",
        "Link Copied"
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          ShareIcon,
          {
            className: `h-3.5 w-3.5 stroke-[2.5px] ${shareIconClassName}`
          }
        ),
        " ",
        "Share Progress"
      ] })
    }
  );
}

function ResourceProgressActions(props) {
  const {
    userId,
    resourceType,
    resourceId,
    isCustomResource,
    showClearButton = true,
    onCleared
  } = props;
  const toast = useToast();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  async function clearProgress() {
    setIsClearing(true);
    const { error, response } = await httpPost(
      `${"https://api.imoogleai.xyz"}/v1-clear-resource-progress`,
      {
        resourceId,
        resourceType
      }
    );
    if (error || !response) {
      toast.error("Error clearing progress. Please try again.");
      console.error(error);
      setIsClearing(false);
      return;
    }
    localStorage.removeItem(`${resourceType}-${resourceId}-${userId}-favorite`);
    localStorage.removeItem(`${resourceType}-${resourceId}-${userId}-progress`);
    setIsClearing(false);
    setIsConfirming(false);
    if (onCleared) {
      onCleared();
    }
  }
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });
  useKeydown("Escape", () => {
    setIsOpen(false);
  });
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full", ref: dropdownRef, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "h-full text-gray-400 hover:text-gray-700",
        onClick: () => setIsOpen(!isOpen),
        children: /* @__PURE__ */ jsx(MoreVertical, { size: 16 })
      }
    ),
    isOpen && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 top-8 z-10 w-48 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg", children: [
      /* @__PURE__ */ jsx(
        ProgressShareButton,
        {
          resourceType,
          resourceId,
          isCustomResource,
          className: "w-full gap-1.5 p-2 hover:bg-gray-100"
        }
      ),
      showClearButton && /* @__PURE__ */ jsxs(Fragment, { children: [
        !isConfirming && /* @__PURE__ */ jsx(
          "button",
          {
            className: "flex w-full items-center gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70",
            onClick: () => setIsConfirming(true),
            disabled: isClearing,
            children: !isClearing ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
              "Clear Progress"
            ] }) : "Processing..."
          }
        ),
        isConfirming && /* @__PURE__ */ jsxs("span", { className: "flex w-full items-center justify-between gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70", children: [
          "Are you sure?",
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: clearProgress,
                className: "text-red-500 underline hover:text-red-800",
                children: "Yes"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsConfirming(false),
                className: "text-red-500 underline hover:text-red-800",
                children: "No"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}

function ResourceProgress(props) {
  const {
    showClearButton = true,
    isCustomResource,
    showActions = true,
    onResourceClick
  } = props;
  const userId = getUser()?.id;
  const {
    updatedAt,
    resourceType,
    resourceId,
    title,
    totalCount,
    learningCount,
    doneCount,
    skippedCount,
    onCleared,
    roadmapSlug
  } = props;
  let url = resourceType === "roadmap" ? `/${resourceId}` : `/best-practices/${resourceId}`;
  if (isCustomResource) {
    url = `/r/${roadmapSlug}`;
  }
  const totalMarked = doneCount + skippedCount;
  const progressPercentage = getPercentage(totalMarked, totalCount);
  const Slot = onResourceClick ? "button" : "a";
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      Slot,
      {
        ...onResourceClick ? {
          onClick: onResourceClick
        } : {
          href: url,
          target: "_blank"
        },
        className: cn(
          "group relative flex w-full items-center justify-between overflow-hidden rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-sm transition-all hover:border-gray-400",
          showActions ? "pr-7" : ""
        ),
        children: [
          /* @__PURE__ */ jsx("span", { className: "grow truncate", children: title }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-400", children: [
            parseInt(progressPercentage, 10),
            "%"
          ] }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "absolute left-0 top-0 block h-full cursor-pointer rounded-tl-md bg-black/5 transition-colors group-hover:bg-black/10",
              style: {
                width: `${progressPercentage}%`
              }
            }
          )
        ]
      }
    ),
    showActions && /* @__PURE__ */ jsx("div", { className: "absolute right-2 top-0 flex h-full items-center", children: /* @__PURE__ */ jsx(
      ResourceProgressActions,
      {
        userId,
        resourceType,
        resourceId,
        isCustomResource,
        onCleared,
        showClearButton
      }
    ) })
  ] });
}

function LoadingProgress(props) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-1.5 sm:grid-cols-3", children: Array.from({ length: 6 }).map((_, index) => /* @__PURE__ */ jsx(
    "div",
    {
      className: "h-[38px] w-full animate-pulse rounded-md border border-gray-300 bg-gray-100"
    },
    index
  )) });
}

function PickRoadmapOptionModal(props) {
  const { onClose, showDefaultRoadmapsModal, showCreateCustomRoadmapModal } = props;
  return /* @__PURE__ */ jsxs(Modal, { onClose, bodyClassName: "p-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-0.5 text-left text-2xl font-semibold", children: "Pick an Option" }),
    /* @__PURE__ */ jsx("p", { className: "text-left text-sm text-gray-500 mb-4", children: "Choose from default roadmaps or create from scratch." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "text-base flex items-center rounded-md border border-gray-300 p-2 px-4 text-left font-medium hover:bg-gray-100",
          onClick: showDefaultRoadmapsModal,
          children: [
            /* @__PURE__ */ jsx(Map, { className: "mr-2 inline-block", size: 20 }),
            "Use a Default Roadmap"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "text-base flex items-center rounded-md border border-gray-300 p-2 px-4 text-left font-medium hover:bg-gray-100",
          onClick: showCreateCustomRoadmapModal,
          children: [
            /* @__PURE__ */ jsx(Shapes, { className: "mr-2 inline-block", size: 20 }),
            "Create from Scratch"
          ]
        }
      )
    ] })
  ] });
}

function SelectRoadmapModalItem(props) {
  const { isSelected, onClick, title } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: `group flex min-h-[35px] items-stretch overflow-hidden rounded-md text-sm ${!isSelected ? "border border-gray-300 hover:bg-gray-100" : "bg-black text-white transition-colors hover:bg-gray-700"}`,
      onClick,
      children: [
        /* @__PURE__ */ jsx("span", { className: "flex items-center px-3", children: title }),
        isSelected && /* @__PURE__ */ jsx("span", { className: "flex items-center bg-gray-700 px-3 text-xs text-white transition-colors", children: "×" }),
        !isSelected && /* @__PURE__ */ jsx("span", { className: "flex items-center bg-gray-100 px-2.5 text-xs text-gray-500", children: "+" })
      ]
    }
  );
}

function SelectRoadmapModal(props) {
  const {
    onClose,
    allRoadmaps,
    onRoadmapAdd,
    onRoadmapRemove,
    teamResourceConfig
  } = props;
  const popupBodyEl = useRef(null);
  const searchInputEl = useRef(null);
  const [searchResults, setSearchResults] = useState(allRoadmaps);
  const [searchText, setSearchText] = useState("");
  useKeydown("Escape", () => {
    onClose();
  });
  useOutsideClick(popupBodyEl, () => {
    onClose();
  });
  useEffect(() => {
    if (!searchInputEl.current) {
      return;
    }
    searchInputEl.current.focus();
  }, [searchInputEl]);
  useEffect(() => {
    if (searchText.length === 0) {
      setSearchResults(allRoadmaps);
      return;
    }
    const searchResults2 = allRoadmaps.filter((roadmap) => {
      return roadmap.title.toLowerCase().includes(searchText.toLowerCase()) || roadmap.id.toLowerCase().includes(searchText.toLowerCase());
    });
    setSearchResults(searchResults2);
  }, [searchText, allRoadmaps]);
  const roleBasedRoadmaps = searchResults.filter(
    (roadmap) => roadmap?.metadata?.tags?.includes("role-roadmap")
  );
  const skillBasedRoadmaps = searchResults.filter(
    (roadmap) => roadmap?.metadata?.tags?.includes("skill-roadmap")
  );
  return /* @__PURE__ */ jsx("div", { className: "fixed left-0 right-0 top-0 z-100 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50", children: /* @__PURE__ */ jsx("div", { className: "relative mx-auto h-full w-full max-w-2xl p-4 md:h-auto", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: popupBodyEl,
      className: "popup-body relative mt-4 overflow-hidden rounded-lg bg-white shadow-sm",
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "popup-close absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900",
            onClick: onClose,
            children: [
              /* @__PURE__ */ jsx(XIcon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close modal" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: searchInputEl,
            type: "text",
            placeholder: "Search roadmaps",
            className: "block w-full border-b px-5 pb-3.5 pt-4 outline-hidden placeholder:text-gray-400",
            value: searchText,
            onInput: (e) => setSearchText(e.target.value)
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "min-h-[200px] p-4", children: [
          /* @__PURE__ */ jsx("span", { className: "block pb-3 text-xs uppercase text-gray-400", children: "Role Based Roadmaps" }),
          roleBasedRoadmaps.length === 0 && /* @__PURE__ */ jsx("p", { className: "mb-1 flex h-full items-start text-sm italic text-gray-400" }),
          roleBasedRoadmaps.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-5 flex flex-wrap items-center gap-2", children: roleBasedRoadmaps.map((roadmap) => {
            const isSelected = teamResourceConfig.includes(roadmap.id);
            return /* @__PURE__ */ jsx(
              SelectRoadmapModalItem,
              {
                title: roadmap.title,
                isSelected,
                onClick: () => {
                  if (isSelected) {
                    onRoadmapRemove(roadmap.id);
                  } else {
                    onRoadmapAdd(roadmap.id);
                  }
                }
              },
              roadmap.id
            );
          }) }),
          /* @__PURE__ */ jsx("span", { className: "block pb-3 text-xs uppercase text-gray-400", children: "Skill Based Roadmaps" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-2", children: skillBasedRoadmaps.map((roadmap) => {
            const isSelected = teamResourceConfig.includes(roadmap.id);
            return /* @__PURE__ */ jsx(
              SelectRoadmapModalItem,
              {
                title: roadmap.title,
                isSelected,
                onClick: () => {
                  if (isSelected) {
                    onRoadmapRemove(roadmap.id);
                  } else {
                    onRoadmapAdd(roadmap.id);
                  }
                }
              },
              roadmap.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-t-yellow-300 bg-yellow-100 px-4 py-3 text-sm text-yellow-900", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-1 text-base font-medium text-yellow-900", children: "More Official Roadmaps Coming Soon" }),
          /* @__PURE__ */ jsx("p", { children: "We are currently adding more of our official roadmaps to this list. If you don't see the roadmap you are looking for, please check back later." })
        ] })
      ]
    }
  ) }) });
}

function ContentConfirmationModal(props) {
  const { onClose, onClick } = props;
  return /* @__PURE__ */ jsx(Modal, { onClose, wrapperClassName: "max-w-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Copy Node Details and Resources?" }),
    /* @__PURE__ */ jsx("p", { className: "balanc text-gray-600", children: "This will just copy the roadmap in your team. Would you like to copy the resource links and node details as well?" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "rounded-lg border p-2.5 font-normal",
          onClick: () => {
            onClick(false);
          },
          children: "No, copy roadmap only"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "rounded-lg border bg-black p-2.5 font-normal text-white hover:opacity-80",
          onClick: () => {
            onClick(true);
          },
          children: "Yes, also copy resources"
        }
      )
    ] })
  ] }) });
}

function DashboardTeamRoadmaps(props) {
  const {
    isLoading,
    teamId,
    learningRoadmapsToShow,
    canManageCurrentTeam,
    onUpdate,
    builtInRoleRoadmaps,
    builtInSkillRoadmaps
  } = props;
  const toast = useToast();
  const [isPickingOptions, setIsPickingOptions] = useState(false);
  const [isAddingRoadmap, setIsAddingRoadmap] = useState(false);
  const [isCreatingRoadmap, setIsCreatingRoadmap] = useState(false);
  const [confirmationContentId, setConfirmationContentId] = useState();
  const allRoadmaps = useMemo(
    () => builtInRoleRoadmaps.concat(builtInSkillRoadmaps).map((r) => {
      return {
        id: r.id,
        title: r.title,
        url: r.url,
        group: "Roadmaps",
        renderer: r.renderer || "balsamiq",
        metadata: r.metadata
      };
    }),
    [builtInRoleRoadmaps, builtInSkillRoadmaps]
  );
  async function onAdd(roadmapId, shouldCopyContent = false) {
    if (!teamId) {
      return;
    }
    toast.loading("Adding roadmap");
    pageProgressMessage.set("Adding roadmap");
    const roadmap = allRoadmaps.find((r) => r.id === roadmapId);
    const { error, response } = await httpPut(
      `${"https://api.imoogleai.xyz"}/v1-update-team-resource-config/${teamId}`,
      {
        teamId,
        resourceId: roadmapId,
        resourceType: "roadmap",
        removed: [],
        renderer: roadmap?.renderer || "balsamiq",
        shouldCopyContent
      }
    );
    if (error || !response) {
      toast.error(error?.message || "Error adding roadmap");
      return;
    }
    onUpdate();
    toast.success("Roadmap added");
    if (roadmap?.renderer === "editor") {
      setIsAddingRoadmap(false);
    }
  }
  async function deleteResource(roadmapId) {
    if (!teamId) {
      return;
    }
    toast.loading("Deleting roadmap");
    pageProgressMessage.set(`Deleting roadmap from team`);
    const { error, response } = await httpPut(
      `${"https://api.imoogleai.xyz"}/v1-delete-team-resource-config/${teamId}`,
      {
        resourceId: roadmapId,
        resourceType: "roadmap"
      }
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      return;
    }
    toast.success("Roadmap removed");
    onUpdate();
  }
  async function onRemove(resourceId) {
    pageProgressMessage.set("Removing roadmap");
    deleteResource(resourceId).finally(() => {
      pageProgressMessage.set("");
    });
  }
  const pickRoadmapOptionModal = isPickingOptions && /* @__PURE__ */ jsx(
    PickRoadmapOptionModal,
    {
      onClose: () => setIsPickingOptions(false),
      showDefaultRoadmapsModal: () => {
        setIsAddingRoadmap(true);
        setIsPickingOptions(false);
      },
      showCreateCustomRoadmapModal: () => {
        setIsCreatingRoadmap(true);
        setIsPickingOptions(false);
      }
    }
  );
  const filteredAllRoadmaps = allRoadmaps.filter(
    (r) => !learningRoadmapsToShow.find((c) => c?.defaultRoadmapId === r.id)
  );
  const addRoadmapModal = isAddingRoadmap && /* @__PURE__ */ jsx(
    SelectRoadmapModal,
    {
      onClose: () => setIsAddingRoadmap(false),
      teamResourceConfig: learningRoadmapsToShow.map((r) => r.resourceId),
      allRoadmaps: filteredAllRoadmaps.filter((r) => r.renderer === "editor"),
      teamId,
      onRoadmapAdd: (roadmapId) => {
        const isEditorRoadmap = allRoadmaps.find(
          (r) => r.id === roadmapId && r.renderer === "editor"
        );
        if (!isEditorRoadmap) {
          onAdd(roadmapId).finally(() => {
            pageProgressMessage.set("");
          });
          return;
        }
        setIsAddingRoadmap(false);
        setConfirmationContentId(roadmapId);
      },
      onRoadmapRemove: (roadmapId) => {
        if (confirm("Are you sure you want to remove this roadmap?")) {
          onRemove(roadmapId).finally(() => {
          });
        }
      }
    }
  );
  const confirmationContentIdModal = confirmationContentId && /* @__PURE__ */ jsx(
    ContentConfirmationModal,
    {
      onClose: () => {
        setConfirmationContentId("");
      },
      onClick: (shouldCopy) => {
        onAdd(confirmationContentId, shouldCopy).finally(() => {
          pageProgressMessage.set("");
          setConfirmationContentId("");
        });
      }
    }
  );
  const createRoadmapModal = isCreatingRoadmap && /* @__PURE__ */ jsx(
    CreateRoadmapModal,
    {
      teamId,
      onClose: () => {
        setIsCreatingRoadmap(false);
      },
      onCreated: () => {
        setIsCreatingRoadmap(false);
      }
    }
  );
  const roadmapHeading = /* @__PURE__ */ jsxs("div", { className: "mb-3 flex h-[20px] items-center justify-between gap-2 text-xs", children: [
    /* @__PURE__ */ jsx("h2", { className: "uppercase text-gray-400", children: "Roadmaps" }),
    /* @__PURE__ */ jsx("span", { className: "mx-3 h-[1px] grow bg-gray-200" }),
    canManageCurrentTeam && /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/team/roadmaps?t=${teamId}`,
        className: "flex flex-row items-center rounded-full bg-gray-400 px-2.5 py-0.5 text-xs text-white transition-colors hover:bg-black",
        children: [
          /* @__PURE__ */ jsx(MapIcon, { className: "mr-1.5 size-3", strokeWidth: 2.5 }),
          "Roadmaps"
        ]
      }
    )
  ] });
  if (!isLoading && learningRoadmapsToShow.length === 0) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      roadmapHeading,
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center rounded-md border bg-white p-4 py-10", children: [
        pickRoadmapOptionModal,
        addRoadmapModal,
        createRoadmapModal,
        confirmationContentIdModal,
        /* @__PURE__ */ jsx(RoadmapIcon, { className: "mb-4 h-14 w-14 opacity-10" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold sm:text-lg", children: "No roadmaps" }),
        /* @__PURE__ */ jsx("p", { className: "my-1 max-w-[400px] text-balance text-sm text-gray-500 sm:my-2 sm:text-base", children: canManageCurrentTeam ? "Add a roadmap to start tracking your team" : "Ask your team admin to add some roadmaps" }),
        canManageCurrentTeam && /* @__PURE__ */ jsx(
          "button",
          {
            className: "mt-1 rounded-lg bg-black px-3 py-1 text-sm font-medium text-white hover:bg-gray-900",
            onClick: () => setIsPickingOptions(true),
            children: "Add roadmap"
          }
        )
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    pickRoadmapOptionModal,
    addRoadmapModal,
    createRoadmapModal,
    confirmationContentIdModal,
    roadmapHeading,
    isLoading && /* @__PURE__ */ jsx(LoadingProgress, {}),
    !isLoading && learningRoadmapsToShow.length > 0 && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-1.5 sm:grid-cols-3", children: [
      learningRoadmapsToShow.map((roadmap) => {
        const learningCount = roadmap.learning || 0;
        const doneCount = roadmap.done || 0;
        const totalCount = roadmap.total || 0;
        const skippedCount = roadmap.skipped || 0;
        return /* @__PURE__ */ jsx(
          ResourceProgress,
          {
            isCustomResource: roadmap?.isCustomResource || false,
            doneCount: doneCount > totalCount ? totalCount : doneCount,
            learningCount: learningCount > totalCount ? totalCount : learningCount,
            totalCount,
            skippedCount,
            resourceId: roadmap.resourceId,
            resourceType: "roadmap",
            updatedAt: roadmap.updatedAt,
            title: roadmap.resourceTitle,
            showActions: false,
            roadmapSlug: roadmap.roadmapSlug
          },
          roadmap.resourceId
        );
      }),
      canManageCurrentTeam && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsPickingOptions(true),
          className: "group relative flex w-full items-center justify-center overflow-hidden rounded-md border border-dashed border-gray-300 bg-white px-3 py-2 text-center text-sm text-gray-500 transition-all hover:border-gray-400 hover:text-black",
          children: "+ Add Roadmap"
        }
      )
    ] })
  ] });
}

const allowedRoles = [
  {
    name: "Admin",
    value: "admin",
    description: "Can do everything"
  },
  {
    name: "Manager",
    value: "manager",
    description: "Can manage team and skills"
  },
  {
    name: "Member",
    value: "member",
    description: "Can view team and skills"
  }
];
function RoleDropdown(props) {
  const { selectedRole, setSelectedRole, className = "w-[120px]" } = props;
  const dropdownRef = useRef(null);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useOutsideClick(dropdownRef, () => {
    setIsMenuOpen(false);
  });
  return /* @__PURE__ */ jsxs("div", { className: `relative ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onKeyDown: (e) => {
          const isUpOrDown = e.key === "ArrowUp" || e.key === "ArrowDown";
          if (isUpOrDown && !isMenuOpen) {
            e.preventDefault();
            setIsMenuOpen(true);
            return;
          }
          const isEnter = e.key === "Enter";
          if (isEnter && isMenuOpen) {
            e.preventDefault();
            setSelectedRole(allowedRoles[activeRoleIndex].value);
            setIsMenuOpen(false);
            return;
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveRoleIndex((prev) => {
              const nextIndex = prev + 1;
              if (nextIndex >= allowedRoles.length) {
                return 0;
              }
              return nextIndex;
            });
          }
          if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveRoleIndex((prev) => {
              const nextIndex = prev - 1;
              if (nextIndex < 0) {
                return allowedRoles.length - 1;
              }
              return nextIndex;
            });
          }
        },
        onClick: () => setIsMenuOpen(!isMenuOpen),
        className: `flex h-full w-full cursor-default items-center justify-between rounded-md border px-4 ${isMenuOpen ? "border-gray-300 bg-gray-100" : ""}`,
        children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `capitalize`,
              children: selectedRole || "Select Role"
            }
          ),
          /* @__PURE__ */ jsx(
            ChevronDownIcon,
            {
              className: "relative top-0.5 ml-2 h-4 w-4 text-gray-400"
            }
          )
        ]
      }
    ),
    isMenuOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute z-10 mt-1 w-[200px] rounded-md border bg-white shadow-md",
        ref: dropdownRef,
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "py-1",
            role: "menu",
            "aria-orientation": "vertical",
            "aria-labelledby": "options-menu",
            children: allowedRoles.map((allowedRole, roleCounter) => /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: `w-full cursor-default px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${roleCounter === activeRoleIndex ? "bg-gray-100" : "bg-white"}`,
                role: "menuitem",
                onClick: () => {
                  setIsMenuOpen(false);
                  setSelectedRole(allowedRole.value);
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "block font-medium", children: allowedRole.name }),
                  /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400", children: allowedRole.description })
                ]
              },
              allowedRole.value
            ))
          }
        )
      }
    )
  ] });
}

function InviteMemberPopup(props) {
  const { onClose, onInvited, teamId: defaultTeamId } = props;
  const popupBodyRef = useRef(null);
  const emailRef = useRef(null);
  const [selectedRole, setSelectedRole] = useState("member");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { teamId = defaultTeamId } = useTeamId();
  useEffect(() => {
    emailRef?.current?.focus();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const { response, error: error2 } = await httpPost(
      `${"https://api.imoogleai.xyz"}/v1-invite-member/${teamId}`,
      { email, role: selectedRole }
    );
    if (error2 || !response) {
      setIsLoading(false);
      setError(error2?.message || "Something went wrong");
      return;
    }
    setIsLoading(false);
    handleClosePopup();
    onInvited();
  };
  const handleClosePopup = () => {
    setIsLoading(false);
    setError("");
    onClose();
  };
  useOutsideClick(popupBodyRef, handleClosePopup);
  return /* @__PURE__ */ jsx("div", { className: "popup fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50", children: /* @__PURE__ */ jsx("div", { className: "relative h-full w-full max-w-md p-4 md:h-auto", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: popupBodyRef,
      className: "popup-body relative rounded-lg bg-white p-4 shadow-sm",
      children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-1.5 text-xl font-medium sm:text-2xl", children: "Invite Member" }),
        /* @__PURE__ */ jsx("p", { className: "mb-3 hidden text-sm leading-none text-gray-400 sm:block", children: "Enter the email and role below to invite a member." }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "my-4 mt-0 flex flex-col gap-2 sm:mt-4", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: emailRef,
                type: "email",
                name: "invite-member",
                id: "invite-member",
                className: "mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-hidden placeholder:text-gray-400 focus:border-gray-400",
                placeholder: "Enter email address",
                required: true,
                autoFocus: true,
                value: email,
                onInput: (e) => setEmail(e.target.value)
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex h-[42px] w-full flex-col", children: /* @__PURE__ */ jsx(
              RoleDropdown,
              {
                className: "h-full w-full",
                selectedRole,
                setSelectedRole
              }
            ) }),
            error && /* @__PURE__ */ jsx("p", { className: "rounded-md border border-red-300 bg-red-50 p-2 text-sm text-red-700", children: error })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                disabled: isLoading,
                onClick: handleClosePopup,
                className: "grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isLoading || !email,
                className: "grow cursor-pointer rounded-lg bg-black py-2 text-center text-white disabled:opacity-40",
                children: isLoading ? "Please wait .." : "Invite"
              }
            )
          ] })
        ] })
      ]
    }
  ) }) });
}

function TeamDashboard(props) {
  const { teamId, builtInRoleRoadmaps, builtInSkillRoadmaps } = props;
  const toast = useToast();
  const currentUser = getUser();
  const [isLoading, setIsLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);
  const [isInvitingMember, setIsInvitingMember] = useState(false);
  async function getTeamProgress() {
    const { response, error } = await httpGet(
      `${"https://api.imoogleai.xyz"}/v1-get-team-progress/${teamId}`
    );
    if (error || !response) {
      toast.error(error?.message || "Failed to get team progress");
      return;
    }
    setTeamMembers(
      response.sort((a, b) => {
        if (a.email === currentUser?.email) {
          return -1;
        }
        if (b.email === currentUser?.email) {
          return 1;
        }
        return 0;
      })
    );
  }
  useEffect(() => {
    if (!teamId) {
      return;
    }
    setIsLoading(true);
    setTeamMembers([]);
    getTeamProgress().finally(() => setIsLoading(false));
  }, [teamId]);
  const currentMember = teamMembers.find(
    (member) => member.email === currentUser?.email
  );
  const learningRoadmapsToShow = currentMember?.progress?.filter(
    (progress) => progress.resourceType === "roadmap"
  ) || [];
  const allMembersWithoutCurrentUser = teamMembers.sort((a, b) => {
    if (a.email === currentUser?.email) {
      return -1;
    }
    if (b.email === currentUser?.email) {
      return 1;
    }
    return 0;
  });
  const canManageCurrentTeam = ["admin", "manager"].includes(
    currentMember?.role
  );
  return /* @__PURE__ */ jsxs("section", { className: "mt-8", children: [
    isInvitingMember && /* @__PURE__ */ jsx(
      InviteMemberPopup,
      {
        onInvited: () => {
          toast.success("Invite sent");
          getTeamProgress().finally(() => null);
          setIsInvitingMember(false);
        },
        onClose: () => {
          setIsInvitingMember(false);
        }
      }
    ),
    /* @__PURE__ */ jsx(
      DashboardTeamRoadmaps,
      {
        isLoading,
        teamId,
        learningRoadmapsToShow,
        canManageCurrentTeam,
        onUpdate: getTeamProgress,
        builtInRoleRoadmaps,
        builtInSkillRoadmaps
      }
    ),
    /* @__PURE__ */ jsxs("h2", { className: "mb-3 mt-6 flex h-[20px] items-center justify-between text-xs uppercase text-gray-400", children: [
      "Team Members",
      /* @__PURE__ */ jsx("span", { className: "grow h-[1px] bg-gray-200 mx-3" }),
      canManageCurrentTeam && /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/team/members?t=${teamId}`,
          className: "flex flex-row items-center rounded-full bg-gray-400 px-2.5 py-0.5 text-xs text-white transition-colors hover:bg-black",
          children: [
            /* @__PURE__ */ jsx(Users2, { className: "mr-1.5 size-3", strokeWidth: 2.5 }),
            "Members"
          ]
        }
      )
    ] }),
    isLoading && /* @__PURE__ */ jsx(TeamMemberLoading, { className: "mb-6" }),
    !isLoading && /* @__PURE__ */ jsxs("div", { className: "mb-6 flex flex-wrap gap-2", children: [
      allMembersWithoutCurrentUser.map((member) => {
        const avatar = member?.avatar ? `${"https://dodrc8eu8m09s.cloudfront.net/avatars"}/${member.avatar}` : "/images/default-avatar.png";
        return /* @__PURE__ */ jsxs(
          "a",
          {
            className: "group relative",
            href: `/team/member?t=${teamId}&m=${member._id}`,
            children: [
              /* @__PURE__ */ jsx("figure", { className: "relative aspect-square size-8 overflow-hidden rounded-md bg-gray-100", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: avatar,
                  alt: member.name || "",
                  className: "absolute inset-0 h-full w-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx(Tooltip, { position: "top-center", additionalClass: "text-sm", children: member.name })
            ]
          },
          member.email
        );
      }),
      canManageCurrentTeam && /* @__PURE__ */ jsxs(
        "button",
        {
          className: "group relative",
          onClick: () => setIsInvitingMember(true),
          children: [
            /* @__PURE__ */ jsx("span", { className: "relative flex aspect-square size-8 items-center justify-center overflow-hidden rounded-md border border-dashed bg-gray-100", children: "+" }),
            /* @__PURE__ */ jsx(Tooltip, { position: "top-center", additionalClass: "text-sm", children: "Add Member" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      TeamActivityPage,
      {
        teamId,
        canManageCurrentTeam
      }
    )
  ] });
}
function TeamMemberLoading(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-wrap gap-2", className), children: Array.from({ length: 15 }).map((_, index) => /* @__PURE__ */ jsx(
    "div",
    {
      className: "size-8 animate-pulse rounded-md bg-gray-200"
    },
    index
  )) });
}

function DashboardPage(props) {
  const {
    builtInRoleRoadmaps,
    builtInBestPractices,
    builtInSkillRoadmaps,
    isTeamPage = false,
    questionGroups,
    guides,
    videos
  } = props;
  const currentUser = getUser();
  const toast = useToast();
  const teamList = useStore($teamList);
  const { t: currTeamId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTeamId, setSelectedTeamId] = useState();
  async function getAllTeams() {
    if (teamList.length > 0) {
      return;
    }
    const { response, error } = await httpGet(
      `${"https://api.imoogleai.xyz"}/v1-get-user-teams`
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      return;
    }
    $teamList.set(response);
  }
  useEffect(() => {
    getAllTeams().finally(() => {
      if (currTeamId) {
        setSelectedTeamId(currTeamId);
      }
      setIsLoading(false);
    });
  }, [currTeamId]);
  const userAvatar = currentUser?.avatar && !isLoading ? `${"https://dodrc8eu8m09s.cloudfront.net/avatars"}/${currentUser.avatar}` : "/images/default-avatar.png";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn("bg-slate-900", {
          "striped-loader-slate": isLoading
        }),
        children: /* @__PURE__ */ jsx("div", { className: "bg-slate-800/30 py-5 min-h-[70px]", children: /* @__PURE__ */ jsx("div", { className: "container flex flex-wrap items-center gap-1.5", children: !isLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            DashboardTabButton,
            {
              label: "Personal",
              isActive: !selectedTeamId && !isTeamPage,
              href: "/dashboard",
              avatar: userAvatar
            }
          ),
          teamList.map((team) => {
            const { avatar } = team;
            const avatarUrl = avatar ? `${"https://dodrc8eu8m09s.cloudfront.net/avatars"}/${avatar}` : "/images/default-avatar.png";
            return /* @__PURE__ */ jsx(
              DashboardTabButton,
              {
                label: team.name,
                isActive: team._id === selectedTeamId,
                ...team.status === "invited" ? {
                  href: `/respond-invite?i=${team.memberId}`
                } : {
                  href: `/team?t=${team._id}`
                },
                avatar: avatarUrl
              },
              team._id
            );
          }),
          /* @__PURE__ */ jsx(
            DashboardTabButton,
            {
              label: "+ Create Team",
              isActive: false,
              href: "/team/new",
              className: "border border-dashed border-slate-700 bg-transparent px-3 text-[13px] text-sm text-gray-500 hover:border-solid hover:border-slate-700 hover:text-gray-400"
            }
          )
        ] }) }) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "", children: [
      !selectedTeamId && !isTeamPage && /* @__PURE__ */ jsx("div", { className: "bg-slate-900", children: /* @__PURE__ */ jsx(
        PersonalDashboard,
        {
          builtInRoleRoadmaps,
          builtInSkillRoadmaps,
          builtInBestPractices,
          questionGroups,
          guides,
          videos
        }
      ) }),
      (selectedTeamId || isTeamPage) && /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(
        TeamDashboard,
        {
          builtInRoleRoadmaps,
          builtInSkillRoadmaps,
          teamId: selectedTeamId
        }
      ) })
    ] })
  ] });
}

export { DashboardPage as D };
