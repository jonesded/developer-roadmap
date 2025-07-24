import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { PenSquare, RefreshCcw, FlaskConicalIcon, FrownIcon, Loader2Icon, ChevronLeftIcon, ChevronRightIcon, CircleXIcon, CircleCheckIcon, CircleIcon, LockIcon, MessageCircleIcon, MessageCircleOffIcon, GitForkIcon, XIcon, CheckIcon, ChevronLeft, ChevronRight, Info, Gift, Check, ChevronDownIcon, Settings2Icon, BookOpenCheck, Signpost, Frown, Copy, X, Menu, Map, CircleAlert, CircleOff } from 'lucide-react';
import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { u as useOutsideClick, i as isLoggedIn, c as cn, r as removeAuthToken, g as getUser, M as Modal } from './BaseLayout_C3JOBLhD.mjs';
import { u as useIsPaidUser, b as billingDetailsOptions } from './billing_BlRWCv4l.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_CxrAT9TD.mjs';
import { E as ErrorIcon } from './ErrorIcon_C-N2vwX6.mjs';
import { useMutation, useQuery } from '@tanstack/react-query';
import { r as readStream, c as generateAiCourseLessonQuestions, b as readAIRoadmapStream, g as generateAICourseRoadmapStructure, d as generateAiCourseStructure } from './ai_D2DRO333.mjs';
import { m as markdownToHtmlWithHighlighting, a as markdownToHtml } from './markdown_rbU7j7cH.mjs';
import { q as queryClient, c as httpPatch, a as httpPost } from './query-client_B4F1D3EC.mjs';
import { s as slugify } from './slugger_ChlNJxtz.mjs';
import { g as getAiCourseOptions, a as aiLimitOptions } from './ai-course_IUwlyb1o.mjs';
/* empty css                          */
import { M as ModifyCoursePrompt, U as UpdatePreferences } from './UpdatePreferences_BkvZbv0b.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { R as ResizablePanelGroup, a as ResizablePanel, b as ResizableHandle, c as AICourseLessonChat } from './AICourseLessonChat_D_-Heojr.mjs';
import { g as getPercentage } from './number_D9-I_I5P.mjs';
import { C as CheckIcon$1 } from './CheckIcon_B3c1RSNy.mjs';
import { A as AILimitsPopup } from './AILimitsPopup_DeEvIsvX.mjs';
/* empty css                          */
import { generateAIRoadmapFromText, renderFlowJSON } from './index_DJK1nS1V.mjs';
import { r as replaceChildren } from './dom_C6E8wq7N.mjs';
import { a as renderTopicProgress } from './resource-progress_Dhi8X1Qg.mjs';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';
import { u as useAuth } from './use-auth_C9fA7Z2A.mjs';

