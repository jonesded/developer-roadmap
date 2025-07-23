import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { queryOptions, useMutation, useQuery, infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';
import { h as httpGet, q as queryClient, a as httpPost, b as httpDelete } from './query-client_CBXGK_YM.mjs';
import { c as cn, i as isLoggedIn, M as Modal, p as pageProgressMessage, r as removeAuthToken } from './BaseLayout_B-BXcELP.mjs';
import { m as markdownToHtmlWithHighlighting, a as markdownToHtml } from './markdown_rbU7j7cH.mjs';
/* empty css                            */
import { memo, Fragment, useState, useId, useRef, useMemo, useCallback, useEffect, useLayoutEffect } from 'react';
import { flushSync } from 'react-dom';
import 'clsx';
import './toast_BJ-iAXal.mjs';
import { CheckIcon, CopyIcon, RotateCwIcon, TrashIcon, ChevronDownIcon, Loader2Icon, MessageCircle, SquareArrowOutUpRightIcon, ChevronRightIcon, Check, ShareIcon, AlertCircleIcon, SearchIcon, XIcon, EllipsisVerticalIcon, Trash2Icon, PanelLeftIcon, PlusIcon, LockIcon, PanelLeftCloseIcon } from 'lucide-react';
import { u as useCopyText } from './use-copy-text_Bqwbcq8G.mjs';
import { T as Tooltip } from './Tooltip_B3pH7xnQ.mjs';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { nanoid } from 'nanoid';
import { a as aiLimitOptions } from './ai-course_C2IOZ4Jw.mjs';
import { u as userResourceProgressOptions, r as roadmapTreeMappingOptions } from './roadmap-tree_CL6lN6oZ.mjs';
import { g as getPercentage } from './number_D9-I_I5P.mjs';
import { a as renderTopicProgress, u as updateResourceProgress } from './resource-progress_R1rWsSWL.mjs';
import { C as CheckIcon$1 } from './CheckIcon_B3c1RSNy.mjs';
import { u as useAuth } from './use-auth_X5yd_BRu.mjs';
import { renderFlowJSON } from './index_DJK1nS1V.mjs';
import { r as readChatStream } from './chat_CErZ2BPm.mjs';
import { g as getTailwindScreenDimension } from './is-mobile_BHDNWQGh.mjs';
import { DateTime } from 'luxon';
import { u as useDebounceValue } from './use-debounce_BdAoSD5T.mjs';
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem } from './DropdownMenu_GC5XEZBi.mjs';
import 'js-cookie';
import './roadmap_41ouUrOm.mjs';

const ChatHistory = memo((props) => {
  const {
    chatHistory,
    onDelete,
    isStreamingMessage,
    streamedMessage,
    onRegenerate
  } = props;
  return /* @__PURE__ */ jsx("div", { className: "flex grow flex-col", children: /* @__PURE__ */ jsx("div", { className: "relative flex grow flex-col justify-end", children: /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col justify-end gap-14 py-5", children: [
    chatHistory.map((chat, index) => {
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
        AIChatCard,
        {
          ...chat,
          onDelete: () => {
            onDelete?.(index);
          },
          onRegenerate: () => {
            onRegenerate?.(index);
          }
        }
      ) }, `chat-${index}`);
    }),
    isStreamingMessage && !streamedMessage && /* @__PURE__ */ jsx(
      AIChatCard,
      {
        role: "assistant",
        content: "",
        html: "<p>Thinking...</p>",
        showActions: false
      }
    ),
    streamedMessage && /* @__PURE__ */ jsx(
      AIChatCard,
      {
        role: "assistant",
        content: "",
        jsx: streamedMessage,
        showActions: false
      }
    )
  ] }) }) });
});
const AIChatCard = memo((props) => {
  const {
    role,
    content,
    jsx: jsx2,
    html,
    showActions = true,
    onDelete,
    onRegenerate
  } = props;
  const { copyText, isCopied } = useCopyText();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group/content relative flex w-full flex-col",
        role === "user" ? "items-end" : "items-start"
      ),
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "flex max-w-full items-start gap-2.5 rounded-lg",
              role === "user" ? "max-w-[70%] bg-gray-200 p-3" : "w-full"
            ),
            children: [
              !!jsx2 && jsx2,
              !!html && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "course-content course-ai-content prose prose-sm overflow-hidden text-sm",
                  dangerouslySetInnerHTML: { __html: html }
                }
              )
            ]
          }
        ),
        showActions && /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "absolute -bottom-2 flex translate-y-full items-center gap-1",
              role === "user" ? "right-0" : "left-0"
            ),
            children: [
              /* @__PURE__ */ jsx(
                ActionButton,
                {
                  icon: isCopied ? CheckIcon : CopyIcon,
                  onClick: () => copyText(content ?? ""),
                  tooltip: isCopied ? "Copied" : "Copy"
                }
              ),
              role === "assistant" && onRegenerate && /* @__PURE__ */ jsx(
                ActionButton,
                {
                  icon: RotateCwIcon,
                  onClick: onRegenerate,
                  tooltip: "Regenerate"
                }
              ),
              onDelete && /* @__PURE__ */ jsx(
                ActionButton,
                {
                  icon: TrashIcon,
                  onClick: onDelete,
                  tooltip: "Delete"
                }
              )
            ]
          }
        )
      ]
    }
  );
});
function ActionButton(props) {
  const { icon: Icon, onClick, tooltip } = props;
  return /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "flex size-8 items-center justify-center rounded-lg opacity-0 transition-opacity group-hover/content:opacity-100 hover:bg-gray-200",
        onClick,
        children: /* @__PURE__ */ jsx(Icon, { className: "size-4 stroke-[2.5]" })
      }
    ),
    tooltip && /* @__PURE__ */ jsx(Tooltip, { position: "top-center", additionalClass: "-translate-y-1", children: tooltip })
  ] });
}

function SelectNative(props) {
  const { className, children, ...rest } = props;
  return /* @__PURE__ */ jsxs("div", { className: "relative flex", children: [
    /* @__PURE__ */ jsx(
      "select",
      {
        "data-slot": "select-native",
        className: cn(
          "peer inline-flex w-full cursor-pointer appearance-none items-center rounded-lg border border-gray-200 text-sm text-black outline-none focus-visible:border-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-[option[disabled]:checked]:text-gray-500 aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40",
          props.multiple ? "[&_option:checked]:bg-accent py-1 *:px-3 *:py-1" : "h-9 ps-3 pe-8",
          className
        ),
        ...rest,
        children
      }
    ),
    !props.multiple && /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-gray-500/80 peer-disabled:opacity-50 peer-aria-invalid:text-red-500/80", children: /* @__PURE__ */ jsx(ChevronDownIcon, { size: 16, "aria-hidden": "true" }) })
  ] });
}

