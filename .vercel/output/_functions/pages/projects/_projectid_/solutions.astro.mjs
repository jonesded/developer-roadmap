import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_Cqa-EqH9.mjs';
import { M as Modal, c as cn, u as useOutsideClick, e as httpGet, B as GitHubIcon, b as getUrlParams, s as setUrlParams, d as deleteUrlParam, i as isLoggedIn, p as pageProgressMessage, h as httpPost, $ as $$BaseLayout } from '../../../chunks/BaseLayout_C3JOBLhD.mjs';
import { c as getProjectById, b as getAllProjects } from '../../../chunks/project_CvYjxAZ4.mjs';
import { P as ProjectTabs } from '../../../chunks/ProjectTabs_BZ4kGwcU.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { u as useToast } from '../../../chunks/use-toast_BYLkOsfO.mjs';
import { Blocks, ArrowUpRight, ChevronDown, X, Search, ThumbsUp, ThumbsDown } from 'lucide-react';
import 'dayjs';
import { P as Pagination } from '../../../chunks/Pagination_BY4mUo2a.mjs';
import 'clsx';
import { s as showLoginPopup } from '../../../chunks/popup_DWUkHIfQ.mjs';
import { g as getRelativeTimeString } from '../../../chunks/date_iLNlXR7B.mjs';
export { renderers } from '../../../renderers.mjs';

function LoadingSolutions() {
  const loadingRow = /* @__PURE__ */ jsxs("li", { className: "flex min-h-[78px] animate-pulse flex-wrap items-center justify-between overflow-hidden rounded-md bg-gray-200 sm:min-h-[44px] sm:animate-none sm:rounded-none sm:bg-transparent", children: [
    /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "block h-[28px] w-[28px] animate-pulse rounded-full bg-gray-200" }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: `ml-2 block h-[26px] w-[350px] animate-pulse rounded-full bg-gray-200`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "animated-pulse h-[26px] w-[80px] rounded-full bg-gray-200"
        }
      ),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "animated-pulse h-[26px] w-[113px] rounded-full bg-gray-200"
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ jsxs("ul", { className: "flex min-h-[500px] flex-col gap-2 divide-y sm:gap-0", children: [
    loadingRow,
    loadingRow,
    loadingRow,
    loadingRow,
    loadingRow,
    loadingRow,
    loadingRow,
    loadingRow,
    loadingRow,
    loadingRow,
    loadingRow
  ] });
}

function EmptySolutions(props) {
  const { projectId } = props;
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-[250px] flex-col items-center justify-center rounded-xl px-5 py-3 sm:px-0 sm:py-20 bg-white border mb-5", children: [
    /* @__PURE__ */ jsx(Blocks, { className: "mb-4 opacity-10 h-14 w-14" }),
    /* @__PURE__ */ jsx("h2", { className: "mb-1 text-lg font-semibold sm:text-xl", children: "No solutions submitted yet" }),
    /* @__PURE__ */ jsx("p", { className: "mb-3 text-balance text-center text-xs text-gray-400 sm:text-sm", children: "Be the first to submit a solution for this project" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-1 sm:flex-row sm:gap-1.5", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: `/projects/${projectId}`,
        className: "flex w-full items-center gap-1.5 rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white sm:w-auto sm:text-sm",
        children: "View Project Details"
      }
    ) })
  ] });
}

