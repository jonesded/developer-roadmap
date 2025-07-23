import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
/* empty css                                   */
import { useQuery, useMutation } from '@tanstack/react-query';
import { useState, useRef, useCallback, useEffect, useLayoutEffect, useImperativeHandle } from 'react';
import { flushSync } from 'react-dom';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';
import { q as queryClient, a as httpPost } from './query-client_CBXGK_YM.mjs';
import { A as AITutorLayout } from './AITutorLayout_Cb7hPswk.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_vuvdVS66.mjs';
import { a as aiRoadmapOptions, g as generateAIRoadmap } from './ai-roadmap_DTtRcDGR.mjs';
import { u as useOutsideClick, c as cn, i as isLoggedIn, b as getUrlParams } from './BaseLayout_B-BXcELP.mjs';
import { L as LoadingChip } from './LoadingChip_CDi1XEQY.mjs';
import { g as getQuestionAnswerChatMessages } from './ai-questions_vm3AhbaO.mjs';
import { PenSquare, SettingsIcon, RefreshCcw, SaveIcon, Loader2Icon, MessageCircleIcon, BotIcon, XIcon, Trash2Icon, ArrowDownIcon, LockIcon, PauseCircleIcon, SendIcon, AlertCircleIcon } from 'lucide-react';
import { M as ModifyCoursePrompt, U as UpdatePreferences } from './UpdatePreferences_oUDIabdT.mjs';
import { generateAIRoadmapFromText } from './index_DJK1nS1V.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { u as useAuth } from './use-auth_X5yd_BRu.mjs';
import { u as useIsPaidUser, b as billingDetailsOptions } from './billing_5mov2PsZ.mjs';
import { a as aiLimitOptions } from './ai-course_C2IOZ4Jw.mjs';
import { u as useChat } from './use-chat_ChC9cdii.mjs';
import { a as RoadmapAIChatCard } from './UpdatePersonaModal_xwSuy-3Z.mjs';
import { C as ChatHeaderButton } from './RoadmapFloatingChat_JRTwZ_a5.mjs';
import { a as markdownToHtml } from './markdown_rbU7j7cH.mjs';
import { g as getTailwindScreenDimension } from './is-mobile_BHDNWQGh.mjs';