function userRoadmapPersonaOptions(roadmapId) {
  return queryOptions({
    queryKey: ["user-persona", roadmapId],
    queryFn: async () => {
      return httpGet(
        `/v1-user-roadmap-persona/${roadmapId}`
      );
    },
    enabled: !!roadmapId && isLoggedIn(),
    refetchOnMount: false
  });
}
function userPersonaOptions() {
  return queryOptions({
    queryKey: ["user-persona"],
    queryFn: async () => {
      return httpGet("/v1-user-persona");
    },
    enabled: !!isLoggedIn(),
    refetchOnMount: false
  });
}

const PersonalizedResponseForm = memo(
  (props) => {
    const { defaultValues, onClose } = props;
    const toast = useToast();
    const [expertise, setExpertise] = useState(defaultValues?.expertise ?? "");
    const [about, setAbout] = useState(defaultValues?.about ?? "");
    const [specialInstructions, setSpecialInstructions] = useState(
      defaultValues?.specialInstructions ?? ""
    );
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
    const expertiseFieldId = useId();
    const goalFieldId = useId();
    const goalSelectId = useId();
    const aboutFieldId = useId();
    const specialInstructionsFieldId = useId();
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
    const { mutate: setChatPreferences, isPending } = useMutation(
      {
        mutationFn: (data) => {
          return httpPost("/v1-set-chat-preferences", data);
        },
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries(userPersonaOptions());
        },
        onError: (error) => {
          toast.error(error?.message ?? "Something went wrong");
        }
      },
      queryClient
    );
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!isLoggedIn()) {
        showLoginPopup();
        return;
      }
      setChatPreferences({
        expertise,
        goal,
        about,
        specialInstructions
      });
    };
    const hasFormCompleted = !!expertise && !!goal && !!about;
    return /* @__PURE__ */ jsx(Modal, { onClose, children: /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: cn("space-y-8"), children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "text-sm font-medium text-gray-700",
            htmlFor: expertiseFieldId,
            children: "Rate your Experience"
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
            htmlFor: aboutFieldId,
            children: "Tell us more about yourself"
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: aboutFieldId,
            className: "block min-h-24 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500",
            placeholder: "e.g. I'm a software engineer with 5 years of experience",
            value: about,
            onChange: (e) => setAbout(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "text-sm font-medium text-gray-700",
            htmlFor: specialInstructionsFieldId,
            children: "Special Instructions"
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: specialInstructionsFieldId,
            className: "block min-h-24 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500",
            placeholder: "e.g. Prefer concise responses with code examples",
            value: specialInstructions,
            onChange: (e) => setSpecialInstructions(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          disabled: !hasFormCompleted || isPending,
          type: "submit",
          className: "mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-2 text-sm text-white transition-all hover:bg-gray-900 disabled:pointer-events-none disabled:opacity-50",
          children: isPending ? /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin stroke-[2.5]" }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "size-4" }),
            defaultValues ? "Update Preferences" : "Set Preferences"
          ] })
        }
      )
    ] }) }) });
  }
);

async function parseMessageParts(content, renderer, options = {
  isLoading: false
}) {
  const parts = [];
  const tagNames = Object.keys(renderer);
  if (tagNames.length > 0) {
    const tagPattern2 = tagNames.join("|");
    content = content.replace(
      new RegExp(`\`\`\`\\w*?\\n+?<(${tagPattern2})>`, "g"),
      "<$1>"
    );
    content = content.replace(
      new RegExp(`<\\/(${tagPattern2})>\\n+?\`\`\``, "g"),
      "</$1>"
    );
  }
  if (tagNames.length === 0) {
    const html = await markdownToHtmlWithHighlighting(content);
    parts.push({
      id: nanoid(),
      type: "html",
      content: html
    });
    return parts;
  }
  const tagPattern = tagNames.join("|");
  const regex = new RegExp(`<(${tagPattern})>(.*?)</\\1>`, "gs");
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const [_, tag, innerContent] = match;
    if (match.index > lastIndex) {
      const rawBefore = content.slice(lastIndex, match.index);
      const html = await markdownToHtmlWithHighlighting(rawBefore);
      parts.push({
        id: nanoid(),
        type: "html",
        content: html
      });
    }
    const output = renderer[tag]({
      content: innerContent,
      isLoading: options.isLoading
    });
    parts.push({
      id: nanoid(),
      type: "html",
      content: output
    });
    lastIndex = regex.lastIndex;
  }
  for (const tag of tagNames) {
    const openingTag = `<${tag}>`;
    const openingIndex = content.indexOf(openingTag, lastIndex);
    const closingTag = `</${tag}>`;
    const closingIndex = content.indexOf(closingTag, lastIndex);
    if (openingIndex !== -1 && closingIndex === -1) {
      if (openingIndex > lastIndex) {
        const rawBefore = content.slice(lastIndex, openingIndex);
        const html = await markdownToHtmlWithHighlighting(rawBefore);
        parts.push({
          id: nanoid(),
          type: "html",
          content: html
        });
      }
      const innerContent = content.slice(openingIndex + openingTag.length);
      const output = renderer[tag]({
        content: innerContent,
        isLoading: options.isLoading
      });
      parts.push({
        id: nanoid(),
        type: "html",
        content: output
      });
      return parts;
    }
  }
  if (lastIndex < content.length) {
    const rawRemaining = content.slice(lastIndex);
    const html = await markdownToHtmlWithHighlighting(rawRemaining);
    parts.push({
      id: nanoid(),
      type: "html",
      content: html
    });
  }
  return parts;
}
async function renderMessage(content, renderer, options = {
  isLoading: false
}) {
  const parts = await parseMessageParts(content, renderer, options);
  return /* @__PURE__ */ jsx("div", { className: "max-w-[calc(100%-38px)] w-full", children: parts.map((item) => {
    if ((item.type === "html" || item.type === "text") && typeof item.content === "string") {
      const trimmedContent = item.content.trim();
      if (!trimmedContent) {
        return null;
      }
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: "course-content course-ai-content prose prose-sm mt-0.5 max-w-full overflow-hidden text-sm",
          dangerouslySetInnerHTML: {
            __html: trimmedContent
          }
        },
        item.id
      );
    }
    if (item.type === "html" && typeof item.content === "object") {
      return /* @__PURE__ */ jsx(Fragment, { children: item.content }, item.id);
    }
    return null;
  }) });
}