function LeavingRoadmapWarningModal(props) {
  const { onClose, repositoryUrl } = props;
  return /* @__PURE__ */ jsxs(Modal, { onClose, bodyClassName: "h-auto p-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-1.5 text-2xl font-semibold", children: "Leaving roadmap.sh" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "You are about to visit the project solution on GitHub. We recommend you to follow these tips before you leave." }),
    /* @__PURE__ */ jsxs("div", { className: "my-3", children: [
      /* @__PURE__ */ jsxs("p", { className: "rounded-lg bg-gray-200 p-2 text-sm text-gray-900", children: [
        "Make sure to come back and",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-purple-600", children: "leave an upvote" }),
        " ",
        "if you liked the solution. It helps the author and the community."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-1 rounded-lg bg-gray-200 p-2 text-sm text-gray-900", children: [
        "If you have feedback on the solution, open an issue or a pull request on the",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-purple-600", children: "solution repository" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-1 rounded-lg bg-gray-200 p-2 text-sm text-gray-900", children: [
        "Downvote the solution if it is",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-purple-600", children: "incorrect or misleading" }),
        ". It helps the community."
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        className: "inline-flex w-full items-center gap-2 rounded-lg bg-black px-3 py-2.5 text-sm text-white",
        href: repositoryUrl,
        target: "_blank",
        children: [
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5" }),
          "Continue to Solution"
        ]
      }
    )
  ] });
}

function VoteButton(props) {
  const { icon: VoteIcon, isActive, hideCount = false, count, onClick } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: cn(
        "flex gap-1 px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 hover:text-black focus:outline-hidden",
        {
          "bg-gray-100 text-orange-600 hover:text-orange-700": isActive,
          "bg-transparent text-gray-500 hover:text-black": !isActive
        }
      ),
      disabled: isActive,
      onClick,
      children: [
        /* @__PURE__ */ jsx(VoteIcon, { className: cn("size-3.5 stroke-[2.5px]", {
          "top-[1.5px] relative mr-0.5": hideCount
        }) }),
        !hideCount && /* @__PURE__ */ jsx("span", { className: "relative -top-[0.5px] text-xs font-medium tabular-nums", children: count })
      ]
    }
  );
}

function SelectLanguages(props) {
  const { projectId, onSelectLanguage, selectedLanguage } = props;
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const optionsRef = useRef(null);
  const toast = useToast();
  const [distinctLanguages, setDistinctLanguages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const filteredLanguages = distinctLanguages.filter(
    (language) => language.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    if (!isOpen || !optionsRef.current) {
      return;
    }
    const options = optionsRef.current.getElementsByTagName("button");
    const highlightedOption = options[highlightedIndex];
    if (!highlightedOption) {
      return;
    }
    const containerRect = optionsRef.current.getBoundingClientRect();
    const optionRect = highlightedOption.getBoundingClientRect();
    const isAbove = optionRect.top < containerRect.top;
    const isBelow = optionRect.bottom > containerRect.bottom;
    if (isAbove || isBelow) {
      highlightedOption.scrollIntoView({
        block: "nearest",
        behavior: "instant"
      });
    }
  }, [highlightedIndex, isOpen]);
  const loadDistinctLanguages = async () => {
    const { response, error } = await httpGet(
      `${"https://api.roadmap.sh"}/v1-list-project-languages/${projectId}`
    );
    if (error || !response) {
      toast.error(error?.message || "Failed to load project languages");
      return;
    }
    setDistinctLanguages(response);
  };
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
    setSearchQuery("");
    setHighlightedIndex(0);
  });
  useEffect(() => {
    loadDistinctLanguages().finally(() => {
    });
  }, []);
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex(
          (prev) => prev >= filteredLanguages.length - 1 ? 0 : prev + 1
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex(
          (prev) => prev <= 0 ? filteredLanguages.length - 1 : prev - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (filteredLanguages[highlightedIndex]) {
          onSelectLanguage(filteredLanguages[highlightedIndex]);
          setIsOpen(false);
          setSearchQuery("");
          setHighlightedIndex(0);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSearchQuery("");
        setHighlightedIndex(0);
        break;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex shrink-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "flex items-center gap-1 rounded-md border border-gray-300 py-1.5 pl-3 pr-2 text-xs font-medium text-gray-900",
          onClick: () => setIsOpen(!isOpen),
          children: [
            selectedLanguage || "Select Language",
            /* @__PURE__ */ jsx(ChevronDown, { className: "ml-1 h-4 w-4" })
          ]
        }
      ),
      selectedLanguage && /* @__PURE__ */ jsxs(
        "button",
        {
          className: "absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600",
          onClick: (e) => {
            e.stopPropagation();
            onSelectLanguage("");
          },
          children: [
            /* @__PURE__ */ jsx(X, { className: "size-3", strokeWidth: 2.5 }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Clear selection" })
          ]
        }
      )
    ] }),
    isOpen && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "absolute right-0 top-full z-10 w-full min-w-[200px] max-w-[200px] translate-y-1.5 overflow-hidden rounded-md border border-gray-300 bg-white p-1 shadow-lg",
        ref: dropdownRef,
        onKeyDown: handleKeyDown,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative mb-1 px-1", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: searchInputRef,
                type: "text",
                className: "w-full rounded-md border border-gray-200 py-1.5 pl-9 pr-3 text-sm focus:border-gray-300 focus:outline-hidden",
                placeholder: "Search languages...",
                value: searchQuery,
                onChange: (e) => {
                  setSearchQuery(e.target.value);
                  setHighlightedIndex(0);
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { ref: optionsRef, className: "max-h-[200px] overflow-y-auto", children: [
            filteredLanguages.map((language, index) => {
              const isSelected = selectedLanguage === language;
              const isHighlighted = index === highlightedIndex;
              return /* @__PURE__ */ jsx(
                "button",
                {
                  className: `flex w-full items-center rounded-md px-4 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-100 aria-selected:bg-gray-100 ${isHighlighted ? "bg-gray-100" : ""}`,
                  onClick: () => {
                    onSelectLanguage(language);
                    setIsOpen(false);
                    setSearchQuery("");
                    setHighlightedIndex(0);
                  },
                  "aria-selected": isSelected,
                  children: language
                },
                language
              );
            }),
            filteredLanguages.length === 0 && /* @__PURE__ */ jsx("div", { className: "px-4 py-2 text-sm text-gray-500", children: "No languages found" })
          ] })
        ]
      }
    )
  ] });
}

