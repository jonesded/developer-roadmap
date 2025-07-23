import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useQuery, useMutation } from '@tanstack/react-query';
import { MessageCircleIcon, BotIcon, XIcon, Trash2Icon, ArrowDownIcon, LockIcon, PauseCircleIcon, SendIcon, PenSquare, SettingsIcon, RefreshCcw, AlertCircleIcon, ExternalLink } from 'lucide-react';
import { useRef, useState, useCallback, useEffect, useLayoutEffect, useMemo } from 'react';
import { flushSync } from 'react-dom';
import { q as queryClient, a as httpPost } from './query-client_rwy39LWF.mjs';
import { a as aiLimitOptions } from './ai-course_sZQdwLbV.mjs';
import { r as readChatStream } from './chat_CErZ2BPm.mjs';
import { m as markdownToHtmlWithHighlighting, a as markdownToHtml } from './markdown_rbU7j7cH.mjs';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';
import { i as isLoggedIn, u as useOutsideClick, c as cn, b as getUrlParams } from './BaseLayout_BrSKT5L_.mjs';
import { g as getAiGuideOptions, a as aiGuideSuggestionsOptions } from './ai-guide_Baa0p8sO.mjs';
import { A as AITutorLayout } from './AITutorLayout_CJilm_5H.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_B2RF3Ir7.mjs';
import { u as useChat } from './use-chat_DaunLb0s.mjs';
import { a as RoadmapAIChatCard } from './UpdatePersonaModal_BYS1yBW_.mjs';
import { C as ChatHeaderButton } from './RoadmapFloatingChat_D1ySiLMD.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { b as billingDetailsOptions, u as useIsPaidUser } from './billing_raRJBpT1.mjs';
import { L as LoadingChip } from './LoadingChip_CDi1XEQY.mjs';
import { g as getTailwindScreenDimension } from './is-mobile_BHDNWQGh.mjs';
/* empty css                          */
import { M as ModifyCoursePrompt, U as UpdatePreferences } from './UpdatePreferences_Zy-NuJAr.mjs';
import { u as useAuth } from './use-auth_B9zNIc1Y.mjs';
import { g as getQuestionAnswerChatMessages } from './ai-questions_vm3AhbaO.mjs';

