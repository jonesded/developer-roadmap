import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                          */
import { useQuery } from '@tanstack/react-query';
import { GripVertical, XIcon, Bot, X, LockIcon, Send, User2 } from 'lucide-react';
import { useRef, useState, useCallback, useEffect, Fragment, useMemo } from 'react';
import { flushSync } from 'react-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';
import { r as readStream } from './ai_D2DRO333.mjs';
import { c as cn, S as Spinner, i as isLoggedIn, r as removeAuthToken } from './BaseLayout_C3JOBLhD.mjs';
import { a as markdownToHtml, m as markdownToHtmlWithHighlighting } from './markdown_rbU7j7cH.mjs';
import { a as aiLimitOptions } from './ai-course_IUwlyb1o.mjs';
import { q as queryClient } from './query-client_B4F1D3EC.mjs';
import { b as billingDetailsOptions } from './billing_BlRWCv4l.mjs';
import * as ResizablePrimitive from 'react-resizable-panels';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';

const ResizablePanelGroup = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  ResizablePrimitive.PanelGroup,
  {
    className: cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    ),
    ...props
  }
);
const ResizablePanel = ResizablePrimitive.Panel;
const ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  ResizablePrimitive.PanelResizeHandle,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-gray-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsx("div", { className: "z-10 flex h-[30px] w-3 items-center justify-center rounded-xs bg-gray-200 text-black hover:bg-gray-300", children: /* @__PURE__ */ jsx(GripVertical, { className: "size-5" }) })
  }
);