function AIRoadmapRegenerate(props) {
  const { onRegenerate, roadmapSlug } = props;
  const toast = useToast();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [showUpdatePreferencesModal, setShowUpdatePreferencesModal] = useState(false);
  const currentUser = useAuth();
  const ref = useRef(null);
  useOutsideClick(ref, () => setIsDropdownVisible(false));
  const { data: aiRoadmap } = useQuery(
    aiRoadmapOptions(roadmapSlug),
    queryClient
  );
  const { mutate: updatePreferences, isPending: isUpdating } = useMutation(
    {
      mutationFn: (questionAndAnswers) => {
        return httpPost(`/v1-update-ai-roadmap-preferences/${roadmapSlug}`, {
          questionAndAnswers
        });
      },
      onSuccess: (_, vars) => {
        queryClient.setQueryData(
          aiRoadmapOptions(roadmapSlug).queryKey,
          (old) => {
            if (!old) {
              return old;
            }
            return {
              ...old,
              questionAndAnswers: vars
            };
          }
        );
        setShowUpdatePreferencesModal(false);
        setIsDropdownVisible(false);
        onRegenerate();
      }
    },
    queryClient
  );
  const handleSaveAIRoadmap = async () => {
    const { nodes, edges } = generateAIRoadmapFromText(aiRoadmap?.data || "");
    return httpPost(`/v1-save-ai-roadmap/${aiRoadmap?._id}`, {
      title: aiRoadmap?.term,
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
    });
  };
  const { mutate: saveAIRoadmap, isPending: isSavingAIRoadmap } = useMutation(
    {
      mutationFn: handleSaveAIRoadmap,
      onSuccess: (data) => {
        if (!data?.roadmapId) {
          toast.error("Something went wrong");
          return;
        }
        window.location.href = `/r/${data?.roadmapSlug}`;
      }
    },
    queryClient
  );
  const { mutate: editAIRoadmap, isPending: isEditingAIRoadmap } = useMutation(
    {
      mutationFn: handleSaveAIRoadmap,
      onSuccess: (data) => {
        if (!data?.roadmapId) {
          toast.error("Something went wrong");
          return;
        }
        window.open(
          `${"https://draw.imoogleai.xyz"}/${data?.roadmapId}`,
          "_blank"
        );
      }
    },
    queryClient
  );
  const isCurrentUserCreator = currentUser?.id === aiRoadmap?.userId;
  const showUpdatePreferences = aiRoadmap?.questionAndAnswers && aiRoadmap.questionAndAnswers.length > 0 && isCurrentUserCreator;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showUpgradeModal && /* @__PURE__ */ jsx(
      UpgradeAccountModal,
      {
        onClose: () => {
          setShowUpgradeModal(false);
        }
      }
    ),
    showPromptModal && /* @__PURE__ */ jsx(
      ModifyCoursePrompt,
      {
        description: "Pass additional information to the AI to generate a roadmap.",
        onClose: () => setShowPromptModal(false),
        onSubmit: (prompt) => {
          setShowPromptModal(false);
          onRegenerate(prompt);
        }
      }
    ),
    showUpdatePreferencesModal && /* @__PURE__ */ jsx(
      UpdatePreferences,
      {
        onClose: () => setShowUpdatePreferencesModal(false),
        questionAndAnswers: aiRoadmap?.questionAndAnswers,
        term: aiRoadmap?.term || "",
        format: "roadmap",
        onUpdatePreferences: (questionAndAnswers) => {
          updatePreferences(questionAndAnswers);
        },
        isUpdating
      }
    ),
    /* @__PURE__ */ jsxs("div", { ref, className: "relative flex items-stretch", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: cn("rounded-md px-2.5 text-gray-400 hover:text-black", {
            "text-black": isDropdownVisible
          }),
          onClick: () => setIsDropdownVisible(!isDropdownVisible),
          children: /* @__PURE__ */ jsx(PenSquare, { className: "text-current", size: 16, strokeWidth: 2.5 })
        }
      ),
      isDropdownVisible && /* @__PURE__ */ jsxs("div", { className: "absolute top-full right-0 min-w-[190px] translate-y-1 overflow-hidden rounded-md border border-gray-200 bg-white shadow-md", children: [
        isCurrentUserCreator && /* @__PURE__ */ jsxs(Fragment, { children: [
          showUpdatePreferences && /* @__PURE__ */ jsx(
            ActionButton,
            {
              onClick: () => {
                if (!isLoggedIn()) {
                  showLoginPopup();
                  return;
                }
                setIsDropdownVisible(false);
                setShowUpdatePreferencesModal(true);
              },
              icon: SettingsIcon,
              label: "Update Preferences"
            }
          ),
          /* @__PURE__ */ jsx(
            ActionButton,
            {
              onClick: () => {
                if (!isLoggedIn()) {
                  showLoginPopup();
                  return;
                }
                setIsDropdownVisible(false);
                onRegenerate();
              },
              icon: RefreshCcw,
              label: "Regenerate"
            }
          ),
          /* @__PURE__ */ jsx(
            ActionButton,
            {
              onClick: () => {
                if (!isLoggedIn()) {
                  showLoginPopup();
                  return;
                }
                setIsDropdownVisible(false);
                setShowPromptModal(true);
              },
              icon: PenSquare,
              label: "Modify Prompt"
            }
          ),
          /* @__PURE__ */ jsx("hr", { className: "my-1 border-gray-200" })
        ] }),
        /* @__PURE__ */ jsx(
          ActionButton,
          {
            onClick: () => {
              if (!isLoggedIn()) {
                showLoginPopup();
                return;
              }
              saveAIRoadmap();
            },
            icon: SaveIcon,
            label: "Start Learning",
            isLoading: isSavingAIRoadmap
          }
        ),
        /* @__PURE__ */ jsx(
          ActionButton,
          {
            onClick: () => {
              if (!isLoggedIn()) {
                showLoginPopup();
                return;
              }
              editAIRoadmap();
            },
            icon: PenSquare,
            label: "Edit in Editor",
            isLoading: isEditingAIRoadmap
          }
        )
      ] })
    ] })
  ] });
}
function ActionButton(props) {
  const { onClick, isLoading, icon: Icon, label } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100",
      onClick,
      disabled: isLoading,
      children: [
        isLoading ? /* @__PURE__ */ jsx(Loader2Icon, { className: "animate-spin", size: 16, strokeWidth: 2.5 }) : /* @__PURE__ */ jsx(Icon, { size: 16, className: "text-gray-400", strokeWidth: 2.5 }),
        label
      ]
    }
  );
}

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
function AIRoadmapContent(props) {
  const { isLoading, svgHtml, onRegenerate, roadmapSlug, onNodeClick } = props;
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
      onNodeClick?.({
        nodeId,
        nodeType,
        nodeTitle,
        ...nodeType === "subtopic" && { parentTitle }
      });
    },
    [isLoading, onNodeClick]
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative mx-auto w-full max-w-7xl",
        isLoading && "min-h-full"
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            id: "roadmap-container",
            className: "relative min-h-[400px] [&>svg]:mx-auto",
            dangerouslySetInnerHTML: { __html: svgHtml },
            onClick: handleNodeClick
          }
        ),
        isLoading && !svgHtml && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(LoadingChip, { message: "Please wait..." }) }),
        onRegenerate && !isLoading && roadmapSlug && /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsx(
          AIRoadmapRegenerate,
          {
            onRegenerate,
            roadmapSlug
          }
        ) })
      ]
    }
  );
}