function roadmapJSONOptions(roadmapId) {
  return queryOptions({
    queryKey: ["roadmap-json", roadmapId],
    queryFn: async () => {
      const baseUrl = undefined                              ;
      const roadmapJSON = await httpGet(
        `${baseUrl}/${roadmapId}.json`
      );
      const svg = await renderFlowJSON();
      return {
        json: roadmapJSON,
        svg
      };
    },
    refetchOnMount: false
  });
}
function listBuiltInRoadmaps() {
  return queryOptions({
    queryKey: ["built-in-roadmaps"],
    queryFn: () => {
      return httpGet(`${undefined                              }/pages.json`);
    },
    select: (data) => {
      return data.filter((page) => page?.group?.toLowerCase() === "roadmaps").map((page) => ({
        id: page.id,
        title: page.title,
        url: page.url,
        renderer: page.renderer
      }));
    },
    refetchOnMount: false
  });
}
function roadmapDetailsOptions(roadmapId) {
  return queryOptions({
    queryKey: ["roadmap-details", roadmapId],
    queryFn: async () => {
      const baseUrl = undefined                              ;
      const pagesJSON = await httpGet(`${baseUrl}/pages.json`);
      const roadmapDetails = pagesJSON.find(
        (page) => page?.group?.toLowerCase() === "roadmaps" && page.id === roadmapId
      );
      if (!roadmapDetails) {
        throw new Error("Roadmap details not found");
      }
      return roadmapDetails;
    },
    refetchOnMount: false
  });
}

function parseRoadmapSlugList(content) {
  const items = [];
  const roadmapSlugListRegex = /<roadmap-slug>.*?<\/roadmap-slug>/gs;
  const roadmapSlugListItems = content.match(roadmapSlugListRegex);
  if (!roadmapSlugListItems) {
    return items;
  }
  for (const roadmapSlugListItem of roadmapSlugListItems) {
    const roadmapSlugRegex = /<roadmap-slug>(.*?)<\/roadmap-slug>/;
    const roadmapSlug = roadmapSlugListItem.match(roadmapSlugRegex)?.[1]?.trim();
    if (!roadmapSlug) {
      continue;
    }
    items.push({
      roadmapSlug
    });
  }
  return items;
}
function RoadmapRecommendations(props) {
  const { content } = props;
  const roadmapSlugListItems = parseRoadmapSlugList(content);
  const { data: roadmaps } = useQuery(listBuiltInRoadmaps(), queryClient);
  const progressItemWithText = useMemo(() => {
    return roadmapSlugListItems.map((item) => {
      const roadmap = roadmaps?.find(
        (mapping) => mapping.id === item.roadmapSlug
      );
      return {
        ...item,
        title: roadmap?.title
      };
    });
  }, [roadmapSlugListItems, roadmaps]);
  return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("div", { className: "relative my-6 flex flex-wrap gap-1 first:mt-0 last:mb-0", children: progressItemWithText.map((item) => /* @__PURE__ */ jsxs(
    "a",
    {
      href: `/${item.roadmapSlug}/ai`,
      target: "_blank",
      className: "group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-left text-sm text-gray-700 transition-all hover:border-gray-400 hover:text-black active:bg-gray-100",
      children: [
        item.title,
        /* @__PURE__ */ jsx(SquareArrowOutUpRightIcon, { className: "size-3.5 ml-1 text-gray-400 transition-transform group-hover:text-gray-600" })
      ]
    },
    item.roadmapSlug
  )) }) });
}

function UserProgressList(props) {
  const { totalTopicCount, roadmapId } = props;
  const { data: userResourceProgressData } = useQuery(
    userResourceProgressOptions("roadmap", roadmapId),
    queryClient
  );
  const doneCount = userResourceProgressData?.done?.length ?? 0;
  const skippedCount = userResourceProgressData?.skipped?.length ?? 0;
  const totalFinished = doneCount + skippedCount;
  const progressPercentage = getPercentage(totalFinished, totalTopicCount);
  return /* @__PURE__ */ jsxs("div", { className: "relative my-6 flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 first:mt-0 last:mb-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-600", children: "Progress" }),
        /* @__PURE__ */ jsxs("span", { className: "rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700", children: [
          progressPercentage,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "hidden text-sm font-medium text-gray-600 md:block", children: [
        totalFinished,
        " / ",
        totalTopicCount,
        " topics"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-gray-100", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300",
        style: { width: `${progressPercentage}%` }
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-gray-500", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-green-500" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Completed: ",
          doneCount
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-gray-400" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Skipped: ",
          skippedCount
        ] })
      ] })
    ] })
  ] });
}

