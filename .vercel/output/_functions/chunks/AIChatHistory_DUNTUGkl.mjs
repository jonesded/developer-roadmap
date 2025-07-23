import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { queryOptions, useMutation, useQuery } from '@tanstack/react-query';
import { h as httpGet, q as queryClient, b as httpDelete, a as httpPost } from './query-client_BnT_580V.mjs';
import { e as userPersonaOptions, c as chatHistoryOptions, f as ChatHistory, P as PersonalizedResponseForm, h as renderMessage, R as RoadmapRecommendations, L as ListChatHistory, i as ChatHistoryError } from './ListChatHistory_JROxNvA9.mjs';
/* empty css                            */
import { Loader2Icon, XIcon, PlusIcon, Book, PersonStandingIcon, FileUpIcon, ArrowDownIcon, TrashIcon, LockIcon, SendIcon } from 'lucide-react';
import { useState, useCallback, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { c as cn, i as isLoggedIn, M as Modal, r as removeAuthToken } from './BaseLayout_DfQviQZ5.mjs';
import { a as aiLimitOptions } from './ai-course_ei-HsZ8o.mjs';
import { b as billingDetailsOptions } from './billing_B5wE6dhK.mjs';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';
import { a as markdownToHtml } from './markdown_rbU7j7cH.mjs';
import { useDropzone } from 'react-dropzone';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { r as readChatStream } from './chat_CErZ2BPm.mjs';
import { A as AITutorLayout, u as useClientMount } from './AITutorLayout_D2lYDCfF.mjs';
import { C as CheckSubscriptionVerification } from './CheckSubscriptionVerification_D2DoKern.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_DhdxALHd.mjs';

function QuickHelpPrompts(props) {
  const { onQuestionClick } = props;
  const [selectedActionIndex, setSelectedActionIndex] = useState(0);
  const quickActions = [
    {
      label: "Help select a career path",
      questions: [
        "What roadmap should I pick?",
        "What are the best jobs for me?",
        "Recommend me a project based on my expertise",
        "Recommend me a topic I can learn in an hour"
      ]
    },
    {
      label: "Help me find a job",
      questions: [
        "How can I improve my resume?",
        "How to make a tech resume?",
        "What’s asked in coding interviews?",
        "Where to find remote dev jobs?"
      ]
    },
    {
      label: "Learn a Topic",
      questions: [
        "What is the best way to learn React?",
        "What is an API?",
        "How do databases work?",
        "What is async in JS?"
      ]
    },
    {
      label: "Test my Knowledge",
      questions: [
        "Quiz me on arrays.",
        "Test my SQL skills.",
        "Ask about REST basics.",
        "Test my JS async knowledge."
      ]
    }
  ];
  const selectedAction = quickActions[selectedActionIndex];
  return /* @__PURE__ */ jsxs("div", { className: "mt-24", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "How can I help you?" }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap items-center gap-2", children: quickActions.map((action, index) => /* @__PURE__ */ jsx(
      "button",
      {
        className: cn(
          "pointer-events-auto flex shrink-0 cursor-pointer items-center gap-2 rounded-lg border bg-white px-2 py-1.5 text-sm hover:bg-gray-100 hover:text-black",
          selectedActionIndex === index ? "border-gray-300 bg-white text-black hover:bg-white" : "border-gray-300 bg-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
        ),
        onClick: () => setSelectedActionIndex(index),
        children: action.label
      },
      action.label
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 divide-y divide-gray-200", children: selectedAction.questions.map((question) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "block w-full cursor-pointer p-2 text-left text-sm text-gray-500 hover:bg-gray-100 hover:text-black",
        onClick: () => onQuestionClick(question),
        children: question
      },
      question
    )) })
  ] });
}

