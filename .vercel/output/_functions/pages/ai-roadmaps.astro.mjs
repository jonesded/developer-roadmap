import { a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
/* empty css                                  */
import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { u as useToast } from '../chunks/use-toast_BYLkOsfO.mjs';
import { generateAIRoadmapFromText, renderFlowJSON } from '../chunks/index_DJK1nS1V.mjs';
import { r as replaceChildren } from '../chunks/dom_C6E8wq7N.mjs';
import { u as useOutsideClick, c as cn, S as Spinner, e as httpGet, i as isLoggedIn, l as useKeydown, r as removeAuthToken, b as getUrlParams, d as deleteUrlParam, x as setAIReferralCode, p as pageProgressMessage, A as AuthenticationForm, y as visitAIRoadmap, h as httpPost, $ as $$BaseLayout } from '../chunks/BaseLayout_C3JOBLhD.mjs';
import { Wand, Ban, ArrowUpRight, Telescope, Contact, X, ArrowRight, FileText, Download, Save, PenSquare } from 'lucide-react';
import { s as showLoginPopup } from '../chunks/popup_DWUkHIfQ.mjs';
import { u as useDebounceValue } from '../chunks/use-debounce_BdAoSD5T.mjs';
import { U as UpgradeAccountModal } from '../chunks/UpgradeAccountModal_CxrAT9TD.mjs';
import { u as useIsPaidUser } from '../chunks/billing_BlRWCv4l.mjs';
import { S as ShareRoadmapButton } from '../chunks/ShareRoadmapButton_C-yufPxB.mjs';
import { a as markdownToHtml } from '../chunks/markdown_rbU7j7cH.mjs';
import { a as readAIRoadmapContentStream, I as IS_KEY_ONLY_ROADMAP_GENERATION, b as readAIRoadmapStream, g as generateAICourseRoadmapStructure } from '../chunks/ai_D2DRO333.mjs';
import { A as AIRoadmapAlert } from '../chunks/AIRoadmapAlert_DMrFrkcx.mjs';
import { C as CheckSubscriptionVerification } from '../chunks/CheckSubscriptionVerification_h4-ZR5FJ.mjs';
export { renderers } from '../renderers.mjs';

function AITermSuggestionInput(props) {
  const {
    value: defaultValue,
    onValueChange,
    onSelect,
    inputClassName,
    wrapperClassName,
    placeholder,
    ...inputProps
  } = props;
  useMemo(
    () => /* @__PURE__ */ new Map(),
    []
  );
  const [officialRoadmaps, setOfficialRoadmaps] = useState([]);
  const toast = useToast();
  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);
  const isFirstRender = useRef(true);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchedText, setSearchedText] = useState(defaultValue);
  const [activeCounter, setActiveCounter] = useState(0);
  const debouncedSearchValue = useDebounceValue(searchedText, 300);
  const loadOfficialRoadmaps = async () => {
    if (officialRoadmaps.length > 0) {
      return officialRoadmaps;
    }
    const { error, response } = await httpGet(`/pages.json`);
    if (error) {
      toast.error(error.message || "Something went wrong");
      return;
    }
    if (!response) {
      return [];
    }
    const allRoadmaps = response.filter((page) => page.group === "Roadmaps").sort((a, b) => {
      if (a.title === "Android") return 1;
      return a.title.localeCompare(b.title);
    }).map((page) => ({
      _id: page.id,
      term: page.title,
      title: page.title,
      isOfficial: true
    }));
    setOfficialRoadmaps(allRoadmaps);
    return allRoadmaps;
  };
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      loadOfficialRoadmaps().finally(() => {
      });
    }
  }, []);
  useOutsideClick(dropdownRef, () => {
    setIsActive(false);
  });
  const isFinishedTyping = debouncedSearchValue === searchedText;
  return /* @__PURE__ */ jsxs("div", { className: cn("relative", wrapperClassName), children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ...inputProps,
        ref: searchInputRef,
        type: "text",
        value: defaultValue,
        className: cn(
          "w-full rounded-md border border-gray-400 px-3 py-2.5 pr-8 transition-colors focus:border-black focus:outline-hidden",
          inputClassName
        ),
        placeholder,
        autoComplete: "off",
        onChange: (e) => {
          const value = e.target.value;
          setSearchedText(value);
          onValueChange(value);
        },
        onFocus: () => {
          setIsActive(true);
        },
        onKeyDown: (e) => {
          if (e.key === "ArrowDown") {
            const canGoNext = activeCounter < searchResults.length - 1;
            setActiveCounter(canGoNext ? activeCounter + 1 : 0);
          } else if (e.key === "ArrowUp") {
            const canGoPrev = activeCounter > 0;
            setActiveCounter(
              canGoPrev ? activeCounter - 1 : searchResults.length - 1
            );
          } else if (e.key === "Tab") {
            if (isActive) {
              e.preventDefault();
            }
          } else if (e.key === "Escape") {
            setSearchedText("");
            setIsActive(false);
          } else if (e.key === "Enter") {
            if (!searchResults.length || !isFinishedTyping) {
              return;
            }
            e.preventDefault();
            const activeData = searchResults[activeCounter];
            if (activeData) {
              if (activeData.isOfficial) {
                window.open(`/${activeData._id}`, "_blank")?.focus();
                return;
              }
              onValueChange(activeData.term);
              onSelect?.(activeData._id, activeData.title);
              setIsActive(false);
            }
          }
        }
      }
    ),
    isLoading && /* @__PURE__ */ jsx("div", { className: "absolute right-3 top-0 flex h-full items-center", children: /* @__PURE__ */ jsx(
      Spinner,
      {
        isDualRing: false,
        className: "h-5 w-5 animate-spin stroke-[2.5]"
      }
    ) }),
    isActive && isFinishedTyping && searchResults.length > 0 && searchedText.length > 0 && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-full z-50 mt-1 w-full rounded-md border bg-white p-1 shadow-sm",
        ref: dropdownRef,
        children: /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: searchResults.map((result, counter) => {
          return /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: cn(
                "flex w-full items-start rounded-sm p-2 text-left text-sm",
                counter === activeCounter ? "bg-gray-100" : ""
              ),
              onMouseOver: () => setActiveCounter(counter),
              onClick: () => {
                if (result.isOfficial) {
                  window.location.href = `/${result._id}`;
                  return;
                }
                onValueChange(result?.term);
                onSelect?.(result._id, result.title);
                setSearchedText("");
                setIsActive(false);
              },
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn(
                      "mr-2 whitespace-nowrap rounded-full p-1 px-1.5 text-xs leading-none",
                      result.isOfficial ? "bg-green-500 text-green-50" : "bg-blue-400 text-blue-50"
                    ),
                    children: result.isOfficial ? "Official" : "AI Generated"
                  }
                ),
                result?.title || result?.term
              ]
            },
            result?._id
          );
        }) })
      }
    )
  ] });
}