function parseUserProgress(content) {
  const items = [];
  const progressRegex = /<update-progress-item>.*?<\/update-progress-item>/gs;
  const progressItems = content.match(progressRegex);
  if (!progressItems) {
    return items;
  }
  for (const progressItem of progressItems) {
    const progressItemRegex = /<topic-id>(.*?)<\/topic-id>/;
    const topicId = progressItem.match(progressItemRegex)?.[1]?.trim();
    const topicActionRegex = /<topic-action>(.*?)<\/topic-action>/;
    const topicAction = progressItem.match(topicActionRegex)?.[1].trim()?.toLowerCase();
    if (!topicId || !topicAction) {
      continue;
    }
    items.push({
      id: topicId,
      action: topicAction
    });
  }
  return items;
}
function UserProgressActionList(props) {
  const { roadmapId, content, isLoading = false } = props;
  const toast = useToast();
  const updateUserProgress = parseUserProgress(content);
  const { data: roadmapTreeData } = useQuery(
    roadmapTreeMappingOptions(roadmapId),
    queryClient
  );
  const {
    mutate: bulkUpdateResourceProgress,
    isPending: isBulkUpdating,
    isSuccess: isBulkUpdateSuccess
  } = useMutation(
    {
      mutationFn: (body) => {
        return httpPost(
          `/v1-bulk-update-resource-progress/${roadmapId}`,
          body
        );
      },
      onSuccess: () => {
        updateUserProgress.forEach((item) => {
          renderTopicProgress(item.id, item.action);
        });
        return queryClient.invalidateQueries(
          userResourceProgressOptions("roadmap", roadmapId)
        );
      },
      onSettled: () => {
        pageProgressMessage.set("");
      },
      onError: (error) => {
        toast.error(
          error?.message ?? "Something went wrong, please try again."
        );
      }
    },
    queryClient
  );
  const progressItemWithText = useMemo(() => {
    return updateUserProgress.map((item) => {
      const roadmapTreeItem = roadmapTreeData?.find(
        (mapping) => mapping.nodeId === item.id
      );
      return {
        ...item,
        text: (roadmapTreeItem?.text || item.id)?.split(" > ").slice(1).join(" > ")
      };
    });
  }, [updateUserProgress, roadmapTreeData]);
  const [showAll, setShowAll] = useState(false);
  const itemCountToShow = 4;
  const itemsToShow = showAll ? progressItemWithText : progressItemWithText.slice(0, itemCountToShow);
  const hasMoreItemsToShow = progressItemWithText.length > itemCountToShow;
  return /* @__PURE__ */ jsx("div", { className: "relative my-6 w-full first:mt-0 last:mb-0", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col gap-0.5", children: [
    itemsToShow.map((item) => /* @__PURE__ */ jsx(
      ProgressItem,
      {
        roadmapId,
        topicId: item.id,
        text: item.text,
        action: item.action,
        isStreaming: isLoading,
        isBulkUpdating,
        isBulkUpdateSuccess
      },
      item.id
    )),
    hasMoreItemsToShow && /* @__PURE__ */ jsxs("div", { className: "relative mt-1 flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "z-50 flex items-center gap-1 rounded-md bg-gray-400 px-2 py-1 text-xs font-medium text-white hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70",
          onClick: () => setShowAll(!showAll),
          disabled: isLoading,
          children: [
            isLoading && /* @__PURE__ */ jsxs(Fragment$1, { children: [
              /* @__PURE__ */ jsx(Loader2Icon, { className: "size-3 animate-spin" }),
              progressItemWithText.length,
              " loaded .."
            ] }),
            !isLoading && /* @__PURE__ */ jsx(Fragment$1, { children: showAll ? "- Show Less" : `+ Show ${progressItemWithText.length - itemCountToShow} More` })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "z-50 flex items-center gap-1 rounded-md bg-green-600 px-2 py-1 text-xs font-medium text-white hover:bg-green-700 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70",
          disabled: isBulkUpdating || isLoading || isBulkUpdateSuccess,
          onClick: () => {
            const done = updateUserProgress.filter((item) => item.action === "done").map((item) => item.id);
            const learning = updateUserProgress.filter((item) => item.action === "learning").map((item) => item.id);
            const skipped = updateUserProgress.filter((item) => item.action === "skipped").map((item) => item.id);
            const pending = updateUserProgress.filter((item) => item.action === "pending").map((item) => item.id);
            bulkUpdateResourceProgress({
              done,
              learning,
              skipped,
              pending
            });
          },
          children: [
            isBulkUpdating && /* @__PURE__ */ jsx(Loader2Icon, { className: "size-3 animate-spin" }),
            !isBulkUpdating && /* @__PURE__ */ jsx(CheckIcon$1, { additionalClasses: "size-3" }),
            "Apply All"
          ]
        }
      )
    ] })
  ] }) });
}
function ProgressItem(props) {
  const {
    roadmapId,
    topicId,
    text,
    action,
    isStreaming,
    isBulkUpdating,
    isBulkUpdateSuccess
  } = props;
  const toast = useToast();
  const {
    mutate: updateTopicStatus,
    isSuccess,
    isPending: isUpdating
  } = useMutation(
    {
      mutationFn: (action2) => {
        return updateResourceProgress(
          {
            resourceId: roadmapId,
            resourceType: "roadmap",
            topicId
          },
          action2
        );
      },
      onMutate: () => {
      },
      onSuccess: () => {
        renderTopicProgress(topicId, action);
      },
      onError: () => {
        toast.error("Something went wrong, please try again.");
      },
      onSettled: () => {
        pageProgressMessage.set("");
        return queryClient.invalidateQueries(
          userResourceProgressOptions("roadmap", roadmapId)
        );
      }
    },
    queryClient
  );
  const textParts = text.split(" > ");
  const lastIndex = textParts.length - 1;
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-[40px] items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white py-1 pr-1 pl-3", children: [
    /* @__PURE__ */ jsx("span", { className: "flex items-center gap-1 truncate text-sm text-gray-500", children: textParts.map((part, index) => {
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        part,
        index !== lastIndex && /* @__PURE__ */ jsxs("span", { className: "text-gray-500", children: [
          /* @__PURE__ */ jsx(ChevronRightIcon, { className: "size-3 shrink-0" }),
          " "
        ] })
      ] }, index);
    }) }),
    !isSuccess && !isBulkUpdateSuccess && /* @__PURE__ */ jsxs(Fragment$1, { children: [
      !isStreaming && /* @__PURE__ */ jsxs(
        "button",
        {
          className: cn(
            `flex shrink-0 items-center gap-1.5 rounded-md border border-gray-200 px-2 py-1 text-xs disabled:pointer-events-none disabled:opacity-40`,
            {
              "bg-green-100 hover:border-green-300 hover:bg-green-200": action === "done",
              "bg-yellow-100 hover:border-yellow-300 hover:bg-yellow-200": action === "learning",
              "bg-gray-800 text-white hover:border-black hover:bg-black": action === "skipped",
              "bg-gray-100 hover:border-gray-300 hover:bg-gray-200": action === "pending"
            }
          ),
          onClick: () => updateTopicStatus(action),
          disabled: isStreaming || isUpdating || isBulkUpdating,
          children: [
            (isUpdating || isBulkUpdating) && /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" }),
            !isUpdating && !isBulkUpdating && /* @__PURE__ */ jsxs(Fragment$1, { children: [
              /* @__PURE__ */ jsx(Check, { strokeWidth: 3, className: "size-3" }),
              "Mark it as ",
              action
            ] })
          ]
        }
      ),
      isStreaming && /* @__PURE__ */ jsx("span", { className: "flex size-[30px] items-center justify-center text-gray-300", children: /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" }) })
    ] }),
    (isSuccess || isBulkUpdateSuccess) && /* @__PURE__ */ jsx("span", { className: "flex size-[30px] items-center justify-center text-green-500", children: /* @__PURE__ */ jsx(CheckIcon$1, { additionalClasses: "size-4" }) })
  ] });
}