function RegenerateLesson(props) {
  const { onRegenerateLesson, isForkable, onForkCourse } = props;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setIsDropdownVisible(false));
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
        title: "Give AI more context",
        description: "Pass additional information to the AI to generate a lesson.",
        onClose: () => setShowPromptModal(false),
        onSubmit: (prompt) => {
          setShowPromptModal(false);
          if (!isLoggedIn()) {
            showLoginPopup();
            return;
          }
          if (isForkable) {
            onForkCourse();
            return;
          }
          onRegenerateLesson(prompt);
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative flex items-center lg:mr-1", ref, children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: cn("rounded-full p-1 text-gray-400 hover:text-black", {
            "text-black": isDropdownVisible
          }),
          onClick: () => setIsDropdownVisible(!isDropdownVisible),
          children: /* @__PURE__ */ jsx(PenSquare, { className: "text-current", size: 16, strokeWidth: 2.5 })
        }
      ),
      isDropdownVisible && /* @__PURE__ */ jsxs("div", { className: "absolute top-full right-0 min-w-[170px] overflow-hidden rounded-md border border-gray-200 bg-white", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setIsDropdownVisible(false);
              if (!isLoggedIn()) {
                showLoginPopup();
                return;
              }
              if (isForkable) {
                onForkCourse();
                return;
              }
              onRegenerateLesson();
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
              setIsDropdownVisible(false);
              if (!isLoggedIn()) {
                showLoginPopup();
                return;
              }
              if (isForkable) {
                onForkCourse();
                return;
              }
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

function TestMyKnowledgeAction(props) {
  const { courseSlug, activeModuleIndex, activeLessonIndex } = props;
  const [questions, setQuestions] = useState([]);
  const [isKnowledgeTestOpen, setIsKnowledgeTestOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const abortController = useMemo(
    () => new AbortController(),
    [activeModuleIndex, activeLessonIndex]
  );
  const generateAiLessonQuestions = async () => {
    setIsLoading(true);
    setError("");
    if (!isLoggedIn()) {
      setIsLoading(false);
      setError("Please login to generate course content");
      return;
    }
    const response = await fetch(
      `${"https://api.roadmap.sh"}/v1-generate-ai-course-lesson-question/${courseSlug}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        signal: abortController.signal,
        credentials: "include",
        body: JSON.stringify({
          moduleIndex: activeModuleIndex,
          lessonIndex: activeLessonIndex
        })
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
      return;
    }
    if (!response.body) {
      setIsLoading(false);
      setError("No response body received");
      return;
    }
    try {
      const reader = response.body.getReader();
      setIsLoading(false);
      setIsGenerating(true);
      await readStream(reader, {
        onStream: async (result) => {
          if (abortController.signal.aborted) {
            return;
          }
          const questions2 = generateAiCourseLessonQuestions(result);
          setQuestions(questions2);
        },
        onStreamEnd: async (result) => {
          if (abortController.signal.aborted) {
            return;
          }
          const questions2 = generateAiCourseLessonQuestions(result);
          setQuestions(questions2);
          setIsGenerating(false);
        }
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setIsLoading(false);
      setIsGenerating(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col gap-4", children: [
    !isKnowledgeTestOpen && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(
          "group flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:border-black hover:bg-gray-50 hover:text-gray-900",
          {
            "bg-gray-100 text-gray-900": isKnowledgeTestOpen
          }
        ),
        onClick: () => {
          if (isGenerating || isLoading) {
            return;
          }
          if (!isKnowledgeTestOpen) {
            setIsKnowledgeTestOpen(true);
            generateAiLessonQuestions();
          } else {
            setIsKnowledgeTestOpen(false);
          }
        },
        children: [
          /* @__PURE__ */ jsx(FlaskConicalIcon, { className: "size-5 shrink-0 transition-transform group-hover:scale-110" }),
          /* @__PURE__ */ jsx("span", { children: "Test My Knowledge" })
        ]
      }
    ) }),
    error && /* @__PURE__ */ jsxs("div", { className: "flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-xl bg-red-50/80 p-6 text-red-500", children: [
      /* @__PURE__ */ jsx(FrownIcon, { className: "size-12 shrink-0" }),
      /* @__PURE__ */ jsx("span", { className: "text-center font-semibold", children: error })
    ] }),
    !error && isKnowledgeTestOpen && /* @__PURE__ */ jsx(
      ListQuestions,
      {
        isLoading,
        isGenerating,
        questions
      }
    )
  ] });
}
function ListQuestions(props) {
  const { isLoading, isGenerating, questions } = props;
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const activeQuestion = questions[activeQuestionIndex];
  const handleOptionSelectChange = function(questionId, optionId) {
    setSelectedAnswers((prev) => {
      const newAnswers = { ...prev };
      const canMultiSelect = activeQuestion.options.filter((option) => option.isCorrect).length > 1;
      const isAlreadySelected = selectedAnswers[questionId]?.includes(optionId);
      if (isAlreadySelected) {
        newAnswers[questionId] = newAnswers[questionId].filter(
          (id) => id !== optionId
        );
      } else {
        if (canMultiSelect) {
          newAnswers[questionId] = [
            ...newAnswers[questionId] || [],
            optionId
          ];
        } else {
          newAnswers[questionId] = [optionId];
        }
      }
      return newAnswers;
    });
  };
  const handleNext = useCallback(() => {
    const isLastQuestion = activeQuestionIndex === questions.length - 1;
    if (isLastQuestion) {
      setSubmitted(true);
      setActiveQuestionIndex(0);
      return;
    }
    setActiveQuestionIndex(activeQuestionIndex + 1);
  }, [activeQuestionIndex, questions, submitted]);
  const handlePrevious = useCallback(() => {
    setActiveQuestionIndex((prev) => Math.max(prev - 1, 0));
  }, [questions]);
  const handleTryAgain = useCallback(() => {
    setSelectedAnswers({});
    setSubmitted(false);
    setActiveQuestionIndex(0);
  }, []);
  const correctAnswerCount = useMemo(() => {
    if (!submitted) {
      return 0;
    }
    return questions.filter((question) => {
      const selectedOptionIds = selectedAnswers[question.id];
      const correctAnswerIds = question.options.filter((option) => option.isCorrect).map((option) => option.id);
      return correctAnswerIds.length === selectedOptionIds?.length && correctAnswerIds.every(
        (correctAnswerId) => selectedOptionIds?.includes(correctAnswerId)
      );
    }).length;
  }, [questions, selectedAnswers, submitted]);
  if (isLoading || !questions.length) {
    return /* @__PURE__ */ jsx("div", { className: "flex h-[306px] w-full items-center justify-center rounded-lg border p-5 text-black", children: /* @__PURE__ */ jsx(Loader2Icon, { className: "size-8 animate-spin stroke-[2.5] text-gray-400" }) });
  }
  return /* @__PURE__ */ jsx(
    QuizItem,
    {
      counter: activeQuestionIndex + 1,
      totalQuestions: questions.length,
      correctAnswerCount,
      isLoading: isGenerating,
      question: activeQuestion,
      onOptionSelectChange: handleOptionSelectChange,
      selectedOptionIds: selectedAnswers[activeQuestion.id],
      submitted,
      onNext: handleNext,
      onPrevious: handlePrevious,
      onTryAgain: handleTryAgain
    }
  );
}
function QuizItem(props) {
  const {
    totalQuestions,
    correctAnswerCount,
    counter,
    isLoading,
    question,
    onOptionSelectChange,
    selectedOptionIds,
    submitted = false,
    onNext,
    onPrevious,
    onTryAgain
  } = props;
  const { id: questionId, title, options } = question;
  const canMultiSelect = options.filter((option) => option.isCorrect).length > 1;
  const correctAnswerIds = options.filter((option) => option.isCorrect).map((option) => option.id);
  const isAllCorrectAnswer = correctAnswerIds.length === selectedOptionIds?.length && correctAnswerIds.every(
    (correctAnswerId) => selectedOptionIds?.includes(correctAnswerId)
  );
  const hasWrongAnswer = submitted && !isAllCorrectAnswer;
  const hasCorrectAnswer = submitted && isAllCorrectAnswer;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative w-full overflow-hidden rounded-xl border text-black transition-all",
        {
          "border-red-400": hasWrongAnswer,
          "border-green-500": hasCorrectAnswer
        }
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 rounded-t-xl border-b bg-linear-to-r from-gray-50 to-white p-5", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-gray-700", children: [
            "Question ",
            counter,
            " of ",
            totalQuestions
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-2 flex-1 rounded-full bg-gray-100", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-full rounded-full bg-black transition-all duration-300",
              style: { width: `${counter / totalQuestions * 100}%` }
            }
          ) }),
          submitted && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn("rounded-full px-3 py-1 text-xs font-medium", {
                "bg-red-500 text-white": hasWrongAnswer,
                "bg-green-500 text-white": hasCorrectAnswer
              }),
              children: hasWrongAnswer ? "Wrong" : "Correct"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "mx-2 text-balance text-xl font-medium", children: [
            title,
            " ",
            canMultiSelect ? "(Select Multiple)" : ""
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-col gap-0.5", children: options.map((option, index) => {
            let status = "default";
            if (submitted) {
              if (option.isCorrect) {
                status = "correct";
              } else if (selectedOptionIds?.includes(option.id)) {
                status = "wrong";
              }
            } else {
              if (selectedOptionIds?.includes(option.id)) {
                status = "selected";
              }
            }
            return /* @__PURE__ */ jsx(
              QuizOption,
              {
                title: option.title,
                status,
                onSelect: () => onOptionSelectChange?.(questionId, option.id),
                submitted
              },
              index
            );
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex w-full items-center justify-between px-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: submitted ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
              "You got ",
              correctAnswerCount,
              " out of ",
              totalQuestions,
              " correct.",
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "relative rounded-md bg-black px-3 py-1 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-black/80",
                  onClick: onTryAgain,
                  children: "Try again"
                }
              )
            ] }) : /* @__PURE__ */ jsx("span", { children: "Answer all questions to submit" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "group flex h-10 items-center justify-center gap-1 rounded-lg border border-gray-200 p-2 pr-4 text-sm text-black transition-all hover:border-black hover:bg-black hover:text-white focus:outline-hidden max-sm:pr-2",
                  onClick: onPrevious,
                  children: [
                    /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "size-5 shrink-0 transition-transform group-hover:-translate-x-0.5" }),
                    /* @__PURE__ */ jsx("span", { className: "max-sm:hidden", children: "Previous" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "group flex h-10 items-center justify-center gap-1 rounded-lg border border-gray-200 p-2 pl-4 text-sm text-black transition-all hover:border-black hover:bg-black hover:text-white focus:outline-hidden max-sm:pl-2",
                  onClick: onNext,
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "max-sm:hidden", children: "Next" }),
                    /* @__PURE__ */ jsx(ChevronRightIcon, { className: "size-5 shrink-0 transition-transform group-hover:translate-x-0.5" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        isLoading && /* @__PURE__ */ jsx("div", { className: "absolute bg-white right-3 top-3 flex h-8 items-center justify-center gap-1 rounded-lg border border-gray-200 p-2 text-sm text-black hover:bg-black hover:text-white focus:outline-hidden", children: /* @__PURE__ */ jsx(Loader2Icon, { className: "size-5 animate-spin text-gray-400" }) })
      ]
    }
  );
}
function QuizOption(props) {
  const { title, status = "default", onSelect, submitted = false } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: onSelect,
      className: cn(
        "group flex items-start gap-3 rounded-xl p-4 text-base transition-all disabled:cursor-not-allowed",
        status === "selected" && "bg-black text-white",
        status === "wrong" && submitted && "bg-red-100 text-red-800",
        status === "correct" && submitted && "bg-green-100 text-green-800",
        status === "default" && "bg-white hover:bg-gray-50",
        submitted && status !== "correct" && "opacity-40"
      ),
      disabled: submitted,
      children: [
        /* @__PURE__ */ jsxs("span", { className: "mt-[2px]", children: [
          status === "wrong" && submitted && /* @__PURE__ */ jsx(CircleXIcon, { className: "size-5" }),
          status === "correct" && submitted && /* @__PURE__ */ jsx(CircleCheckIcon, { className: "size-5" }),
          (status === "selected" || status === "default") && /* @__PURE__ */ jsx(CircleIcon, { className: "size-5" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-left", children: title })
      ]
    }
  );
}

function AICourseFooter(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "mx-auto mb-10 mt-5 text-center text-sm text-gray-400",
        className
      ),
      children: "AI can make mistakes, check important info."
    }
  );
}

function LoginToView(props) {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "mt-8 min-h-[402px] rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100/50 p-12 backdrop-blur-sm",
        "flex flex-col items-center justify-center",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(LockIcon, { className: "size-8 stroke-[1.5] text-gray-600" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 mb-4 flex flex-col items-center gap-0.5 text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-700", children: "Login Required" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-balance leading-relaxed text-gray-500", children: "Please login to access the content and all the features of the AI Tutor." })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => showLoginPopup(),
            className: "rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:opacity-80 hover:shadow-md active:scale-[0.98] active:transform",
            children: "Login to Continue"
          }
        )
      ]
    }
  );
}

function getQuestionsFromResult(result) {
  const matchedQuestions = result.match(
    /=START_QUESTIONS=(.*?)=END_QUESTIONS=/
  );
  if (matchedQuestions) {
    return matchedQuestions[1].split("@@");
  }
  return [];
}
function AICourseLesson(props) {
  const {
    courseSlug,
    progress = [],
    creatorId,
    activeModuleIndex,
    totalModules,
    currentModuleTitle,
    activeLessonIndex,
    totalLessons,
    currentLessonTitle,
    onGoToPrevLesson,
    onGoToNextLesson,
    onUpgrade,
    isAIChatsOpen,
    setIsAIChatsOpen,
    isForkable,
    onForkCourse
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [defaultQuestions, setDefaultQuestions] = useState([]);
  const [lessonHtml, setLessonHtml] = useState("");
  const lessonId = `${slugify(String(activeModuleIndex))}-${slugify(String(activeLessonIndex))}`;
  const isLessonDone = progress?.includes(lessonId);
  const [courseAIChatHistory, setCourseAIChatHistory] = useState([
    {
      role: "assistant",
      content: "Hey, I am your AI instructor. How can I help you today? 🤖",
      isDefault: true
    }
  ]);
  const { isPaidUser } = useIsPaidUser();
  const abortController = useMemo(
    () => new AbortController(),
    [activeModuleIndex, activeLessonIndex]
  );
  const generateAiCourseContent = async (isForce, customPrompt) => {
    setIsLoading(true);
    setError("");
    setLessonHtml("");
    if (!isLoggedIn()) {
      setIsLoading(false);
      setError("Please login to generate course content");
      return;
    }
    if (!currentModuleTitle || !currentLessonTitle) {
      setIsLoading(false);
      setError("Invalid module title or lesson title");
      return;
    }
    const response = await fetch(
      `${"https://api.roadmap.sh"}/v1-generate-ai-course-lesson/${courseSlug}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        signal: abortController.signal,
        credentials: "include",
        body: JSON.stringify({
          moduleIndex: activeModuleIndex,
          lessonIndex: activeLessonIndex,
          isForce,
          customPrompt
        })
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
      return;
    }
    if (!response.body) {
      setIsLoading(false);
      setError("No response body received");
      return;
    }
    try {
      const reader = response.body.getReader();
      setIsLoading(false);
      setIsGenerating(true);
      await readStream(reader, {
        onStream: async (result) => {
          if (abortController.signal.aborted) {
            return;
          }
          const questions = getQuestionsFromResult(result);
          setDefaultQuestions(questions);
          const newResult = result.replace(
            /=START_QUESTIONS=.*?=END_QUESTIONS=/,
            ""
          );
          setLessonHtml(markdownToHtml(newResult, false));
        },
        onStreamEnd: async (result) => {
          if (abortController.signal.aborted) {
            return;
          }
          const questions = getQuestionsFromResult(result);
          setDefaultQuestions(questions);
          const newResult = result.replace(
            /=START_QUESTIONS=.*?=END_QUESTIONS=/,
            ""
          );
          const markdownHtml = await markdownToHtmlWithHighlighting(
            newResult
          ).catch((e) => {
            console.error(e);
            return newResult;
          });
          setLessonHtml(markdownHtml);
          queryClient.invalidateQueries(aiLimitOptions());
          setIsGenerating(false);
        }
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setIsLoading(false);
    }
  };
  const { mutate: toggleDone, isPending: isTogglingDone } = useMutation(
    {
      mutationFn: () => {
        return httpPatch(
          `/v1-toggle-done-ai-lesson/${courseSlug}`,
          {
            moduleIndex: activeModuleIndex,
            lessonIndex: activeLessonIndex
          }
        );
      },
      onSuccess: (data) => {
        queryClient.setQueryData(
          getAiCourseOptions({ aiCourseSlug: courseSlug }).queryKey,
          data
        );
      }
    },
    queryClient
  );
  useEffect(() => {
    generateAiCourseContent();
  }, [currentModuleTitle, currentLessonTitle]);
  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, [abortController]);
  const cantGoForward = activeModuleIndex === totalModules - 1 && activeLessonIndex === totalLessons - 1 || isGenerating || isLoading;
  const cantGoBack = activeModuleIndex === 0 && activeLessonIndex === 0 || isGenerating || isLoading;
  return /* @__PURE__ */ jsx("div", { className: "h-full", children: /* @__PURE__ */ jsxs(ResizablePanelGroup, { direction: "horizontal", children: [
    /* @__PURE__ */ jsx(
      ResizablePanel,
      {
        defaultSize: isAIChatsOpen ? 70 : 100,
        minSize: 40,
        id: "course-text-content",
        className: "h-full overflow-y-scroll! bg-white",
        order: 1,
        children: /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-5xl", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 pb-0 max-lg:px-4 max-lg:pt-3", children: [
          (isGenerating || isLoading) && /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6 flex items-center justify-center", children: /* @__PURE__ */ jsx(
            Loader2Icon,
            {
              size: 18,
              strokeWidth: 3,
              className: "animate-spin text-gray-400/70"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4 flex justify-between max-sm:flex-col-reverse", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500", children: [
              "Lesson ",
              activeLessonIndex + 1,
              " of ",
              totalLessons
            ] }),
            !isGenerating && !isLoading && /* @__PURE__ */ jsxs("div", { className: "top-2 right-2 mb-3 flex items-center gap-2 max-sm:justify-end md:absolute lg:top-6 lg:right-6", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsAIChatsOpen(!isAIChatsOpen),
                  className: "rounded-full p-1 text-gray-400 hover:text-black max-lg:hidden",
                  children: !isAIChatsOpen ? /* @__PURE__ */ jsx(MessageCircleIcon, { className: "size-4 stroke-[2.5]" }) : /* @__PURE__ */ jsx(MessageCircleOffIcon, { className: "size-4 stroke-[2.5]" })
                }
              ),
              /* @__PURE__ */ jsx(
                RegenerateLesson,
                {
                  onRegenerateLesson: (prompt) => {
                    generateAiCourseContent(true, prompt);
                  },
                  isForkable,
                  onForkCourse
                }
              ),
              isForkable && /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: onForkCourse,
                  className: "flex items-center gap-1.5 rounded-full border bg-gray-100 py-1 pr-4 pl-3 text-sm text-black hover:bg-gray-200 disabled:opacity-50 max-lg:text-xs",
                  children: [
                    /* @__PURE__ */ jsx(GitForkIcon, { className: "size-3.5" }),
                    "Fork Course"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  disabled: isLoading || isTogglingDone,
                  className: cn(
                    "flex items-center gap-1.5 rounded-full bg-black py-1 pr-3 pl-2 text-sm text-white hover:bg-gray-800 disabled:opacity-50 max-lg:text-xs",
                    isLessonDone ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                  ),
                  onClick: () => {
                    if (!isLoggedIn()) {
                      showLoginPopup();
                      return;
                    }
                    if (isForkable) {
                      onForkCourse();
                      return;
                    }
                    toggleDone();
                  },
                  children: isTogglingDone ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(
                      Loader2Icon,
                      {
                        size: 16,
                        strokeWidth: 3,
                        className: "animate-spin text-white"
                      }
                    ),
                    "Please wait ..."
                  ] }) : /* @__PURE__ */ jsx(Fragment, { children: isLessonDone ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(XIcon, { size: 16 }),
                    "Mark as Undone"
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(CheckIcon, { size: 16 }),
                    "Mark as Done"
                  ] }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "mb-6 text-3xl font-semibold text-balance max-lg:mb-3 max-lg:text-xl", children: currentLessonTitle?.replace(/^Lesson\s*?\d+[\.:]\s*/, "") }),
          !error && isLoggedIn() && /* @__PURE__ */ jsx(
            "div",
            {
              className: "course-content prose prose-lg prose-headings:mb-3 prose-headings:mt-8 prose-blockquote:font-normal prose-pre:rounded-2xl prose-pre:text-lg prose-li:my-1 prose-thead:border-zinc-800 prose-tr:border-zinc-800 max-lg:prose-h2:mt-3 max-lg:prose-h2:text-lg max-lg:prose-h3:text-base max-lg:prose-pre:px-3 max-lg:prose-pre:text-sm mt-8 max-w-full text-black max-lg:mt-4 max-lg:text-base",
              dangerouslySetInnerHTML: { __html: lessonHtml }
            }
          ),
          error && isLoggedIn() && /* @__PURE__ */ jsx("div", { className: "mt-8 flex min-h-[300px] items-center justify-center rounded-xl bg-red-50/80", children: error.includes("reached the limit") ? /* @__PURE__ */ jsxs("div", { className: "flex max-w-sm flex-col items-center text-center", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-red-600", children: "Limit reached" }),
            /* @__PURE__ */ jsxs("p", { className: "my-3 text-red-600", children: [
              "You have reached the AI usage limit for today.",
              !isPaidUser && /* @__PURE__ */ jsx(Fragment, { children: "Please upgrade your account to continue." }),
              isPaidUser && /* @__PURE__ */ jsx(Fragment, { children: " Please wait until tomorrow to continue." })
            ] }),
            !isPaidUser && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  onUpgrade();
                },
                className: "rounded-full bg-red-600 px-4 py-1 text-white hover:bg-red-700",
                children: "Upgrade Account"
              }
            )
          ] }) : /* @__PURE__ */ jsx("p", { className: "text-red-600", children: error }) }),
          !isLoggedIn() && /* @__PURE__ */ jsx(LoginToView, {}),
          !isLoading && !isGenerating && !error && /* @__PURE__ */ jsx(
            TestMyKnowledgeAction,
            {
              courseSlug,
              activeModuleIndex,
              activeLessonIndex
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: onGoToPrevLesson,
                disabled: cantGoBack,
                className: cn(
                  "flex items-center rounded-full px-4 py-2 disabled:opacity-50 max-lg:px-3 max-lg:py-1.5 max-lg:text-sm",
                  cantGoBack ? "cursor-not-allowed text-gray-400" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                ),
                children: [
                  /* @__PURE__ */ jsx(ChevronLeft, { size: 16, className: "mr-2" }),
                  "Previous",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "hidden lg:inline", children: " Lesson" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  if (!isLoggedIn()) {
                    onGoToNextLesson();
                    return;
                  }
                  if (!isLessonDone) {
                    toggleDone(void 0, {
                      onSuccess: () => {
                        onGoToNextLesson();
                      }
                    });
                  } else {
                    onGoToNextLesson();
                  }
                },
                disabled: cantGoForward || isTogglingDone,
                className: cn(
                  "flex items-center rounded-full px-4 py-2 disabled:opacity-50 max-lg:px-3 max-lg:py-1.5 max-lg:text-sm",
                  cantGoForward ? "cursor-not-allowed text-gray-400" : "bg-gray-800 text-white hover:bg-gray-700"
                ),
                children: isTogglingDone ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    Loader2Icon,
                    {
                      size: 16,
                      strokeWidth: 3,
                      className: "animate-spin text-white"
                    }
                  ),
                  "Please wait ..."
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Next",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "hidden lg:inline", children: " Lesson" }),
                  /* @__PURE__ */ jsx(ChevronRight, { size: 16, className: "ml-2" })
                ] })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(AICourseFooter, {})
        ] }) })
      }
    ),
    isAIChatsOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(ResizableHandle, { withHandle: false, className: "max-lg:hidden" }),
      /* @__PURE__ */ jsx(
        AICourseLessonChat,
        {
          courseSlug,
          moduleTitle: currentModuleTitle,
          lessonTitle: currentLessonTitle,
          onUpgradeClick: onUpgrade,
          courseAIChatHistory,
          setCourseAIChatHistory,
          isDisabled: isGenerating || isLoading || isTogglingDone,
          isGeneratingLesson: isGenerating || isLoading,
          defaultQuestions,
          onClose: () => setIsAIChatsOpen(false),
          isAIChatsOpen,
          setIsAIChatsOpen
        }
      )
    ] })
  ] }) });
}