const sortOptions = [
  { label: "Latest First", value: "latest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Highest Rating", value: "rating" }
];
function SortProjects(props) {
  const { selectedSort, onSelectSort } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });
  const selectedOption = sortOptions.find((option) => option.value === selectedSort) || sortOptions[0];
  return /* @__PURE__ */ jsxs("div", { className: "relative shrink-0", ref: dropdownRef, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "flex items-center gap-1 rounded-md border border-gray-300 py-1.5 pl-3 pr-2 text-xs font-medium text-gray-900",
        onClick: () => setIsOpen(!isOpen),
        children: [
          selectedOption.label,
          /* @__PURE__ */ jsx(ChevronDown, { className: "ml-1 h-4 w-4" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-full z-10 mt-1.5 min-w-[150px] overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "py-1", children: sortOptions.map((option) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `flex w-full items-center px-4 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-100 ${selectedSort === option.value ? "bg-gray-100" : ""}`,
        onClick: () => {
          onSelectSort(option.value);
          setIsOpen(false);
        },
        children: option.label
      },
      option.value
    )) }) })
  ] });
}

const submittedAlternatives = [
  "submitted their solution",
  "got it done",
  "submitted their take",
  "finished the project",
  "submitted their work",
  "completed the project",
  "got it done",
  "delivered their project",
  "handed in their solution",
  "provided their deliverables",
  "submitted their approach",
  "sent in their project",
  "presented their take",
  "shared their completed task",
  "submitted their approach",
  "completed it",
  "finalized their solution",
  "delivered their approach",
  "turned in their project",
  "submitted their final draft",
  "delivered their solution"
];
function ProjectSolutionRow(props) {
  const { solution, counter, onVote, onVisitSolution, onLanguageClick } = props;
  const avatar = solution.user.avatar || "";
  return /* @__PURE__ */ jsxs("div", { className: "group flex flex-col border-gray-100 px-3 py-2.5 text-sm hover:bg-gray-50/50 sm:flex-row sm:justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: avatar ? `${"https://dodrc8eu8m09s.cloudfront.net/avatars"}/${avatar}` : "/images/default-avatar.png",
          alt: solution.user.name,
          className: "h-7 w-7 shrink-0 rounded-full sm:h-8 sm:w-8"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5", children: [
          /* @__PURE__ */ jsx("span", { className: "max-w-[150px] truncate font-medium text-gray-900 sm:max-w-[180px]", children: solution.user.name }),
          /* @__PURE__ */ jsx("span", { className: "hidden truncate text-xs text-gray-500 sm:block sm:text-sm", children: submittedAlternatives[counter % submittedAlternatives.length] || "submitted their solution" }),
          /* @__PURE__ */ jsxs(
            "span",
            {
              className: "text-xs text-gray-400",
              title: new Date(solution?.submittedAt).toLocaleString(),
              children: [
                "· ",
                getRelativeTimeString(solution?.submittedAt)
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2.5 flex gap-1.5", children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: /* @__PURE__ */ jsxs("span", { className: "flex shrink-0 overflow-hidden rounded-full border", children: [
            /* @__PURE__ */ jsx(
              VoteButton,
              {
                icon: ThumbsUp,
                isActive: solution?.voteType === "upvote",
                count: solution.upvotes || 0,
                onClick: () => {
                  onVote(solution._id, "upvote");
                }
              }
            ),
            /* @__PURE__ */ jsx(
              VoteButton,
              {
                icon: ThumbsDown,
                isActive: solution?.voteType === "downvote",
                count: solution.downvotes || 0,
                hideCount: true,
                onClick: () => {
                  onVote(solution._id, "downvote");
                }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "flex items-center gap-1 rounded-full border px-2 py-1 text-xs text-black transition-colors hover:border-black hover:bg-black hover:text-white",
              onClick: () => {
                onVisitSolution(solution);
              },
              children: [
                /* @__PURE__ */ jsx(GitHubIcon, { className: "h-3.5 w-3.5 text-current" }),
                /* @__PURE__ */ jsx("span", { children: "Visit Solution" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2.5 hidden sm:mt-0 sm:block sm:pl-4", children: solution.languages && solution.languages.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-1.5", children: solution.languages.slice(0, 2).map((lang) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onLanguageClick?.(lang),
        className: "inline-flex items-center rounded-md border border-gray-200 bg-white px-2 py-0.5 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900",
        children: lang
      },
      lang
    )) }) })
  ] });
}

function ListProjectSolutions(props) {
  const { projectId, project: projectData } = props;
  const toast = useToast();
  const [pageState, setPageState] = useState({
    currentPage: 0,
    language: "",
    sort: "rating"
  });
  const [isLoading, setIsLoading] = useState(true);
  const [solutions, setSolutions] = useState();
  const [showLeavingRoadmapModal, setShowLeavingRoadmapModal] = useState(null);
  const loadSolutions = async (page = 1, language = "", sort = "rating") => {
    const { response, error } = await httpGet(
      `${"https://api.roadmap.sh"}/v1-list-project-solutions/${projectId}`,
      {
        currPage: page,
        ...language ? { languages: language } : {},
        sort
      }
    );
    if (error || !response) {
      toast.error(error?.message || "Failed to load project solutions");
      setIsLoading(false);
      return;
    }
    setSolutions(response);
  };
  const handleSubmitVote = async (solutionId, voteType) => {
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    pageProgressMessage.set("Submitting vote");
    const { response, error } = await httpPost(
      `${"https://api.roadmap.sh"}/v1-vote-project/${solutionId}`,
      {
        voteType
      }
    );
    if (error || !response) {
      toast.error(error?.message || "Failed to submit vote");
      pageProgressMessage.set("");
      return;
    }
    pageProgressMessage.set("");
    setSolutions((prev) => {
      if (!prev) {
        return prev;
      }
      return {
        ...prev,
        data: prev.data.map((solution) => {
          if (solution._id === solutionId) {
            return {
              ...solution,
              upvotes: response?.upvotes || 0,
              downvotes: response?.downvotes || 0,
              voteType
            };
          }
          return solution;
        })
      };
    });
  };
  useEffect(() => {
    const queryParams = getUrlParams();
    setPageState({
      currentPage: +(queryParams.p || "1"),
      language: queryParams.l || "",
      sort: queryParams.s || "rating"
    });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    if (!pageState.currentPage) {
      return;
    }
    if (pageState.currentPage !== 1 || pageState.language !== "" || pageState.sort !== "rating") {
      setUrlParams({
        p: String(pageState.currentPage),
        l: pageState.language,
        s: pageState.sort
      });
    } else {
      deleteUrlParam("p");
      deleteUrlParam("l");
      deleteUrlParam("s");
    }
    loadSolutions(
      pageState.currentPage,
      pageState.language,
      pageState.sort
    ).finally(() => {
      setIsLoading(false);
    });
  }, [pageState]);
  const isEmpty = solutions?.data.length === 0;
  if (isEmpty) {
    return /* @__PURE__ */ jsx(EmptySolutions, { projectId });
  }
  const leavingRoadmapModal = showLeavingRoadmapModal ? /* @__PURE__ */ jsx(
    LeavingRoadmapWarningModal,
    {
      onClose: () => setShowLeavingRoadmapModal(null),
      repositoryUrl: showLeavingRoadmapModal?.repositoryUrl
    }
  ) : null;
  const selectedLanguage = pageState.language;
  const setSelectedLanguage = (language) => {
    setPageState((prev) => ({
      ...prev,
      language: prev.language === language ? "" : language
    }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-4 overflow-hidden rounded-lg border bg-white p-3 sm:p-5", children: [
    leavingRoadmapModal,
    /* @__PURE__ */ jsxs("div", { className: "relative mb-5 hidden items-center justify-between sm:flex", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h1", { className: "mb-1 text-xl font-semibold", children: [
          projectData.title,
          " Solutions"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Solutions submitted by the community" })
      ] }),
      !isLoading && /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          SortProjects,
          {
            selectedSort: pageState.sort,
            onSelectSort: (sort) => {
              setPageState((prev) => ({
                ...prev,
                sort
              }));
            }
          }
        ),
        /* @__PURE__ */ jsx(
          SelectLanguages,
          {
            projectId,
            selectedLanguage,
            onSelectLanguage: (language) => {
              setPageState((prev) => ({
                ...prev,
                language: prev.language === language ? "" : language
              }));
            }
          }
        )
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsx(LoadingSolutions, {}) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "flex min-h-[500px] flex-col divide-y divide-gray-100", children: solutions?.data.map((solution, counter) => /* @__PURE__ */ jsx(
        ProjectSolutionRow,
        {
          solution,
          counter,
          onVote: handleSubmitVote,
          onVisitSolution: setShowLeavingRoadmapModal,
          onLanguageClick: setSelectedLanguage
        },
        solution._id
      )) }),
      (solutions?.totalPages || 0) > 1 && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
        Pagination,
        {
          totalPages: solutions?.totalPages || 1,
          currPage: solutions?.currPage || 1,
          perPage: solutions?.perPage || 21,
          totalCount: solutions?.totalCount || 0,
          onPageChange: (page) => {
            setPageState({
              ...pageState,
              currentPage: page
            });
          }
        }
      ) })
    ] })
  ] });
}

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const prerender = false;
async function getStaticPaths() {
  const projects = await getAllProjects();
  return projects.filter((project) => !(project?.frontmatter?.hasNoSubmission || false)).map((project) => project.id).map((projectId) => ({
    params: { projectId }
  }));
}
const $$Solutions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Solutions;
  const { projectId } = Astro2.params;
  const project = await getProjectById(projectId);
  const projectData = project.frontmatter;
  let jsonLdSchema = [];
  const parentRoadmapId = projectData?.roadmapIds?.[0] || "";
  const ogImageUrl = projectData?.seo?.ogImageUrl || "/images/og-img.png";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "permalink": `/projects/${projectId}/solutions`, "title": projectData?.seo?.title, "briefTitle": projectData.title, "ogImageUrl": ogImageUrl, "description": projectData.seo.description, "keywords": projectData.seo.keywords, "jsonLd": jsonLdSchema, "resourceId": projectId }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50"> <div class="container"> ${renderComponent($$result2, "ProjectTabs", ProjectTabs, { "parentRoadmapId": parentRoadmapId, "projectId": projectId, "activeTab": "solutions" })} ${renderComponent($$result2, "ListProjectSolutions", ListProjectSolutions, { "project": projectData, "projectId": projectId, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Projects/ListProjectSolutions", "client:component-export": "ListProjectSolutions" })} ${renderComponent($$result2, "ProjectSolutionModal", null, { "projectId": projectId, "projectTitle": projectData.title, "projectDescription": projectData.description, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/Projects/ProjectSolutionModal", "client:component-export": "ProjectSolutionModal" })} </div> </div> ` })}`;
}, "/workspace/src/pages/projects/[projectId]/solutions.astro", void 0);

const $$file = "/workspace/src/pages/projects/[projectId]/solutions.astro";
const $$url = "/projects/[projectId]/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