function parseTopicList(content) {
  const items = [];
  const topicListRegex = /<topic-id>.*?<\/topic-id>/gs;
  const topicListItems = content.match(topicListRegex);
  if (!topicListItems) {
    return items;
  }
  for (const topicListItem of topicListItems) {
    const topicIdRegex = /<topic-id>(.*?)<\/topic-id>/;
    const topicId = topicListItem.match(topicIdRegex)?.[1]?.trim();
    if (!topicId) {
      continue;
    }
    items.push({
      topicId
    });
  }
  return items;
}
function RoadmapTopicList(props) {
  const { roadmapId, content, onTopicClick } = props;
  const topicListItems = parseTopicList(content);
  const { data: roadmapTreeData } = useQuery(
    roadmapTreeMappingOptions(roadmapId),
    queryClient
  );
  const progressItemWithText = useMemo(() => {
    return topicListItems.map((item) => {
      const roadmapTreeItem = roadmapTreeData?.find(
        (mapping) => mapping.nodeId === item.topicId
      );
      return {
        ...item,
        text: (roadmapTreeItem?.text || item.topicId)?.split(" > ").slice(1).join(" > ")
      };
    });
  }, [topicListItems, roadmapTreeData]);
  return /* @__PURE__ */ jsx("div", { className: "relative my-6 flex flex-wrap gap-1 first:mt-0 last:mb-0", children: progressItemWithText.map((item) => {
    const labelParts = item.text.split(" > ").slice(-2);
    const labelPartCount = labelParts.length;
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: "collapse-if-empty flex items-center gap-1 rounded-lg border border-gray-200 bg-white p-1 px-2 text-left text-sm hover:bg-gray-50",
        onClick: () => {
          onTopicClick?.(item.topicId, item.text);
        },
        children: labelParts.map((part, index) => {
          return /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { children: part }),
            index < labelPartCount - 1 && /* @__PURE__ */ jsx(
              ChevronRightIcon,
              {
                className: "size-3 text-gray-400",
                strokeWidth: 2.5
              }
            )
          ] }, index);
        })
      },
      item.topicId
    );
  }) });
}

function ShareResourceLink(props) {
  const { roadmapId } = props;
  const user = useAuth();
  const { copyText, isCopied } = useCopyText();
  const handleShareResourceLink = () => {
    const url = `${undefined                              }/${roadmapId}?s=${user?.id}`;
    copyText(url);
  };
  return /* @__PURE__ */ jsx("div", { className: "relative my-6 flex flex-wrap gap-1 first:mt-0 last:mb-0", children: /* @__PURE__ */ jsxs(
    "button",
    {
      className: cn(
        "flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1 px-1.5 text-left text-sm",
        isCopied && "text-green-500"
      ),
      onClick: handleShareResourceLink,
      children: [
        !isCopied && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          /* @__PURE__ */ jsx(ShareIcon, { className: "h-4 w-4" }),
          "Share Progress"
        ] }),
        isCopied && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          /* @__PURE__ */ jsx(CheckIcon$1, { additionalClasses: "h-4 w-4" }),
          "Copied"
        ] })
      ]
    }
  ) });
}