function GenerateAIRoadmap(props) {
  const { onRoadmapSlugChange } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState("");
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [svgHtml, setSvgHtml] = useState("");
  const [content, setContent] = useState("");
  const svgRef = useRef(null);
  const { isPaidUser, isLoading: isPaidUserLoading } = useIsPaidUser();
  const { data: limits, isLoading: isLimitLoading } = useQuery(
    aiLimitOptions(),
    queryClient
  );
  const isLimitDataLoading = isPaidUserLoading || isLimitLoading;
  useEffect(() => {
    if (isLimitDataLoading) {
      return;
    }
    if (!isPaidUser && limits && limits?.roadmap?.used >= limits?.roadmap?.limit) {
      setError("You have reached the limit for this format");
      setIsLoading(false);
      setShowUpgradeModal(true);
      return;
    }
    const params = getUrlParams();
    const paramsTerm = params?.term;
    params?.src || "search";
    if (!paramsTerm) {
      return;
    }
    let questionAndAnswers = [];
    const sessionId = params?.id;
    if (sessionId) {
      questionAndAnswers = getQuestionAnswerChatMessages(sessionId);
    }
    handleGenerateDocument({
      term: paramsTerm,
      questionAndAnswers
    });
  }, [isLimitDataLoading, isPaidUser]);
  const handleGenerateDocument = async (options) => {
    const { term, isForce, prompt, questionAndAnswers } = options;
    if (!isLoggedIn()) {
      window.location.href = "/ai";
      return;
    }
    await generateAIRoadmap({
      term,
      isForce,
      prompt,
      questionAndAnswers,
      onDetailsChange: (details) => {
        const { roadmapId, roadmapSlug, title, userId } = details;
        const aiRoadmapData = {
          _id: roadmapId,
          userId,
          title,
          term,
          data: content,
          questionAndAnswers,
          viewCount: 0,
          svgHtml: svgRef.current || "",
          lastVisitedAt: /* @__PURE__ */ new Date(),
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        };
        queryClient.setQueryData(
          aiRoadmapOptions(roadmapSlug).queryKey,
          aiRoadmapData
        );
        onRoadmapSlugChange?.(roadmapSlug);
        window.history.replaceState(null, "", `/ai-roadmaps/${roadmapSlug}`);
      },
      onLoadingChange: setIsLoading,
      onError: setError,
      onStreamingChange: setIsStreaming,
      onRoadmapSvgChange: (svg) => {
        const svgHtml2 = svg.outerHTML;
        svgRef.current = svgHtml2;
        setSvgHtml(svgHtml2);
      }
    });
  };
  const upgradeModal = showUpgradeModal ? /* @__PURE__ */ jsx(
    UpgradeAccountModal,
    {
      onClose: () => {
        window.location.href = "/ai";
      }
    }
  ) : null;
  if (error) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      upgradeModal,
      /* @__PURE__ */ jsx("div", { className: "text-red-500", children: error })
    ] });
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      upgradeModal,
      /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ jsx(LoadingChip, { message: "Please wait..." }) })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    upgradeModal,
    /* @__PURE__ */ jsx(AIRoadmapContent, { isLoading, svgHtml })
  ] });
}

