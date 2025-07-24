import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { C as CheckSubscriptionVerification } from '../../chunks/CheckSubscriptionVerification_h4-ZR5FJ.mjs';
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
/* empty css                                     */
import { useQuery, useMutation } from '@tanstack/react-query';
import { ChevronRight, SettingsIcon, Trash2, BotIcon, BookIcon, PlusIcon, GiftIcon, XIcon, Frown, Loader2Icon, Bot, HistoryIcon, LockIcon, PauseCircleIcon, SendIcon } from 'lucide-react';
import { forwardRef, useState, useEffect, useImperativeHandle, Fragment, lazy, useRef, useCallback, useLayoutEffect, useMemo } from 'react';
import { flushSync } from 'react-dom';
import { j as roadmapDetailsOptions, r as roadmapJSONOptions, d as userRoadmapPersonaOptions, c as chatHistoryOptions, u as useRoadmapAIChat, a as roadmapAIChatRenderer } from '../../chunks/ListChatHistory_DlOCoRfC.mjs';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
import { c as cn, i as isLoggedIn, p as pageProgressMessage, l as useKeydown, b as getUrlParams, d as deleteUrlParam } from '../../chunks/BaseLayout_C3JOBLhD.mjs';
import { l as lockBodyScroll } from '../../chunks/dom_C6E8wq7N.mjs';
import { g as getTailwindScreenDimension } from '../../chunks/is-mobile_BHDNWQGh.mjs';
import { s as showLoginPopup } from '../../chunks/popup_DWUkHIfQ.mjs';
import { s as slugify } from '../../chunks/slugger_ChlNJxtz.mjs';
import { a as aiLimitOptions } from '../../chunks/ai-course_IUwlyb1o.mjs';
import { b as billingDetailsOptions } from '../../chunks/billing_BlRWCv4l.mjs';
import { r as roadmapTreeMappingOptions, u as userResourceProgressOptions } from '../../chunks/roadmap-tree_DhFfmgQ6.mjs';
import { q as queryClient, a as httpPost } from '../../chunks/query-client_B4F1D3EC.mjs';
import { U as UpgradeAccountModal } from '../../chunks/UpgradeAccountModal_CxrAT9TD.mjs';
/* empty css                                 */
import { ReactRenderer, useEditor, EditorContent } from '@tiptap/react';
import DocumentExtension from '@tiptap/extension-document';
import ParagraphExtension from '@tiptap/extension-paragraph';
import TextExtension from '@tiptap/extension-text';
import Placeholder from '@tiptap/extension-placeholder';
import { Node, mergeAttributes } from '@tiptap/core';
import '@tiptap/pm/model';
import { PluginKey } from '@tiptap/pm/state';
import Suggestion from '@tiptap/suggestion';
import tippy from 'tippy.js';
import { T as TopicDetail } from '../../chunks/TopicDetail_DodOcJxQ.mjs';
import { b as UserPersonaForm, R as RoadmapAIChatHistory, U as UpdatePersonaModal, a as RoadmapAIChatCard } from '../../chunks/UpdatePersonaModal_CmDp_pWg.mjs';
import { a as renderTopicProgress, u as updateResourceProgress } from '../../chunks/resource-progress_Dhi8X1Qg.mjs';
import 'clsx';
import 'js-cookie';
import '../../chunks/markdown_rbU7j7cH.mjs';
import { g as getPercentage } from '../../chunks/number_D9-I_I5P.mjs';
import { A as AILimitsPopup } from '../../chunks/AILimitsPopup_DeEvIsvX.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_ZOfUMIZI.mjs';
import { A as AITutorLayout } from '../../chunks/AITutorLayout_DTqb4Lq4.mjs';
import { b as getRoadmapById, g as getRoadmapIds } from '../../chunks/roadmap_VC9fOZso.mjs';
export { renderers } from '../../renderers.mjs';