function AICourseLessonChat(props) {
  const {
    courseSlug,
    moduleTitle,
    lessonTitle,
    onUpgradeClick,
    isDisabled,
    defaultQuestions = [],
    courseAIChatHistory,
    setCourseAIChatHistory,
    onClose,
    isAIChatsOpen,
    setIsAIChatsOpen,
    isGeneratingLesson
  } = props;
  const toast = useToast();
  const scrollareaRef = useRef(null);
  const textareaRef = useRef(null);
  const [isStreamingMessage, setIsStreamingMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [streamedMessage, setStreamedMessage] = useState("");
  const { data: tokenUsage, isLoading } = useQuery(
    aiLimitOptions(),
    queryClient
  );
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const isLimitExceeded = (tokenUsage?.used || 0) >= (tokenUsage?.limit || 0);
  const isPaidUser = userBillingDetails?.status === "active";
  const handleChatSubmit = (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isStreamingMessage || !isLoggedIn() || isLimitExceeded || isLoading) {
      return;
    }
    const newMessages = [
      ...courseAIChatHistory,
      {
        role: "user",
        content: trimmedMessage
      }
    ];
    flushSync(() => {
      setCourseAIChatHistory(newMessages);
      setMessage("");
    });
    scrollToBottom();
    completeCourseAIChat(newMessages);
  };
  const scrollToBottom = useCallback(() => {
    scrollareaRef.current?.scrollTo({
      top: scrollareaRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [scrollareaRef]);
  const completeCourseAIChat = async (messages) => {
    setIsStreamingMessage(true);
    const response = await fetch(
      `${"https://api.roadmap.sh"}/v1-follow-up-ai-course/${courseSlug}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          moduleTitle,
          lessonTitle,
          messages: messages.slice(-10)
        })
      }
    );
    if (!response.ok) {
      const data = await response.json();
      toast.error(data?.message || "Something went wrong");
      setCourseAIChatHistory([...messages].slice(0, messages.length - 1));
      setIsStreamingMessage(false);
      if (data.status === 401) {
        removeAuthToken();
        window.location.reload();
      }
    }
    const reader = response.body?.getReader();
    if (!reader) {
      setIsStreamingMessage(false);
      toast.error("Something went wrong");
      return;
    }
    await readStream(reader, {
      onStream: async (content) => {
        flushSync(() => {
          setStreamedMessage(content);
        });
        scrollToBottom();
      },
      onStreamEnd: async (content) => {
        const newMessages = [
          ...messages,
          {
            role: "assistant",
            content,
            html: await markdownToHtmlWithHighlighting(content)
          }
        ];
        flushSync(() => {
          setStreamedMessage("");
          setIsStreamingMessage(false);
          setCourseAIChatHistory(newMessages);
        });
        queryClient.invalidateQueries(aiLimitOptions());
        scrollToBottom();
      }
    });
    setIsStreamingMessage(false);
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  return /* @__PURE__ */ jsx(
    ResizablePanel,
    {
      defaultSize: isAIChatsOpen ? 30 : 0,
      minSize: 20,
      id: "course-chat-content",
      order: 2,
      className: "relative h-full max-lg:fixed! max-lg:inset-0! max-lg:data-[chat-state=closed]:hidden max-lg:data-[chat-state=open]:flex",
      "data-chat-state": isAIChatsOpen ? "open" : "closed",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "absolute inset-y-0 right-0 z-20 flex w-full flex-col overflow-hidden bg-white data-[state=closed]:hidden data-[state=open]:flex",
          "data-state": isAIChatsOpen ? "open" : "closed",
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-2 right-2 z-20 hidden rounded-full p-1 text-gray-400 hover:text-black max-lg:block",
                children: /* @__PURE__ */ jsx(XIcon, { className: "size-4 stroke-[2.5]" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-gray-200 px-4 py-2 text-sm", children: [
              /* @__PURE__ */ jsxs("h4", { className: "flex items-center gap-2 text-base font-medium", children: [
                /* @__PURE__ */ jsx(
                  Bot,
                  {
                    className: "relative -top-[1px] size-5 shrink-0 text-black",
                    strokeWidth: 2.5
                  }
                ),
                "AI Instructor"
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onClose,
                  className: "hidden rounded-md px-2 py-2 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-black lg:block",
                  children: /* @__PURE__ */ jsx(X, { className: "size-4 stroke-[2.5]" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thin relative grow overflow-y-auto",
                ref: scrollareaRef,
                children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "relative flex grow flex-col justify-end", children: [
                  isGeneratingLesson && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center gap-1.5 bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5", children: [
                    /* @__PURE__ */ jsx(
                      Spinner,
                      {
                        className: "size-4 text-gray-400",
                        outerFill: "transparent"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Generating lesson..." })
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-end gap-2 px-3 py-2", children: [
                    courseAIChatHistory.map((chat, index) => {
                      return /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(
                          AIChatCard,
                          {
                            role: chat.role,
                            content: chat.content,
                            html: chat.html
                          }
                        ),
                        chat.isDefault && defaultQuestions?.length > 1 && /* @__PURE__ */ jsxs("div", { className: "mt-0.5 mb-1", children: [
                          /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs font-normal text-gray-500", children: "Some questions you might have about this lesson." }),
                          /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-end gap-1", children: defaultQuestions.map((question, index2) => /* @__PURE__ */ jsx(
                            "button",
                            {
                              className: "flex h-full self-start rounded-md bg-yellow-500/10 px-3 py-2 text-left text-sm text-black hover:bg-yellow-500/20",
                              onClick: () => {
                                flushSync(() => {
                                  setMessage(question);
                                });
                                textareaRef.current?.focus();
                              },
                              children: question
                            },
                            `default-question-${index2}`
                          )) })
                        ] })
                      ] }, `chat-${index}`);
                    }),
                    isStreamingMessage && !streamedMessage && /* @__PURE__ */ jsx(AIChatCard, { role: "assistant", content: "Thinking..." }),
                    streamedMessage && /* @__PURE__ */ jsx(AIChatCard, { role: "assistant", content: streamedMessage })
                  ] })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsxs(
              "form",
              {
                className: "relative flex items-start border-t border-gray-200 text-sm",
                onSubmit: handleChatSubmit,
                children: [
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
                          onUpgradeClick();
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
                    TextareaAutosize,
                    {
                      className: cn(
                        "h-full min-h-[41px] grow resize-none bg-transparent px-4 py-2 focus:outline-hidden",
                        isDisabled ? "cursor-not-allowed opacity-50" : "cursor-auto"
                      ),
                      placeholder: "Ask AI anything about the lesson...",
                      value: message,
                      onChange: (e) => setMessage(e.target.value),
                      autoFocus: true,
                      onKeyDown: (e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          handleChatSubmit(e);
                        }
                      },
                      ref: textareaRef
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: isDisabled || isStreamingMessage || isLimitExceeded,
                      className: "flex aspect-square size-[41px] items-center justify-center text-zinc-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-50",
                      children: /* @__PURE__ */ jsx(Send, { className: "size-4 stroke-[2.5]" })
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function AIChatCard(props) {
  const { role, content, html: defaultHtml } = props;
  const html = useMemo(() => {
    if (defaultHtml) {
      return defaultHtml;
    }
    return markdownToHtml(content, false);
  }, [content, defaultHtml]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex flex-col rounded-lg",
        role === "user" ? "bg-gray-300/30" : "bg-yellow-500/30"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5 p-3", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex size-6 shrink-0 items-center justify-center rounded-full",
              role === "user" ? "bg-gray-200 text-black" : "bg-yellow-400 text-black"
            ),
            children: role === "user" ? /* @__PURE__ */ jsx(User2, { className: "size-4 stroke-[2.5]" }) : /* @__PURE__ */ jsx(Bot, { className: "size-4 stroke-[2.5]" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "course-content course-ai-content prose prose-sm mt-0.5 max-w-full overflow-hidden text-sm",
            dangerouslySetInnerHTML: { __html: html }
          }
        )
      ] })
    }
  );
}

export { AIChatCard as A, ResizablePanelGroup as R, ResizablePanel as a, ResizableHandle as b, AICourseLessonChat as c };
