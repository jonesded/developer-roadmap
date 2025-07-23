import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c as cn, i as isLoggedIn, M as Modal, S as Spinner } from './BaseLayout_DfQviQZ5.mjs';
import { User2Icon, BotIcon, HistoryIcon, Loader2Icon, MessageCircle, X } from 'lucide-react';
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from './Popover_Yga6wpL_.mjs';
import { useState, useEffect, useMemo, useId, useRef } from 'react';
import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { l as listChatHistoryOptions, g as groupChatHistory, U as UpgradeToProMessage, S as SearchAIChatHistory, C as ChatHistoryGroup, b as SelectNative, r as roadmapJSONOptions, d as userRoadmapPersonaOptions } from './ListChatHistory_JROxNvA9.mjs';
import { q as queryClient, a as httpPost } from './query-client_BnT_580V.mjs';
import { b as billingDetailsOptions } from './billing_B5wE6dhK.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';

function RoadmapAIChatCard(props) {
  const { role, html, jsx: jsx2, isIntro = false } = props;
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
            children: role === "user" ? /* @__PURE__ */ jsx(User2Icon, { className: "size-4 stroke-[2.5]" }) : /* @__PURE__ */ jsx(BotIcon, { className: "size-4 stroke-[2.5]" })
          }
        ),
        !!jsx2 && jsx2,
        !!html && /* @__PURE__ */ jsx(
          "div",
          {
            className: "course-content course-ai-content prose prose-sm mt-0.5 w-full max-w-[calc(100%-38px)] overflow-hidden text-sm",
            dangerouslySetInnerHTML: { __html: html }
          }
        )
      ] })
    }
  );
}