function roadmapAIChatRenderer(options) {
  const { totalTopicCount, roadmapId, onSelectTopic } = options;
  return {
    "user-progress": () => /* @__PURE__ */ jsx(
      UserProgressList,
      {
        totalTopicCount,
        roadmapId
      }
    ),
    "update-progress": (opts) => /* @__PURE__ */ jsx(UserProgressActionList, { roadmapId, ...opts }),
    "roadmap-topics": (opts) => /* @__PURE__ */ jsx(
      RoadmapTopicList,
      {
        roadmapId,
        onTopicClick: (topicId, text) => {
          const title = text.split(" > ").pop();
          if (!title) {
            return;
          }
          onSelectTopic(topicId, title);
        },
        ...opts
      }
    ),
    "resource-progress-link": () => /* @__PURE__ */ jsx(ShareResourceLink, { roadmapId }),
    "roadmap-recommendations": (opts) => /* @__PURE__ */ jsx(RoadmapRecommendations, { ...opts })
  };
}
function useRoadmapAIChat(options) {
  const {
    activeChatHistoryId,
    roadmapId,
    totalTopicCount,
    scrollareaRef,
    onSelectTopic,
    onChatHistoryIdChange
  } = options;
  const toast = useToast();
  const [aiChatHistory, setAiChatHistory] = useState([]);
  const [isStreamingMessage, setIsStreamingMessage] = useState(false);
  const [streamedMessage, setStreamedMessage] = useState(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const abortControllerRef = useRef(null);
  const scrollToBottom = useCallback(
    (behavior = "smooth") => {
      scrollareaRef.current?.scrollTo({
        top: scrollareaRef.current.scrollHeight,
        behavior
      });
    },
    [scrollareaRef]
  );
  const checkScrollPosition = useCallback(() => {
    const scrollArea = scrollareaRef.current;
    if (!scrollArea) {
      return;
    }
    const { scrollTop, scrollHeight, clientHeight } = scrollArea;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
    setShowScrollToBottom(!isAtBottom && aiChatHistory.length > 0);
  }, [aiChatHistory.length]);
  useEffect(() => {
    const scrollArea = scrollareaRef.current;
    if (!scrollArea) {
      return;
    }
    scrollArea.addEventListener("scroll", checkScrollPosition);
    return () => scrollArea.removeEventListener("scroll", checkScrollPosition);
  }, [checkScrollPosition]);
  useEffect(() => {
    if (isStreamingMessage || streamedMessage) {
      const scrollArea = scrollareaRef.current;
      if (!scrollArea) {
        return;
      }
      const { scrollTop, scrollHeight, clientHeight } = scrollArea;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;
      if (isNearBottom) {
        scrollToBottom("instant");
        setShowScrollToBottom(false);
      }
    }
  }, [isStreamingMessage, streamedMessage, scrollToBottom]);
  const renderer = useMemo(
    () => roadmapAIChatRenderer({ roadmapId, totalTopicCount, onSelectTopic }),
    [roadmapId, onSelectTopic, totalTopicCount]
  );
  const completeAITutorChat = async (messages, abortController) => {
    try {
      const response = await fetch(
        `${"https://api.imoogleai.xyz"}/v1-chat-roadmap`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          signal: abortController?.signal,
          body: JSON.stringify({
            roadmapId,
            messages,
            ...activeChatHistoryId ? { chatHistoryId: activeChatHistoryId } : {}
          })
        }
      );
      if (!response.ok) {
        const data = await response.json();
        toast.error(data?.message || "Something went wrong");
        setAiChatHistory(messages.slice(0, -1));
        setIsStreamingMessage(false);
        if (data.status === 401) {
          removeAuthToken();
          window.location.reload();
        }
        queryClient.invalidateQueries(aiLimitOptions());
        return;
      }
      const stream = response.body;
      if (!stream) {
        setIsStreamingMessage(false);
        toast.error("Something went wrong");
        return;
      }
      await readChatStream(stream, {
        onMessage: async (content) => {
          if (abortController?.signal.aborted) {
            return;
          }
          const jsx2 = await renderMessage(content, renderer, {
            isLoading: true
          });
          flushSync(() => {
            setStreamedMessage(jsx2);
          });
        },
        onMessageEnd: async (content) => {
          if (abortController?.signal.aborted) {
            return;
          }
          const jsx2 = await renderMessage(content, renderer, {
            isLoading: false
          });
          const newMessages = [
            ...messages,
            { role: "assistant", content, jsx: jsx2 }
          ];
          flushSync(() => {
            setStreamedMessage(null);
            setIsStreamingMessage(false);
            setAiChatHistory(newMessages);
          });
          queryClient.invalidateQueries(aiLimitOptions());
          queryClient.invalidateQueries({
            predicate: (query) => {
              return query.queryKey[0] === "list-chat-history" && query.queryKey[1]?.roadmapId === roadmapId;
            }
          });
        },
        onDetails: (details) => {
          const chatHistoryId = details?.chatHistoryId;
          if (!chatHistoryId) {
            return;
          }
          onChatHistoryIdChange?.(chatHistoryId);
        }
      });
      setIsStreamingMessage(false);
      abortControllerRef.current = null;
    } catch (error) {
      setIsStreamingMessage(false);
      setStreamedMessage(null);
      abortControllerRef.current = null;
      if (!abortController?.signal.aborted) {
        toast.error("Something went wrong");
      }
    }
  };
  const handleChatSubmit = useCallback(
    (json, isLoading) => {
      if (!json || isStreamingMessage || isLoading || abortControllerRef.current) {
        return;
      }
      abortControllerRef.current = new AbortController();
      const html = htmlFromTiptapJSON(json);
      const newMessages = [
        ...aiChatHistory,
        { role: "user", json, html }
      ];
      setIsStreamingMessage(true);
      flushSync(() => setAiChatHistory(newMessages));
      scrollToBottom("instant");
      completeAITutorChat(newMessages, abortControllerRef.current);
    },
    [aiChatHistory, isStreamingMessage, scrollToBottom]
  );
  const handleAbort = useCallback(() => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    setIsStreamingMessage(false);
    setStreamedMessage(null);
    setAiChatHistory(aiChatHistory.slice(0, -1));
  }, [aiChatHistory]);
  const clearChat = useCallback(() => {
    setAiChatHistory([]);
    setStreamedMessage(null);
    setIsStreamingMessage(false);
    scrollToBottom("instant");
    setShowScrollToBottom(false);
  }, []);
  return {
    aiChatHistory,
    isStreamingMessage,
    streamedMessage,
    showScrollToBottom,
    setShowScrollToBottom,
    abortControllerRef,
    handleChatSubmit,
    handleAbort,
    clearChat,
    scrollToBottom,
    setAiChatHistory
  };
}
function htmlFromTiptapJSON(json) {
  const content = json.content;
  let text = "";
  for (const child of content || []) {
    switch (child.type) {
      case "text":
        text += child.text;
        break;
      case "paragraph":
        text += `<p>${htmlFromTiptapJSON(child)}</p>`;
        break;
      case "variable":
        const label = child?.attrs?.label || "";
        text += `<span class="chat-variable">${label}</span>`;
        break;
    }
  }
  return text;
}

function chatHistoryOptions(chatHistoryId, renderer) {
  return queryOptions({
    queryKey: ["chat-history-details", chatHistoryId],
    queryFn: async () => {
      const data = await httpGet(
        `/v1-chat-history/${chatHistoryId}`
      );
      if (data.title) {
        document.title = data.title;
      }
      const messages = [];
      for (const message of data.messages) {
        messages.push({
          role: message.role,
          content: message.content,
          ...message.role === "user" && !message?.json && {
            html: markdownToHtml(message.content)
          },
          ...message.role === "user" && message?.json && {
            html: htmlFromTiptapJSON(message.json)
          },
          ...message.role === "assistant" && {
            jsx: await renderMessage(message.content, renderer ?? {}, {
              isLoading: false
            })
          }
        });
      }
      return {
        ...data,
        messages
      };
    },
    enabled: !!isLoggedIn() && !!chatHistoryId
  });
}
function listChatHistoryOptions(query = {
  query: "",
  roadmapId: ""
}) {
  return infiniteQueryOptions({
    queryKey: ["list-chat-history", query],
    queryFn: ({ pageParam }) => {
      return httpGet("/v1-list-chat-history", {
        ...query?.query ? { query: query.query } : {},
        ...query?.roadmapId ? { roadmapId: query.roadmapId } : {},
        ...pageParam ? { currPage: pageParam } : {},
        perPage: "21"
      });
    },
    enabled: !!isLoggedIn(),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.currPage < lastPage.totalPages ? lastPage.currPage + 1 : void 0;
    },
    initialPageParam: 1
  });
}