function AICourseLimit(props) {
  const { onUpgrade, onShowLimits } = props;
  const { data: limits, isLoading } = useQuery(aiLimitOptions(), queryClient);
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  if (!isLoggedIn()) {
    return null;
  }
  if (isLoading || !limits || isBillingDetailsLoading || !userBillingDetails) {
    return /* @__PURE__ */ jsx("div", { className: "hidden h-[38px] w-[208.09px] animate-pulse rounded-lg border border-gray-200 bg-gray-200 lg:block" });
  }
  const { used, limit } = limits;
  const totalPercentage = getPercentage(used, limit);
  const isPaidUser = userBillingDetails.status === "active";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !isPaidUser && /* @__PURE__ */ jsxs(
      "button",
      {
        className: "mr-1 flex items-center gap-1 text-sm font-medium underline underline-offset-2 lg:hidden",
        onClick: () => onShowLimits(),
        children: [
          /* @__PURE__ */ jsx(Info, { className: "size-4" }),
          totalPercentage,
          "% limit used"
        ]
      }
    ),
    !isPaidUser && /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          onShowLimits();
        },
        className: "relative hidden h-full min-h-[38px] cursor-pointer items-center overflow-hidden rounded-lg border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50 lg:flex",
        children: [
          /* @__PURE__ */ jsxs("span", { className: "relative z-10", children: [
            totalPercentage,
            "% of the daily limit used"
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 h-full bg-gray-200/80",
              style: {
                width: `${totalPercentage}%`
              }
            }
          )
        ]
      }
    ),
    !isPaidUser && /* @__PURE__ */ jsxs(
      "button",
      {
        className: "hidden items-center justify-center gap-1 rounded-md bg-yellow-400 px-4 py-1 text-sm font-medium underline-offset-2 hover:bg-yellow-500 lg:flex",
        onClick: () => onUpgrade(),
        children: [
          /* @__PURE__ */ jsx(Gift, { className: "size-4" }),
          "Upgrade"
        ]
      }
    )
  ] });
}