function AIRoadmapChat(props) {
  const { roadmapSlug, isRoadmapLoading, onUpgrade, aiChatActionsRef } = props;
  const toast = useToast();
  const scrollareaRef = useRef(null);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const {
    data: tokenUsage,
    isLoading: isTokenUsageLoading,
    refetch: refetchTokenUsage
  } = useQuery(aiLimitOptions(), queryClient);
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const isLimitExceeded = (tokenUsage?.used || 0) >= (tokenUsage?.limit || 0);
  const isPaidUser = userBillingDetails?.status === "active";
  const {
    messages,
    status,
    streamedMessageHtml,
    sendMessages,
    setMessages,
    stop
  } = useChat({
    endpoint: `${"https://api.imoogleai.xyz"}/v1-ai-roadmap-chat`,
    onError: (error) => {
      console.error(error);
      toast.error(error?.message || "Something went wrong");
    },
    data: {
      aiRoadmapSlug: roadmapSlug
    },
    onFinish: () => {
      refetchTokenUsage();
    }
  });
  const scrollToBottom = useCallback(
    (behavior = "smooth") => {
      scrollareaRef.current?.scrollTo({
        top: scrollareaRef.current.scrollHeight,
        behavior
      });
    },
    [scrollareaRef]
  );
  const isStreamingMessage = status === "streaming";
  const hasMessages = messages.length > 0;
  const handleSubmitInput = useCallback(
    (defaultInputValue) => {
      const message = defaultInputValue || inputValue;
      if (!isLoggedIn()) {
        showLoginPopup();
        return;
      }
      if (isStreamingMessage) {
        return;
      }
      const newMessages = [
        ...messages,
        {
          role: "user",
          content: message,
          html: markdownToHtml(message)
        }
      ];
      flushSync(() => {
        setMessages(newMessages);
      });
      sendMessages(newMessages);
      setInputValue("");
      setTimeout(() => {
        scrollToBottom("smooth");
      }, 0);
    },
    [inputValue, isStreamingMessage, messages, sendMessages, setMessages]
  );
  const checkScrollPosition = useCallback(() => {
    const scrollArea = scrollareaRef.current;
    if (!scrollArea) {
      return;
    }
    const { scrollTop, scrollHeight, clientHeight } = scrollArea;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
    setShowScrollToBottom(!isAtBottom && messages.length > 0);
  }, [messages.length]);
  useEffect(() => {
    const scrollArea = scrollareaRef.current;
    if (!scrollArea) {
      return;
    }
    scrollArea.addEventListener("scroll", checkScrollPosition);
    return () => scrollArea.removeEventListener("scroll", checkScrollPosition);
  }, [checkScrollPosition]);
  const isLoading = isRoadmapLoading || isTokenUsageLoading || isBillingDetailsLoading;
  useLayoutEffect(() => {
    const deviceType = getTailwindScreenDimension();
    const isMediumSize = ["sm", "md"].includes(deviceType);
    if (!isMediumSize) {
      const storedState = localStorage.getItem("chat-history-sidebar-open");
      setIsChatOpen(storedState === null ? true : storedState === "true");
    } else {
      setIsChatOpen(!isMediumSize);
    }
    setIsMobile(isMediumSize);
  }, []);
  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem("chat-history-sidebar-open", isChatOpen.toString());
    }
  }, [isChatOpen, isMobile]);
  useImperativeHandle(aiChatActionsRef, () => ({
    handleNodeClick: (node) => {
      handleSubmitInput(`Explain what is "${node.nodeTitle}" topic in detail.`);
    }
  }));
  if (!isChatOpen) {
    return /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 flex justify-center p-2", children: /* @__PURE__ */ jsxs(
      "button",
      {
        className: "flex items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-white shadow",
        onClick: () => {
          setIsChatOpen(true);
        },
        children: [
          /* @__PURE__ */ jsx(MessageCircleIcon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Open Chat" })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex h-full w-full max-w-full flex-col overflow-hidden border-l border-gray-200 bg-white md:relative md:max-w-[40%]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-gray-200 bg-white p-2", children: [
      /* @__PURE__ */ jsxs("h2", { className: "flex items-center gap-2 text-sm font-medium", children: [
        /* @__PURE__ */ jsx(BotIcon, { className: "h-4 w-4" }),
        "AI Roadmap"
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "mr-2 flex size-5 items-center justify-center rounded-md text-gray-500 hover:bg-gray-300 md:hidden",
          onClick: () => {
            setIsChatOpen(false);
          },
          children: /* @__PURE__ */ jsx(XIcon, { className: "h-3.5 w-3.5" })
        }
      )
    ] }),
    isLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ jsx(LoadingChip, { message: "Loading..." }) }),
    !isLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "relative grow overflow-y-auto", ref: scrollareaRef, children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "relative flex grow flex-col justify-end", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-end gap-2 px-3 py-2", children: [
        /* @__PURE__ */ jsx(
          RoadmapAIChatCard,
          {
            role: "assistant",
            html: "Hello, how can I help you today?",
            isIntro: true
          }
        ),
        messages.map((chat, index) => {
          return /* @__PURE__ */ jsx(RoadmapAIChatCard, { ...chat }, `chat-${index}`);
        }),
        status === "streaming" && !streamedMessageHtml && /* @__PURE__ */ jsx(RoadmapAIChatCard, { role: "assistant", html: "Thinking..." }),
        status === "streaming" && streamedMessageHtml && /* @__PURE__ */ jsx(
          RoadmapAIChatCard,
          {
            role: "assistant",
            html: streamedMessageHtml
          }
        )
      ] }) }) }) }),
      (hasMessages || showScrollToBottom) && /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between gap-2 border-t border-gray-200 px-3 py-2", children: [
        /* @__PURE__ */ jsx(
          ChatHeaderButton,
          {
            icon: /* @__PURE__ */ jsx(Trash2Icon, { className: "h-3.5 w-3.5" }),
            className: "rounded-md bg-gray-200 py-1 pr-2 pl-1.5 text-gray-500 hover:bg-gray-300",
            onClick: () => {
              setMessages([]);
            },
            children: "Clear"
          }
        ),
        showScrollToBottom && /* @__PURE__ */ jsx(
          ChatHeaderButton,
          {
            icon: /* @__PURE__ */ jsx(ArrowDownIcon, { className: "h-3.5 w-3.5" }),
            className: "rounded-md bg-gray-200 py-1 pr-2 pl-1.5 text-gray-500 hover:bg-gray-300",
            onClick: () => {
              scrollToBottom("smooth");
            },
            children: "Scroll to bottom"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center border-t border-gray-200 text-sm", children: [
        isLimitExceeded && isLoggedIn() && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-10 flex items-center justify-center gap-2 bg-black text-white", children: [
          /* @__PURE__ */ jsx(
            LockIcon,
            {
              className: "size-4 cursor-not-allowed",
              strokeWidth: 2.5
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "cursor-not-allowed", children: [
            "Limit reached for today",
            isPaidUser ? ". Please wait until tomorrow." : ""
          ] }),
          !isPaidUser && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                onUpgrade?.();
              },
              className: "rounded-md bg-white px-2 py-1 text-xs font-medium text-black hover:bg-gray-300",
              children: "Upgrade for more"
            }
          )
        ] }),
        !isLoggedIn() && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-10 flex items-center justify-center gap-2 bg-black text-white", children: [
          /* @__PURE__ */ jsx(
            LockIcon,
            {
              className: "size-4 cursor-not-allowed",
              strokeWidth: 2.5
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "cursor-not-allowed", children: "Please login to continue" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                showLoginPopup();
              },
              className: "rounded-md bg-white px-2 py-1 text-xs font-medium text-black hover:bg-gray-300",
              children: "Login / Register"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: inputRef,
            type: "text",
            value: inputValue,
            onChange: (e) => setInputValue(e.target.value),
            autoFocus: true,
            onKeyDown: (e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (isStreamingMessage) {
                  return;
                }
                handleSubmitInput();
              }
            },
            placeholder: "Ask me anything about this roadmap...",
            className: "w-full resize-none px-3 py-4 outline-none"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "absolute top-1/2 right-2 -translate-y-1/2 p-1 text-zinc-500 hover:text-black disabled:opacity-50",
            onClick: () => {
              if (!isLoggedIn()) {
                showLoginPopup();
                return;
              }
              if (status !== "idle") {
                stop();
                return;
              }
              handleSubmitInput();
            },
            children: isStreamingMessage ? /* @__PURE__ */ jsx(PauseCircleIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(SendIcon, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] });
}

