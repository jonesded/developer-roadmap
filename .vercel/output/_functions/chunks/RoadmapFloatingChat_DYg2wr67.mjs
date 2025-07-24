import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { Loader2Icon, BookOpen, Plus, SquareArrowOutUpRight, X, ChevronDown, PersonStanding, Trash2, PauseCircleIcon, SendIcon, Wand2, MessageCirclePlus } from 'lucide-react';
import { useState, useRef, useMemo, useEffect, Fragment as Fragment$1 } from 'react';
import { flushSync } from 'react-dom';
import { c as cn, i as isLoggedIn, l as useKeydown } from './BaseLayout_C3JOBLhD.mjs';
import { r as roadmapJSONOptions, c as chatHistoryOptions, a as roadmapAIChatRenderer, u as useRoadmapAIChat } from './ListChatHistory_DlOCoRfC.mjs';
import { l as lockBodyScroll } from './dom_C6E8wq7N.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { s as slugify } from './slugger_ChlNJxtz.mjs';
import { a as aiLimitOptions } from './ai-course_IUwlyb1o.mjs';
import { b as billingDetailsOptions } from './billing_BlRWCv4l.mjs';
import { h as httpGet, q as queryClient } from './query-client_B4F1D3EC.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_CxrAT9TD.mjs';
import { U as UpdatePersonaModal, R as RoadmapAIChatHistory, a as RoadmapAIChatCard } from './UpdatePersonaModal_CmDp_pWg.mjs';
import { C as CLOSE_TOPIC_DETAIL_EVENT } from './TopicDetail_DodOcJxQ.mjs';

function roadmapQuestionsOptions(roadmapId) {
  return queryOptions({
    queryKey: ["roadmap-questions", roadmapId],
    queryFn: () => {
      return httpGet(`/v1-official-roadmap-questions/${roadmapId}`);
    },
    refetchOnMount: false
  });
}