async function generateGuide(options) {
  const {
    term,
    slug,
    onGuideChange,
    onLoadingChange,
    onError,
    isForce = false,
    prompt,
    src = "search",
    onHtmlChange,
    onStreamingChange,
    onDetailsChange,
    onFinish,
    questionAndAnswers
  } = options;
  onLoadingChange?.(true);
  onGuideChange?.("");
  try {
    let response = null;
    if (slug && isForce) {
      response = await fetch(
        `${undefined                              }/v1-regenerate-ai-guide/${slug}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({
            prompt
          })
        }
      );
    } else {
      response = await fetch(
        `${undefined                              }/v1-generate-ai-guide`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            keyword: term,
            isForce,
            customPrompt: prompt,
            questionAndAnswers,
            src
          }),
          credentials: "include"
        }
      );
    }
    if (!response.ok) {
      const data = await response.json();
      console.error(
        "Error generating course:",
        data?.message || "Something went wrong"
      );
      onLoadingChange?.(false);
      onError?.(data?.message || "Something went wrong");
      return;
    }
    const stream = response.body;
    if (!stream) {
      console.error("Failed to get stream from response");
      onError?.("Something went wrong");
      onLoadingChange?.(false);
      return;
    }
    onLoadingChange?.(false);
    onStreamingChange?.(true);
    await readChatStream(stream, {
      onMessage: async (message) => {
        onGuideChange?.(message);
        onHtmlChange?.(await markdownToHtmlWithHighlighting(message));
      },
      onMessageEnd: async (message) => {
        onGuideChange?.(message);
        onHtmlChange?.(await markdownToHtmlWithHighlighting(message));
        queryClient.invalidateQueries(aiLimitOptions());
        onStreamingChange?.(false);
      },
      onDetails: async (details) => {
        if (!details?.guideId || !details?.guideSlug) {
          throw new Error("Invalid details");
        }
        onDetailsChange?.(details);
      }
    });
    onFinish?.();
  } catch (error) {
    onError?.(error?.message || "Something went wrong");
    console.error("Error in course generation:", error);
    onLoadingChange?.(false);
  }
}

function shuffle(array) {
  let currentIndex = array.length;
  const result = [...array];
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex]
    ];
  }
  return result;
}

function AIGuideChat(props) {
  const {
    guideSlug,
    isGuideLoading,
    onUpgrade,
    randomQuestions,
    isQuestionsLoading
  } = props;
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
    endpoint: `${undefined                              }/v1-ai-guide-chat`,
    onError: (error) => {
      console.error(error);
    },
    data: {
      guideSlug
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
  const isLoading = isGuideLoading || isTokenUsageLoading || isBillingDetailsLoading;
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
        "AI Guide"
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
        isQuestionsLoading && /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-[48px] w-full animate-pulse rounded-lg bg-gray-200"
          },
          i
        )) }),
        !isQuestionsLoading && randomQuestions && randomQuestions.length > 0 && messages.length === 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs font-normal text-gray-500", children: "Some questions you might have about this lesson." }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1", children: randomQuestions?.map((question) => {
            return /* @__PURE__ */ jsx(
              "button",
              {
                className: "flex h-full self-start rounded-md bg-yellow-500/10 px-3 py-2 text-left text-sm text-black hover:bg-yellow-500/20",
                onClick: () => {
                  handleSubmitInput(question);
                },
                children: question
              },
              `chat-${question}`
            );
          }) })
        ] }),
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
            placeholder: "Ask me anything about this guide...",
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

function AIGuideRegenerate(props) {
  const { onRegenerate, guideSlug } = props;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [showUpdatePreferencesModal, setShowUpdatePreferencesModal] = useState(false);
  const currentUser = useAuth();
  const ref = useRef(null);
  useOutsideClick(ref, () => setIsDropdownVisible(false));
  const { data: aiGuide } = useQuery(getAiGuideOptions(guideSlug), queryClient);
  const { mutate: updatePreferences, isPending: isUpdating } = useMutation(
    {
      mutationFn: (questionAndAnswers) => {
        return httpPost(`/v1-update-guide-preferences/${guideSlug}`, {
          questionAndAnswers
        });
      },
      onSuccess: (_, vars) => {
        queryClient.setQueryData(
          getAiGuideOptions(guideSlug).queryKey,
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
  const showUpdatePreferences = aiGuide?.questionAndAnswers && aiGuide.questionAndAnswers.length > 0 && currentUser?.id === aiGuide.userId;
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
        description: "Pass additional information to the AI to generate a guide.",
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
        questionAndAnswers: aiGuide?.questionAndAnswers,
        term: aiGuide?.keyword || "",
        format: "guide",
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
        showUpdatePreferences && /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setIsDropdownVisible(false);
              setShowUpdatePreferencesModal(true);
            },
            className: "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ jsx(
                SettingsIcon,
                {
                  size: 16,
                  className: "text-gray-400",
                  strokeWidth: 2.5
                }
              ),
              "Update Preferences"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              if (!isLoggedIn()) {
                showLoginPopup();
                return;
              }
              setIsDropdownVisible(false);
              onRegenerate();
            },
            className: "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ jsx(
                RefreshCcw,
                {
                  size: 16,
                  className: "text-gray-400",
                  strokeWidth: 2.5
                }
              ),
              "Regenerate"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              if (!isLoggedIn()) {
                showLoginPopup();
                return;
              }
              setIsDropdownVisible(false);
              setShowPromptModal(true);
            },
            className: "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ jsx(
                PenSquare,
                {
                  size: 16,
                  className: "text-gray-400",
                  strokeWidth: 2.5
                }
              ),
              "Modify Prompt"
            ]
          }
        )
      ] })
    ] })
  ] });
}

function AIGuideContent(props) {
  const { html, onRegenerate, isLoading, guideSlug } = props;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative mx-auto w-full max-w-4xl",
        isLoading && "min-h-full"
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "course-content prose-h1:leading-[1.15] prose prose-lg prose-headings:mb-3 prose-headings:mt-8 prose-blockquote:font-normal prose-pre:rounded-2xl prose-pre:text-lg prose-li:my-1 prose-thead:border-zinc-800 prose-tr:border-zinc-800 max-lg:prose-h2:mt-3 max-lg:prose-h2:text-lg max-lg:prose-h3:text-base max-lg:prose-pre:px-3 max-lg:prose-pre:text-sm mt-8 max-w-full text-black max-lg:mt-4 max-lg:text-base [&>h1]:text-balance",
            dangerouslySetInnerHTML: { __html: html }
          }
        ),
        isLoading && !html && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(LoadingChip, { message: "Please wait..." }) }),
        onRegenerate && !isLoading && guideSlug && /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsx(
          AIGuideRegenerate,
          {
            onRegenerate,
            guideSlug
          }
        ) })
      ]
    }
  );
}

function GenerateAIGuide(props) {
  const { onGuideSlugChange } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState("");
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [content, setContent] = useState("");
  const [html, setHtml] = useState("");
  const htmlRef = useRef("");
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
    if (!isPaidUser && limits && limits?.guide?.used >= limits?.guide?.limit) {
      setError("You have reached the limit for this format");
      setIsLoading(false);
      setShowUpgradeModal(true);
      return;
    }
    const params = getUrlParams();
    const paramsTerm = params?.term;
    const paramsSrc = params?.src || "search";
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
      src: paramsSrc,
      questionAndAnswers
    });
  }, [isLimitDataLoading, isPaidUser]);
  const handleGenerateDocument = async (options) => {
    const { term, isForce, prompt, src, questionAndAnswers } = options;
    if (!isLoggedIn()) {
      window.location.href = "/ai";
      return;
    }
    await generateGuide({
      term,
      onDetailsChange: (details) => {
        const { guideId, guideSlug, creatorId, title } = details;
        const guideData = {
          _id: guideId,
          userId: creatorId,
          title,
          html: htmlRef.current,
          keyword: term,
          content,
          tokens: {
            prompt: 0,
            completion: 0,
            total: 0
          },
          relatedTopics: [],
          deepDiveTopics: [],
          questions: [],
          questionAndAnswers,
          viewCount: 0,
          lastVisitedAt: /* @__PURE__ */ new Date(),
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        };
        queryClient.setQueryData(
          getAiGuideOptions(guideSlug).queryKey,
          guideData
        );
        onGuideSlugChange?.(guideSlug);
        window.history.replaceState(null, "", `/ai/guide/${guideSlug}`);
      },
      onLoadingChange: setIsLoading,
      onError: setError,
      isForce,
      prompt,
      src,
      questionAndAnswers,
      onHtmlChange: (html2) => {
        htmlRef.current = html2;
        setHtml(html2);
      },
      onStreamingChange: setIsStreaming
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
    /* @__PURE__ */ jsx(AIGuideContent, { html })
  ] });
}

function AIGuide(props) {
  const { guideSlug: defaultGuideSlug } = props;
  const [guideSlug, setGuideSlug] = useState(defaultGuideSlug);
  const toast = useToast();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [regeneratedHtml, setRegeneratedHtml] = useState(null);
  const {
    data: aiGuide,
    isLoading: isLoadingBySlug,
    error: aiGuideError
  } = useQuery(getAiGuideOptions(guideSlug), queryClient);
  const {
    data: tokenUsage,
    isLoading: isTokenUsageLoading,
    refetch: refetchTokenUsage
  } = useQuery(aiLimitOptions(), queryClient);
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const isLimitExceeded = (tokenUsage?.used || 0) >= (tokenUsage?.limit || 0);
  const isPaidUser = userBillingDetails?.status === "active";
  const { data: aiGuideSuggestions, isLoading: isAiGuideSuggestionsLoading } = useQuery(
    {
      ...aiGuideSuggestionsOptions(guideSlug),
      enabled: !!guideSlug && !!isLoggedIn()
    },
    queryClient
  );
  const randomQuestions = useMemo(() => {
    return shuffle(aiGuideSuggestions?.questions || []).slice(0, 4);
  }, [aiGuideSuggestions]);
  const relatedTopics = useMemo(() => {
    return shuffle(aiGuideSuggestions?.relatedTopics || []).slice(0, 2);
  }, [aiGuideSuggestions]);
  const deepDiveTopics = useMemo(() => {
    return shuffle(aiGuideSuggestions?.deepDiveTopics || []).slice(0, 2);
  }, [aiGuideSuggestions]);
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
      setRegeneratedHtml(null);
    });
    queryClient.cancelQueries(getAiGuideOptions(guideSlug));
    queryClient.setQueryData(getAiGuideOptions(guideSlug).queryKey, (old) => {
      if (!old) {
        return old;
      }
      return {
        ...old,
        content: "",
        html: ""
      };
    });
    await generateGuide({
      slug: aiGuide?.slug || "",
      term: aiGuide?.keyword || "",
      prompt,
      onStreamingChange: setIsRegenerating,
      onHtmlChange: setRegeneratedHtml,
      onFinish: () => {
        setIsRegenerating(false);
        queryClient.invalidateQueries(getAiGuideOptions(guideSlug));
      },
      isForce: true,
      onError: (error) => {
        toast.error(error);
      }
    });
  };
  const isLoading = isLoadingBySlug || isRegenerating || isTokenUsageLoading || isBillingDetailsLoading;
  return /* @__PURE__ */ jsxs(
    AITutorLayout,
    {
      wrapperClassName: "flex-row p-0 lg:p-0 relative overflow-hidden bg-white",
      containerClassName: "h-[calc(100vh-49px)] overflow-hidden relative",
      children: [
        showUpgradeModal && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradeModal(false) }),
        !isLoading && aiGuideError && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-10 flex h-full flex-col items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertCircleIcon, { className: "size-10 text-gray-500" }),
          /* @__PURE__ */ jsx("p", { className: "text-center", children: aiGuideError?.message || "Something went wrong" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grow overflow-y-auto p-4 pt-0", children: [
          guideSlug && !aiGuideError && /* @__PURE__ */ jsx(
            AIGuideContent,
            {
              html: regeneratedHtml || aiGuide?.html || "",
              onRegenerate: handleRegenerate,
              isLoading,
              guideSlug
            }
          ),
          !guideSlug && !aiGuideError && /* @__PURE__ */ jsx(GenerateAIGuide, { onGuideSlugChange: setGuideSlug }),
          aiGuide && !isRegenerating && /* @__PURE__ */ jsx("div", { className: "mx-auto mt-12 mb-12 max-w-4xl", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsx(
              ListSuggestions,
              {
                title: "Related Topics",
                suggestions: relatedTopics,
                depth: "essentials",
                isLoading: isAiGuideSuggestionsLoading,
                currentGuideTitle: aiGuide.title
              }
            ),
            /* @__PURE__ */ jsx(
              ListSuggestions,
              {
                title: "Dive Deeper",
                suggestions: deepDiveTopics,
                depth: "detailed",
                isLoading: isAiGuideSuggestionsLoading,
                currentGuideTitle: aiGuide.title
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(
          AIGuideChat,
          {
            guideSlug,
            isGuideLoading: !aiGuide,
            onUpgrade: () => setShowUpgradeModal(true),
            randomQuestions,
            isQuestionsLoading: isAiGuideSuggestionsLoading
          }
        )
      ]
    }
  );
}
function ListSuggestions(props) {
  const { title, suggestions, depth, isLoading, currentGuideTitle } = props;
  return /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-xl border border-gray-300 bg-linear-to-br from-gray-100 to-gray-50 shadow-xs transition-all duration-200", children: [
    /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-200 bg-white px-5 py-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: depth === "essentials" ? "Explore related concepts to expand your knowledge" : "Take a deeper dive into specific areas" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
      isLoading && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [1, 2].map((i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-10 w-full animate-pulse rounded-lg bg-white"
        },
        i
      )) }),
      !isLoading && suggestions?.length > 0 && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: suggestions.map((topic) => {
        const topicTerm = depth === "essentials" ? `I have covered the basics of ${currentGuideTitle} and want to learn more about ${topic}` : `I have covered the basics of ${currentGuideTitle} and want to dive deeper into ${topic}`;
        const url = `/ai/guide?term=${encodeURIComponent(topicTerm)}&depth=${depth}&id=&format=guide`;
        return /* @__PURE__ */ jsxs(
          "a",
          {
            href: url,
            target: "_blank",
            className: "group/item flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50",
            children: [
              /* @__PURE__ */ jsx("span", { className: "flex-1 truncate group-hover/item:text-gray-900", children: topic }),
              /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 size-4 text-gray-400 group-hover/item:text-gray-600" })
            ]
          },
          topic
        );
      }) }),
      !isLoading && suggestions?.length === 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3 rounded-full bg-gray-100 p-3", children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "h-6 w-6 text-gray-400",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "No suggestions available" })
      ] })
    ] })
  ] });
}

export { AIGuide as A };