function QuickActionButton(props) {
  const { icon: Icon, label, onClick, className, isLoading } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: cn(
        "pointer-events-auto flex shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      onClick,
      disabled: isLoading,
      children: [
        Icon && !isLoading && /* @__PURE__ */ jsx(Icon, { className: "size-4" }),
        isLoading && Icon && /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" }),
        /* @__PURE__ */ jsx("span", { className: "hidden lg:block", children: label })
      ]
    }
  );
}

function userResumeOptions() {
  return queryOptions({
    queryKey: ["user-resume"],
    queryFn: async () => {
      return httpGet("/v1-user-resume");
    },
    enabled: !!isLoggedIn(),
    refetchOnMount: false
  });
}

function UploadResumeModal(props) {
  const {
    onClose,
    userResume: defaultUserResume,
    isUploading,
    uploadResume
  } = props;
  const toast = useToast();
  const [showLinkedInExport, setShowLinkedInExport] = useState(false);
  const [file, setFile] = useState(
    defaultUserResume?.resumeUrl ? new File([], defaultUserResume.fileName, {
      type: defaultUserResume.fileType
    }) : null
  );
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { mutate: deleteResume, isPending: isDeletingResume } = useMutation(
    {
      mutationFn: async () => {
        return httpDelete("/v1-delete-resume");
      },
      onSuccess: () => {
        setFile(null);
      },
      onSettled: () => {
        return queryClient.invalidateQueries(userResumeOptions());
      },
      onError: (error) => {
        toast.error(error?.message || "Failed to delete resume");
      }
    },
    queryClient
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"]
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024
    // 5MB
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("resume", file);
    uploadResume(formData);
  };
  const size = file?.size || defaultUserResume?.fileSize || 0;
  const fileSize = (size / 1024 / 1024).toFixed(2);
  return /* @__PURE__ */ jsx(Modal, { onClose, children: showLinkedInExport ? /* @__PURE__ */ jsxs("div", { className: "p-4 pt-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl font-semibold text-black", children: "How to export LinkedIn Resume" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-center text-sm text-balance text-gray-500", children: "Visit your LinkedIn profile and export your resume as a PDF." }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://assets.roadmap.sh/guest/linkedin-resume-export-w3x2f.png",
        alt: "LinkedIn Resume Export",
        className: "mt-6 min-h-[331px] rounded-xl object-cover"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setShowLinkedInExport(false),
        className: "mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg bg-black p-1 py-3 leading-none tracking-wide text-white transition-colors hover:bg-gray-900",
        children: "Back to Upload"
      }
    )
  ] }) : /* @__PURE__ */ jsxs(
    "form",
    {
      className: "p-4 pt-8",
      encType: "multipart/form-data",
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl font-semibold text-black", children: "Upload your resume" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-center text-sm text-balance text-gray-500", children: "Upload your resume to get personalized responses to your questions." }),
        file && /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 rounded-lg border border-gray-200 p-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base font-medium text-black", children: file.name }),
            /* @__PURE__ */ jsxs("p", { className: "mt-0.5 text-sm text-gray-500", children: [
              fileSize,
              " MB"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "flex size-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500",
              disabled: isDeletingResume,
              onClick: () => deleteResume(),
              children: isDeletingResume ? /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" }) : /* @__PURE__ */ jsx(XIcon, { className: "size-4" })
            }
          )
        ] }) }),
        !file && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              ...getRootProps({
                className: cn(
                  "border border-dashed border-gray-300 min-h-60 flex items-center justify-center rounded-lg p-4 mt-8 bg-gray-50 cursor-pointer hover:border-black transition-colors",
                  isDragActive && "border-black bg-gray-100"
                )
              }),
              children: [
                /* @__PURE__ */ jsx("input", { ...getInputProps() }),
                /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-2xs flex-col items-center text-center text-balance", children: [
                  /* @__PURE__ */ jsx(PlusIcon, { className: "size-5 text-gray-500" }),
                  /* @__PURE__ */ jsxs("p", { className: "mt-4 text-gray-600", children: [
                    "Drag and drop your resume here or",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-black", children: "click to browse" })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-center text-xs text-gray-500", children: "Only PDF files (max 2MB in size) are supported" })
        ] }),
        !defaultUserResume && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg bg-black p-1 py-3 leading-none tracking-wide text-white transition-colors hover:bg-gray-900 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[loading=true]:cursor-wait",
              "data-loading": String(isUploading),
              disabled: !file || isUploading || isDeletingResume,
              children: isUploading ? /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" }) : "Upload Resume"
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 text-center text-xs text-gray-500", children: [
            "You can also export your resume from",
            " ",
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowLinkedInExport(true),
                className: "text-black underline underline-offset-2 hover:text-gray-600",
                children: "LinkedIn"
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}