function ChatHeaderButton(props) {
  const { onClick, href, icon, children, className, target } = props;
  const classNames = cn(
    "flex shrink-0 items-center gap-1.5 text-xs text-gray-600 transition-colors hover:text-gray-900 min-w-8",
    className
  );
  if (!onClick && !href) {
    return /* @__PURE__ */ jsxs("span", { className: classNames, children: [
      icon,
      children && /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children })
    ] });
  }
  if (href) {
    return /* @__PURE__ */ jsxs(
      "a",
      {
        href,
        target,
        rel: "noopener noreferrer",
        className: classNames,
        children: [
          icon,
          children && /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs("button", { onClick, className: classNames, children: [
    icon,
    children && /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children })
  ] });
}
function UpgradeMessage(props) {
  const { onUpgradeClick } = props;
  return /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 bg-black px-3 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
    /* @__PURE__ */ jsx(Wand2, { className: "h-4 w-4 flex-shrink-0 text-white" }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 text-sm", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-1 font-medium text-white", children: "You've reached your AI usage limit" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-300", children: "Upgrade to Pro for relaxed limits and advanced features" })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "flex-shrink-0 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black transition-colors hover:bg-gray-100",
        onClick: onUpgradeClick,
        children: "Upgrade to Pro"
      }
    )
  ] }) });
}
function UsageButton(props) {
  const { percentageUsed, onUpgradeClick } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: onUpgradeClick,
      className: "flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition-all hover:bg-yellow-200",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-1.5 sm:flex", children: [
          /* @__PURE__ */ jsx("div", { className: "h-1.5 w-6 overflow-hidden rounded-full bg-gray-200", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "h-full transition-all duration-300",
                percentageUsed >= 90 ? "bg-red-500" : percentageUsed >= 70 ? "bg-yellow-500" : "bg-green-500"
              ),
              style: { width: `${Math.min(percentageUsed, 100)}%` }
            }
          ) }),
          /* @__PURE__ */ jsxs("span", { className: "text-yellow-700", children: [
            percentageUsed,
            "% used"
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-yellow-800 underline underline-offset-2", children: "Upgrade" })
      ]
    }
  );
}
function RoadmapFloatingChat(props) {
  const { roadmapId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const scrollareaRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const { data: questionsData } = useQuery(
    roadmapQuestionsOptions(roadmapId),
    queryClient
  );
  const defaultQuestions = useMemo(() => {
    if (!questionsData?.questions || questionsData.questions.length === 0) {
      return [];
    }
    const shuffled = [...questionsData.questions].sort(
      () => 0.5 - Math.random()
    );
    return shuffled.slice(0, 4);
  }, [questionsData]);
  const { data: roadmapDetail, isLoading: isRoadmapDetailLoading } = useQuery(
    roadmapJSONOptions(roadmapId),
    queryClient
  );
  const isAuthenticatedUser = isLoggedIn();
  const { data: tokenUsage, isLoading: isTokenUsageLoading } = useQuery(
    aiLimitOptions(),
    queryClient
  );
  const isLimitExceeded = isAuthenticatedUser && (tokenUsage?.used || 0) >= (tokenUsage?.limit || 0);
  const percentageUsed = Math.round(
    (tokenUsage?.used || 0) / (tokenUsage?.limit || 0) * 100
  );
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const isPaidUser = userBillingDetails?.status === "active";
  const totalTopicCount = useMemo(() => {
    const allowedTypes = ["topic", "subtopic", "todo"];
    return roadmapDetail?.json?.nodes.filter(
      (node) => allowedTypes.includes(node.type || "")
    ).length ?? 0;
  }, [roadmapDetail]);
  const onSelectTopic = (topicId, topicTitle) => {
    const topicSlug = slugify(topicTitle) + "@" + topicId;
    window.dispatchEvent(
      new CustomEvent("roadmap.node.click", {
        detail: {
          resourceType: "roadmap",
          resourceId: roadmapId,
          topicId: topicSlug,
          isCustomResource: false
        }
      })
    );
    flushSync(() => {
      setIsOpen(true);
    });
  };
  const [isChatHistoryLoading, setIsChatHistoryLoading] = useState(true);
  const [activeChatHistoryId, setActiveChatHistoryId] = useState();
  const { data: chatHistory } = useQuery(
    chatHistoryOptions(
      activeChatHistoryId,
      roadmapAIChatRenderer({
        roadmapId,
        totalTopicCount,
        onSelectTopic
      })
    ),
    queryClient
  );
  const {
    aiChatHistory,
    isStreamingMessage,
    streamedMessage,
    showScrollToBottom,
    setShowScrollToBottom,
    handleChatSubmit,
    handleAbort,
    scrollToBottom,
    clearChat,
    setAiChatHistory
  } = useRoadmapAIChat({
    activeChatHistoryId,
    roadmapId,
    totalTopicCount,
    scrollareaRef,
    onSelectTopic,
    onChatHistoryIdChange: (chatHistoryId) => {
      setActiveChatHistoryId(chatHistoryId);
    }
  });
  useEffect(() => {
    if (!chatHistory) {
      return;
    }
    setAiChatHistory(chatHistory?.messages ?? []);
    setIsChatHistoryLoading(false);
    setTimeout(() => {
      scrollToBottom("instant");
    }, 0);
  }, [chatHistory]);
  useEffect(() => {
    if (activeChatHistoryId) {
      return;
    }
    setAiChatHistory([]);
    setIsChatHistoryLoading(false);
  }, [activeChatHistoryId, setAiChatHistory, setIsChatHistoryLoading]);
  useEffect(() => {
    lockBodyScroll(isOpen);
  }, [isOpen]);
  useKeydown("Escape", () => {
    setIsOpen(false);
  });
  useEffect(() => {
    const handleCloseTopicDetail = () => {
      lockBodyScroll(isOpen);
    };
    window.addEventListener(CLOSE_TOPIC_DETAIL_EVENT, handleCloseTopicDetail);
    return () => {
      window.removeEventListener(
        CLOSE_TOPIC_DETAIL_EVENT,
        handleCloseTopicDetail
      );
    };
  }, [isOpen, isPersonalizeOpen]);
  function textToJSON(text) {
    return {
      type: "doc",
      content: [{ type: "paragraph", content: [{ type: "text", text }] }]
    };
  }
  const submitInput = () => {
    if (!isLoggedIn()) {
      setIsOpen(false);
      showLoginPopup();
      return;
    }
    const trimmed = inputValue.trim();
    if (!trimmed) {
      return;
    }
    const json = textToJSON(trimmed);
    setInputValue("");
    handleChatSubmit(json, isRoadmapDetailLoading);
  };
  const hasMessages = aiChatHistory.length > 0;
  const newTabUrl = `/${roadmapId}/ai${activeChatHistoryId ? `?chatId=${activeChatHistoryId}` : ""}`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => {
          setIsOpen(false);
        },
        className: "fixed inset-0 z-50 bg-black opacity-50"
      }
    ),
    showUpgradeModal && /* @__PURE__ */ jsx(
      UpgradeAccountModal,
      {
        onClose: () => {
          setShowUpgradeModal(false);
        }
      }
    ),
    isPersonalizeOpen && /* @__PURE__ */ jsx(
      UpdatePersonaModal,
      {
        roadmapId,
        onClose: () => {
          setIsPersonalizeOpen(false);
        }
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "animate-fade-slide-up fixed bottom-5 left-1/2 max-h-[95vh] max-w-[968px] -translate-x-1/4 transform flex-col gap-1.5 overflow-hidden px-4 duration-300 sm:max-h-[50vh] lg:flex",
          isOpen ? "z-91 h-full w-full" : "z-40 w-auto"
        ),
        children: [
          isOpen && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-white shadow-lg", children: [
            isChatHistoryLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-50 flex items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-md border border-gray-200 py-2 pr-3 pl-2", children: [
              /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin stroke-[2.5] text-gray-400" }),
              /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-500", children: "Loading history.." })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-3 py-2", children: [
              /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(
                ChatHeaderButton,
                {
                  icon: /* @__PURE__ */ jsx(BookOpen, { className: "h-3.5 w-3.5" }),
                  className: "pointer-events-none text-sm",
                  children: chatHistory?.title || "AI Tutor"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
                isPaidUser && activeChatHistoryId && /* @__PURE__ */ jsx(
                  ChatHeaderButton,
                  {
                    onClick: () => {
                      setActiveChatHistoryId(void 0);
                      inputRef.current?.focus();
                    },
                    icon: /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" }),
                    className: "justify-center rounded-md bg-gray-200 px-2 py-1 text-xs text-black hover:bg-gray-300"
                  }
                ),
                /* @__PURE__ */ jsx(
                  RoadmapAIChatHistory,
                  {
                    roadmapId,
                    activeChatHistoryId,
                    onChatHistoryClick: (chatHistoryId) => {
                      setIsChatHistoryLoading(true);
                      setActiveChatHistoryId(chatHistoryId);
                      setShowScrollToBottom(false);
                    },
                    onDelete: (chatHistoryId) => {
                      if (activeChatHistoryId === chatHistoryId) {
                        setActiveChatHistoryId(void 0);
                      }
                    },
                    onUpgrade: () => {
                      setShowUpgradeModal(true);
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  ChatHeaderButton,
                  {
                    href: newTabUrl,
                    target: "_blank",
                    icon: /* @__PURE__ */ jsx(SquareArrowOutUpRight, { className: "h-3.5 w-3.5" }),
                    className: "hidden justify-center rounded-md bg-gray-200 px-1 py-1 text-gray-500 hover:bg-gray-300 sm:flex"
                  }
                ),
                /* @__PURE__ */ jsx(
                  ChatHeaderButton,
                  {
                    onClick: () => setIsOpen(false),
                    icon: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
                    className: "flex items-center justify-center rounded-md bg-red-100 px-1 py-1 text-red-500 hover:bg-red-200"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex flex-1 flex-grow flex-col overflow-y-auto px-3 py-2",
                ref: scrollareaRef,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(
                      RoadmapAIChatCard,
                      {
                        role: "assistant",
                        jsx: /* @__PURE__ */ jsx("span", { className: "mt-[2px]", children: "Hey, I am your AI tutor. How can I help you today? 👋" }),
                        isIntro: true
                      }
                    ),
                    aiChatHistory.length === 0 && defaultQuestions.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-0.5 mb-1", children: [
                      /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs font-normal text-gray-500", children: "Some questions you might have about this roadmap:" }),
                      /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-end gap-1", children: defaultQuestions.map((question, index) => /* @__PURE__ */ jsx(
                        "button",
                        {
                          className: "flex h-full self-start rounded-md bg-yellow-500/10 px-3 py-2 text-left text-sm text-black hover:bg-yellow-500/20",
                          onClick: () => {
                            if (!isLoggedIn()) {
                              setIsOpen(false);
                              showLoginPopup();
                              return;
                            }
                            if (isLimitExceeded) {
                              setShowUpgradeModal(true);
                              setIsOpen(false);
                              return;
                            }
                            handleChatSubmit(
                              textToJSON(question),
                              isRoadmapDetailLoading
                            );
                          },
                          children: question
                        },
                        `default-question-${index}`
                      )) })
                    ] }),
                    aiChatHistory.map((chat, index) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(RoadmapAIChatCard, { ...chat }) }, `chat-${index}`)),
                    isStreamingMessage && !streamedMessage && /* @__PURE__ */ jsx(RoadmapAIChatCard, { role: "assistant", html: "Thinking..." }),
                    streamedMessage && /* @__PURE__ */ jsx(RoadmapAIChatCard, { role: "assistant", jsx: streamedMessage })
                  ] }),
                  showScrollToBottom && /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => {
                        scrollToBottom("instant");
                        setShowScrollToBottom(false);
                      },
                      className: "sticky bottom-0 mx-auto mt-2 flex items-center gap-1.5 rounded-full bg-gray-900 px-3 py-1.5 text-xs text-white shadow-lg transition-all hover:bg-gray-800",
                      children: [
                        /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3" }),
                        "Scroll to bottom"
                      ]
                    }
                  )
                ]
              }
            ),
            isLimitExceeded && /* @__PURE__ */ jsx(
              UpgradeMessage,
              {
                onUpgradeClick: () => {
                  setShowUpgradeModal(true);
                  setIsOpen(false);
                }
              }
            ),
            !isLimitExceeded && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between border-t border-gray-200 px-3 pt-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx(
                    ChatHeaderButton,
                    {
                      onClick: () => {
                        if (!isLoggedIn()) {
                          setIsOpen(false);
                          showLoginPopup();
                          return;
                        }
                        setIsPersonalizeOpen(true);
                      },
                      icon: /* @__PURE__ */ jsx(PersonStanding, { className: "h-3.5 w-3.5" }),
                      className: "rounded-md bg-gray-200 py-1 pr-2 pl-1.5 text-gray-500 hover:bg-gray-300",
                      children: "Personalize"
                    }
                  ),
                  !isPaidUser && isAuthenticatedUser && /* @__PURE__ */ jsx(
                    UsageButton,
                    {
                      percentageUsed,
                      onUpgradeClick: () => {
                        setShowUpgradeModal(true);
                        setIsOpen(false);
                      }
                    }
                  )
                ] }),
                hasMessages && !isPaidUser && /* @__PURE__ */ jsx(
                  ChatHeaderButton,
                  {
                    onClick: () => {
                      setInputValue("");
                      clearChat();
                    },
                    icon: /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }),
                    className: "rounded-md bg-gray-200 py-1 pr-2 pl-1.5 text-gray-500 hover:bg-gray-300",
                    children: "Clear"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative flex items-center text-sm", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: inputRef,
                    type: "text",
                    value: inputValue,
                    onChange: (e) => setInputValue(e.target.value),
                    autoFocus: true,
                    disabled: isLimitExceeded,
                    onKeyDown: (e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (isStreamingMessage) {
                          return;
                        }
                        submitInput();
                      }
                    },
                    placeholder: isLimitExceeded ? "You have reached the usage limit for today.." : "Ask me anything about this roadmap...",
                    className: cn(
                      "w-full resize-none px-3 py-4 outline-none",
                      isLimitExceeded && "bg-gray-100 text-gray-400"
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "absolute top-1/2 right-2 -translate-y-1/2 p-1 text-zinc-500 hover:text-black disabled:opacity-50",
                    disabled: isRoadmapDetailLoading || isLimitExceeded,
                    onClick: () => {
                      if (isStreamingMessage) {
                        handleAbort();
                        return;
                      }
                      submitInput();
                    },
                    children: isStreamingMessage ? /* @__PURE__ */ jsx(PauseCircleIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(SendIcon, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] })
          ] }) }),
          !isOpen && /* @__PURE__ */ jsx(
            "button",
            {
              className: cn(
                "relative mx-auto flex w-max flex-shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-stone-900 py-2.5 pr-8 pl-6 text-center text-white shadow-2xl transition-all duration-300 hover:scale-101 hover:bg-stone-800"
              ),
              onClick: () => {
                setIsOpen(true);
                setTimeout(() => {
                  scrollToBottom("instant");
                  setShowScrollToBottom(false);
                }, 0);
              },
              children: !hasMessages ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Wand2, { className: "h-4 w-4 text-yellow-400" }),
                /* @__PURE__ */ jsx("span", { className: "mr-1 text-sm font-semibold text-yellow-400", children: "AI Tutor" }),
                /* @__PURE__ */ jsx("span", { className: "hidden text-white sm:block", children: "Have a question? Type here" }),
                /* @__PURE__ */ jsx("span", { className: "block text-white sm:hidden", children: "Ask anything" })
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(MessageCirclePlus, { className: "size-5 text-yellow-400" }),
                /* @__PURE__ */ jsx("span", { className: "mr-1 text-sm font-medium text-white", children: "Continue chatting.." })
              ] })
            }
          )
        ]
      }
    )
  ] });
}

export { ChatHeaderButton as C, RoadmapFloatingChat as R };