function RoadmapAIChatHistory(props) {
  const {
    roadmapId,
    activeChatHistoryId,
    activeChatHistoryTitle,
    onChatHistoryClick,
    onDelete,
    onUpgrade
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const isPaidUser = userBillingDetails?.status === "active";
  const {
    data: chatHistory,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: isLoadingInfiniteQuery
  } = useInfiniteQuery(
    {
      ...listChatHistoryOptions({
        roadmapId,
        query
      }),
      enabled: !!roadmapId && isLoggedIn() && isOpen && isPaidUser
    },
    queryClient
  );
  useEffect(() => {
    if (!isPaidUser) {
      setIsLoading(false);
    }
  }, [isPaidUser]);
  useEffect(() => {
    if (!chatHistory || isBillingDetailsLoading) {
      return;
    }
    setIsLoading(false);
  }, [chatHistory, isBillingDetailsLoading]);
  const groupedChatHistory = useMemo(() => {
    const allHistories = chatHistory?.pages?.flatMap((page) => page.data);
    return groupChatHistory(allHistories ?? []);
  }, [chatHistory?.pages]);
  const isEmptyHistory = Object.values(groupedChatHistory ?? {}).every(
    (group) => group.histories.length === 0
  );
  return /* @__PURE__ */ jsxs(
    Popover,
    {
      open: isOpen,
      onOpenChange: (open) => {
        if (!isLoggedIn()) {
          showLoginPopup();
          return;
        }
        setIsOpen(open);
      },
      children: [
        /* @__PURE__ */ jsxs(PopoverTrigger, { className: "flex items-center justify-center gap-2 rounded-md bg-gray-200 px-3 py-1.5 text-xs text-gray-900 hover:bg-gray-300 hover:text-black", children: [
          /* @__PURE__ */ jsx(HistoryIcon, { className: "size-3.5" }),
          activeChatHistoryTitle || "Chat History"
        ] }),
        /* @__PURE__ */ jsxs(
          PopoverContent,
          {
            className: "z-[999] flex max-h-[400px] w-80 flex-col overflow-hidden p-0 shadow-lg",
            align: "end",
            sideOffset: 4,
            children: [
              isLoading && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-10", children: /* @__PURE__ */ jsx(Loader2Icon, { className: "size-6 animate-spin stroke-[2.5] text-gray-400" }) }),
              !isLoading && !isPaidUser && /* @__PURE__ */ jsx(
                UpgradeToProMessage,
                {
                  className: "mt-0 px-10 py-10",
                  onUpgrade: () => {
                    setIsOpen(false);
                    onUpgrade?.();
                  }
                }
              ),
              !isLoading && isPaidUser && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  SearchAIChatHistory,
                  {
                    onSearch: setQuery,
                    isLoading: isLoadingInfiniteQuery,
                    className: "mt-0",
                    inputClassName: "border-x-0 border-t-0 border-b border-b-gray-200 rounded-none focus:border-b-gray-200"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "scrollbar-track-transparent scrollbar-thin scrollbar-thumb-gray-300 grow space-y-4 overflow-y-auto p-2 pt-4", children: [
                  isEmptyHistory && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-10", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "No chat history" }) }),
                  Object.entries(groupedChatHistory ?? {}).map(([key, value]) => {
                    if (value.histories.length === 0) {
                      return null;
                    }
                    return /* @__PURE__ */ jsx(
                      ChatHistoryGroup,
                      {
                        title: value.title,
                        histories: value.histories,
                        activeChatHistoryId,
                        onChatHistoryClick: (id) => {
                          setIsOpen(false);
                          onChatHistoryClick(id);
                        },
                        onDelete: (id) => {
                          setIsOpen(false);
                          onDelete?.(id);
                        }
                      },
                      key
                    );
                  }),
                  hasNextPage && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(
                    "button",
                    {
                      className: "flex w-full items-center justify-center gap-2 text-sm text-gray-500 hover:text-black",
                      onClick: () => {
                        fetchNextPage();
                      },
                      disabled: isFetchingNextPage,
                      children: [
                        isFetchingNextPage && /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx(Loader2Icon, { className: "h-4 w-4 animate-spin" }),
                          "Loading more..."
                        ] }),
                        !isFetchingNextPage && "Load More"
                      ]
                    }
                  ) })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}

function UserPersonaForm(props) {
  const {
    roadmapTitle,
    defaultValues,
    className = "",
    onSubmit,
    isLoading
  } = props;
  const [expertise, setExpertise] = useState(defaultValues?.expertise ?? "");
  const goalOptions = [
    "Finding a job",
    "Learning for fun",
    "Building a side project",
    "Switching careers",
    "Getting a promotion",
    "Filling knowledge gaps",
    "Other"
  ];
  const getInitialGoalSelection = () => {
    if (!defaultValues?.goal) {
      return "";
    }
    for (const option of goalOptions.slice(0, -1)) {
      if (defaultValues.goal.startsWith(option)) {
        return option;
      }
    }
    return "Other";
  };
  const [selectedGoal, setSelectedGoal] = useState(getInitialGoalSelection());
  const [goal, setGoal] = useState(defaultValues?.goal ?? "");
  const [commit, setCommit] = useState(defaultValues?.commit ?? "");
  const [about, setAbout] = useState(defaultValues?.about ?? "");
  const expertiseFieldId = useId();
  const goalFieldId = useId();
  const goalSelectId = useId();
  const commitFieldId = useId();
  const aboutFieldId = useId();
  const goalRef = useRef(null);
  const handleGoalSelectionChange = (value) => {
    setSelectedGoal(value);
    if (value === "Other") {
      setGoal("");
      setTimeout(() => {
        goalRef.current?.focus();
      }, 0);
    } else {
      setGoal(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ expertise, goal, commit, about });
  };
  const hasFormCompleted = !!expertise && !!goal && !!commit;
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: cn("space-y-5", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          className: "text-sm font-medium text-gray-700",
          htmlFor: expertiseFieldId,
          children: [
            "Rate your expertise in ",
            roadmapTitle,
            ":"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        SelectNative,
        {
          id: expertiseFieldId,
          value: expertise,
          defaultValue: expertise,
          onChange: (e) => setExpertise(e.target.value),
          className: "h-[40px] border-gray-300 text-sm focus:border-gray-500 focus:ring-1 focus:ring-gray-500",
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select your expertise" }),
            [
              "No experience (just starting out)",
              "Beginner (less than 1 year of experience)",
              "Intermediate (1-3 years of experience)",
              "Expert (3-5 years of experience)",
              "Master (5+ years of experience)"
            ].map((expertise2) => /* @__PURE__ */ jsx("option", { value: expertise2, children: expertise2 }, expertise2))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          className: "text-sm font-medium text-gray-700",
          htmlFor: goalSelectId,
          children: "What is your goal?"
        }
      ),
      /* @__PURE__ */ jsxs(
        SelectNative,
        {
          id: goalSelectId,
          value: selectedGoal,
          onChange: (e) => handleGoalSelectionChange(e.target.value),
          className: "h-[40px] border-gray-300 text-sm focus:border-gray-500 focus:ring-1 focus:ring-gray-500",
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select your goal" }),
            goalOptions.map((goalOption) => /* @__PURE__ */ jsx("option", { value: goalOption, children: goalOption }, goalOption))
          ]
        }
      ),
      selectedGoal === "Other" && /* @__PURE__ */ jsx(
        "textarea",
        {
          ref: goalRef,
          id: goalFieldId,
          className: "block min-h-24 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500",
          placeholder: "e.g. need to find a job as soon as possible",
          value: goal,
          onChange: (e) => setGoal(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          className: "text-sm font-medium text-gray-700",
          htmlFor: commitFieldId,
          children: "How many hours per week can you commit to learning?"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: commitFieldId,
          className: "block h-[40px] w-full resize-none rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500",
          placeholder: "e.g. 10 hours per week",
          value: commit,
          onChange: (e) => setCommit(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          className: "text-sm font-medium text-gray-700",
          htmlFor: aboutFieldId,
          children: "Tell us about yourself (optional but recommended)"
        }
      ),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: aboutFieldId,
          className: "block min-h-24 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500",
          placeholder: "e.g. I'm a frontend developer with experience in React, looking to expand my backend skills...",
          value: about,
          onChange: (e) => setAbout(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        disabled: isLoading || !hasFormCompleted,
        type: "submit",
        className: "mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-2 text-sm text-white transition-all hover:bg-gray-900 disabled:pointer-events-none disabled:opacity-50",
        children: isLoading ? /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin stroke-[2.5]" }) : /* @__PURE__ */ jsx(Fragment, { children: defaultValues ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }),
          "Update Information"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }),
          "Start Chatting"
        ] }) })
      }
    )
  ] });
}