function parseAIChatCourse(content) {
  const courseKeywordRegex = /<keyword>(.*?)<\/keyword>/;
  const courseKeyword = content.match(courseKeywordRegex)?.[1]?.trim();
  if (!courseKeyword) {
    return null;
  }
  const courseDifficultyRegex = /<difficulty>(.*?)<\/difficulty>/;
  const courseDifficulty = content.match(courseDifficultyRegex)?.[1]?.trim();
  if (!courseDifficulty) {
    return null;
  }
  return { keyword: courseKeyword, difficulty: courseDifficulty || "beginner" };
}
function AIChatCourse(props) {
  const { content } = props;
  const course = parseAIChatCourse(content);
  if (!course) {
    return null;
  }
  const courseSearchUrl = `/ai/course?term=${course?.keyword}&difficulty=${course?.difficulty}`;
  return /* @__PURE__ */ jsx("div", { className: "relative my-6 flex flex-wrap gap-1 first:mt-0 last:mb-0", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: courseSearchUrl,
      target: "_blank",
      className: "group flex min-w-[120px] items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-left text-sm text-gray-700 transition-all hover:border-gray-400 hover:text-black active:bg-gray-100",
      children: [
        /* @__PURE__ */ jsx(Book, { className: "size-4 flex-shrink-0 text-gray-400" }),
        course?.keyword
      ]
    },
    course?.keyword
  ) });
}