function ListChatHistorySkeleton() {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-6 w-1/2 animate-pulse rounded bg-gray-200" }),
        /* @__PURE__ */ jsx("div", { className: "size-8 animate-pulse rounded-md bg-gray-200" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-9 w-full animate-pulse rounded-lg bg-gray-200" }),
      /* @__PURE__ */ jsx("div", { className: "relative mt-2", children: /* @__PURE__ */ jsx("div", { className: "h-9 w-full animate-pulse rounded-lg bg-gray-200" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "scrollbar-track-transparent scrollbar-thin scrollbar-thumb-gray-300 -mx-2 mt-6 grow space-y-4 overflow-y-scroll px-2", children: ["Today", "Last 7 Days", "Older"].map((group) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "h-4 w-16 animate-pulse rounded bg-gray-200" }),
      /* @__PURE__ */ jsx("ul", { className: "mt-1 space-y-0.5", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsx(
        "li",
        {
          className: "h-9 animate-pulse rounded-lg bg-gray-100"
        },
        i
      )) })
    ] }, group)) })
  ] });
}

function ChatHistoryError(props) {
  const { error, className } = props;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "mt-10 flex max-w-md flex-col items-center justify-center text-center",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(AlertCircleIcon, { className: "h-8 w-8 text-red-500" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-sm font-medium text-gray-900", children: "Something went wrong" }),
        /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-xs text-balance text-gray-500", children: error?.message })
      ]
    }
  );
}

function groupChatHistory(chatHistories) {
  const today = DateTime.now().startOf("day");
  return chatHistories?.reduce(
    (acc, chatHistory) => {
      const updatedAt = DateTime.fromJSDate(
        new Date(chatHistory.updatedAt)
      ).startOf("day");
      const diffInDays = Math.abs(updatedAt.diff(today, "days").days);
      if (diffInDays === 0) {
        acc.today.histories.push(chatHistory);
      } else if (diffInDays <= 7) {
        acc.last7Days.histories.push(chatHistory);
      } else {
        acc.older.histories.push(chatHistory);
      }
      return acc;
    },
    {
      today: {
        title: "Today",
        histories: []
      },
      last7Days: {
        title: "Last 7 Days",
        histories: []
      },
      older: {
        title: "Older",
        histories: []
      }
    }
  );
}

function SearchAIChatHistory(props) {
  const { onSearch, isLoading, className, inputClassName } = props;
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounceValue(search, 300);
  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: cn("relative mt-2 flex grow items-center", className),
      onSubmit: (e) => {
        e.preventDefault();
        onSearch(search);
      },
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search folder by name",
            className: cn(
              "block h-9 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 pr-7 pl-8 text-sm outline-none placeholder:text-zinc-500 focus:border-zinc-500",
              inputClassName
            ),
            required: true,
            minLength: 3,
            maxLength: 255,
            value: search,
            onChange: (e) => setSearch(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-2.5 -translate-y-1/2", children: isLoading ? /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin text-gray-500" }) : /* @__PURE__ */ jsx(SearchIcon, { className: "size-4 text-gray-500" }) }),
        search && /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-1 flex items-center", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setSearch("");
            },
            className: "rounded-lg p-1 hover:bg-gray-100",
            children: /* @__PURE__ */ jsx(XIcon, { className: "size-4 text-gray-500" })
          }
        ) })
      ]
    }
  );
}

function ChatHistoryAction(props) {
  const { chatHistoryId, onDelete } = props;
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutate: deleteChatHistory, isPending: isDeletingLoading } = useMutation(
    {
      mutationFn: (chatHistoryId2) => {
        return httpDelete(`/v1-delete-chat/${chatHistoryId2}`);
      },
      onSettled: () => {
        return queryClient.invalidateQueries({
          predicate: (query) => {
            return query.queryKey[0] === "list-chat-history";
          }
        });
      },
      onSuccess: () => {
        toast.success("Chat history deleted");
        setIsOpen(false);
        onDelete?.();
      },
      onError: (error) => {
        toast.error(error?.message || "Failed to delete chat history");
      }
    },
    queryClient
  );
  return /* @__PURE__ */ jsxs(DropdownMenu, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "rounded-lg p-2 opacity-0 group-hover/item:opacity-100 hover:bg-gray-100 focus:outline-none data-[state=open]:bg-gray-100 data-[state=open]:opacity-100", children: /* @__PURE__ */ jsx(EllipsisVerticalIcon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "z-[9999]", children: [
      !isDeleting && /* @__PURE__ */ jsx(
        DropdownMenuItem,
        {
          className: "cursor-pointer text-red-500 focus:bg-red-50 focus:text-red-500",
          onSelect: (e) => {
            e.preventDefault();
            setIsDeleting(true);
          },
          disabled: isDeletingLoading,
          children: isDeletingLoading ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx(Loader2Icon, { className: "h-4 w-4 animate-spin" }),
            "Deleting..."
          ] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx(Trash2Icon, { className: "h-4 w-4" }),
            "Delete"
          ] })
        }
      ),
      isDeleting && /* @__PURE__ */ jsx(
        DropdownMenuItem,
        {
          asChild: true,
          className: "focus:bg-transparent",
          onSelect: (e) => {
            e.preventDefault();
          },
          disabled: isDeletingLoading,
          children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between gap-1.5", children: [
            "Are you sure?",
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    deleteChatHistory(chatHistoryId);
                    setIsDeleting(false);
                  },
                  className: "cursor-pointer text-red-500 underline hover:text-red-800",
                  disabled: isDeletingLoading,
                  children: "Yes"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsDeleting(false),
                  className: "cursor-pointer text-red-500 underline hover:text-red-800",
                  disabled: isDeletingLoading,
                  children: "No"
                }
              )
            ] })
          ] })
        }
      )
    ] })
  ] });
}

function ChatHistoryItem(props) {
  const { chatHistory, isActive, onChatHistoryClick, onDelete } = props;
  return /* @__PURE__ */ jsxs("li", { className: "group/item relative text-sm", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "block w-full truncate rounded-lg p-2 pr-10 text-left hover:bg-gray-100 data-[active=true]:bg-gray-100",
        "data-active": isActive,
        onClick: () => onChatHistoryClick(chatHistory._id),
        children: chatHistory.title
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-2 flex items-center", children: /* @__PURE__ */ jsx(
      ChatHistoryAction,
      {
        chatHistoryId: chatHistory._id,
        onDelete
      }
    ) })
  ] }, chatHistory._id);
}

function ChatHistoryGroup(props) {
  const {
    title,
    histories,
    activeChatHistoryId,
    onChatHistoryClick,
    onDelete
  } = props;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "ml-2 text-xs text-gray-500", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "mt-1 space-y-0.5", children: histories.map((chatHistory) => {
      return /* @__PURE__ */ jsx(
        ChatHistoryItem,
        {
          chatHistory,
          isActive: activeChatHistoryId === chatHistory._id,
          onChatHistoryClick,
          onDelete: () => {
            onDelete?.(chatHistory._id);
          }
        },
        chatHistory._id
      );
    }) })
  ] });
}