function ChapterNumberSkeleton() {
  return /* @__PURE__ */ jsx("div", { className: "h-[28px] w-[28px] animate-pulse rounded-full bg-gray-200" });
}
function CircularProgress(props) {
  const {
    percentage,
    children,
    isVisible = true,
    isActive = false,
    isLoading = false
  } = props;
  const circumference = 2 * Math.PI * 13;
  const strokeDasharray = `${circumference}`;
  const strokeDashoffset = circumference - percentage / 100 * circumference;
  return /* @__PURE__ */ jsxs("div", { className: "relative flex h-[28px] w-[28px] shrink-0 items-center justify-center", children: [
    isVisible && !isLoading && /* @__PURE__ */ jsx("svg", { className: "absolute h-full w-full -rotate-90", children: /* @__PURE__ */ jsx(
      "circle",
      {
        cx: "14",
        cy: "14",
        r: "13",
        stroke: "currentColor",
        strokeWidth: "1.75",
        fill: "none",
        className: cn("text-gray-400/70", {
          "text-black": isActive
        }),
        style: {
          strokeDasharray,
          strokeDashoffset,
          transition: "stroke-dashoffset 0.3s ease"
        }
      }
    ) }),
    !isLoading && children,
    isLoading && /* @__PURE__ */ jsx(ChapterNumberSkeleton, {})
  ] });
}

function AICourseSidebarModuleList(props) {
  const {
    course,
    courseSlug,
    activeModuleIndex,
    setActiveModuleIndex,
    activeLessonIndex,
    setActiveLessonIndex,
    setSidebarOpen,
    setViewMode,
    expandedModules,
    setExpandedModules,
    isLoading
  } = props;
  const aiCourseProgress = course.done || [];
  const toggleModule = (index) => {
    setExpandedModules((prev) => {
      if (prev[index]) {
        return {
          ...prev,
          [index]: false
        };
      }
      const newState = {};
      course.modules.forEach((_, idx) => {
        newState[idx] = false;
      });
      newState[index] = true;
      return newState;
    });
  };
  const done = aiCourseProgress || [];
  return /* @__PURE__ */ jsx("nav", { className: "bg-gray-100", children: course.modules.map((courseModule, moduleIdx) => {
    const totalLessons = courseModule.lessons.length;
    const completedLessons = courseModule.lessons.filter(
      (lesson, lessonIdx) => {
        const key = `${slugify(String(moduleIdx))}-${slugify(String(lessonIdx))}`;
        return done.includes(key);
      }
    ).length;
    const percentage = Math.round(completedLessons / totalLessons * 100);
    const isActive = expandedModules[moduleIdx];
    const isModuleCompleted = completedLessons === totalLessons;
    return /* @__PURE__ */ jsxs("div", { className: "rounded-md", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => toggleModule(moduleIdx),
          className: cn(
            "relative z-10 flex w-full cursor-pointer flex-row items-center gap-2 border-b border-b-gray-200 bg-white px-2 py-3 text-base text-gray-600 hover:bg-gray-100",
            activeModuleIndex === moduleIdx ? "text-gray-900" : "text-gray-700",
            moduleIdx === 0 && "pt-4"
          ),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsx(
                CircularProgress,
                {
                  percentage,
                  isVisible: !isModuleCompleted,
                  isActive,
                  isLoading,
                  children: /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: cn(
                        "flex size-[21px] shrink-0 items-center justify-center rounded-full bg-gray-400/70 text-xs font-semibold text-white",
                        {
                          "bg-black": isActive,
                          "bg-green-600": isModuleCompleted
                        }
                      ),
                      children: [
                        !isModuleCompleted && moduleIdx + 1,
                        isModuleCompleted && /* @__PURE__ */ jsx(Check, { className: "size-3 stroke-3 text-white" })
                      ]
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsx("span", { className: "flex flex-1 items-center break-words text-left text-sm leading-relaxed", children: courseModule.title?.replace(/^Module\s*?\d+[\.:]\s*/, "") })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto self-center", children: expandedModules[moduleIdx] ? /* @__PURE__ */ jsx(ChevronDownIcon, { size: 16, className: "shrink-0" }) : /* @__PURE__ */ jsx(ChevronRightIcon, { size: 16, className: "shrink-0" }) })
          ]
        }
      ),
      expandedModules[moduleIdx] && /* @__PURE__ */ jsx("div", { className: "flex flex-col border-b border-b-gray-200 bg-gray-100", children: courseModule.lessons.map((lesson, lessonIdx) => {
        const key = `${slugify(String(moduleIdx))}-${slugify(String(lessonIdx))}`;
        const isCompleted = done.includes(key);
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setActiveModuleIndex(moduleIdx);
              setActiveLessonIndex(lessonIdx);
              setExpandedModules((prev) => {
                const newState = {};
                course.modules.forEach((_, idx) => {
                  newState[idx] = false;
                });
                newState[moduleIdx] = true;
                return newState;
              });
              setSidebarOpen(false);
              setViewMode("module");
            },
            className: cn(
              "flex w-full cursor-pointer items-center gap-2.5 py-3 pl-3.5 pr-2 text-left text-sm leading-normal",
              activeModuleIndex === moduleIdx && activeLessonIndex === lessonIdx ? "bg-gray-200 text-black" : "text-gray-600 hover:bg-gray-200/70"
            ),
            children: [
              isCompleted ? /* @__PURE__ */ jsx(
                CheckIcon$1,
                {
                  additionalClasses: cn(
                    "size-[18px] relative bg-white rounded-full top-[2px] shrink-0 text-green-600",
                    {
                      "text-black": activeModuleIndex === moduleIdx && activeLessonIndex === lessonIdx
                    }
                  )
                }
              ) : /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "flex size-[18px] shrink-0 items-center justify-center rounded-full bg-gray-400/70 text-xs font-semibold text-white",
                    {
                      "bg-black": activeModuleIndex === moduleIdx && activeLessonIndex === lessonIdx
                    }
                  ),
                  children: lessonIdx + 1
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "break-words", children: lesson?.replace(/^Lesson\s*?\d+[\.:]\s*/, "") })
            ]
          },
          key
        );
      }) })
    ] }, moduleIdx);
  }) });
}