function RoadmapSearch(props) {
  const {
    roadmapTerm,
    setRoadmapTerm,
    handleSubmit,
    limit = 0,
    limitUsed = 0,
    onLoadTerm,
    loadAIRoadmapLimit,
    isKeyOnly
  } = props;
  const { isPaidUser} = useIsPaidUser();
  const canGenerateMore = limitUsed < limit;
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  useEffect(() => {
    setIsAuthenticatedUser(isLoggedIn());
  }, []);
  const randomTerms = ["OAuth", "UI / UX", "SRE", "DevRel"];
  return /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col items-center px-4 py-6 sm:px-6 md:my-24 lg:my-32", children: [
    isConfiguring && /* @__PURE__ */ jsx(
      UpgradeAccountModal,
      {
        onClose: () => {
          setIsConfiguring(false);
          loadAIRoadmapLimit();
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0 text-center sm:gap-2", children: [
      /* @__PURE__ */ jsxs("h1", { className: "relative text-2xl font-medium sm:text-3xl", children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Generate roadmaps with AI" }),
        /* @__PURE__ */ jsx("span", { className: "inline sm:hidden", children: "AI Roadmap Generator" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-base text-gray-500 sm:text-lg", children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Enter a topic and let the AI generate a roadmap for you" }),
        /* @__PURE__ */ jsx("span", { className: "inline sm:hidden", children: "Enter a topic to generate a roadmap" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "my-3 flex w-full max-w-[600px] flex-col items-center gap-3 sm:my-5", children: [
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: (e) => {
            if (limit > 0 && canGenerateMore) {
              handleSubmit(e);
            } else {
              e.preventDefault();
            }
          },
          className: "flex w-full flex-col gap-2 sm:flex-row",
          children: [
            /* @__PURE__ */ jsx(
              AITermSuggestionInput,
              {
                autoFocus: true,
                value: roadmapTerm,
                onValueChange: (value) => setRoadmapTerm(value),
                placeholder: "Enter a topic to generate a roadmap for",
                wrapperClassName: "w-full",
                onSelect: (roadmapId, roadmapTitle) => {
                  onLoadTerm(roadmapTitle);
                }
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: cn(
                  "flex min-w-[154px] shrink-0 items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-white",
                  "disabled:cursor-not-allowed disabled:opacity-50"
                ),
                onClick: (e) => {
                  if (!isAuthenticatedUser) {
                    e.preventDefault();
                    showLoginPopup();
                  }
                },
                disabled: isLoadingResults || isAuthenticatedUser && (!limit || !roadmapTerm || limitUsed >= limit || isKeyOnly),
                children: [
                  isLoadingResults && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("span", { children: "Please wait.." }) }),
                  !isLoadingResults && /* @__PURE__ */ jsxs(Fragment, { children: [
                    !isAuthenticatedUser && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(Wand, { size: 20 }),
                      "Generate"
                    ] }),
                    isAuthenticatedUser && /* @__PURE__ */ jsxs(Fragment, { children: [
                      (!limit || canGenerateMore) && /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(Wand, { size: 20 }),
                        "Generate"
                      ] }),
                      limit > 0 && !canGenerateMore && /* @__PURE__ */ jsxs("span", { className: "flex items-center text-base", children: [
                        /* @__PURE__ */ jsx(Ban, { size: 15, className: "mr-2" }),
                        "Limit reached"
                      ] })
                    ] })
                  ] })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap items-center justify-center gap-2", children: [
        randomTerms.map((term) => /* @__PURE__ */ jsxs(
          "button",
          {
            disabled: isAuthenticatedUser && (!limit || !canGenerateMore),
            type: "button",
            onClick: () => {
              if (!isAuthenticatedUser) {
                showLoginPopup();
                return;
              }
              onLoadTerm(term);
            },
            className: "flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-sm transition-colors hover:border-black hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",
            children: [
              term,
              " ",
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 17 })
            ]
          },
          term
        )),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/ai-roadmaps/explore",
            className: "flex items-center gap-1.5 rounded-full border border-black bg-gray-700 px-2 py-0.5 text-sm text-white transition-colors hover:border-black hover:bg-black",
            children: [
              "Explore AI Roadmaps ",
              /* @__PURE__ */ jsx(Telescope, { size: 17 })
            ]
          }
        )
      ] })
    ] }),
    !isAuthenticatedUser && /* @__PURE__ */ jsxs("div", { className: "mt-8 flex max-w-[500px] flex-col items-center gap-3 rounded-xl border border-gray-400 px-4 pb-4 pt-3", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-center text-gray-500", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: showLoginPopup,
            className: "font-medium text-purple-600 underline underline-offset-2 hover:text-purple-800",
            children: "Sign up (free and takes 2s) or login"
          }
        ),
        " ",
        "to start generating roadmaps. Or explore the ones made by the community."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "flex flex-col gap-2 text-center text-gray-500 sm:flex-row", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/ai-roadmaps/explore",
            className: "flex items-center gap-1.5 rounded-full border border-purple-600 px-2.5 py-0.5 text-sm text-purple-600 transition-colors hover:bg-purple-600 hover:text-white",
            children: [
              "Explore AI Generated Roadmaps ",
              /* @__PURE__ */ jsx(Telescope, { size: 15 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/roadmaps",
            className: "flex items-center gap-1.5 rounded-full border border-purple-600 px-2.5 py-0.5 text-sm text-purple-600 transition-colors hover:bg-purple-600 hover:text-white",
            children: [
              "Visit Official Roadmaps ",
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })
            ]
          }
        )
      ] })
    ] }),
    isKeyOnly && isAuthenticatedUser && !isPaidUser && /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-12 flex max-w-[450px] flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-center text-red-500", children: [
        "We have hit the limit for AI roadmap generation. Please try again again later or",
        " ",
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsConfiguring(true),
            className: "font-semibold text-purple-600 underline underline-offset-2",
            children: "get more credits."
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "flex flex-col gap-2 text-center text-gray-500 sm:flex-row", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/ai-roadmaps/explore",
            className: "flex items-center gap-1.5 rounded-full border border-purple-600 px-2.5 py-0.5 text-sm text-purple-600 transition-colors hover:bg-purple-600 hover:text-white",
            children: [
              "Explore AI Roadmaps ",
              /* @__PURE__ */ jsx(Telescope, { size: 15 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/roadmaps",
            className: "flex items-center gap-1.5 rounded-full border border-purple-600 px-2.5 py-0.5 text-sm text-purple-600 transition-colors hover:bg-purple-600 hover:text-white",
            children: [
              "Visit Official Roadmaps ",
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })
            ]
          }
        )
      ] })
    ] }),
    !isKeyOnly && limit > 0 && isAuthenticatedUser && !isPaidUser && /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-center text-gray-500", children: [
        "You have generated",
        " ",
        /* @__PURE__ */ jsxs(
          "span",
          {
            className: "inline-block min-w-[50px] rounded-xl border px-1.5 text-center text-sm tabular-nums text-gray-800",
            children: [
              limitUsed,
              " of ",
              limit
            ]
          }
        ),
        " ",
        "roadmaps today."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "flex items-center text-sm", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsConfiguring(true),
          className: "rounded-xl border border-current px-2 py-0.5 text-sm text-blue-500 transition-colors hover:bg-blue-400 hover:text-white",
          children: [
            "Need to generate more?",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Click here." })
          ]
        }
      ) })
    ] })
  ] });
}