const aiChatRenderer = {
  "roadmap-recommendations": (options) => {
    return /* @__PURE__ */ jsx(RoadmapRecommendations, { ...options });
  },
  "generate-course": (options) => {
    return /* @__PURE__ */ jsx(AIChatCourse, { ...options });
  }
};
function AIChat(props) {
  const {
    messages: defaultMessages,
    chatHistoryId: defaultChatHistoryId,
    setChatHistoryId: setDefaultChatHistoryId,
    onUpgrade
  } = props;
  const toast = useToast();
  const [message, setMessage] = useState("");
  const [isStreamingMessage, setIsStreamingMessage] = useState(false);
  const [streamedMessage, setStreamedMessage] = useState(null);
  const [aiChatHistory, setAiChatHistory] = useState(defaultMessages ?? []);
  const [isPersonalizedResponseFormOpen, setIsPersonalizedResponseFormOpen] = useState(false);
  const [isUploadResumeModalOpen, setIsUploadResumeModalOpen] = useState(false);
  const [showScrollToBottomButton, setShowScrollToBottomButton] = useState(false);
  const scrollableContainerRef = useRef(null);
  const chatContainerRef = useRef(null);
  const textareaMessageRef = useRef(null);
  const { data: tokenUsage, isLoading } = useQuery(
    aiLimitOptions(),
    queryClient
  );
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const { data: userPersona, isLoading: isUserPersonaLoading } = useQuery(
    userPersonaOptions(),
    queryClient
  );
  const { data: userResume, isLoading: isUserResumeLoading } = useQuery(
    userResumeOptions(),
    queryClient
  );
  const { mutate: deleteChatMessage, isPending: isDeletingChatMessage } = useMutation(
    {
      mutationFn: (messages) => {
        if (!defaultChatHistoryId) {
          return Promise.resolve({
            status: 200,
            message: "Chat history not found"
          });
        }
        return httpPost(`/v1-delete-chat-message/${defaultChatHistoryId}`, {
          messages
        });
      },
      onSuccess: () => {
        textareaMessageRef.current?.focus();
        queryClient.invalidateQueries(
          chatHistoryOptions(defaultChatHistoryId)
        );
      },
      onError: (error) => {
        toast.error(error?.message || "Failed to delete message");
      }
    },
    queryClient
  );
  const isLimitExceeded = (tokenUsage?.used || 0) >= (tokenUsage?.limit || 0);
  const isPaidUser = userBillingDetails?.status === "active";
  const handleChatSubmit = () => {
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    if (isLimitExceeded) {
      if (!isPaidUser) {
        onUpgrade?.();
      }
      toast.error("Limit reached for today. Please wait until tomorrow.");
      return;
    }
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isStreamingMessage) {
      return;
    }
    const newMessages = [
      ...aiChatHistory,
      {
        role: "user",
        content: trimmedMessage,
        // it's just a simple message, so we can use markdownToHtml
        html: markdownToHtml(trimmedMessage)
      }
    ];
    flushSync(() => {
      setAiChatHistory(newMessages);
      setMessage("");
    });
    setTimeout(() => {
      scrollToBottom();
    }, 0);
    textareaMessageRef.current?.focus();
    completeAIChat(newMessages);
  };
  const canScrollToBottom = useCallback(() => {
    const scrollableContainer = scrollableContainerRef?.current;
    if (!scrollableContainer) {
      return false;
    }
    const paddingBottom = parseInt(
      getComputedStyle(scrollableContainer).paddingBottom
    );
    const distanceFromBottom = scrollableContainer.scrollHeight - (scrollableContainer.scrollTop + scrollableContainer.clientHeight) - paddingBottom;
    return distanceFromBottom > -(paddingBottom - 80);
  }, []);
  const scrollToBottom = useCallback(
    (behavior = "smooth") => {
      const scrollableContainer = scrollableContainerRef?.current;
      if (!scrollableContainer) {
        return;
      }
      scrollableContainer.scrollTo({
        top: scrollableContainer.scrollHeight,
        behavior: behavior === "instant" ? "instant" : "smooth"
      });
    },
    [scrollableContainerRef]
  );
  const completeAIChat = async (messages, force = false) => {
    setIsStreamingMessage(true);
    const response = await fetch(`${"https://api.hnmdevs.com"}/v1-chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        chatHistoryId: defaultChatHistoryId,
        messages,
        force
      })
    });
    if (!response.ok) {
      const data = await response.json();
      toast.error(data?.message || "Something went wrong");
      setAiChatHistory([...messages].slice(0, messages.length - 1));
      setIsStreamingMessage(false);
      if (data.status === 401) {
        removeAuthToken();
        window.location.reload();
      }
    }
    const stream = response.body;
    if (!stream) {
      setIsStreamingMessage(false);
      toast.error("Something went wrong");
      return;
    }
    await readChatStream(stream, {
      onMessage: async (content) => {
        const jsx2 = await renderMessage(content, aiChatRenderer, {
          isLoading: true
        });
        flushSync(() => {
          setStreamedMessage(jsx2);
        });
        setShowScrollToBottomButton(canScrollToBottom());
      },
      onMessageEnd: async (content) => {
        const jsx2 = await renderMessage(content, aiChatRenderer, {
          isLoading: false
        });
        const newMessages = [
          ...messages,
          {
            role: "assistant",
            content,
            jsx: jsx2
          }
        ];
        flushSync(() => {
          setStreamedMessage(null);
          setIsStreamingMessage(false);
          setAiChatHistory(newMessages);
        });
        queryClient.invalidateQueries(aiLimitOptions());
        queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryKey[0] === "list-chat-history";
          }
        });
      },
      onDetails: (details) => {
        const chatHistoryId = details?.chatHistoryId;
        if (!chatHistoryId) {
          return;
        }
        setDefaultChatHistoryId?.(chatHistoryId);
      }
    });
    setIsStreamingMessage(false);
  };
  const { mutate: uploadResume, isPending: isUploading } = useMutation(
    {
      mutationFn: (formData) => {
        return httpPost("/v1-upload-resume", formData);
      },
      onSuccess: () => {
        toast.success("Resume uploaded successfully");
        setIsUploadResumeModalOpen(false);
        queryClient.invalidateQueries(userResumeOptions());
      },
      onError: (error) => {
        toast.error(error?.message || "Failed to upload resume");
      },
      onMutate: () => {
        setIsUploadResumeModalOpen(false);
      }
    },
    queryClient
  );
  useEffect(() => {
    const scrollableContainer = scrollableContainerRef.current;
    if (!scrollableContainer) {
      return;
    }
    const abortController = new AbortController();
    let timeoutId;
    const debouncedHandleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setShowScrollToBottomButton(canScrollToBottom());
      }, 100);
    };
    debouncedHandleScroll();
    scrollableContainer.addEventListener("scroll", debouncedHandleScroll, {
      signal: abortController.signal
    });
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      abortController.abort();
    };
  }, [aiChatHistory]);
  const handleRegenerate = useCallback(
    (index) => {
      if (isLimitExceeded) {
        if (!isPaidUser) {
          onUpgrade?.();
        }
        toast.error("Limit reached for today. Please wait until tomorrow.");
        return;
      }
      const filteredChatHistory = aiChatHistory.slice(0, index);
      flushSync(() => {
        setAiChatHistory(filteredChatHistory);
      });
      scrollToBottom();
      completeAIChat(filteredChatHistory, true);
    },
    [aiChatHistory]
  );
  const handleDelete = useCallback(
    (index) => {
      const filteredChatHistory = aiChatHistory.filter((_, i) => i !== index);
      setAiChatHistory(filteredChatHistory);
      deleteChatMessage(filteredChatHistory);
    },
    [aiChatHistory]
  );
  const shouldShowQuickHelpPrompts = message.length === 0 && aiChatHistory.length === 0;
  const isDataLoading = isLoading || isBillingDetailsLoading || isUserPersonaLoading || isUserResumeLoading;
  useEffect(() => {
    scrollToBottom("instant");
  }, []);
  const shouldShowUpgradeBanner = !isPaidUser && aiChatHistory.length > 0;
  return /* @__PURE__ */ jsxs("div", { className: "ai-chat relative flex grow flex-col gap-2 bg-gray-100", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "scrollbar-none absolute inset-0 overflow-y-auto pb-55",
          shouldShowUpgradeBanner ? "pb-60" : "pb-55"
        ),
        ref: scrollableContainerRef,
        children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full max-w-3xl grow px-4", children: [
          shouldShowQuickHelpPrompts && /* @__PURE__ */ jsx(
            QuickHelpPrompts,
            {
              onQuestionClick: (question) => {
                textareaMessageRef.current?.focus();
                setMessage(question);
              }
            }
          ),
          !shouldShowQuickHelpPrompts && /* @__PURE__ */ jsx(
            ChatHistory,
            {
              chatHistory: aiChatHistory,
              isStreamingMessage,
              streamedMessage,
              onDelete: handleDelete,
              onRegenerate: handleRegenerate
            }
          )
        ] })
      }
    ),
    isPersonalizedResponseFormOpen && /* @__PURE__ */ jsx(
      PersonalizedResponseForm,
      {
        defaultValues: userPersona?.chatPreferences ?? void 0,
        onClose: () => setIsPersonalizedResponseFormOpen(false)
      }
    ),
    isUploadResumeModalOpen && /* @__PURE__ */ jsx(
      UploadResumeModal,
      {
        onClose: () => setIsUploadResumeModalOpen(false),
        userResume,
        isUploading,
        uploadResume
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "pointer-events-none absolute right-0 bottom-0 left-0 mx-auto w-full max-w-3xl px-4",
        ref: chatContainerRef,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                QuickActionButton,
                {
                  icon: PersonStandingIcon,
                  label: "Personalize",
                  onClick: () => {
                    if (!isLoggedIn()) {
                      showLoginPopup();
                      return;
                    }
                    setIsPersonalizedResponseFormOpen(true);
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                QuickActionButton,
                {
                  icon: FileUpIcon,
                  label: isUploading ? "Processing..." : "Upload Resume",
                  onClick: () => {
                    if (!isLoggedIn()) {
                      showLoginPopup();
                      return;
                    }
                    setIsUploadResumeModalOpen(true);
                  },
                  isLoading: isUploading
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              showScrollToBottomButton && /* @__PURE__ */ jsx(
                QuickActionButton,
                {
                  icon: ArrowDownIcon,
                  label: "Scroll to Bottom",
                  onClick: scrollToBottom
                }
              ),
              aiChatHistory.length > 0 && !isPaidUser && /* @__PURE__ */ jsx(
                QuickActionButton,
                {
                  icon: TrashIcon,
                  label: "Clear Chat",
                  onClick: () => {
                    setAiChatHistory([]);
                    deleteChatMessage([]);
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              className: "pointer-events-auto relative flex flex-col gap-2 overflow-hidden rounded-lg rounded-b-none border border-b-0 border-gray-200 bg-white p-2.5",
              onSubmit: (e) => {
                e.preventDefault();
                if (isDataLoading) {
                  return;
                }
                handleChatSubmit();
              },
              children: [
                /* @__PURE__ */ jsx(
                  TextareaAutosize,
                  {
                    ref: textareaMessageRef,
                    value: message,
                    onChange: (e) => setMessage(e.target.value),
                    className: "min-h-10 w-full resize-none bg-transparent text-sm focus:outline-none",
                    placeholder: "Ask me anything...",
                    disabled: isStreamingMessage,
                    autoFocus: true,
                    onKeyDown: (e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        if (isDataLoading) {
                          return;
                        }
                        e.preventDefault();
                        handleChatSubmit();
                      }
                    }
                  }
                ),
                isLimitExceeded && isLoggedIn() && !isDataLoading && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-10 flex items-center justify-center gap-2 bg-black text-white", children: [
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
                      type: "button",
                      onClick: () => {
                        onUpgrade?.();
                      },
                      className: "rounded-md bg-white px-2 py-1 text-xs font-medium text-black hover:bg-gray-300",
                      children: "Upgrade for more"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "flex size-8 shrink-0 items-center justify-center rounded-md border border-gray-200 disabled:cursor-not-allowed disabled:opacity-50",
                    disabled: isLimitExceeded || isStreamingMessage || isDataLoading,
                    children: /* @__PURE__ */ jsx(SendIcon, { className: "size-4" })
                  }
                ) })
              ]
            }
          )
        ]
      }
    )
  ] });
}

function AIChatLayout(props) {
  const { children } = props;
  return /* @__PURE__ */ jsxs(
    AITutorLayout,
    {
      activeTab: "chat",
      wrapperClassName: "flex-row p-0 lg:p-0 overflow-hidden",
      containerClassName: "h-[calc(100vh-49px)] overflow-hidden",
      children: [
        children,
        /* @__PURE__ */ jsx(CheckSubscriptionVerification, {})
      ]
    }
  );
}

function AIChatHistory(props) {
  const { chatHistoryId: defaultChatHistoryId } = props;
  const isClientMounted = useClientMount();
  const [keyTrigger, setKeyTrigger] = useState(0);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isChatHistoryLoading, setIsChatHistoryLoading] = useState(true);
  const [chatHistoryId, setChatHistoryId] = useState(
    defaultChatHistoryId || void 0
  );
  const { data, error: chatHistoryError } = useQuery(
    chatHistoryOptions(chatHistoryId, aiChatRenderer),
    queryClient
  );
  const {
    data: userBillingDetails,
    isLoading: isBillingDetailsLoading,
    error: billingDetailsError
  } = useQuery(billingDetailsOptions(), queryClient);
  const handleChatHistoryClick = useCallback(
    (nextChatHistoryId) => {
      setKeyTrigger((key) => key + 1);
      if (nextChatHistoryId === null) {
        setChatHistoryId(void 0);
        window.history.replaceState(null, "", "/ai/chat");
        return;
      }
      const hasAlreadyFetched = queryClient.getQueryData(
        chatHistoryOptions(nextChatHistoryId).queryKey
      );
      if (!hasAlreadyFetched) {
        setIsChatHistoryLoading(true);
      }
      setChatHistoryId(nextChatHistoryId);
      window.history.replaceState(null, "", `/ai/chat/${nextChatHistoryId}`);
    },
    []
  );
  const handleDelete = useCallback(
    (deletedChatHistoryId) => {
      if (deletedChatHistoryId !== chatHistoryId) {
        return;
      }
      setChatHistoryId(void 0);
      window.history.replaceState(null, "", "/ai/chat");
      setKeyTrigger((key) => key + 1);
    },
    [chatHistoryId]
  );
  const isPaidUser = userBillingDetails?.status === "active";
  const hasError = chatHistoryError || billingDetailsError;
  const showLoader = isChatHistoryLoading && !hasError;
  const showError = !isChatHistoryLoading && Boolean(hasError);
  useEffect(() => {
    if (!chatHistoryId) {
      setIsChatHistoryLoading(false);
      return;
    }
    if (!data) {
      return;
    }
    setIsChatHistoryLoading(false);
  }, [data, chatHistoryId]);
  useEffect(() => {
    if (!hasError) {
      return;
    }
    setIsChatHistoryLoading(false);
  }, [hasError]);
  if (!isClientMounted || isBillingDetailsLoading) {
    return /* @__PURE__ */ jsx(AIChatLayout, { children: /* @__PURE__ */ jsx("div", { className: "relative flex grow", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center", children: /* @__PURE__ */ jsx(Loader2Icon, { className: "h-8 w-8 animate-spin stroke-[2.5] text-gray-400/80" }) }) }) });
  }
  return /* @__PURE__ */ jsxs(AIChatLayout, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex grow", children: [
      /* @__PURE__ */ jsx(
        ListChatHistory,
        {
          activeChatHistoryId: chatHistoryId,
          onChatHistoryClick: handleChatHistoryClick,
          onDelete: handleDelete,
          isPaidUser,
          onUpgrade: () => {
            setShowUpgradeModal(true);
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative flex grow", children: [
        showLoader && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center", children: /* @__PURE__ */ jsx(Loader2Icon, { className: "h-8 w-8 animate-spin stroke-[2.5] text-gray-400/80" }) }),
        showError && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center", children: /* @__PURE__ */ jsx(ChatHistoryError, { error: hasError, className: "mt-0" }) }),
        !showLoader && !showError && /* @__PURE__ */ jsx(
          AIChat,
          {
            messages: data?.messages,
            chatHistoryId,
            setChatHistoryId: (id) => {
              setChatHistoryId(id);
              window.history.replaceState(null, "", `/ai/chat/${id}`);
              queryClient.invalidateQueries({
                predicate: (query) => {
                  return query.queryKey[0] === "list-chat-history";
                }
              });
            },
            onUpgrade: () => {
              setShowUpgradeModal(true);
            }
          },
          keyTrigger
        )
      ] })
    ] }),
    showUpgradeModal && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradeModal(false) })
  ] });
}

export { AIChatHistory as A };