function RegenerateOutline(props) {
  const { onRegenerateOutline, isForkable, onForkCourse, courseSlug } = props;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [showUpdatePreferencesModal, setShowUpdatePreferencesModal] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setIsDropdownVisible(false));
  const { data: aiCourse } = useQuery(
    getAiCourseOptions({ aiCourseSlug: courseSlug }),
    queryClient
  );
  const { mutate: updatePreferences, isPending: isUpdating } = useMutation(
    {
      mutationFn: (questionAndAnswers) => {
        return httpPost(`/v1-update-ai-course-preferences/${courseSlug}`, {
          questionAndAnswers
        });
      },
      onSuccess: (_, vars) => {
        queryClient.setQueryData(
          getAiCourseOptions({ aiCourseSlug: courseSlug }).queryKey,
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
        onRegenerateOutline();
      }
    },
    queryClient
  );
  const showUpdatePreferences = aiCourse?.questionAndAnswers && aiCourse.questionAndAnswers.length > 0;
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
        onClose: () => setShowPromptModal(false),
        onSubmit: (prompt) => {
          setShowPromptModal(false);
          if (isForkable) {
            onForkCourse();
            return;
          }
          onRegenerateOutline(prompt);
        }
      }
    ),
    showUpdatePreferencesModal && /* @__PURE__ */ jsx(
      UpdatePreferences,
      {
        onClose: () => setShowUpdatePreferencesModal(false),
        questionAndAnswers: aiCourse?.questionAndAnswers,
        term: aiCourse?.keyword || "",
        format: "course",
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
              if (isForkable) {
                onForkCourse();
                return;
              }
              setShowUpdatePreferencesModal(true);
            },
            className: "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ jsx(
                Settings2Icon,
                {
                  size: 16,
                  className: "text-gray-400",
                  strokeWidth: 2.5
                }
              ),
              "Preferences"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              setIsDropdownVisible(false);
              if (isForkable) {
                onForkCourse();
                return;
              }
              onRegenerateOutline();
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
              setIsDropdownVisible(false);
              if (isForkable) {
                onForkCourse();
                return;
              }
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

function AICourseOutlineHeader(props) {
  const {
    course,
    isLoading,
    onRegenerateOutline,
    viewMode,
    setViewMode,
    isForkable,
    onForkCourse,
    courseSlug
  } = props;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative mb-1 flex items-start justify-between border-b border-gray-100 p-6 max-lg:p-3",
        isLoading && "striped-loader"
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-lg:hidden", children: /* @__PURE__ */ jsx("h2", { className: "mb-1 text-2xl font-bold text-balance max-lg:text-lg max-lg:leading-tight", children: course.title || "Loading course .." }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 flex gap-2 max-lg:relative max-lg:top-0 max-lg:right-0 max-lg:w-full max-lg:flex-row-reverse max-lg:justify-between", children: !isLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            RegenerateOutline,
            {
              onRegenerateOutline,
              isForkable,
              onForkCourse,
              courseSlug
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mr-1 flex rounded-lg border border-gray-200 bg-white p-0.5", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setViewMode("outline"),
                className: cn(
                  "flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors",
                  viewMode === "outline" ? "bg-gray-200 text-gray-900" : "text-gray-500 hover:text-gray-900"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    BookOpenCheck,
                    {
                      className: cn(
                        "size-4",
                        viewMode === "outline" && "text-gray-900"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { children: "Outline" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  setViewMode("roadmap");
                },
                className: cn(
                  "flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors",
                  viewMode === "roadmap" ? "bg-gray-200 text-gray-900" : "text-gray-500 hover:text-gray-900"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    Signpost,
                    {
                      className: cn(
                        "size-4",
                        viewMode === "roadmap" && "text-gray-900"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { children: "Map" })
                ]
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}

function AICourseOutlineView(props) {
  const {
    course,
    isLoading,
    onRegenerateOutline,
    setActiveModuleIndex,
    setActiveLessonIndex,
    setSidebarOpen,
    setViewMode,
    setExpandedModules,
    viewMode,
    isForkable,
    onForkCourse,
    courseSlug
  } = props;
  const aiCourseProgress = course.done || [];
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto rounded-xl border border-gray-200 bg-white shadow-xs lg:max-w-5xl", children: [
    /* @__PURE__ */ jsx(
      AICourseOutlineHeader,
      {
        course,
        isLoading,
        onRegenerateOutline,
        viewMode,
        setViewMode,
        isForkable,
        onForkCourse,
        courseSlug
      }
    ),
    course.title ? /* @__PURE__ */ jsx("div", { className: "flex flex-col p-6 max-lg:mt-0.5 max-lg:p-4", children: course.modules.map((courseModule, moduleIdx) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "mb-5 pb-4 last:border-0 last:pb-0 max-lg:mb-2",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-bold text-gray-800 max-lg:mb-2 max-lg:text-lg max-lg:leading-tight", children: courseModule.title }),
            /* @__PURE__ */ jsx("div", { className: "divide-y divide-gray-100", children: courseModule.lessons.map((lesson, lessonIdx) => {
              const key = `${slugify(String(moduleIdx))}-${slugify(String(lessonIdx))}`;
              const isCompleted = aiCourseProgress.includes(key);
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex cursor-pointer items-center gap-2 px-2 py-2.5 transition-colors hover:bg-gray-100 max-lg:px-0 max-lg:py-1.5",
                  onClick: () => {
                    setActiveModuleIndex(moduleIdx);
                    setActiveLessonIndex(lessonIdx);
                    setExpandedModules((prev) => {
                      const newState = {};
                      course.modules.forEach((_, idx) => {
                        newState[idx] = false;
                      });
                      newState[moduleIdx] = true;
                      return newState;
                    });
                    setSidebarOpen(false);
                    setViewMode("module");
                  },
                  children: [
                    !isCompleted && /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: cn(
                          "flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-800 max-lg:size-5 max-lg:text-xs"
                        ),
                        children: lessonIdx + 1
                      }
                    ),
                    isCompleted && /* @__PURE__ */ jsx(CheckIcon$1, { additionalClasses: "size-6 shrink-0 text-green-500" }),
                    /* @__PURE__ */ jsx("p", { className: "flex-1 truncate text-base text-gray-800 max-lg:text-sm", children: lesson.replace(/^Lesson\s*?\d+[\.:]\s*/, "") }),
                    /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-gray-700 max-lg:hidden", children: [
                      isCompleted ? "View" : "Start",
                      " →"
                    ] })
                  ]
                },
                key
              );
            }) })
          ]
        },
        moduleIdx
      );
    }) }) : /* @__PURE__ */ jsx("div", { className: "flex h-64 items-center justify-center", children: /* @__PURE__ */ jsx(Loader2Icon, { size: 36, className: "animate-spin text-gray-300" }) })
  ] });
}