async function downloadGeneratedRoadmapImage(name, node) {
  const watermark = document.createElement("div");
  watermark.className = "flex justify-end absolute top-4 right-4 gap-2";
  watermark.innerHTML = `
    <span
      class='rounded-md bg-black py-2 px-2 text-white'
    >
      roadmap.sh
    </span>
  `;
  node.insertAdjacentElement("afterbegin", watermark);
  const domtoimage = (await import('dom-to-image')).default;
  if (!domtoimage) {
    throw new Error("Unable to download image");
  }
  const dataUrl = await domtoimage.toJpeg(node, {
    bgcolor: "white",
    quality: 1
  });
  node?.removeChild(watermark);
  const link = document.createElement("a");
  link.download = `${name}-roadmap.jpg`;
  link.href = dataUrl;
  link.click();
}

function RoadmapTopicDetail(props) {
  const {
    onClose,
    roadmapId,
    nodeTitle,
    parentTitle,
    topicLimit,
    topicLimitUsed,
    onTopicContentGenerateComplete,
    onConfigureOpenAI
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [topicHtml, setTopicHtml] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const topicRef = useRef(null);
  const abortController = useMemo(() => new AbortController(), []);
  const generateAiRoadmapTopicContent = async () => {
    setIsLoading(true);
    setError("");
    if (!isLoggedIn()) {
      return;
    }
    if (!roadmapId || !nodeTitle) {
      setIsLoading(false);
      setError("Invalid roadmap id or node title");
      return;
    }
    const response = await fetch(
      `${"https://api.roadmap.sh"}/v1-generate-ai-roadmap-content/${roadmapId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          nodeTitle,
          parentTitle
        }),
        signal: abortController.signal
      }
    );
    if (!response.ok) {
      const data = await response.json();
      setError(data?.message || "Something went wrong");
      setIsLoading(false);
      if (data.status === 401) {
        removeAuthToken();
        window.location.reload();
      }
    }
    const reader = response.body?.getReader();
    if (!reader) {
      setIsLoading(false);
      setError("Something went wrong");
      return;
    }
    setIsLoading(false);
    setIsStreaming(true);
    await readAIRoadmapContentStream(reader, {
      onStream: async (result) => {
        setTopicHtml(markdownToHtml(result, false));
      },
      onStreamEnd(roadmap) {
        setIsStreaming(false);
      }
    });
    onTopicContentGenerateComplete?.();
  };
  useOutsideClick(topicRef, () => {
    onClose?.();
  });
  useKeydown("Escape", () => {
    onClose?.();
  });
  useEffect(() => {
    if (!topicRef?.current) {
      return;
    }
    topicRef?.current?.focus();
    generateAiRoadmapTopicContent().finally(() => {
    });
    return () => {
      abortController.abort();
    };
  }, []);
  const hasContent = topicHtml?.length > 0;
  return /* @__PURE__ */ jsxs("div", { className: "relative z-92", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: topicRef,
        tabIndex: 0,
        className: "fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white p-4 focus:outline-0 sm:max-w-[600px] sm:p-6",
        children: [
          isLoggedIn() && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-2 sm:flex-row", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: cn(
                    "mr-0.5 inline-block rounded-xl border px-1.5 text-center text-sm tabular-nums text-gray-800",
                    {
                      "animate-pulse border-zinc-300 bg-zinc-300 text-zinc-300": !topicLimit
                    }
                  ),
                  children: [
                    topicLimitUsed,
                    " of ",
                    topicLimit
                  ]
                }
              ),
              " ",
              "topics generated"
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "rounded-xl border border-current px-1.5 py-0.5 text-left text-sm font-medium text-blue-500 sm:text-center",
                onClick: onConfigureOpenAI,
                children: [
                  "Need more? ",
                  /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Click here." })
                ]
              }
            )
          ] }),
          isLoggedIn() && isLoading && /* @__PURE__ */ jsx("div", { className: "mt-6 flex w-full justify-center", children: /* @__PURE__ */ jsx(
            Spinner,
            {
              outerFill: "#d1d5db",
              className: "h-6 w-6 sm:h-12 sm:w-12",
              innerFill: "#2563eb"
            }
          ) }),
          !isLoggedIn() && /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsx(Contact, { className: "mb-3.5 h-14 w-14 text-gray-200" }),
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium", children: "You must be logged in" }),
            /* @__PURE__ */ jsx("p", { className: "text-base text-gray-400", children: "Sign up or login to generate topic content." }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "mt-3.5 w-full max-w-[300px] rounded-md bg-black px-3 py-2 text-base font-medium text-white",
                onClick: showLoginPopup,
                children: "Sign up / Login"
              }
            )
          ] }),
          !isLoading && !error && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                id: "close-topic",
                className: "absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",
                onClick: onClose,
                children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
              }
            ) }),
            hasContent ? /* @__PURE__ */ jsxs("div", { className: "prose prose-quoteless prose-h1:mb-2.5 prose-h1:mt-7 prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:m-0 prose-li:mb-0.5", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  id: "topic-content",
                  dangerouslySetInnerHTML: { __html: topicHtml }
                }
              ),
              !isStreaming && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/ai",
                  className: "mb-1 mt-2 inline-flex items-center rounded-md bg-yellow-400 px-3 py-2 text-sm font-medium text-gray-800 no-underline hover:bg-yellow-500",
                  children: [
                    "Dive deeper using AI Tutor",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                  ]
                }
              ) })
            ] }) : /* @__PURE__ */ jsxs("div", { className: "flex h-[calc(100%-38px)] flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-16 w-16 text-gray-300" }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg font-medium text-gray-500", children: "Empty Content" })
            ] })
          ] }),
          !isLoading && error && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                id: "close-topic",
                className: "absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",
                onClick: onClose,
                children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsx(Ban, { className: "h-16 w-16 text-red-500" }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg font-medium text-red-500", children: error })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-30 bg-gray-900/50" })
  ] });
}

const ROADMAP_ID_REGEX = new RegExp("@ROADMAPID:(\\w+)@");
const ROADMAP_SLUG_REGEX = new RegExp(/@ROADMAPSLUG:([\w-]+)@/);
function getNodeDetails(svgElement) {
  const targetGroup = svgElement?.closest("g") || {};
  const nodeId = targetGroup?.dataset?.nodeId;
  const nodeType = targetGroup?.dataset?.type;
  const nodeTitle = targetGroup?.dataset?.title;
  const parentTitle = targetGroup?.dataset?.parentTitle;
  const parentId = targetGroup?.dataset?.parentId;
  if (!nodeId || !nodeType) return null;
  return { nodeId, nodeType, targetGroup, nodeTitle, parentTitle, parentId };
}
const allowedClickableNodeTypes = [
  "topic",
  "subtopic",
  "button",
  "link-item"
];
function GenerateRoadmap(props) {
  const {
    roadmapId: defaultRoadmapId,
    slug: defaultRoadmapSlug,
    isAuthenticatedUser = isLoggedIn()
  } = props;
  const roadmapContainerRef = useRef(null);
  const { isPaidUser} = useIsPaidUser();
  const { rc: referralCode } = getUrlParams();
  const toast = useToast();
  const [roadmapId, setRoadmapId] = useState(
    defaultRoadmapId
  );
  const [roadmapSlug, setRoadmapSlug] = useState(
    defaultRoadmapSlug
  );
  const [hasSubmitted, setHasSubmitted] = useState(Boolean(roadmapId));
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [roadmapTerm, setRoadmapTerm] = useState("");
  const [currentRoadmap, setCurrentRoadmap] = useState(null);
  const [generatedRoadmapContent, setGeneratedRoadmapContent] = useState("");
  const [selectedNode, setSelectedNode] = useState(
    null
  );
  const [roadmapLimit, setRoadmapLimit] = useState(0);
  const [roadmapLimitUsed, setRoadmapLimitUsed] = useState(0);
  const [roadmapTopicLimit, setRoadmapTopicLimit] = useState(0);
  const [roadmapTopicLimitUsed, setRoadmapTopicLimitUsed] = useState(0);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const isKeyOnly = IS_KEY_ONLY_ROADMAP_GENERATION;
  const renderRoadmap = async (roadmap) => {
    generateAICourseRoadmapStructure(roadmap);
    const { nodes, edges } = generateAIRoadmapFromText();
    const svg = await renderFlowJSON();
    if (roadmapContainerRef?.current) {
      replaceChildren(roadmapContainerRef?.current, svg);
    }
  };
  const loadTermRoadmap = async (term) => {
    setIsLoading(true);
    setHasSubmitted(true);
    deleteUrlParam("id");
    setCurrentRoadmap(null);
    const origin = window.location.origin;
    const response = await fetch(
      `${"https://api.roadmap.sh"}/v1-generate-ai-roadmap`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ term })
      }
    );
    if (!response.ok) {
      const data = await response.json();
      toast.error(data?.message || "Something went wrong");
      setIsLoading(false);
      if (data.status === 401) {
        removeAuthToken();
        window.location.reload();
      }
    }
    const reader = response.body?.getReader();
    if (!reader) {
      setIsLoading(false);
      toast.error("Something went wrong");
      return;
    }
    await readAIRoadmapStream(reader, {
      onStream: async (result) => {
        if (result.includes("@ROADMAPID") || result.includes("@ROADMAPSLUG")) {
          const roadmapId2 = result.match(ROADMAP_ID_REGEX)?.[1] || "";
          const roadmapSlug2 = result.match(ROADMAP_SLUG_REGEX)?.[1] || "";
          if (roadmapSlug2) {
            window.history.pushState(
              {
                roadmapId: roadmapId2,
                roadmapSlug: roadmapSlug2
              },
              "",
              `${origin}/ai-roadmaps/${roadmapSlug2}`
            );
          }
          result = result.replace(ROADMAP_ID_REGEX, "").replace(ROADMAP_SLUG_REGEX, "");
          setRoadmapId(roadmapId2);
          setRoadmapSlug(roadmapSlug2);
          const roadmapTitle = result.trim().split("\n")[0]?.replace("#", "")?.trim() || term;
          setRoadmapTerm(roadmapTitle);
          setCurrentRoadmap({
            id: roadmapId2,
            term: roadmapTerm,
            title: roadmapTitle,
            data: result
          });
        }
        await renderRoadmap(result);
      },
      onStreamEnd: async (result) => {
        result = result.replace(ROADMAP_ID_REGEX, "").replace(ROADMAP_SLUG_REGEX, "");
        setGeneratedRoadmapContent(result);
        loadAIRoadmapLimit().finally(() => {
        });
      }
    });
    setIsLoading(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!roadmapTerm || isLoadingResults) {
      return;
    }
    if (roadmapTerm === currentRoadmap?.term) {
      return;
    }
    loadTermRoadmap(roadmapTerm).finally(() => null);
  };
  const saveAIRoadmap = async () => {
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    pageProgressMessage.set("Redirecting to Editor");
    const { nodes, edges } = generateAIRoadmapFromText();
    const { response, error } = await httpPost(
      `${"https://api.roadmap.sh"}/v1-save-ai-roadmap/${currentRoadmap?.id}`,
      {
        title: roadmapTerm,
        nodes: nodes.map((node) => ({
          ...node,
          // To reset the width and height of the node
          // so that it can be calculated based on the content in the editor
          width: void 0,
          height: void 0,
          style: {
            ...node.style,
            width: void 0,
            height: void 0
          },
          measured: {
            width: void 0,
            height: void 0
          }
        })),
        edges
      }
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      pageProgressMessage.set("");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    pageProgressMessage.set("");
    return {
      roadmapId: response.roadmapId,
      roadmapSlug: response.roadmapSlug
    };
  };
  const downloadGeneratedRoadmapContent = async () => {
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    pageProgressMessage.set("Downloading Roadmap");
    const node = document.getElementById("roadmap-container");
    if (!node) {
      toast.error("Something went wrong");
      return;
    }
    try {
      await downloadGeneratedRoadmapImage(roadmapTerm, node);
      pageProgressMessage.set("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  const loadAIRoadmapLimit = async () => {
    const { response, error } = await httpGet(
      `${"https://api.roadmap.sh"}/v1-get-ai-roadmap-limit`
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      return;
    }
    const { limit, used, topicLimit, topicUsed } = response;
    setRoadmapLimit(limit);
    setRoadmapLimitUsed(used);
    setRoadmapTopicLimit(topicLimit);
    setRoadmapTopicLimitUsed(topicUsed);
  };
  const loadAIRoadmap = async (roadmapId2) => {
    pageProgressMessage.set("Loading Roadmap");
    const { response, error } = await httpGet(`${"https://api.roadmap.sh"}/v1-get-ai-roadmap/${roadmapId2}`);
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      setIsLoading(false);
      return;
    }
    const { term, title, data } = response;
    await renderRoadmap(data);
    setCurrentRoadmap({
      id: roadmapId2,
      title,
      term,
      data
    });
    setRoadmapTerm(title || term);
    setGeneratedRoadmapContent(data);
    visitAIRoadmap(roadmapId2);
  };
  const handleNodeClick = useCallback(
    (e) => {
      if (isLoading) {
        return;
      }
      const target = e.target;
      const { nodeId, nodeType, targetGroup, nodeTitle, parentTitle } = getNodeDetails(target) || {};
      if (!nodeId || !nodeType || !allowedClickableNodeTypes.includes(nodeType) || !nodeTitle)
        return;
      if (nodeType === "button" || nodeType === "link-item") {
        const link = targetGroup?.dataset?.link || "";
        const isExternalLink = link.startsWith("http");
        if (isExternalLink) {
          window.open(link, "_blank");
        } else {
          window.location.href = link;
        }
        return;
      }
      setSelectedNode({
        nodeId,
        nodeType,
        nodeTitle,
        ...nodeType === "subtopic" && { parentTitle }
      });
    },
    [isLoading]
  );
  useEffect(() => {
    loadAIRoadmapLimit().finally(() => {
    });
  }, []);
  useEffect(() => {
    if (!referralCode || isLoggedIn()) {
      deleteUrlParam("rc");
      return;
    }
    setAIReferralCode(referralCode);
    deleteUrlParam("rc");
    showLoginPopup();
  }, []);
  useEffect(() => {
    if (!roadmapId || roadmapId === currentRoadmap?.id) {
      return;
    }
    loadAIRoadmap(roadmapId).finally(() => {
      pageProgressMessage.set("");
    });
  }, [roadmapId, currentRoadmap]);
  useEffect(() => {
    const handlePopState = (e) => {
      const { roadmapId: roadmapId2, roadmapSlug: roadmapSlug2 } = e.state || {};
      if (!roadmapId2 || !roadmapSlug2) {
        window.location.reload();
        return;
      }
      setIsLoading(true);
      setHasSubmitted(true);
      setRoadmapId(roadmapId2);
      setRoadmapSlug(roadmapSlug2);
      loadAIRoadmap(roadmapId2).finally(() => {
        setIsLoading(false);
        pageProgressMessage.set("");
      });
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  if (!hasSubmitted) {
    return /* @__PURE__ */ jsx(
      RoadmapSearch,
      {
        roadmapTerm,
        setRoadmapTerm,
        handleSubmit,
        limit: roadmapLimit,
        limitUsed: roadmapLimitUsed,
        loadAIRoadmapLimit,
        isKeyOnly,
        onLoadTerm: (term) => {
          setRoadmapTerm(term);
          loadTermRoadmap(term).finally(() => {
          });
        }
      }
    );
  }
  const pageUrl = `https://roadmap.sh/ai-roadmaps/${roadmapSlug}`;
  const canGenerateMore = roadmapLimitUsed < roadmapLimit || isPaidUser;
  const isGenerateButtonDisabled = isLoadingResults || isAuthenticatedUser && // if no limit,
  (!roadmapLimit || // no roadmap term,
  !roadmapTerm || // if limit is reached and user is not paid user,
  roadmapLimitUsed >= roadmapLimit && !isPaidUser || // if roadmap term is the same as the current roadmap term,
  roadmapTerm === currentRoadmap?.term || // if key only,
  isKeyOnly);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isConfiguring && /* @__PURE__ */ jsx(
      UpgradeAccountModal,
      {
        onClose: () => {
          setIsConfiguring(false);
          loadAIRoadmapLimit().finally(() => null);
        }
      }
    ),
    selectedNode && currentRoadmap && !isLoading && /* @__PURE__ */ jsx(
      RoadmapTopicDetail,
      {
        nodeId: selectedNode.nodeId,
        nodeType: selectedNode.nodeType,
        nodeTitle: selectedNode.nodeTitle,
        parentTitle: selectedNode.parentTitle,
        onConfigureOpenAI: () => {
          setSelectedNode(null);
          setIsConfiguring(true);
        },
        onClose: () => {
          setSelectedNode(null);
          loadAIRoadmapLimit().finally(() => {
          });
        },
        roadmapId: currentRoadmap?.id || "",
        topicLimit: roadmapTopicLimit,
        topicLimitUsed: roadmapTopicLimitUsed,
        onTopicContentGenerateComplete: async () => {
          await loadAIRoadmapLimit();
        }
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "flex grow flex-col bg-gray-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center border-b bg-white py-3 sm:py-6", children: [
        isLoading && /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 rounded-full bg-black px-3 py-1 text-white", children: [
          /* @__PURE__ */ jsx(Spinner, { isDualRing: false, innerFill: "white" }),
          "Generating roadmap .."
        ] }),
        !isLoading && /* @__PURE__ */ jsxs("div", { className: "container flex grow flex-col items-start", children: [
          /* @__PURE__ */ jsx(AIRoadmapAlert, {}),
          isKeyOnly,
          isAuthenticatedUser && !isPaidUser && /* @__PURE__ */ jsxs("div", { className: "mt-2 flex w-full flex-col items-start justify-between gap-2 text-sm sm:flex-row sm:items-center sm:gap-0", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: cn(
                    "mr-0.5 inline-block rounded-xl border px-1.5 text-center text-sm tabular-nums text-gray-800",
                    {
                      "animate-pulse border-zinc-300 bg-zinc-300 text-zinc-300": !roadmapLimit
                    }
                  ),
                  children: [
                    roadmapLimitUsed,
                    " of ",
                    roadmapLimit
                  ]
                }
              ),
              " ",
              "roadmaps generated today."
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setIsConfiguring(true),
                className: "rounded-xl border border-current px-2 py-0.5 text-left text-sm text-blue-500 transition-colors hover:bg-blue-400 hover:text-white",
                children: [
                  "Need to generate more?",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Click here." })
                ]
              }
            )
          ] }),
          !isAuthenticatedUser && /* @__PURE__ */ jsx(
            "button",
            {
              className: "mt-2 rounded-xl border border-current px-2.5 py-0.5 text-left text-sm font-medium text-blue-500 transition-colors hover:bg-blue-500 hover:text-white sm:text-center",
              onClick: showLoginPopup,
              children: "Login to generate your own roadmaps"
            }
          ),
          /* @__PURE__ */ jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "my-3 flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-center",
              children: [
                /* @__PURE__ */ jsx(
                  AITermSuggestionInput,
                  {
                    value: roadmapTerm,
                    onValueChange: (value) => setRoadmapTerm(value),
                    placeholder: "e.g. Try searching for Ansible or DevOps",
                    wrapperClassName: "grow",
                    onSelect: (id, title) => {
                      loadTermRoadmap(title).finally(() => null);
                    }
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "submit",
                    className: cn(
                      "flex min-w-[127px] shrink-0 items-center justify-center gap-2 rounded-md bg-black px-4 py-2.5 text-white",
                      "disabled:cursor-not-allowed disabled:opacity-50"
                    ),
                    onClick: (e) => {
                      if (!isAuthenticatedUser) {
                        e.preventDefault();
                        showLoginPopup();
                      }
                    },
                    disabled: isGenerateButtonDisabled,
                    children: [
                      isLoadingResults && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("span", { children: "Please wait.." }) }),
                      !isLoadingResults && /* @__PURE__ */ jsxs(Fragment, { children: [
                        !isAuthenticatedUser && /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx(Wand, { size: 20 }),
                          "Generate"
                        ] }),
                        isAuthenticatedUser && /* @__PURE__ */ jsxs(Fragment, { children: [
                          roadmapLimit > 0 && canGenerateMore && /* @__PURE__ */ jsxs(Fragment, { children: [
                            /* @__PURE__ */ jsx(Wand, { size: 20 }),
                            "Generate"
                          ] }),
                          roadmapLimit === 0 && /* @__PURE__ */ jsx("span", { children: "Please wait.." }),
                          roadmapLimit > 0 && !canGenerateMore && /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                            /* @__PURE__ */ jsx(Ban, { size: 15, className: "mr-2" }),
                            "Limit reached"
                          ] })
                        ] })
                      ] })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "inline-flex items-center justify-center gap-2 rounded-md bg-yellow-400 py-1.5 pl-2.5 pr-3 text-xs font-medium transition-opacity duration-300 hover:bg-yellow-500 sm:text-sm",
                  onClick: downloadGeneratedRoadmapContent,
                  children: [
                    /* @__PURE__ */ jsx(Download, { size: 15 }),
                    "Download"
                  ]
                }
              ),
              roadmapId && /* @__PURE__ */ jsx(
                ShareRoadmapButton,
                {
                  description: `Check out ${roadmapTerm} roadmap I generated on roadmap.sh`,
                  pageUrl
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "inline-flex items-center justify-center gap-2 rounded-md bg-gray-200 py-1.5 pl-2.5 pr-3 text-xs font-medium text-black transition-colors duration-300 hover:bg-gray-300 sm:text-sm",
                  onClick: async () => {
                    const response = await saveAIRoadmap();
                    if (response?.roadmapSlug) {
                      window.location.href = `/r/${response.roadmapSlug}`;
                    }
                  },
                  disabled: isLoading,
                  children: [
                    /* @__PURE__ */ jsx(Save, { size: 15 }),
                    /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Save and Start Learning" }),
                    /* @__PURE__ */ jsx("span", { className: "inline sm:hidden", children: "Start Learning" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "hidden items-center justify-center gap-2 rounded-md bg-gray-200 py-1.5 pl-2.5 pr-3 text-xs font-medium text-black transition-colors duration-300 hover:bg-gray-300 sm:inline-flex sm:text-sm",
                  onClick: async () => {
                    const response = await saveAIRoadmap();
                    if (response?.roadmapId) {
                      window.open(
                        `${"https://draw.roadmap.sh"}/${response?.roadmapId}`,
                        "_blank"
                      );
                    }
                  },
                  disabled: isLoading,
                  children: [
                    /* @__PURE__ */ jsx(PenSquare, { size: 15 }),
                    "Edit in Editor"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn({
            "relative mb-20 max-h-[800px] min-h-[800px] overflow-hidden sm:max-h-[1000px] md:min-h-[1000px] lg:max-h-[1200px] lg:min-h-[1200px]": !isAuthenticatedUser
          }),
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                ref: roadmapContainerRef,
                id: "roadmap-container",
                onClick: handleNodeClick,
                className: "relative min-h-[400px] px-4 py-5 [&>svg]:mx-auto [&>svg]:max-w-[1300px]"
              }
            ),
            !isAuthenticatedUser && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0", children: [
              /* @__PURE__ */ jsx("div", { className: "h-80 w-full bg-linear-to-t from-gray-100 to-transparent" }),
              /* @__PURE__ */ jsx("div", { className: "bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[600px] flex-col items-center justify-center bg-gray-100 px-5 pt-px", children: [
                /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center", children: [
                  /* @__PURE__ */ jsx("h2", { className: "mb-0.5 text-xl font-medium sm:mb-3 sm:text-2xl", children: "Sign up to View the full roadmap" }),
                  /* @__PURE__ */ jsx("p", { className: "mb-6 text-balance text-sm text-gray-600 sm:text-base", children: "You must be logged in to view the complete roadmap" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[350px]", children: [
                  /* @__PURE__ */ jsx(AuthenticationForm, { type: "signup" }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center text-sm text-slate-600", children: [
                    "Already have an account?",
                    " ",
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: "/login",
                        className: "font-medium text-blue-700 hover:text-blue-600",
                        children: "Login"
                      }
                    )
                  ] })
                ] })
              ] }) })
            ] })
          ]
        }
      )
    ] })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Roadmap AI", "permalink": "/ai-roadmaps" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GenerateRoadmap", GenerateRoadmap, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/GenerateRoadmap/GenerateRoadmap", "client:component-export": "GenerateRoadmap" })} ${renderComponent($$result2, "CheckSubscriptionVerification", CheckSubscriptionVerification, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Billing/CheckSubscriptionVerification", "client:component-export": "CheckSubscriptionVerification" })} ` })}`;
}, "/workspace/src/pages/ai-roadmaps/index.astro", void 0);

const $$file = "/workspace/src/pages/ai-roadmaps/index.astro";
const $$url = "/ai-roadmaps";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