function UpdatePersonaModal(props) {
  const { roadmapId, onClose } = props;
  const toast = useToast();
  const { data: roadmap } = useQuery(
    roadmapJSONOptions(roadmapId),
    queryClient
  );
  const { data: userPersona, isLoading: isLoadingUserPersona } = useQuery(
    userRoadmapPersonaOptions(roadmapId),
    queryClient
  );
  const { mutate: setUserPersona, isPending: isSettingUserPersona } = useMutation(
    {
      mutationFn: async (data) => {
        return httpPost("/v1-set-user-persona", {
          ...data,
          roadmapId
        });
      },
      onError: (error) => {
        toast.error(error?.message || "Something went wrong");
      },
      onSuccess: () => {
        onClose();
      },
      onSettled: () => {
        return queryClient.invalidateQueries(
          userRoadmapPersonaOptions(roadmapId)
        );
      }
    },
    queryClient
  );
  const roadmapTitle = roadmap?.json.title ?? "";
  return /* @__PURE__ */ jsxs(
    Modal,
    {
      onClose,
      wrapperClassName: "max-w-[450px]",
      bodyClassName: "p-4",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",
            children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
          }
        ),
        isLoadingUserPersona && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-50 flex h-full flex-row items-center justify-center gap-3 bg-white", children: [
          /* @__PURE__ */ jsx(Spinner, { isDualRing: false, className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-gray-500", children: "Loading..." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4 text-left", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Tell us more about yourself" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-balance text-gray-500", children: "We'll use this information to help you get the best out of the AI Tutor." })
        ] }),
        /* @__PURE__ */ jsx(
          UserPersonaForm,
          {
            className: "space-y-4",
            roadmapTitle,
            defaultValues: {
              expertise: userPersona?.expertise ?? "",
              goal: userPersona?.goal ?? "",
              commit: userPersona?.commit ?? "",
              about: userPersona?.about ?? ""
            },
            onSubmit: (data) => {
              const trimmedGoal = data?.goal?.trim();
              if (!trimmedGoal) {
                toast.error("Please describe your goal");
                return;
              }
              const trimmedCommit = data?.commit?.trim();
              if (!trimmedCommit) {
                toast.error(
                  "Please enter how many hours per week you can commit to learning"
                );
                return;
              }
              setUserPersona(data);
            },
            isLoading: isSettingUserPersona
          },
          userPersona ? "loaded" : "loading"
        )
      ]
    }
  );
}

export { RoadmapAIChatHistory as R, UpdatePersonaModal as U, RoadmapAIChatCard as a, UserPersonaForm as b };