function AICourseRoadmapView(props) {
  const {
    done = [],
    courseSlug,
    course,
    isLoading,
    onRegenerateOutline,
    setActiveModuleIndex,
    setActiveLessonIndex,
    setViewMode,
    setExpandedModules,
    onUpgradeClick,
    viewMode,
    isForkable,
    onForkCourse
  } = props;
  const containerEl = useRef(null);
  const [roadmapStructure, setRoadmapStructure] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const isPaidUser = userBillingDetails?.status === "active";
  const generateAICourseRoadmap = async (courseSlug2) => {
    if (!isLoggedIn()) {
      setIsGenerating(false);
      return;
    }
    try {
      const response = await fetch(
        `${"https://api.roadmap.sh"}/v1-generate-ai-course-roadmap/${courseSlug2}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
        }
      );
      if (!response.ok) {
        const data = await response.json();
        console.error(
          "Error generating course roadmap:",
          data?.message || "Something went wrong"
        );
        setError(data?.message || "Something went wrong");
        setIsGenerating(false);
        return;
      }
      const reader = response.body?.getReader();
      if (!reader) {
        console.error("Failed to get reader from response");
        setError("Something went wrong");
        setIsGenerating(false);
        return;
      }
      setIsGenerating(true);
      await readAIRoadmapStream(reader, {
        onStream: async (result) => {
          const roadmap = generateAICourseRoadmapStructure(result, true);
          const { nodes, edges } = generateAIRoadmapFromText(roadmap);
          const svg = await renderFlowJSON({ nodes, edges });
          replaceChildren(containerEl.current, svg);
        },
        onStreamEnd: async (result) => {
          const roadmap = generateAICourseRoadmapStructure(result, true);
          const { nodes, edges } = generateAIRoadmapFromText(roadmap);
          const svg = await renderFlowJSON({ nodes, edges });
          replaceChildren(containerEl.current, svg);
          setRoadmapStructure(roadmap);
          setIsGenerating(false);
          done.forEach((id) => {
            renderTopicProgress(id, "done");
          });
          const modules = roadmap.filter((item) => item.type === "topic");
          for (const module of modules) {
            const moduleId = module.id;
            const isAllLessonsDone = module?.children?.every((child) => done.includes(child.id)) ?? false;
            if (isAllLessonsDone) {
              renderTopicProgress(moduleId, "done");
            }
          }
        }
      });
    } catch (error2) {
      console.error("Error generating course roadmap:", error2);
      setError("Something went wrong");
      setIsGenerating(false);
    }
  };
  useEffect(() => {
    if (!courseSlug) {
      return;
    }
    generateAICourseRoadmap(courseSlug);
  }, []);
  const handleNodeClick = useCallback(
    (e) => {
      if (isGenerating) {
        return;
      }
      const target = e.target;
      const targetGroup = target?.closest("g") || {};
      const nodeId = targetGroup?.dataset?.nodeId;
      const nodeType = targetGroup?.dataset?.type;
      if (!nodeId || !nodeType) {
        return null;
      }
      if (nodeType === "topic") {
        const topicIndex2 = roadmapStructure.filter((item) => item.type === "topic").findIndex((item) => item.id === nodeId);
        setExpandedModules((prev) => {
          const newState = {};
          roadmapStructure.forEach((_, idx) => {
            newState[idx] = false;
          });
          newState[topicIndex2] = true;
          return newState;
        });
        setActiveModuleIndex(topicIndex2);
        setActiveLessonIndex(0);
        setViewMode("module");
        return;
      }
      if (nodeType !== "subtopic") {
        return null;
      }
      const [moduleIndex, topicIndex] = nodeId.split("-").map(Number);
      setExpandedModules((prev) => {
        const newState = {};
        roadmapStructure.forEach((_, idx) => {
          newState[idx] = false;
        });
        newState[moduleIndex] = true;
        return newState;
      });
      setActiveModuleIndex(moduleIndex);
      setActiveLessonIndex(topicIndex);
      setViewMode("module");
    },
    [
      roadmapStructure,
      setExpandedModules,
      setActiveModuleIndex,
      setActiveLessonIndex,
      setViewMode
    ]
  );
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden mx-auto min-h-[500px] rounded-xl border border-gray-200 bg-white shadow-xs lg:max-w-5xl", children: [
    /* @__PURE__ */ jsx(
      AICourseOutlineHeader,
      {
        course,
        isLoading,
        onRegenerateOutline: (prompt) => {
          setViewMode("outline");
          onRegenerateOutline(prompt);
        },
        viewMode,
        setViewMode,
        isForkable,
        onForkCourse,
        courseSlug
      }
    ),
    isLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex h-full w-full items-center justify-center", children: /* @__PURE__ */ jsx(Loader2Icon, { className: "h-10 w-10 animate-spin stroke-[3px]" }) }),
    !isLoggedIn() && /* @__PURE__ */ jsx(LoginToView, { className: "-mt-1 -mb-2 rounded-none border-none" }),
    error && !isGenerating && !isLoggedIn() && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex h-full w-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsx(Frown, { className: "size-20 text-red-500" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-[250px] text-center text-base text-balance text-red-500", children: error || "Something went wrong" }),
      !isPaidUser && (error || "")?.includes("limit") && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onUpgradeClick,
          className: "mt-5 rounded-full bg-red-600 px-4 py-1 text-white hover:bg-red-700",
          children: "Upgrade Account"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "resource-svg-wrap",
        ref: containerEl,
        onClick: handleNodeClick,
        className: "px-4 pb-2"
      }
    )
  ] });
}

function ForkCourseAlert(props) {
  const { creatorId, onForkCourse, className = "" } = props;
  const currentUser = getUser();
  if (!currentUser || !creatorId || currentUser?.id === creatorId) {
    return null;
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "mx-auto mb-3.5 flex max-w-5xl items-center justify-between gap-2 rounded-lg bg-yellow-200 p-3 text-black lg:-mt-2.5",
        className
      ),
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-balance", children: "Fork the course to track progress and make changes to the course." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex shrink-0 items-center gap-2 rounded-md hover:bg-yellow-500 bg-yellow-400 px-3 py-1.5 text-sm text-black",
            onClick: onForkCourse,
            children: [
              /* @__PURE__ */ jsx(GitForkIcon, { className: "size-3.5" }),
              "Fork Course"
            ]
          }
        )
      ]
    }
  );
}

function ForkCourseConfirmation(props) {
  const { onClose, courseSlug } = props;
  const toast = useToast();
  const [isPending, setIsPending] = useState(false);
  const { mutate: forkCourse } = useMutation(
    {
      mutationFn: async () => {
        setIsPending(true);
        return httpPost(
          `${"https://api.roadmap.sh"}/v1-fork-ai-course/${courseSlug}`,
          {}
        );
      },
      onSuccess(data) {
        window.location.href = `/ai/${data.slug}`;
      },
      onError(error) {
        toast.error(error?.message || "Failed to fork course");
        setIsPending(false);
      }
    },
    queryClient
  );
  return /* @__PURE__ */ jsx(
    Modal,
    {
      onClose: isPending ? () => {
      } : onClose,
      wrapperClassName: "h-auto items-start max-w-md w-full",
      overlayClassName: "items-start md:items-center",
      children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsx(Copy, { className: "size-12 text-gray-300", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Fork Course" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-center leading-relaxed text-balance text-gray-600", children: "Create a copy of this course to track your progress and make changes to suit your learning style." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 grid w-full grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              disabled: isPending,
              onClick: onClose,
              className: "flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              disabled: isPending,
              className: "flex hover:opacity-80 items-center justify-center gap-2 rounded-lg bg-black px-4 py-2.5 font-medium text-white transition-all hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50",
              onClick: () => forkCourse(),
              children: isPending ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" }),
                /* @__PURE__ */ jsx("span", { children: "Forking..." })
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(GitForkIcon, { className: "size-4" }),
                /* @__PURE__ */ jsx("span", { children: "Fork Course" })
              ] })
            }
          )
        ] })
      ] })
    }
  );
}

function AICourseContent(props) {
  const {
    course,
    courseSlug,
    isLoading,
    error,
    onRegenerateOutline,
    creatorId
  } = props;
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showAILimitsPopup, setShowAILimitsPopup] = useState(false);
  const [isAIChatsOpen, setIsAIChatsOpen] = useState(true);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState("outline");
  const [isForkingCourse, setIsForkingCourse] = useState(false);
  const { isPaidUser } = useIsPaidUser();
  const currentUser = useAuth();
  const aiCourseProgress = course.done || [];
  const [expandedModules, setExpandedModules] = useState({});
  const goToNextModule = () => {
    if (activeModuleIndex >= course.modules.length) {
      return;
    }
    const nextModuleIndex = activeModuleIndex + 1;
    setActiveModuleIndex(nextModuleIndex);
    setActiveLessonIndex(0);
    setExpandedModules((prev) => {
      const newState = {};
      course.modules.forEach((_, idx) => {
        newState[idx] = false;
      });
      newState[nextModuleIndex] = true;
      return newState;
    });
  };
  const goToNextLesson = () => {
    const currentModule2 = course.modules[activeModuleIndex];
    if (currentModule2 && activeLessonIndex < currentModule2.lessons.length - 1) {
      setActiveLessonIndex(activeLessonIndex + 1);
    } else {
      goToNextModule();
    }
  };
  const goToPrevLesson = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonIndex(activeLessonIndex - 1);
      return;
    }
    const prevModule = course.modules[activeModuleIndex - 1];
    if (!prevModule) {
      return;
    }
    const prevModuleIndex = activeModuleIndex - 1;
    setActiveModuleIndex(prevModuleIndex);
    setActiveLessonIndex(prevModule.lessons.length - 1);
    setExpandedModules((prev) => {
      const newState = {};
      course.modules.forEach((_, idx) => {
        newState[idx] = false;
      });
      newState[prevModuleIndex] = true;
      return newState;
    });
  };
  const currentModule = course.modules[activeModuleIndex];
  const currentLesson = currentModule?.lessons[activeLessonIndex];
  const totalModules = course.modules.length;
  const totalLessons = currentModule?.lessons.length || 0;
  const totalCourseLessons = course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );
  const totalDoneLessons = (course?.done || []).length;
  const finishedPercentage = getPercentage(
    totalDoneLessons,
    totalCourseLessons
  );
  const modals = /* @__PURE__ */ jsxs(Fragment, { children: [
    showUpgradeModal && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradeModal(false) }),
    showAILimitsPopup && /* @__PURE__ */ jsx(
      AILimitsPopup,
      {
        onClose: () => setShowAILimitsPopup(false),
        onUpgrade: () => {
          setShowAILimitsPopup(false);
          setShowUpgradeModal(true);
        }
      }
    )
  ] });
  useEffect(() => {
    if (window && window?.innerWidth < 1024 && isAIChatsOpen) {
      setIsAIChatsOpen(false);
    }
  }, []);
  if (error && !isLoading) {
    const isLimitReached = error.includes("limit");
    const isNotFound = error.includes("not exist");
    let icon = /* @__PURE__ */ jsx(ErrorIcon, { additionalClasses: "mb-4 size-16" });
    let title = "Error occurred";
    let message = error;
    if (isLimitReached) {
      icon = /* @__PURE__ */ jsx(CircleAlert, { className: "mb-4 size-16 text-yellow-500" });
      title = "Limit Reached";
      message = "You have reached the daily AI usage limit. Please upgrade your account to continue.";
    } else if (isNotFound) {
      icon = /* @__PURE__ */ jsx(CircleOff, { className: "mb-4 size-16 text-gray-300" });
      title = "Course Not Found";
      message = "The course you are looking for does not exist. Why not create your own course?";
    }
    const showUpgradeButton = isLimitReached && !isPaidUser;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      modals,
      /* @__PURE__ */ jsxs("div", { className: "flex h-screen flex-col items-center justify-center px-4 text-center", children: [
        icon,
        /* @__PURE__ */ jsx("h1", { className: "mb-2 text-2xl font-bold", children: title }),
        /* @__PURE__ */ jsx("p", { className: "max-w-sm text-balance text-gray-500", children: message }),
        showUpgradeButton && /* @__PURE__ */ jsxs("div", { className: "my-5", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowUpgradeModal(true),
              className: "rounded-md bg-yellow-400 px-6 py-2 text-sm font-medium text-black hover:bg-yellow-500",
              children: "Upgrade to remove Limits"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-black", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/ai",
              className: "font-medium underline underline-offset-2",
              children: "Back to AI Tutor"
            }
          ) })
        ] }),
        (isNotFound || !showUpgradeButton) && /* @__PURE__ */ jsx("div", { className: "my-5", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/ai",
            className: "hover:bg-opacity-80 rounded-md bg-black px-6 py-2 text-sm font-medium text-white",
            children: "Create a course with AI"
          }
        ) })
      ] })
    ] });
  }
  const isViewingLesson = viewMode === "module";
  const isForkable = !!currentUser?.id && currentUser.id !== creatorId;
  return /* @__PURE__ */ jsxs("section", { className: "flex h-screen grow flex-col overflow-hidden bg-gray-50", children: [
    modals,
    /* @__PURE__ */ jsx("div", { className: "border-b border-gray-200 bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-2", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/ai",
          onClick: (e) => {
            if (isViewingLesson) {
              e.preventDefault();
              setViewMode("outline");
            }
          },
          className: "flex flex-row items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900",
          "aria-label": "Back to generator",
          children: [
            /* @__PURE__ */ jsx(ChevronLeft, { className: "size-4", strokeWidth: 2.5 }),
            "Back",
            " ",
            /* @__PURE__ */ jsx("span", { className: "hidden lg:inline", children: isViewingLesson ? "to Outline" : "to AI Tutor" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        !isLoading && /* @__PURE__ */ jsx("div", { className: "flex flex-row lg:hidden", children: /* @__PURE__ */ jsx(
          AICourseLimit,
          {
            onUpgrade: () => setShowUpgradeModal(true),
            onShowLimits: () => setShowAILimitsPopup(true)
          }
        ) }),
        viewMode === "module" && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsAIChatsOpen(!isAIChatsOpen),
            className: "flex items-center justify-center text-gray-400 shadow-xs transition-colors hover:bg-gray-50 hover:text-gray-900 lg:hidden",
            children: isAIChatsOpen ? /* @__PURE__ */ jsx(MessageCircleOffIcon, { size: 17, strokeWidth: 3 }) : /* @__PURE__ */ jsx(MessageCircleIcon, { size: 17, strokeWidth: 3 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setSidebarOpen(!sidebarOpen),
            className: "flex items-center justify-center text-gray-400 shadow-xs transition-colors hover:bg-gray-50 hover:text-gray-900 lg:hidden",
            children: sidebarOpen ? /* @__PURE__ */ jsx(X, { size: 17, strokeWidth: 3 }) : /* @__PURE__ */ jsx(Menu, { size: 17, strokeWidth: 3 })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("header", { className: "flex items-center justify-between border-b border-gray-200 bg-white px-6 max-lg:py-4 lg:h-[80px]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl leading-tight! font-bold text-balance text-gray-900 max-lg:mb-0.5 max-lg:text-lg", children: course.title || "Loading Course..." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 flex flex-row items-center gap-2 text-sm text-gray-600 max-lg:text-xs", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            totalModules,
            " modules"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "•" }),
          /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            totalCourseLessons,
            " lessons"
          ] }),
          viewMode === "module" && /* @__PURE__ */ jsxs("span", { className: "flex flex-row items-center gap-1 lg:hidden", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "•" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "underline underline-offset-2",
                onClick: () => {
                  setExpandedModules({});
                  setViewMode("outline");
                },
                children: "View outline"
              }
            )
          ] }),
          finishedPercentage > 0 && !isLoading && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "•" }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium text-green-600", children: [
              finishedPercentage,
              "% complete"
            ] })
          ] })
        ] })
      ] }) }),
      !isLoading && /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx("div", { className: "hidden gap-2 lg:flex", children: /* @__PURE__ */ jsx(
        AICourseLimit,
        {
          onUpgrade: () => setShowUpgradeModal(true),
          onShowLimits: () => setShowAILimitsPopup(true)
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
      /* @__PURE__ */ jsxs(
        "aside",
        {
          className: cn(
            "fixed inset-y-0 left-0 z-20 w-80 transform overflow-y-auto border-r border-gray-200 bg-white transition-transform duration-200 ease-in-out lg:relative lg:mt-0 lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          ),
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: cn(
                  "relative flex min-h-[40px] items-center justify-between border-b border-gray-200 px-3",
                  isLoading && "striped-loader bg-gray-50"
                ),
                children: [
                  !isLoading && /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between text-xs text-black", children: [
                    /* @__PURE__ */ jsxs("span", { children: [
                      /* @__PURE__ */ jsxs("span", { className: "relative z-10 rounded-full bg-yellow-400 px-1.5 py-0.5", children: [
                        finishedPercentage,
                        "%"
                      ] }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Completed" })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          width: `${finishedPercentage}%`
                        },
                        className: cn(
                          "absolute top-0 bottom-0 left-0",
                          "bg-gray-200/50"
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-0 rounded-md bg-white p-0.5", children: [
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          onClick: () => {
                            setExpandedModules({});
                            setViewMode("outline");
                          },
                          className: cn(
                            "flex items-center gap-1 rounded-sm px-2 py-1 text-xs transition-colors",
                            viewMode === "outline" ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:bg-gray-50"
                          ),
                          children: [
                            /* @__PURE__ */ jsx(BookOpenCheck, { size: 14 }),
                            "Outline"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          onClick: () => {
                            setExpandedModules({});
                            setViewMode("roadmap");
                          },
                          className: cn(
                            "flex items-center gap-1 rounded-sm px-2 py-1 text-xs transition-colors",
                            viewMode === "roadmap" ? "bg-gray-200 text-gray-900" : "text-gray-600 hover:bg-gray-50"
                          ),
                          children: [
                            /* @__PURE__ */ jsx(Map, { size: 14 }),
                            "Map"
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setSidebarOpen(false),
                      className: "rounded-md p-1 hover:bg-gray-100 lg:hidden",
                      children: /* @__PURE__ */ jsx(X, { size: 18 })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              AICourseSidebarModuleList,
              {
                course,
                courseSlug,
                activeModuleIndex: viewMode === "module" ? activeModuleIndex : void 0,
                setActiveModuleIndex,
                activeLessonIndex: viewMode === "module" ? activeLessonIndex : void 0,
                setActiveLessonIndex,
                setSidebarOpen,
                viewMode,
                setViewMode,
                expandedModules,
                setExpandedModules,
                isLoading
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "main",
        {
          className: cn(
            "flex-1 overflow-y-scroll p-6 transition-all duration-200 ease-in-out max-lg:p-3",
            sidebarOpen ? "lg:ml-0" : "",
            viewMode === "module" ? "flex flex-col overflow-hidden p-0 max-lg:p-0" : ""
          ),
          children: [
            isForkable && courseSlug && (viewMode === "outline" || viewMode === "roadmap") && /* @__PURE__ */ jsx(
              ForkCourseAlert,
              {
                creatorId,
                onForkCourse: () => {
                  setIsForkingCourse(true);
                }
              }
            ),
            isForkingCourse && /* @__PURE__ */ jsx(
              ForkCourseConfirmation,
              {
                onClose: () => {
                  setIsForkingCourse(false);
                },
                courseSlug
              }
            ),
            viewMode === "module" && /* @__PURE__ */ jsx(
              AICourseLesson,
              {
                courseSlug,
                creatorId,
                progress: aiCourseProgress,
                activeModuleIndex,
                totalModules,
                currentModuleTitle: currentModule?.title || "",
                activeLessonIndex,
                totalLessons,
                currentLessonTitle: currentLesson || "",
                onGoToPrevLesson: goToPrevLesson,
                onGoToNextLesson: goToNextLesson,
                onUpgrade: () => setShowUpgradeModal(true),
                isAIChatsOpen,
                setIsAIChatsOpen,
                isForkable,
                onForkCourse: () => {
                  setIsForkingCourse(true);
                }
              },
              `${courseSlug}-${activeModuleIndex}-${activeLessonIndex}`
            ),
            viewMode === "outline" && /* @__PURE__ */ jsx(
              AICourseOutlineView,
              {
                course,
                isLoading,
                onRegenerateOutline,
                setActiveModuleIndex,
                setActiveLessonIndex,
                setSidebarOpen,
                setViewMode,
                setExpandedModules,
                viewMode,
                isForkable,
                onForkCourse: () => {
                  setIsForkingCourse(true);
                },
                courseSlug
              }
            ),
            viewMode === "roadmap" && !isLoading && /* @__PURE__ */ jsx(
              AICourseRoadmapView,
              {
                done: course.done,
                courseSlug,
                course,
                isLoading,
                onRegenerateOutline,
                setActiveModuleIndex,
                setActiveLessonIndex,
                setViewMode,
                setExpandedModules,
                onUpgradeClick: () => setShowUpgradeModal(true),
                viewMode,
                isForkable,
                onForkCourse: () => {
                  setIsForkingCourse(true);
                }
              }
            ),
            /* @__PURE__ */ jsx(AICourseFooter, { className: viewMode === "module" ? "hidden" : "" })
          ]
        },
        `${courseSlug}-${viewMode}`
      )
    ] }),
    sidebarOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-10 bg-gray-900/50 lg:hidden",
        onClick: () => setSidebarOpen(false)
      }
    )
  ] });
}

async function generateCourse(options) {
  const {
    term,
    slug,
    onCourseIdChange,
    onCourseSlugChange,
    onCourseChange,
    onLoadingChange,
    onError,
    onCreatorIdChange,
    isForce = false,
    prompt,
    src = "search",
    questionAndAnswers
  } = options;
  onLoadingChange?.(true);
  onCourseChange?.(
    {
      title: "",
      modules: [],
      done: []
    },
    ""
  );
  onError?.("");
  try {
    let response = null;
    if (slug && isForce) {
      response = await fetch(
        `${"https://api.roadmap.sh"}/v1-regenerate-ai-course/${slug}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({
            isForce,
            customPrompt: prompt
          })
        }
      );
    } else {
      response = await fetch(
        `${"https://api.roadmap.sh"}/v1-generate-ai-course`,
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
    const reader = response.body?.getReader();
    if (!reader) {
      console.error("Failed to get reader from response");
      onError?.("Something went wrong");
      onLoadingChange?.(false);
      return;
    }
    const COURSE_ID_REGEX = new RegExp("@COURSEID:(\\w+)@");
    const COURSE_SLUG_REGEX = new RegExp(/@COURSESLUG:([\w-]+)@/);
    const CREATOR_ID_REGEX = new RegExp("@CREATORID:(\\w+)@");
    await readStream(reader, {
      onStream: async (result) => {
        if (result.includes("@COURSEID") || result.includes("@COURSESLUG")) {
          const courseIdMatch = result.match(COURSE_ID_REGEX);
          const courseSlugMatch = result.match(COURSE_SLUG_REGEX);
          const creatorIdMatch = result.match(CREATOR_ID_REGEX);
          const extractedCourseId = courseIdMatch?.[1] || "";
          const extractedCourseSlug = courseSlugMatch?.[1] || "";
          const extractedCreatorId = creatorIdMatch?.[1] || "";
          if (extractedCourseSlug) {
            window.history.replaceState(
              {
                courseId: extractedCourseId,
                courseSlug: extractedCourseSlug,
                term
              },
              "",
              `${origin}/ai/${extractedCourseSlug}`
            );
          }
          result = result.replace(COURSE_ID_REGEX, "").replace(COURSE_SLUG_REGEX, "").replace(CREATOR_ID_REGEX, "");
          onCourseIdChange?.(extractedCourseId);
          onCourseSlugChange?.(extractedCourseSlug);
          onCreatorIdChange?.(extractedCreatorId);
        }
        try {
          const aiCourse = generateAiCourseStructure(result);
          onCourseChange?.(aiCourse, result);
        } catch (e) {
          console.error("Error parsing streamed course content:", e);
        }
      },
      onStreamEnd: async (result) => {
        result = result.replace(COURSE_ID_REGEX, "").replace(COURSE_SLUG_REGEX, "").replace(CREATOR_ID_REGEX, "");
        onLoadingChange?.(false);
        queryClient.invalidateQueries(aiLimitOptions());
      }
    });
  } catch (error) {
    onError?.(error?.message || "Something went wrong");
    console.error("Error in course generation:", error);
    onLoadingChange?.(false);
  }
}

export { AICourseContent as A, generateCourse as g };