function ListChatHistory(props) {
  const {
    activeChatHistoryId,
    onChatHistoryClick,
    onDelete,
    isPaidUser,
    onUpgrade
  } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    const deviceType = getTailwindScreenDimension();
    const isMediumSize = ["sm", "md"].includes(deviceType);
    if (!isMediumSize) {
      const storedState = localStorage.getItem("chat-history-sidebar-open");
      setIsOpen(storedState === null ? true : storedState === "true");
    } else {
      setIsOpen(!isMediumSize);
    }
    setIsMobile(isMediumSize);
  }, []);
  useEffect(() => {
    if (!isMobile) {
      localStorage.setItem("chat-history-sidebar-open", isOpen.toString());
    }
  }, [isOpen, isMobile]);
  const [query, setQuery] = useState("");
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    isLoading: isLoadingInfiniteQuery
  } = useInfiniteQuery(listChatHistoryOptions({ query }), queryClient);
  useEffect(() => {
    if (!data) {
      return;
    }
    setIsLoading(false);
  }, [data?.pages]);
  const groupedChatHistory = useMemo(() => {
    const allHistories = data?.pages?.flatMap((page) => page.data);
    return groupChatHistory(allHistories ?? []);
  }, [data?.pages]);
  if (!isLoggedIn()) {
    return null;
  }
  if (!isOpen) {
    return /* @__PURE__ */ jsxs("div", { className: "absolute top-2 left-2 z-20 flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex size-8 items-center justify-center rounded-lg p-1 hover:bg-gray-200",
          onClick: () => {
            setIsOpen(true);
          },
          children: /* @__PURE__ */ jsx(PanelLeftIcon, { className: "h-4.5 w-4.5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex size-8 items-center justify-center rounded-lg p-1 hover:bg-gray-200",
          onClick: () => {
            if (isMobile) {
              setIsOpen(false);
            }
            onChatHistoryClick(null);
          },
          children: /* @__PURE__ */ jsx(PlusIcon, { className: "h-4.5 w-4.5" })
        }
      )
    ] });
  }
  const isEmptyHistory = Object.values(groupedChatHistory ?? {}).every(
    (group) => group.histories.length === 0
  );
  const classNames = cn(
    "flex w-[255px] shrink-0 flex-col justify-start border-r border-gray-200 bg-white p-2",
    "max-md:absolute max-md:inset-0 max-md:z-20 max-md:w-full",
    !isOpen && "hidden"
  );
  const closeButton = /* @__PURE__ */ jsx(
    "button",
    {
      className: "flex size-8 items-center justify-center rounded-lg p-1 text-gray-500 hover:bg-gray-100 hover:text-black",
      onClick: () => {
        setIsOpen(false);
      },
      children: /* @__PURE__ */ jsx(PanelLeftCloseIcon, { className: "h-4.5 w-4.5" })
    }
  );
  if (!isPaidUser) {
    return /* @__PURE__ */ jsx(
      UpgradeToProMessage,
      {
        className: classNames,
        closeButton,
        onUpgrade
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: classNames, children: [
    isLoading && /* @__PURE__ */ jsx(ListChatHistorySkeleton, {}),
    !isLoading && isError && /* @__PURE__ */ jsx(ChatHistoryError, { error }),
    !isLoading && !isError && /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-medium text-gray-900", children: "Chat History" }),
          closeButton
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex w-full items-center justify-center gap-2 rounded-lg bg-black p-2 text-sm text-white hover:opacity-80",
            onClick: () => {
              if (isMobile) {
                setIsOpen(false);
              }
              onChatHistoryClick(null);
            },
            children: [
              /* @__PURE__ */ jsx(PlusIcon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: "New Chat" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          SearchAIChatHistory,
          {
            onSearch: setQuery,
            isLoading: isLoadingInfiniteQuery
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "scrollbar-track-transparent scrollbar-thin scrollbar-thumb-gray-300 -mx-2 mt-6 grow space-y-4 overflow-y-scroll px-2", children: [
        isEmptyHistory && !isLoadingInfiniteQuery && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "No chat history" }) }),
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
                if (isMobile) {
                  setIsOpen(false);
                }
                onChatHistoryClick(id);
              },
              onDelete: (id) => {
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
              isFetchingNextPage && /* @__PURE__ */ jsxs(Fragment$1, { children: [
                /* @__PURE__ */ jsx(Loader2Icon, { className: "h-4 w-4 animate-spin" }),
                "Loading more..."
              ] }),
              !isFetchingNextPage && "Load More"
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
function UpgradeToProMessage(props) {
  const { className, onUpgrade, closeButton } = props;
  return /* @__PURE__ */ jsxs("div", { className: cn("relative flex flex-col", className), children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 flex items-center justify-between", children: closeButton }),
    /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col items-center justify-center px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3 rounded-full bg-yellow-100 p-3", children: /* @__PURE__ */ jsx(LockIcon, { className: "size-6 text-yellow-600" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Unlock History" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-center text-sm text-balance text-gray-600", children: "Save conversations and pick up right where you left off." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-5 w-full space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2", children: [
          /* @__PURE__ */ jsx(CheckIcon$1, { additionalClasses: "size-4 text-green-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Unlimited history" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2", children: [
          /* @__PURE__ */ jsx(CheckIcon$1, { additionalClasses: "size-4 text-green-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Search old chats" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "w-full cursor-pointer rounded-lg bg-yellow-400 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-500",
          onClick: () => {
            onUpgrade?.();
          },
          children: "Upgrade to Pro"
        }
      )
    ] })
  ] });
}

export { ChatHistoryGroup as C, ListChatHistory as L, PersonalizedResponseForm as P, RoadmapRecommendations as R, SearchAIChatHistory as S, UpgradeToProMessage as U, roadmapAIChatRenderer as a, SelectNative as b, chatHistoryOptions as c, userRoadmapPersonaOptions as d, userPersonaOptions as e, ChatHistory as f, groupChatHistory as g, renderMessage as h, ChatHistoryError as i, roadmapDetailsOptions as j, listChatHistoryOptions as l, roadmapJSONOptions as r, useRoadmapAIChat as u };