function AIRoadmap(props) {
  const { roadmapSlug: defaultRoadmapSlug } = props;
  const [roadmapSlug, setRoadmapSlug] = useState(defaultRoadmapSlug);
  const toast = useToast();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [regeneratedSvgHtml, setRegeneratedSvgHtml] = useState(
    null
  );
  const aiChatActionsRef = useRef(null);
  const {
    data: aiRoadmap,
    isLoading: isLoadingBySlug,
    error: aiRoadmapError
  } = useQuery(aiRoadmapOptions(roadmapSlug), queryClient);
  const {
    data: tokenUsage,
    isLoading: isTokenUsageLoading,
    refetch: refetchTokenUsage
  } = useQuery(aiLimitOptions(), queryClient);
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const isLimitExceeded = (tokenUsage?.used || 0) >= (tokenUsage?.limit || 0);
  const isPaidUser = userBillingDetails?.status === "active";
  const handleRegenerate = async (prompt) => {
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    if (!isPaidUser && isLimitExceeded) {
      setShowUpgradeModal(true);
      return;
    }
    flushSync(() => {
      setIsRegenerating(true);
      setRegeneratedSvgHtml(null);
    });
    queryClient.cancelQueries(aiRoadmapOptions(roadmapSlug));
    queryClient.setQueryData(aiRoadmapOptions(roadmapSlug).queryKey, (old) => {
      if (!old) {
        return old;
      }
      return {
        ...old,
        data: "",
        svgHtml: ""
      };
    });
    setRegeneratedSvgHtml("");
    await generateAIRoadmap({
      roadmapSlug: aiRoadmap?.slug || "",
      term: aiRoadmap?.term || "",
      prompt,
      isForce: true,
      onStreamingChange: setIsRegenerating,
      onRoadmapSvgChange: (svg) => {
        setRegeneratedSvgHtml(svg.outerHTML);
      },
      onError: (error) => {
        toast.error(error);
      },
      onFinish: () => {
        setIsRegenerating(false);
        refetchTokenUsage();
        queryClient.invalidateQueries(aiRoadmapOptions(roadmapSlug));
      }
    });
  };
  const isLoading = isLoadingBySlug || isRegenerating || isTokenUsageLoading || isBillingDetailsLoading;
  const handleNodeClick = useCallback(
    (node) => {
      aiChatActionsRef.current?.handleNodeClick(node);
    },
    [aiChatActionsRef]
  );
  return /* @__PURE__ */ jsxs(
    AITutorLayout,
    {
      wrapperClassName: "flex-row p-0 lg:p-0 overflow-hidden relative bg-white",
      containerClassName: "h-[calc(100vh-49px)] overflow-hidden relative",
      children: [
        showUpgradeModal && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradeModal(false) }),
        !isLoading && aiRoadmapError && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-10 flex h-full flex-col items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { className: "size-10 text-gray-500" }),
          /* @__PURE__ */ jsx("p", { className: "text-center", children: aiRoadmapError?.message || "Something went wrong" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grow overflow-y-auto p-4 pt-0", children: [
          roadmapSlug && !aiRoadmapError && /* @__PURE__ */ jsx(
            AIRoadmapContent,
            {
              svgHtml: regeneratedSvgHtml ?? aiRoadmap?.svgHtml ?? "",
              isLoading,
              onRegenerate: handleRegenerate,
              roadmapSlug,
              onNodeClick: handleNodeClick
            }
          ),
          !roadmapSlug && !aiRoadmapError && /* @__PURE__ */ jsx(GenerateAIRoadmap, { onRoadmapSlugChange: setRoadmapSlug })
        ] }),
        /* @__PURE__ */ jsx(
          AIRoadmapChat,
          {
            roadmapSlug,
            isRoadmapLoading: !aiRoadmap,
            onUpgrade: () => setShowUpgradeModal(true),
            aiChatActionsRef
          }
        )
      ]
    }
  );
}

export { AIRoadmap as A };