const VariablePluginKey = new PluginKey("variable");
const VariableExtension = Node.create({
  name: "variable",
  priority: 101,
  addStorage() {
    return {
      variables: []
    };
  },
  addOptions() {
    return {
      HTMLAttributes: {},
      renderText({ options, node }) {
        return `${options.suggestion.char}${node.attrs.label ?? node.attrs.id}`;
      },
      deleteTriggerWithBackspace: false,
      renderHTML({ options, node }) {
        return [
          "span",
          mergeAttributes(this.HTMLAttributes, options.HTMLAttributes),
          `${options.suggestion.char}${node.attrs.label ?? node.attrs.id}`
        ];
      },
      suggestion: {
        char: "@",
        pluginKey: VariablePluginKey,
        command: ({ editor, range, props }) => {
          const nodeAfter = editor.view.state.selection.$to.nodeAfter;
          const overrideSpace = nodeAfter?.text?.startsWith(" ");
          if (overrideSpace) {
            range.to += 1;
          }
          editor.chain().focus().insertContentAt(range, [
            {
              type: this.name,
              attrs: props
            },
            {
              type: "text",
              text: " "
            }
          ]).run();
          editor.view.dom.ownerDocument.defaultView?.getSelection()?.collapseToEnd();
        },
        allow: ({ state, range }) => {
          const $from = state.doc.resolve(range.from);
          const type = state.schema.nodes[this.name];
          const allow = !!$from.parent.type.contentMatch.matchType(type);
          return allow;
        }
      }
    };
  },
  group: "inline",
  inline: true,
  selectable: false,
  atom: true,
  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-id"),
        renderHTML: (attributes) => {
          if (!attributes.id) {
            return {};
          }
          return {
            "data-id": attributes.id
          };
        }
      },
      label: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-label"),
        renderHTML: (attributes) => {
          if (!attributes.label) {
            return {};
          }
          return {
            "data-label": attributes.label
          };
        }
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`
      }
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    if (this.options.renderLabel !== void 0) {
      console.warn(
        "renderLabel is deprecated use renderText and renderHTML instead"
      );
      return [
        "span",
        mergeAttributes(
          { "data-type": this.name },
          this.options.HTMLAttributes,
          HTMLAttributes
        ),
        this.options.renderLabel({
          options: this.options,
          node
        })
      ];
    }
    const mergedOptions = { ...this.options };
    mergedOptions.HTMLAttributes = mergeAttributes(
      { "data-type": this.name },
      this.options.HTMLAttributes,
      HTMLAttributes
    );
    const html = this.options.renderHTML({
      options: mergedOptions,
      node
    });
    if (typeof html === "string") {
      return [
        "span",
        mergeAttributes(
          { "data-type": this.name },
          this.options.HTMLAttributes,
          HTMLAttributes
        ),
        html
      ];
    }
    return html;
  },
  renderText({ node }) {
    if (this.options.renderLabel !== void 0) {
      console.warn(
        "renderLabel is deprecated use renderText and renderHTML instead"
      );
      return this.options.renderLabel({
        options: this.options,
        node
      });
    }
    return this.options.renderText({
      options: this.options,
      node
    });
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () => this.editor.commands.command(({ tr, state }) => {
        let isVariable = false;
        const { selection } = state;
        const { empty, anchor } = selection;
        if (!empty) {
          return false;
        }
        state.doc.nodesBetween(anchor - 1, anchor, (node, pos) => {
          if (node.type.name === this.name) {
            isVariable = true;
            tr.insertText(
              this.options.deleteTriggerWithBackspace ? "" : this.options.suggestion.char || "",
              pos,
              pos + node.nodeSize
            );
            return false;
          }
        });
        return isVariable;
      })
    };
  },
  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
});

const VariableList = forwardRef((props, ref) => {
  const { items, command } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectItem = (index) => {
    const item = props.items[index];
    if (!item) {
      return;
    }
    command(item);
  };
  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);
  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === "ArrowUp") {
        setSelectedIndex((selectedIndex + items.length - 1) % items.length);
        return true;
      }
      if (event.key === "ArrowDown") {
        setSelectedIndex((selectedIndex + 1) % items.length);
        return true;
      }
      if (event.key === "Enter") {
        selectItem(selectedIndex);
        return true;
      }
      return false;
    }
  }));
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "variable-suggestion-list",
      className: "flex max-w-[300px] flex-col gap-0.5 overflow-auto rounded-lg border border-gray-200 bg-white p-1 shadow-sm",
      children: items.length ? items.map((item, index) => {
        const labelParts = item?.label.split(">");
        return /* @__PURE__ */ jsx(
          "button",
          {
            className: cn(
              "flex items-center gap-1 truncate rounded-md p-1 px-1.5 text-left text-sm hover:bg-gray-100",
              index === selectedIndex && "bg-gray-100"
            ),
            onClick: () => selectItem(index),
            children: labelParts.map((labelPart, counter) => {
              const isLast = counter === labelParts.length - 1;
              return /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn({
                      "text-gray-400": !isLast,
                      "text-gray-900": isLast
                    }),
                    children: labelPart.trim()
                  }
                ),
                !isLast && /* @__PURE__ */ jsx(ChevronRight, { className: "inline size-3 flex-shrink-0 stroke-[1.5] text-gray-400" })
              ] }, counter);
            })
          },
          index
        );
      }) : /* @__PURE__ */ jsx("div", { className: "rounded-md p-1 px-1.5 text-left text-sm", children: "No result" })
    }
  );
});
VariableList.displayName = "VariableList";
function variableSuggestion() {
  return {
    items: ({ editor, query }) => {
      const storage = editor.storage.variable;
      return storage.variables.filter(
        (variable) => variable?.label?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
    },
    render: () => {
      let component;
      let popup = null;
      return {
        onStart: (props) => {
          component = new ReactRenderer(VariableList, {
            props,
            editor: props.editor
          });
          if (!props.clientRect) {
            return;
          }
          popup = tippy("body", {
            getReferenceClientRect: props.clientRect,
            appendTo: () => document.body,
            content: component.element,
            showOnCreate: true,
            interactive: true,
            trigger: "manual",
            placement: "top-start"
          });
        },
        onUpdate(props) {
          component.updateProps(props);
          if (!props.clientRect) {
            return;
          }
          popup[0].setProps({
            getReferenceClientRect: props.clientRect
          });
        },
        onKeyDown(props) {
          if (props.event.key === "Escape") {
            popup[0].hide();
            return true;
          }
          return component.ref?.onKeyDown(props);
        },
        onExit() {
          popup[0].destroy();
          component.destroy();
        }
      };
    }
  };
}

const extensions = [
  DocumentExtension,
  ParagraphExtension,
  TextExtension,
  Placeholder.configure({
    placeholder: "Ask AI anything about the roadmap..."
  }),
  VariableExtension.configure({
    suggestion: variableSuggestion()
  })
];
const content = "<p></p>";
function ChatEditor(props) {
  const { roadmapId, onSubmit, editorRef } = props;
  const { data: roadmapTreeData } = useQuery(
    roadmapTreeMappingOptions(roadmapId),
    queryClient
  );
  const { data: roadmapDetailsData } = useQuery(
    roadmapDetailsOptions(roadmapId),
    queryClient
  );
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: "focus:outline-none w-full px-4 py-2 min-h-[40px]"
      },
      handleKeyDown(_, event) {
        if (!editor) {
          return false;
        }
        if (event.key === "Enter" && !event.shiftKey) {
          const variableSuggestionList = document.getElementById(
            "variable-suggestion-list"
          );
          if (variableSuggestionList) {
            return false;
          }
          event.preventDefault();
          onSubmit(editor.getJSON());
          return true;
        }
        if (event.key === "Enter" && event.shiftKey) {
          event.preventDefault();
          editor.commands.insertContent([
            { type: "text", text: " " },
            { type: "paragraph" }
          ]);
          return true;
        }
        return false;
      }
    },
    onUpdate: ({ editor: editor2 }) => {
      editorRef.current = editor2;
    },
    onDestroy: () => {
      editorRef.current = null;
    }
  });
  useEffect(() => {
    if (!editor || !roadmapTreeData || !roadmapDetailsData) {
      return;
    }
    editor.storage.variable.variables = roadmapTreeData.map((mapping) => {
      return {
        id: mapping.nodeId,
        // to remove the title of the roadmap
        // and only keep the path
        // e.g. "Roadmap > Topic > Subtopic" -> "Topic > Subtopic"
        label: mapping.text.split(" > ").slice(1).join(" > ")
      };
    });
  }, [editor, roadmapTreeData, roadmapDetailsData]);
  return /* @__PURE__ */ jsx("div", { className: "chat-editor w-full py-1.5", children: /* @__PURE__ */ jsx(EditorContent, { editor }) });
}

function ChatPersona(props) {
  const { roadmapId } = props;
  const toast = useToast();
  const { data: roadmap } = useQuery(
    roadmapJSONOptions(roadmapId),
    queryClient
  );
  const { mutate: createUserPersona, isPending: isCreatingUserPersona } = useMutation(
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
      onSettled: () => {
        return queryClient.invalidateQueries(
          userRoadmapPersonaOptions(roadmapId)
        );
      }
    },
    queryClient
  );
  const roadmapTitle = roadmap?.json.title ?? "";
  return /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex h-auto max-w-[400px] grow flex-col justify-center p-4 px-2 px-4 sm:h-full sm:p-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 text-left sm:mb-8 sm:text-center", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/gifs/wave.gif",
          alt: "Wave",
          className: "mx-auto mb-3 hidden h-16 w-16 sm:mb-5 sm:block sm:h-24 sm:w-24"
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold sm:text-xl", children: "Welcome to the AI Tutor" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 pr-8 text-xs text-balance text-gray-500 sm:px-0 sm:text-sm", children: "Before we start, answer these questions so we can help you better." })
    ] }),
    /* @__PURE__ */ jsx(
      UserPersonaForm,
      {
        roadmapTitle,
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
          createUserPersona(data);
        },
        isLoading: isCreatingUserPersona
      }
    )
  ] });
}

function AIChatActionButton(props) {
  const { icon: Icon, label, onClick } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: "flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1.5 text-xs hover:bg-gray-100",
      onClick,
      children: [
        /* @__PURE__ */ jsx(Icon, { className: "size-3" }),
        /* @__PURE__ */ jsx("span", { children: label })
      ]
    }
  );
}
function AIChatActionButtons(props) {
  const { onTellUsAboutYourSelf, onClearChat, messageCount, showClearChat } = props;
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-2 px-4 pt-2", children: [
    /* @__PURE__ */ jsx(
      AIChatActionButton,
      {
        icon: SettingsIcon,
        label: "Tell us about your self",
        onClick: onTellUsAboutYourSelf
      }
    ),
    showClearChat && messageCount > 0 && /* @__PURE__ */ jsx(
      AIChatActionButton,
      {
        icon: Trash2,
        label: "Clear chat",
        onClick: onClearChat
      }
    )
  ] });
}

const Renderer = lazy(
  () => import('../../chunks/index_DJK1nS1V.mjs').then((mod) => ({
    default: mod.Renderer
  }))
);
function getNodeDetails(svgElement) {
  const targetGroup = svgElement?.closest("g") || {};
  const nodeId = targetGroup?.dataset?.nodeId;
  const nodeType = targetGroup?.dataset?.type;
  const title = targetGroup?.dataset?.title;
  if (!nodeId || !nodeType) {
    return null;
  }
  return { nodeId, nodeType, targetGroup, title };
}
const allowedNodeTypes = [
  "topic",
  "subtopic",
  "button",
  "link-item",
  "resourceButton",
  "todo",
  "todo-checkbox",
  "checklist-item"
];
function ChatRoadmapRenderer(props) {
  const { roadmapId, nodes = [], edges = [], onSelectTopic } = props;
  const roadmapRef = useRef(null);
  const toast = useToast();
  const { data: userResourceProgressData } = useQuery(
    userResourceProgressOptions("roadmap", roadmapId),
    queryClient
  );
  async function updateTopicStatus(topicId, newStatus) {
    pageProgressMessage.set("Updating progress");
    updateResourceProgress(
      {
        resourceId: roadmapId,
        resourceType: "roadmap",
        topicId
      },
      newStatus
    ).then(() => {
      renderTopicProgress(topicId, newStatus);
      queryClient.invalidateQueries(
        userResourceProgressOptions("roadmap", roadmapId)
      );
    }).catch((err) => {
      toast.error("Something went wrong, please try again.");
      console.error(err);
    }).finally(() => {
      pageProgressMessage.set("");
    });
    return;
  }
  const handleSvgClick = useCallback((e) => {
    const target = e.target;
    const { nodeId, nodeType, targetGroup, title } = getNodeDetails(target) || {};
    if (!nodeId || !nodeType || !allowedNodeTypes.includes(nodeType)) {
      return;
    }
    if (nodeType === "button" || nodeType === "link-item" || nodeType === "resourceButton") {
      const link = targetGroup?.dataset?.link || "";
      const isExternalLink = link.startsWith("http");
      if (isExternalLink) {
        window.open(link, "_blank");
      } else {
        window.location.href = link;
      }
      return;
    }
    const isCurrentStatusLearning = targetGroup?.classList.contains("learning");
    const isCurrentStatusSkipped = targetGroup?.classList.contains("skipped");
    if (nodeType === "todo-checkbox") {
      e.preventDefault();
      if (!isLoggedIn()) {
        showLoginPopup();
        return;
      }
      const newStatus = targetGroup?.classList.contains("done") ? "pending" : "done";
      updateTopicStatus(nodeId, newStatus);
      return;
    }
    if (e.shiftKey) {
      e.preventDefault();
      if (!isLoggedIn()) {
        showLoginPopup();
        return;
      }
      updateTopicStatus(
        nodeId,
        isCurrentStatusLearning ? "pending" : "learning"
      );
      return;
    } else if (e.altKey) {
      e.preventDefault();
      if (!isLoggedIn()) {
        showLoginPopup();
        return;
      }
      updateTopicStatus(nodeId, isCurrentStatusSkipped ? "pending" : "skipped");
      return;
    }
    if (nodeType === "checklist-item" && target.tagName === "rect") {
      e.preventDefault();
      if (!isLoggedIn()) {
        showLoginPopup();
        return;
      }
      const newStatus = targetGroup?.classList.contains("done") ? "pending" : "done";
      updateTopicStatus(nodeId, newStatus);
      return;
    }
    if (nodeType === "checklist-item") {
      return;
    }
    if (!title || !nodeId) {
      return;
    }
    onSelectTopic(nodeId, title);
  }, []);
  const handleSvgRightClick = useCallback((e) => {
    e.preventDefault();
    const target = e.target;
    const { nodeId, nodeType, targetGroup } = getNodeDetails(target) || {};
    if (!nodeId || !nodeType || !allowedNodeTypes.includes(nodeType)) {
      return;
    }
    if (nodeType === "button") {
      return;
    }
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    const isCurrentStatusDone = targetGroup?.classList.contains("done");
    updateTopicStatus(nodeId, isCurrentStatusDone ? "pending" : "done");
  }, []);
  useEffect(() => {
    if (!roadmapRef?.current) {
      return;
    }
    roadmapRef?.current?.addEventListener("click", handleSvgClick);
    roadmapRef?.current?.addEventListener("contextmenu", handleSvgRightClick);
    return () => {
      roadmapRef?.current?.removeEventListener("click", handleSvgClick);
      roadmapRef?.current?.removeEventListener(
        "contextmenu",
        handleSvgRightClick
      );
    };
  }, []);
  return /* @__PURE__ */ jsx(
    Renderer,
    {
      ref: roadmapRef,
      roadmap: { nodes, edges },
      onRendered: () => {
        roadmapRef.current?.setAttribute("data-renderer", "editor");
        if (!userResourceProgressData) {
          return;
        }
        const { done, learning, skipped } = userResourceProgressData;
        done.forEach((topicId) => {
          renderTopicProgress(topicId, "done");
        });
        learning.forEach((topicId) => {
          renderTopicProgress(topicId, "learning");
        });
        skipped.forEach((topicId) => {
          renderTopicProgress(topicId, "skipped");
        });
      }
    }
  );
}

function TabButton(props) {
  const { icon, label, isActive, onClick, onClose } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: cn(
        "flex h-full flex-shrink-0 items-center gap-2 px-4 text-sm",
        isActive && "bg-gray-100",
        onClose && "pr-2 pl-4"
      ),
      onClick,
      children: [
        icon,
        /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: label }),
        onClose && /* @__PURE__ */ jsx(
          "span",
          {
            role: "button",
            className: "ml-1 rounded-lg p-1 text-gray-500 hover:bg-gray-200",
            onClick: (e) => {
              e.stopPropagation();
              onClose();
            },
            children: /* @__PURE__ */ jsx(XIcon, { className: "size-4 shrink-0", strokeWidth: 2.5 })
          }
        )
      ]
    }
  );
}
function RoadmapAIChatHeader(props) {
  const {
    onLogin,
    onUpgrade,
    isLoading: isDataLoading,
    onCloseChat,
    activeTab,
    onTabChange,
    onCloseTopic,
    selectedTopicId,
    roadmapId,
    activeChatHistoryId,
    onChatHistoryClick,
    onNewChat,
    onDeleteChatHistory
  } = props;
  const [showAILimitsPopup, setShowAILimitsPopup] = useState(false);
  const { data: tokenUsage } = useQuery(aiLimitOptions(), queryClient);
  const { data: userBillingDetails } = useQuery(
    billingDetailsOptions(),
    queryClient
  );
  useKeydown("Escape", onCloseChat);
  (tokenUsage?.used || 0) >= (tokenUsage?.limit || 0);
  const isPaidUser = userBillingDetails?.status === "active";
  getPercentage(
    tokenUsage?.used || 0,
    tokenUsage?.limit || 0
  );
  const handleUpgradeClick = () => {
    if (!isLoggedIn()) {
      onLogin();
      return;
    }
    onUpgrade();
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    showAILimitsPopup && /* @__PURE__ */ jsx(
      AILimitsPopup,
      {
        onClose: () => setShowAILimitsPopup(false),
        onUpgrade: () => {
          setShowAILimitsPopup(false);
          onUpgrade();
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex h-[46px] flex-shrink-0 items-center justify-between border-b border-gray-200 text-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex h-full items-center", children: [
        /* @__PURE__ */ jsx(
          TabButton,
          {
            icon: /* @__PURE__ */ jsx(BotIcon, { className: "size-4 shrink-0 text-black" }),
            label: "AI Chat",
            isActive: activeTab === "chat" && !!selectedTopicId,
            onClick: () => onTabChange("chat")
          }
        ),
        (activeTab === "topic" || selectedTopicId) && /* @__PURE__ */ jsx(
          TabButton,
          {
            icon: /* @__PURE__ */ jsx(BookIcon, { className: "size-4 shrink-0 text-black" }),
            label: "Topic",
            isActive: activeTab === "topic" && !!selectedTopicId,
            onClick: () => onTabChange("topic"),
            onClose: onCloseTopic
          }
        )
      ] }),
      !isDataLoading && isLoggedIn() && /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5 pr-4", children: [
        isPaidUser && /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex items-center gap-1 rounded-md bg-gray-200 px-2 py-1 text-xs text-black hover:bg-gray-300",
            onClick: onNewChat,
            children: [
              /* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }),
              "New Chat"
            ]
          }
        ),
        !isPaidUser && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex items-center gap-1 rounded-md bg-yellow-400 px-2 py-1 text-sm text-black hover:bg-yellow-500",
            onClick: handleUpgradeClick,
            children: [
              /* @__PURE__ */ jsx(GiftIcon, { className: "size-4" }),
              "Upgrade"
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          RoadmapAIChatHistory,
          {
            roadmapId,
            onChatHistoryClick,
            activeChatHistoryId,
            onDelete: onDeleteChatHistory,
            onUpgrade
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "hidden items-center gap-1 rounded-md bg-gray-200 px-2 py-1 text-sm text-black hover:bg-gray-300 max-xl:flex",
            onClick: onCloseChat,
            children: /* @__PURE__ */ jsx(XIcon, { className: "size-3.5", strokeWidth: 2.5 })
          }
        )
      ] })
    ] })
  ] });
}

function TutorIntroMessage(props) {
  const { roadmap } = props;
  const topicNodes = roadmap.nodes.filter((node) => node.type === "topic");
  const firstTopicNode = topicNodes[0];
  const firstTopicTitle = firstTopicNode?.data?.label || "XYZ";
  const secondTopicNode = topicNodes[1];
  const secondTopicTitle = secondTopicNode?.data?.label || "XYZ";
  const capabilities = [
    {
      icon: "📚",
      title: "Learn concepts:",
      description: "Ask me about any topics on the roadmap",
      examples: '"Explain what React hooks are" or "How does async/await work?"'
    },
    {
      icon: "📊",
      title: "Track progress:",
      description: "Mark topics as done, learning, or skipped",
      examples: `"Mark ${firstTopicTitle} as done" or "Show my overall progress"`
    },
    {
      icon: "🎯",
      title: "Recommendations:",
      description: "Find what to learn next or explore other roadmaps",
      examples: `"What should I learn next?" or "Recommend roadmaps for backend development"`
    },
    {
      icon: "🔍",
      title: "Find resources:",
      description: "Get learning materials for specific topics",
      examples: `"Show me resources for learning ${secondTopicTitle}"`
    },
    {
      icon: "🔗",
      title: "Share progress:",
      description: "Get a link to share your learning progress",
      examples: '"Give me my shareable progress link"'
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-gray-700", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-start gap-3", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-2 font-medium text-gray-900", children: "Hi! I'm your AI learning assistant 👋" }),
      /* @__PURE__ */ jsx("p", { className: "mb-3", children: "I'm here to guide you through your learning journey on this roadmap. I can help you understand concepts, track your progress, and provide personalized learning advice." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: "Here's what I can help you with:" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: capabilities.map((capability, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: `font-medium`, children: capability.icon }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-black", children: capability.title }),
          " ",
          capability.description,
          /* @__PURE__ */ jsxs("div", { className: "mt-1 text-xs text-gray-600", children: [
            "Try: ",
            capability.examples
          ] })
        ] })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 rounded-lg bg-gray-50 p-3", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-black", children: [
      /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Tip:" }),
      " I can see your current progress on the roadmap, so my advice will be personalized to your learning journey. Just ask me anything about the topics you see on the roadmap!"
    ] }) })
  ] });
}

function RoadmapAIChat(props) {
  const { roadmapId } = props;
  const toast = useToast();
  const editorRef = useRef(null);
  const scrollareaRef = useRef(null);
  const [deviceType, setDeviceType] = useState();
  useLayoutEffect(() => {
    setDeviceType(getTailwindScreenDimension());
  }, []);
  const [isChatMobileVisible, setIsChatMobileVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [selectedTopicTitle, setSelectedTopicTitle] = useState(
    null
  );
  const [activeTab, setActiveTab] = useState("chat");
  const [activeChatHistoryId, setActiveChatHistoryId] = useState();
  const [showUpdatePersonaModal, setShowUpdatePersonaModal] = useState(false);
  const { data: roadmapDetail, error: roadmapDetailError } = useQuery(
    roadmapJSONOptions(roadmapId),
    queryClient
  );
  const { data: roadmapTreeData, isLoading: roadmapTreeLoading } = useQuery(
    roadmapTreeMappingOptions(roadmapId),
    queryClient
  );
  const { isLoading: userResourceProgressLoading } = useQuery(
    userResourceProgressOptions("roadmap", roadmapId),
    queryClient
  );
  const { data: tokenUsage, isLoading: isTokenUsageLoading } = useQuery(
    aiLimitOptions(),
    queryClient
  );
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const { data: userPersona, isLoading: isUserPersonaLoading } = useQuery(
    userRoadmapPersonaOptions(roadmapId),
    queryClient
  );
  useEffect(() => {
    lockBodyScroll(isChatMobileVisible);
  }, [isChatMobileVisible]);
  const isLimitExceeded = (tokenUsage?.used || 0) >= (tokenUsage?.limit || 0);
  const isPaidUser = userBillingDetails?.status === "active";
  const roadmapContainerRef = useRef(null);
  const totalTopicCount = useMemo(() => {
    const allowedTypes = ["topic", "subtopic", "todo"];
    return roadmapDetail?.json?.nodes.filter(
      (node) => allowedTypes.includes(node.type || "")
    ).length ?? 0;
  }, [roadmapDetail]);
  useEffect(() => {
    if (!roadmapDetail || !roadmapContainerRef.current) {
      return;
    }
    roadmapContainerRef.current.replaceChildren(roadmapDetail.svg);
  }, [roadmapDetail]);
  useEffect(() => {
    const params = getUrlParams();
    const queryChatId = params.chatId;
    if (!roadmapTreeData || !roadmapDetail || isUserPersonaLoading) {
      return;
    }
    if (queryChatId) {
      setIsChatHistoryLoading(true);
      setActiveChatHistoryId(queryChatId);
      deleteUrlParam("chatId");
    }
    setIsLoading(false);
  }, [roadmapTreeData, roadmapDetail, isUserPersonaLoading]);
  const onSelectTopic = useCallback(
    (topicId, topicTitle) => {
      flushSync(() => {
        setSelectedTopicId(topicId);
        setSelectedTopicTitle(topicTitle);
        setActiveTab("topic");
        if (["sm", "md", "lg", "xl"].includes(deviceType || "xl")) {
          setIsChatMobileVisible(true);
        }
      });
      const topicWithSlug = slugify(topicTitle) + "@" + topicId;
      window.dispatchEvent(
        new CustomEvent("roadmap.node.click", {
          detail: {
            resourceType: "roadmap",
            resourceId: roadmapId,
            topicId: topicWithSlug,
            isCustomResource: false
          }
        })
      );
    },
    [roadmapId, deviceType]
  );
  const [isChatHistoryLoading, setIsChatHistoryLoading] = useState(true);
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
    abortControllerRef,
    handleChatSubmit,
    handleAbort,
    clearChat,
    scrollToBottom,
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
  if (roadmapDetailError) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-grow flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx(Frown, { className: "mb-4 size-16" }),
      /* @__PURE__ */ jsx("h1", { className: "mb-2 text-2xl font-bold", children: "There was an error" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-sm text-balance text-gray-500", children: roadmapDetailError.message })
    ] });
  }
  const isDataLoading = isLoading || roadmapTreeLoading || userResourceProgressLoading || isTokenUsageLoading || isBillingDetailsLoading || isUserPersonaLoading;
  const shouldShowChatPersona = !isLoading && !isUserPersonaLoading && !userPersona && isLoggedIn();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-grow flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-full flex-grow overflow-y-scroll", children: [
      showUpgradeModal && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradeModal(false) }),
      showUpdatePersonaModal && /* @__PURE__ */ jsx(
        UpdatePersonaModal,
        {
          roadmapId,
          onClose: () => setShowUpdatePersonaModal(false)
        }
      ),
      isLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex h-full w-full items-center justify-center", children: /* @__PURE__ */ jsx(Loader2Icon, { className: "size-6 animate-spin stroke-[2.5]" }) }),
      roadmapDetail?.json && !isLoading && /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[968px] px-4 pb-28 xl:pb-0", children: [
        /* @__PURE__ */ jsx(
          ChatRoadmapRenderer,
          {
            roadmapId,
            nodes: roadmapDetail?.json.nodes,
            edges: roadmapDetail?.json.edges,
            onSelectTopic
          }
        ),
        !isChatMobileVisible && /* @__PURE__ */ jsx("div", { className: "fixed bottom-4 left-1/2 z-50 block -translate-x-1/2 xl:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setActiveTab("chat");
              setIsChatMobileVisible(true);
            },
            className: "relative w-max overflow-hidden rounded-full bg-stone-900 px-4 py-2 text-center text-white shadow-2xl hover:bg-stone-800",
            children: /* @__PURE__ */ jsxs("span", { className: "relative z-20 flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(Bot, { className: "size-5 text-yellow-400" }),
              /* @__PURE__ */ jsx("span", { children: "Chat with Roadmap" })
            ] })
          }
        ) })
      ] })
    ] }),
    isChatMobileVisible && /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => {
          setIsChatMobileVisible(false);
        },
        className: "fixed inset-0 z-50 bg-black/50"
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "h-full flex-grow flex-col border-l border-gray-200 bg-white",
          {
            "relative hidden max-w-[40%] xl:flex": !isChatMobileVisible,
            "fixed inset-y-0 right-0 z-50 w-full max-w-[520px]": isChatMobileVisible,
            flex: isChatMobileVisible
          }
        ),
        children: [
          /* @__PURE__ */ jsx(
            RoadmapAIChatHeader,
            {
              isLoading: isDataLoading,
              onLogin: () => {
                showLoginPopup();
              },
              onUpgrade: () => {
                setShowUpgradeModal(true);
              },
              activeTab,
              onTabChange: (tab) => {
                setActiveTab(tab);
                if (tab === "topic" && selectedTopicId && selectedTopicTitle) {
                  scrollToBottom();
                }
              },
              onCloseTopic: () => {
                setSelectedTopicId(null);
                setSelectedTopicTitle(null);
                flushSync(() => {
                  setActiveTab("chat");
                });
                scrollToBottom();
              },
              onCloseChat: () => {
                setIsChatMobileVisible(false);
                setActiveTab("chat");
              },
              selectedTopicId,
              roadmapId,
              activeChatHistoryId,
              onChatHistoryClick: (chatHistoryId) => {
                setIsChatHistoryLoading(true);
                setActiveChatHistoryId(chatHistoryId);
              },
              onNewChat: () => {
                document.title = "Roadmap AI Chat";
                setActiveChatHistoryId(void 0);
              },
              onDeleteChatHistory: (chatHistoryId) => {
                if (activeChatHistoryId === chatHistoryId) {
                  setActiveChatHistoryId(void 0);
                }
              }
            }
          ),
          activeTab === "topic" && selectedTopicId && /* @__PURE__ */ jsx(
            TopicDetail,
            {
              resourceId: selectedTopicId,
              resourceType: "roadmap",
              renderer: "editor",
              defaultActiveTab: "content",
              hasUpgradeButtons: false,
              canSubmitContribution: false,
              wrapperClassName: "grow flex flex-col overflow-y-auto",
              bodyClassName: "static mx-auto h-auto grow sm:max-w-full sm:p-4",
              overlayClassName: "hidden",
              closeButtonClassName: "hidden",
              onClose: () => {
                setSelectedTopicId(null);
                setSelectedTopicTitle(null);
                setActiveTab("chat");
              },
              shouldCloseOnBackdropClick: false,
              shouldCloseOnEscape: false
            }
          ),
          activeTab === "chat" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
            !!chatHistory && isPaidUser && !isChatHistoryLoading && /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between border-b border-gray-200 bg-gray-100 px-3 py-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsxs("h3", { className: "flex min-w-0 items-center gap-2", children: [
                /* @__PURE__ */ jsx(HistoryIcon, { className: "size-4 shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "truncate", children: chatHistory.title })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    setActiveChatHistoryId(void 0);
                  },
                  className: "text-sm text-gray-500 hover:text-gray-700",
                  children: /* @__PURE__ */ jsx(XIcon, { className: "size-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative grow overflow-y-auto", ref: scrollareaRef, children: [
              isLoading && /* @__PURE__ */ jsx(Loader, {}),
              isChatHistoryLoading && /* @__PURE__ */ jsx(Loader, { message: "Loading chat history" }),
              shouldShowChatPersona && !isLoading && !isChatHistoryLoading && /* @__PURE__ */ jsx(ChatPersona, { roadmapId }),
              !isLoading && !isChatHistoryLoading && !shouldShowChatPersona && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "relative flex grow flex-col justify-end", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-end gap-2 px-3 py-2", children: [
                /* @__PURE__ */ jsx(
                  RoadmapAIChatCard,
                  {
                    role: "assistant",
                    jsx: /* @__PURE__ */ jsx(TutorIntroMessage, { roadmap: roadmapDetail?.json }),
                    isIntro: true
                  }
                ),
                aiChatHistory.map(
                  (chat, index) => {
                    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(RoadmapAIChatCard, { ...chat }) }, `chat-${index}`);
                  }
                ),
                isStreamingMessage && !streamedMessage && /* @__PURE__ */ jsx(
                  RoadmapAIChatCard,
                  {
                    role: "assistant",
                    html: "Thinking..."
                  }
                ),
                streamedMessage && /* @__PURE__ */ jsx(
                  RoadmapAIChatCard,
                  {
                    role: "assistant",
                    jsx: streamedMessage
                  }
                )
              ] }) }) })
            ] }),
            !isLoading && !isChatHistoryLoading && !shouldShowChatPersona && /* @__PURE__ */ jsxs("div", { className: "flex flex-col border-t border-gray-200", children: [
              !isLimitExceeded && /* @__PURE__ */ jsx(
                AIChatActionButtons,
                {
                  onTellUsAboutYourSelf: () => {
                    setShowUpdatePersonaModal(true);
                  },
                  messageCount: aiChatHistory.length,
                  showClearChat: !isPaidUser,
                  onClearChat: clearChat
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative flex items-start text-sm", children: [
                /* @__PURE__ */ jsx(
                  ChatEditor,
                  {
                    editorRef,
                    roadmapId,
                    onSubmit: (content) => {
                      if (!isLoggedIn()) {
                        showLoginPopup();
                        return;
                      }
                      if (isStreamingMessage || abortControllerRef.current || !isLoggedIn() || isDataLoading || isEmptyContent(content)) {
                        return;
                      }
                      flushSync(() => {
                        editorRef.current?.commands.setContent("<p></p>");
                      });
                      handleChatSubmit(content, isDataLoading);
                    }
                  }
                ),
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
                        setShowUpgradeModal(true);
                      },
                      className: "rounded-md bg-white px-2 py-1 text-xs font-medium text-black hover:bg-gray-300",
                      children: "Upgrade for more"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "flex aspect-square size-[36px] items-center justify-center p-2 text-zinc-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-50",
                    onClick: (e) => {
                      if (!isLoggedIn()) {
                        showLoginPopup();
                        return;
                      }
                      if (isStreamingMessage || abortControllerRef.current) {
                        handleAbort();
                        return;
                      }
                      const json = editorRef.current?.getJSON();
                      if (!json || isEmptyContent(json)) {
                        toast.error("Please enter a message");
                        return;
                      }
                      flushSync(() => {
                        editorRef.current?.commands.setContent("<p></p>");
                      });
                      handleChatSubmit(json, isDataLoading);
                    },
                    children: isStreamingMessage ? /* @__PURE__ */ jsx(PauseCircleIcon, { className: "size-4 stroke-[2.5]" }) : /* @__PURE__ */ jsx(SendIcon, { className: "size-4 stroke-[2.5]" })
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function isEmptyContent(content) {
  if (!content) {
    return true;
  }
  const firstContent = content.content?.[0];
  if (!firstContent) {
    return true;
  }
  return firstContent.type === "paragraph" && (!firstContent?.content || firstContent?.content?.length === 0);
}
function Loader(props) {
  const { message } = props;
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex h-full w-full items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-1.5 px-3 text-sm text-gray-500", children: [
    /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin stroke-[2.5]" }),
    /* @__PURE__ */ jsx("span", { children: message ?? "Loading Roadmap" })
  ] }) });
}

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const prerender = false;
async function getStaticPaths() {
  const roadmapIds = await getRoadmapIds();
  return roadmapIds.map((roadmapId) => ({
    params: { roadmapId }
  }));
}
const $$Ai = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ai;
  const { roadmapId } = Astro2.params;
  const roadmapDetail = await getRoadmapById(roadmapId);
  const canonicalUrl = `https://roadmap.sh/${roadmapId}/ai`;
  const roadmapBriefTitle = roadmapDetail.frontmatter.briefTitle;
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "title": `${roadmapBriefTitle} AI Mentor`, "description": `Learn anything ${roadmapBriefTitle} with AI Tutor. Pick a topic, choose a difficulty level and the AI will guide you through the learning process.`, "canonicalUrl": canonicalUrl }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AITutorLayout", AITutorLayout, { "activeTab": "chat", "wrapperClassName": "flex-row p-0 lg:p-0 overflow-hidden", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AITutor/AITutorLayout", "client:component-export": "AITutorLayout" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "RoadmapAIChat", RoadmapAIChat, { "roadmapId": roadmapId, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/RoadmapAIChat/RoadmapAIChat", "client:component-export": "RoadmapAIChat" })} ${renderComponent($$result3, "CheckSubscriptionVerification", CheckSubscriptionVerification, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Billing/CheckSubscriptionVerification", "client:component-export": "CheckSubscriptionVerification" })} ` })} ` })}`;
}, "/workspace/src/pages/[roadmapId]/ai.astro", void 0);

const $$file = "/workspace/src/pages/[roadmapId]/ai.astro";
const $$url = "/[roadmapId]/ai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ai,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
