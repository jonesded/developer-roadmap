import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRef, useState, useCallback, useEffect } from 'react';
import { a as httpPost, q as queryClient } from './query-client_B4F1D3EC.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_CxrAT9TD.mjs';
import { CheckIcon, XIcon, InfoIcon, SkipForwardIcon, AlertTriangleIcon, Loader2Icon, ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon, Minus, CircleAlertIcon, Check, X, BarChart3, RotateCcw, Zap, BookOpenIcon, FileTextIcon, AlertCircleIcon } from 'lucide-react';
import { a as aiLimitOptions } from './ai-course_IUwlyb1o.mjs';
import { u as useIsPaidUser, b as billingDetailsOptions } from './billing_BlRWCv4l.mjs';
import { A as AITutorLayout } from './AITutorLayout_DTqb4Lq4.mjs';
import { c as cn, r as removeAuthToken, b as getUrlParams, i as isLoggedIn } from './BaseLayout_C3JOBLhD.mjs';
import { L as LoadingChip } from './LoadingChip_CDi1XEQY.mjs';
import { g as getQuestionAnswerChatMessages } from './ai-questions_vm3AhbaO.mjs';
import { g as generateAIQuiz, a as aiQuizOptions } from './ai-quiz_B9ZjJk6C.mjs';
import { a as markdownToHtml } from './markdown_rbU7j7cH.mjs';
import 'js-cookie';
import { r as readChatStream } from './chat_CErZ2BPm.mjs';
import { flushSync } from 'react-dom';
import { g as getPercentage } from './number_D9-I_I5P.mjs';

function AIQuizLayout(props) {
  const { children } = props;
  return /* @__PURE__ */ jsx(
    AITutorLayout,
    {
      activeTab: "quiz",
      wrapperClassName: "flex-row p-0 lg:p-0 relative overflow-hidden bg-white",
      containerClassName: "h-[calc(100vh-49px)] overflow-hidden relative",
      children
    }
  );
}

const markdownClassName = "prose prose-base prose-p:mb-3 prose-p:text-base prose-p:font-normal prose-pre:my-5 prose-p:prose-code:whitespace-nowrap prose-p:prose-code:text-sm prose-p:prose-code:px-2 prose-p:prose-code:py-1 prose-p:prose-code:rounded-md prose-p:prose-code:border prose-p:prose-code:border-gray-300 prose-p:prose-code:bg-gray-50 text-left text-gray-800";
function AIMCQQuestion(props) {
  const {
    question,
    questionState,
    setSelectedOptions,
    onSubmit,
    onSkip,
    onNext,
    isLastQuestion,
    onComplete
  } = props;
  const { title: questionText, options, answerExplanation } = question;
  const { isSubmitted, selectedOptions = [] } = questionState;
  const canSubmitMultipleAnswers = options.filter((option) => option.isCorrect).length > 1;
  const handleSelectOption = (index) => {
    if (isSubmitted) {
      return;
    }
    if (!canSubmitMultipleAnswers) {
      const newSelectedOptions2 = [index];
      setSelectedOptions(newSelectedOptions2);
      return;
    }
    const newSelectedOptions = selectedOptions.includes(index) ? selectedOptions.filter((id) => id !== index) : [...selectedOptions, index];
    setSelectedOptions(newSelectedOptions);
  };
  const handleSubmit = () => {
    if (isSubmitted) {
      if (isLastQuestion) {
        onComplete();
      } else {
        onNext();
      }
      return;
    }
    const isCorrect = selectedOptions.every((index) => options[index].isCorrect) && selectedOptions.length === options.filter((option) => option.isCorrect).length;
    onSubmit(isCorrect ? "correct" : "incorrect");
  };
  const hasAnySelected = selectedOptions.length > 0;
  const canSubmit = hasAnySelected || questionState.status === "skipped";
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsx(QuestionTitle, { title: questionText }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: options.map((option, index) => {
      const isSelected = selectedOptions.includes(index);
      const isCorrectOption = option.isCorrect;
      const isSelectedAndCorrect = isSubmitted && isSelected && isCorrectOption;
      const isSelectedAndIncorrect = isSubmitted && isSelected && !isCorrectOption;
      const isNotSelectedAndCorrect = isSubmitted && !isSelected && isCorrectOption;
      const html = markdownToHtml(option.title, false);
      const isOptionDisabled = isSubmitted && !isSelected && !isCorrectOption;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          className: cn(
            "group flex w-full items-start gap-4 rounded-lg py-2 text-left",
            isSelected && !isSubmitted && "",
            isSubmitted && isSelectedAndCorrect && "border-green-500 text-green-700",
            isSubmitted && isSelectedAndIncorrect && "border-red-500 text-red-700",
            isSubmitted && isNotSelectedAndCorrect && "border-green-500 text-green-700",
            isOptionDisabled && "cursor-not-allowed opacity-50"
          ),
          onClick: () => handleSelectOption(index),
          disabled: isOptionDisabled,
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: cn(
                  "flex size-6.5 shrink-0 items-center justify-center rounded-lg border-2 border-gray-300",
                  isSelected && !isSubmitted && "border-black bg-black text-white",
                  isSelectedAndCorrect && "border-green-500 bg-green-500 text-white",
                  isSelectedAndIncorrect && "border-red-500 bg-red-500 text-white",
                  isNotSelectedAndCorrect && "border-green-500 bg-green-500 text-white",
                  !isSelected && !isSubmitted && "group-hover:border-gray-300 group-hover:bg-gray-200"
                ),
                children: [
                  isSelected && !isSubmitted && /* @__PURE__ */ jsx("div", { className: "size-5 bg-black" }),
                  isSelectedAndCorrect && /* @__PURE__ */ jsx(CheckIcon, { className: "size-5" }),
                  isSelectedAndIncorrect && /* @__PURE__ */ jsx(XIcon, { className: "size-5" }),
                  isNotSelectedAndCorrect && /* @__PURE__ */ jsx(CheckIcon, { className: "size-5" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(markdownClassName, "flex-1"),
                dangerouslySetInnerHTML: { __html: html }
              }
            )
          ]
        },
        option.id
      );
    }) }),
    isSubmitted && answerExplanation && /* @__PURE__ */ jsx(
      QuestionExplanation,
      {
        explanation: answerExplanation,
        status: questionState.status
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex justify-between", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onSkip,
          disabled: isSubmitted,
          className: "rounded-xl bg-gray-100 px-8 py-3 text-base font-medium text-gray-800 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50",
          children: "Skip Question"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: cn(
            "rounded-xl bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          ),
          onClick: handleSubmit,
          disabled: !canSubmit,
          children: isSubmitted ? isLastQuestion ? "Finish Quiz" : "Next Question" : "Check Answer"
        }
      )
    ] })
  ] });
}
function QuestionTitle(props) {
  const { title } = props;
  const titleHtml = markdownToHtml(title, false);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "prose prose-xl prose-headings:text-3xl prose-headings:font-bold prose-headings:text-black prose-headings:mb-6 prose-p:text-3xl prose-p:font-semibold prose-p:leading-normal prose-p:text-black prose-p:mb-0 prose-pre:my-5 prose-p:prose-code:whitespace-nowrap prose-p:prose-code:relative prose-p:prose-code:top-[-5px] prose-p:prose-code:text-xl prose-p:prose-code:px-3 prose-p:prose-code:py-1 prose-p:prose-code:rounded-md prose-p:prose-code:border prose-p:prose-code:border-gray-300 prose-p:prose-code:bg-gray-100 prose-p:prose-code:font-medium mb-2 text-left",
      dangerouslySetInnerHTML: { __html: titleHtml }
    }
  );
}
function QuestionExplanation(props) {
  const { explanation, title, status } = props;
  const explanationHtml = markdownToHtml(explanation, false);
  const getStatusConfig = () => {
    switch (status) {
      case "correct":
        return {
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          iconBgColor: "bg-green-500",
          textColor: "text-green-800",
          icon: CheckIcon,
          defaultTitle: "Correct Answer"
        };
      case "incorrect":
        return {
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          iconBgColor: "bg-red-500",
          textColor: "text-red-800",
          icon: XIcon,
          defaultTitle: "Incorrect Answer"
        };
      case "can_be_improved":
        return {
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
          iconBgColor: "bg-yellow-500",
          textColor: "text-yellow-800",
          icon: AlertTriangleIcon,
          defaultTitle: "Can Be Improved"
        };
      case "skipped":
        return {
          bgColor: "bg-gray-50",
          borderColor: "border-gray-200",
          iconBgColor: "bg-gray-500",
          textColor: "text-gray-800",
          icon: SkipForwardIcon,
          defaultTitle: "Question Skipped"
        };
      default:
        return {
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          iconBgColor: "bg-blue-500",
          textColor: "text-blue-800",
          icon: InfoIcon,
          defaultTitle: "Explanation"
        };
    }
  };
  const config = getStatusConfig();
  const IconComponent = config.icon;
  const displayTitle = title || config.defaultTitle;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "mt-6 rounded-xl border-2 p-6 transition-all duration-200",
        config.bgColor,
        config.borderColor
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "flex size-8 items-center justify-center rounded-full text-white",
                config.iconBgColor
              ),
              children: /* @__PURE__ */ jsx(IconComponent, { className: "size-4", strokeWidth: 2.5 })
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: cn("text-lg font-semibold", config.textColor), children: displayTitle })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(markdownClassName, "leading-relaxed text-gray-700"),
            dangerouslySetInnerHTML: { __html: explanationHtml }
          }
        )
      ]
    }
  );
}

function useVerifyAnswer(options) {
  const { quizSlug, question, userAnswer, onError, onFinish } = options;
  const abortControllerRef = useRef(null);
  const contentRef = useRef(null);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const verifyAnswer = useCallback(async () => {
    try {
      setStatus("loading");
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      const response = await fetch(
        `${"https://api.roadmap.sh"}/v1-verify-quiz-answer/${quizSlug}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ question, userAnswer }),
          signal: abortControllerRef.current?.signal,
          credentials: "include"
        }
      );
      if (!response.ok) {
        const data2 = await response.json();
        setStatus("error");
        if (data2.status === 401) {
          removeAuthToken();
          window.location.reload();
        }
        throw new Error(data2?.message || "Something went wrong");
      }
      const stream = response.body;
      if (!stream) {
        setStatus("error");
        throw new Error("Something went wrong");
      }
      await readChatStream(stream, {
        onMessage: async (content) => {
          flushSync(() => {
            setStatus("streaming");
            contentRef.current = parseVerifyAIQuizAnswerResponse(content);
            setData(contentRef.current);
          });
        },
        onMessageEnd: async () => {
          flushSync(() => {
            setStatus("ready");
          });
        }
      });
      setStatus("idle");
      abortControllerRef.current = null;
      if (!contentRef.current) {
        setStatus("error");
        throw new Error("Something went wrong");
      }
      onFinish?.(contentRef.current);
    } catch (error) {
      if (abortControllerRef.current?.signal.aborted) {
        return;
      }
      onError?.(error);
      setStatus("error");
    }
  }, [quizSlug, question, userAnswer, onError]);
  const stop = useCallback(() => {
    if (!abortControllerRef.current) {
      return;
    }
    abortControllerRef.current.abort();
    abortControllerRef.current = null;
  }, []);
  return {
    data,
    status,
    stop,
    verifyAnswer
  };
}
function parseVerifyAIQuizAnswerResponse(response) {
  const statusRegex = /<status>(.*?)<\/status>/;
  const status = response.match(statusRegex)?.[1]?.trim();
  const responseWithoutStatus = response.replace(statusRegex, "").trim();
  return {
    status,
    feedback: responseWithoutStatus
  };
}

function AIOpenEndedQuestion(props) {
  const {
    quizSlug,
    question,
    questionState,
    onSubmit,
    onNext,
    setUserAnswer,
    setCorrectAnswer,
    isLastQuestion,
    onComplete,
    onSkip
  } = props;
  const { title: questionText } = question;
  const {
    isSubmitted,
    userAnswer = "",
    correctAnswer = "",
    status
  } = questionState;
  const {
    verifyAnswer,
    data: verificationData,
    status: verifyStatus
  } = useVerifyAnswer({
    quizSlug,
    question: questionText,
    userAnswer,
    onFinish: (data) => {
      if (!data || !data.status) {
        console.error("No data or status", data);
        onSubmit("incorrect");
        return;
      }
      setCorrectAnswer(data.feedback || "");
      onSubmit(data?.status || "incorrect");
    }
  });
  const handleSubmit = async () => {
    if (isSubmittedAndNotSkipped) {
      if (isLastQuestion) {
        onComplete();
      } else {
        onNext();
      }
      return;
    }
    await verifyAnswer();
  };
  const canSubmit = userAnswer.trim().length > 0;
  const isVerifying = verifyStatus === "loading" || verifyStatus === "streaming";
  const feedback = verificationData?.feedback || correctAnswer;
  const feedbackStatus = verificationData?.status || status;
  const isSubmittedAndNotSkipped = isSubmitted && status !== "skipped";
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(QuestionTitle, { title: questionText }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "min-h-[200px] w-full resize-none rounded-xl border border-gray-200 p-4 text-lg",
          "focus:border-gray-400 focus:ring-0 focus:outline-none",
          isSubmittedAndNotSkipped && "bg-gray-50",
          isSubmittedAndNotSkipped && feedbackStatus === "correct" && "border-green-500 bg-green-50",
          isSubmittedAndNotSkipped && feedbackStatus === "incorrect" && "border-red-500 bg-red-50",
          isSubmittedAndNotSkipped && feedbackStatus === "can_be_improved" && "border-yellow-500 bg-yellow-50"
        ),
        placeholder: "Type your answer here...",
        value: userAnswer,
        onChange: (e) => setUserAnswer(e.target.value),
        disabled: isSubmittedAndNotSkipped || isVerifying
      }
    ) }),
    feedback && /* @__PURE__ */ jsx(QuestionExplanation, { explanation: feedback, status: feedbackStatus }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onSkip,
          disabled: isSubmitted,
          className: "rounded-xl bg-gray-100 px-8 py-3 text-base font-medium text-gray-800 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50",
          children: "Skip Question"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: cn(
            "rounded-xl bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          ),
          onClick: handleSubmit,
          disabled: !canSubmit || isVerifying,
          children: isVerifying ? /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin stroke-[2.5]" }) : isSubmittedAndNotSkipped ? isLastQuestion ? "Finish Quiz" : "Next Question" : "Verify Answer"
        }
      )
    ] })
  ] });
}

function QuizTopNavigation(props) {
  const {
    activeQuestionIndex,
    totalQuestions,
    progressPercentage,
    onPrevious,
    onNext,
    onSkip,
    isStreaming = false
  } = props;
  return /* @__PURE__ */ jsxs("div", { className: "mb-8 space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center lg:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          NavigationButton,
          {
            disabled: activeQuestionIndex === 0,
            onClick: onPrevious,
            icon: ChevronLeftIcon
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-center text-sm font-medium text-gray-600 max-lg:w-full", children: [
          "Question",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-black", children: activeQuestionIndex + 1 }),
          " of",
          " ",
          totalQuestions
        ] }),
        /* @__PURE__ */ jsx(
          NavigationButton,
          {
            disabled: false,
            onClick: onSkip,
            icon: ChevronRightIcon
          }
        )
      ] }),
      !isStreaming && /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "hidden flex-shrink-0 text-sm font-medium text-gray-500 min-lg:flex"
          ),
          children: [
            Math.round(progressPercentage),
            "% complete"
          ]
        }
      ),
      isStreaming && /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-500", children: /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin stroke-[2.5]" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative h-2 overflow-hidden rounded-full bg-gray-100 shadow-inner", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-y-0 left-0 rounded-full bg-black transition-all duration-300 ease-out",
          style: {
            width: `${progressPercentage}%`
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-300 ease-out",
          style: {
            width: `${progressPercentage}%`
          }
        }
      )
    ] })
  ] });
}
function NavigationButton(props) {
  const { disabled, onClick, icon: Icon } = props;
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "flex size-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 transition-all duration-150 hover:border-gray-300 hover:text-gray-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-400 disabled:hover:shadow-sm",
      disabled,
      onClick,
      children: /* @__PURE__ */ jsx(Icon, { className: "size-4" })
    }
  );
}

function AIQuizResultStrip(props) {
  const { activeQuestionIndex, questionStates, onReview, onComplete } = props;
  const states = Object.values(questionStates);
  return /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 bg-white p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-2 md:flex-row", children: [
    /* @__PURE__ */ jsx("div", { className: "flex w-full flex-wrap gap-1", children: states.map((state, quizIndex) => /* @__PURE__ */ jsx(
      QuizStateButton,
      {
        state,
        quizIndex,
        isActive: quizIndex === activeQuestionIndex,
        onReview,
        variant: "small"
      },
      quizIndex
    )) }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-black px-4 py-2 text-white hover:bg-gray-900 disabled:opacity-70 md:w-auto md:justify-start",
        onClick: onComplete,
        children: [
          "Show Results ",
          /* @__PURE__ */ jsx(ArrowRightIcon, { className: "h-4 w-4" })
        ]
      }
    )
  ] }) });
}
function QuizStateButton(props) {
  const {
    state,
    quizIndex,
    isActive,
    onReview,
    className,
    variant = "default"
  } = props;
  const { status } = state;
  const isCorrect = status === "correct";
  const isIncorrect = status === "incorrect";
  const isSkipped = status === "skipped";
  const isCanBeImproved = status === "can_be_improved";
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => onReview?.(quizIndex),
      className: cn(
        "flex aspect-square flex-col items-center justify-center rounded-xl border p-1 hover:opacity-80",
        isCorrect && "border-green-700 bg-green-700 text-white",
        isIncorrect && "border-red-700 bg-red-700 text-white",
        isSkipped && "border-gray-400 bg-gray-400 text-white",
        isCanBeImproved && "border-yellow-700 bg-yellow-700 text-white",
        !isActive && "opacity-50",
        variant === "small" && "rounded-lg",
        className
      ),
      children: [
        isCorrect && /* @__PURE__ */ jsx(
          CheckIcon,
          {
            className: cn("size-6.5", variant === "small" && "size-5")
          }
        ),
        isIncorrect && /* @__PURE__ */ jsx(XIcon, { className: cn("size-6.5", variant === "small" && "size-5") }),
        isSkipped && /* @__PURE__ */ jsx(
          Minus,
          {
            className: cn(
              "size-6.5 fill-current",
              variant === "small" && "size-5"
            )
          }
        ),
        isCanBeImproved && /* @__PURE__ */ jsx(
          CircleAlertIcon,
          {
            className: cn("size-6.5", variant === "small" && "size-5")
          }
        )
      ]
    },
    quizIndex
  );
}

function CircularProgress(props) {
  const { accuracy, color, size = "md" } = props;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - accuracy / 100 * circumference;
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-20 w-20 md:h-24 md:w-24",
    lg: "h-28 w-28 md:h-32 md:w-32"
  };
  const textSizeClasses = {
    sm: "text-base font-bold",
    md: "text-lg md:text-xl font-bold",
    lg: "text-xl md:text-2xl font-bold"
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex max-md:hidden flex-shrink-0 self-center", children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        className: cn(sizeClasses[size], "-rotate-90 transform"),
        viewBox: "0 0 100 100",
        children: [
          /* @__PURE__ */ jsx(
            "circle",
            {
              cx: "50",
              cy: "50",
              r: "45",
              stroke: "currentColor",
              strokeWidth: "8",
              fill: "transparent",
              className: "text-gray-200"
            }
          ),
          /* @__PURE__ */ jsx(
            "circle",
            {
              cx: "50",
              cy: "50",
              r: "45",
              stroke: "currentColor",
              strokeWidth: "8",
              fill: "transparent",
              strokeDasharray: circumference,
              strokeDashoffset,
              className: cn(
                "transition-all duration-1000 ease-out",
                color === "emerald" && "text-emerald-500",
                color === "green" && "text-green-500",
                color === "blue" && "text-blue-500",
                color === "orange" && "text-orange-500",
                color === "red" && "text-red-500"
              ),
              strokeLinecap: "round"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("span", { className: cn(textSizeClasses[size], "text-gray-900"), children: [
      accuracy,
      "%"
    ] }) })
  ] });
}

function AIQuizResults(props) {
  const {
    questionStates,
    totalQuestions,
    onRetry,
    onNewQuiz,
    onReview,
    isFeedbackLoading,
    feedback
  } = props;
  const states = Object.values(questionStates);
  const correctCount = states.filter(
    (state) => state.status === "correct"
  ).length;
  const incorrectCount = states.filter(
    (state) => state.status === "incorrect"
  ).length;
  const skippedCount = states.filter(
    (state) => state.status === "skipped"
  ).length;
  const accuracy = getPercentage(correctCount, totalQuestions);
  const getPerformanceLevel = () => {
    if (accuracy >= 90) return { level: "Excellent", color: "emerald" };
    if (accuracy >= 75) return { level: "Great", color: "green" };
    if (accuracy >= 60) return { level: "Good", color: "blue" };
    if (accuracy >= 40) return { level: "Fair", color: "orange" };
    return { level: "Needs Work", color: "red" };
  };
  const performance = getPerformanceLevel();
  const canReview = onReview && states.some((state) => state.isSubmitted);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-8 max-w-4xl space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 md:text-3xl", children: "Quiz Complete!" }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: cn(
              "text-lg font-semibold",
              performance.color === "emerald" && "text-emerald-600",
              performance.color === "green" && "text-green-600",
              performance.color === "blue" && "text-blue-600",
              performance.color === "orange" && "text-orange-600",
              performance.color === "red" && "text-red-600"
            ),
            children: performance.level
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 md:text-base", children: [
          "You scored ",
          correctCount,
          " out of ",
          totalQuestions,
          " questions correctly"
        ] })
      ] }),
      /* @__PURE__ */ jsx(CircularProgress, { accuracy, color: performance.color })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-gray-200 bg-white p-4 md:p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-semibold text-gray-900 md:text-base", children: "Results Breakdown" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx(
          StatRow,
          {
            icon: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }),
            label: "Correct",
            value: correctCount,
            total: totalQuestions,
            color: "green"
          }
        ),
        /* @__PURE__ */ jsx(
          StatRow,
          {
            icon: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
            label: "Incorrect",
            value: incorrectCount,
            total: totalQuestions,
            color: "red"
          }
        ),
        /* @__PURE__ */ jsx(
          StatRow,
          {
            icon: /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4" }),
            label: "Skipped",
            value: skippedCount,
            total: totalQuestions,
            color: "gray"
          }
        )
      ] })
    ] }),
    canReview && totalQuestions <= 20 && /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-gray-200 bg-white p-4 md:p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col gap-2 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-gray-600" }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-900 md:text-base", children: "Question Breakdown" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500 sm:ml-auto", children: "Click to review" })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "grid gap-2",
            totalQuestions <= 8 ? "grid-cols-4 sm:grid-cols-8" : totalQuestions <= 12 ? "grid-cols-4 sm:grid-cols-6" : "grid-cols-5"
          ),
          children: states.map((state, quizIndex) => /* @__PURE__ */ jsx(
            QuizStateButton,
            {
              state,
              quizIndex,
              isActive: true,
              onReview,
              className: "p-2 transition-transform duration-200"
            },
            quizIndex
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
      /* @__PURE__ */ jsx(
        ActionButton,
        {
          variant: "secondary",
          icon: /* @__PURE__ */ jsx(RotateCcw, { className: "h-4 w-4" }),
          onClick: onRetry,
          children: "Try Again"
        }
      ),
      /* @__PURE__ */ jsx(
        ActionButton,
        {
          variant: "secondary",
          icon: /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" }),
          onClick: onNewQuiz,
          children: "New Quiz"
        }
      )
    ] }),
    feedback && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-gray-200 bg-gray-50", children: [
      feedback.summary && /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-200 p-4 md:p-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-2 flex items-center text-sm font-semibold text-gray-900 md:text-base", children: "Summary of your quiz" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            dangerouslySetInnerHTML: {
              __html: markdownToHtml(feedback.summary, false)
            },
            className: cn(
              markdownClassName,
              "prose-sm prose-p:text-sm prose-p:leading-relaxed prose-p:text-balance"
            )
          }
        )
      ] }),
      feedback.guideTopics?.length && feedback.courseTopics?.length && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "p-4 md:p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "mb-1 flex items-center text-sm font-semibold text-gray-900 md:text-base", children: "Suggested Resources" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-balance text-gray-600", children: "You can follow these courses or guides to improve your understanding of the topic you missed in the quiz" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2 sm:grid-cols-2", children: [
          feedback.courseTopics?.map((topic, index) => /* @__PURE__ */ jsx(
            ResourceCard,
            {
              icon: /* @__PURE__ */ jsx(BookOpenIcon, { className: "h-5 w-5" }),
              title: topic,
              type: "course",
              href: `/ai/course?term=${encodeURIComponent(topic)}&format=course`
            },
            `course-${index}`
          )),
          feedback.guideTopics?.map((topic, index) => /* @__PURE__ */ jsx(
            ResourceCard,
            {
              icon: /* @__PURE__ */ jsx(FileTextIcon, { className: "h-5 w-5" }),
              title: topic,
              type: "guide",
              href: `/ai/guide?term=${encodeURIComponent(topic)}&format=guide`
            },
            `guide-${index}`
          ))
        ] })
      ] }) })
    ] }) }),
    isFeedbackLoading && /* @__PURE__ */ jsx("div", { className: "rounded-xl border border-gray-200 bg-white p-4 md:p-6", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-gray-600", children: [
      /* @__PURE__ */ jsx("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm md:text-base", children: "Generating personalized feedback..." })
    ] }) }) })
  ] });
}
function StatRow(props) {
  const { icon, label, value, total, color } = props;
  const percentage = total > 0 ? Math.round(value / total * 100) : 0;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "rounded-md p-1.5",
            color === "green" && "bg-green-100 text-green-600",
            color === "red" && "bg-red-100 text-red-600",
            color === "gray" && "bg-gray-100 text-gray-600"
          ),
          children: icon
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: label })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm text-gray-500", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: value }),
        /* @__PURE__ */ jsxs("span", { children: [
          "(",
          percentage,
          "%)"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-2 w-16 rounded-full bg-gray-200", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "h-2 rounded-full transition-all duration-500",
            color === "green" && "bg-green-500",
            color === "red" && "bg-red-500",
            color === "gray" && "bg-gray-400"
          ),
          style: { width: `${percentage}%` }
        }
      ) })
    ] })
  ] });
}
function ActionButton(props) {
  const { variant, icon, onClick, children } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick,
      className: cn(
        "flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium transition-all duration-200 md:px-6",
        variant === "primary" && "bg-black text-white hover:bg-gray-800",
        variant === "secondary" && "border-2 border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
      ),
      children: [
        icon,
        children
      ]
    }
  );
}
function ResourceCard(props) {
  const { icon, title, type, href } = props;
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: "block rounded-lg border border-gray-200 bg-white p-2.5 text-left hover:border-gray-400 hover:bg-gray-100",
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "text-gray-500", children: icon }),
        /* @__PURE__ */ jsx("div", { className: "truncate text-sm text-gray-900", children: title })
      ] })
    }
  );
}

const DEFAULT_QUESTION_STATE = {
  isSubmitted: false,
  selectedOptions: [],
  userAnswer: "",
  correctAnswer: "",
  status: "pending"
};
function AIQuizContent(props) {
  const { quizSlug, questions, isLoading, isStreaming = false } = props;
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const activeQuestion = questions[activeQuestionIndex];
  const [questionStates, setQuestionStates] = useState({});
  const [quizStatus, setQuizStatus] = useState("answering");
  const activeQuestionState = questionStates[activeQuestionIndex] ?? DEFAULT_QUESTION_STATE;
  const isLastQuestion = activeQuestionIndex === questions.length - 1;
  const {
    mutate: userQuizResultFeedback,
    isPending: isUserQuizResultFeedbackPending,
    data: userQuizResultFeedbackData,
    status: userQuizResultFeedbackStatus,
    reset: resetUserQuizResultFeedback
  } = useMutation(
    {
      mutationKey: ["user-quiz-result-feedback", quizSlug],
      mutationFn: (body) => {
        return httpPost(
          `/v1-ai-quiz-result-feedback/${quizSlug}`,
          body
        );
      }
    },
    queryClient
  );
  const handleSubmit = (status) => {
    const oldState = questionStates[activeQuestionIndex] ?? DEFAULT_QUESTION_STATE;
    const newQuestionStates = {
      ...questionStates,
      [activeQuestionIndex]: {
        ...oldState,
        isSubmitted: true,
        status
      }
    };
    setQuestionStates(newQuestionStates);
    return newQuestionStates;
  };
  const handleSetUserAnswer = (userAnswer) => {
    setQuestionStates((prev) => {
      const oldState = prev[activeQuestionIndex] ?? DEFAULT_QUESTION_STATE;
      const newSelectedOptions = {
        ...prev,
        [activeQuestionIndex]: {
          ...oldState,
          userAnswer
        }
      };
      return newSelectedOptions;
    });
  };
  const handleSetCorrectAnswer = (correctAnswer) => {
    flushSync(() => {
      setQuestionStates((prev) => {
        const oldState = prev[activeQuestionIndex] ?? DEFAULT_QUESTION_STATE;
        const newSelectedOptions = {
          ...prev,
          [activeQuestionIndex]: {
            ...oldState,
            correctAnswer
          }
        };
        return newSelectedOptions;
      });
    });
  };
  const handleSelectOptions = (options) => {
    setQuestionStates((prev) => {
      const oldState = prev[activeQuestionIndex] ?? DEFAULT_QUESTION_STATE;
      const newSelectedOptions = {
        ...prev,
        [activeQuestionIndex]: {
          ...oldState,
          selectedOptions: options
        }
      };
      return newSelectedOptions;
    });
  };
  const handleRetry = () => {
    setActiveQuestionIndex(0);
    setQuestionStates({});
    setQuizStatus("answering");
    resetUserQuizResultFeedback();
  };
  const hasNextQuestion = activeQuestionIndex < questions.length - 1;
  const hasPreviousQuestion = activeQuestionIndex > 0;
  const totalQuestions = questions?.length ?? 0;
  const isAllQuestionsSubmitted = Object.values(questionStates).filter((state) => state.status !== "pending").length === totalQuestions;
  const progressPercentage = isLoading ? 0 : getPercentage(activeQuestionIndex + 1, totalQuestions);
  const shouldShowQuestions = quizStatus === "answering" || quizStatus === "reviewing";
  const handleNextQuestion = () => {
    if (!hasNextQuestion) {
      setQuizStatus(isAllQuestionsSubmitted ? "submitted" : "reviewing");
      return;
    }
    setActiveQuestionIndex(activeQuestionIndex + 1);
  };
  const handleSkip = () => {
    const prevStatus = questionStates[activeQuestionIndex]?.status ?? "pending";
    const newQuestionStates = handleSubmit(
      prevStatus === "pending" ? "skipped" : prevStatus
    );
    if (hasNextQuestion) {
      handleNextQuestion();
    } else {
      handleComplete(newQuestionStates);
    }
  };
  const handleComplete = (newQuestionStates) => {
    const states = newQuestionStates ?? questionStates;
    setQuizStatus("submitted");
    const questionsWithAnswers = questions.map((question, index) => {
      const questionState = states[index];
      let questionWithAnswer = `## Question ${index + 1} (${question.type === "mcq" ? "MCQ" : "Open Ended"}): ${question.title}`;
      if (question.type === "mcq") {
        questionWithAnswer += `
### Options:`;
        question?.options?.forEach((option, optionIndex) => {
          questionWithAnswer += `
${optionIndex + 1}. ${option.title} (${option.isCorrect ? "Correct" : "Incorrect"})`;
        });
        if (questionState?.selectedOptions?.length) {
          questionWithAnswer += `
### User Selected Answer:`;
          questionState?.selectedOptions?.forEach((optionIndex) => {
            questionWithAnswer += `
${optionIndex + 1}. ${question.options[optionIndex].title}`;
          });
        }
      } else {
        if (questionState?.userAnswer) {
          questionWithAnswer += `
### User Answer: ${questionState?.userAnswer}`;
        }
        if (questionState?.correctAnswer) {
          questionWithAnswer += `
### AI Feedback: ${questionState?.correctAnswer}`;
        }
      }
      questionWithAnswer += `
### Final Status: ${questionState?.status}`;
      return questionWithAnswer;
    }).join("\n\n");
    if (userQuizResultFeedbackStatus === "idle") {
      userQuizResultFeedback({ questionsWithAnswers });
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("flex h-full w-full flex-col", {
        "animate-pulse cursor-progress": isStreaming
      }),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn("relative flex h-full flex-col overflow-y-auto", {
              "pointer-events-none": isStreaming
            }),
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl bg-white px-4 py-10", children: [
              shouldShowQuestions && /* @__PURE__ */ jsx(
                QuizTopNavigation,
                {
                  activeQuestionIndex,
                  totalQuestions,
                  progressPercentage,
                  onSkip: handleSkip,
                  isStreaming,
                  onPrevious: () => {
                    if (!hasPreviousQuestion) {
                      return;
                    }
                    setActiveQuestionIndex(activeQuestionIndex - 1);
                  },
                  onNext: handleNextQuestion
                }
              ),
              quizStatus === "submitted" && /* @__PURE__ */ jsx(
                AIQuizResults,
                {
                  questionStates,
                  totalQuestions,
                  onRetry: handleRetry,
                  onNewQuiz: () => {
                    window.location.href = "/ai/quiz";
                  },
                  onReview: (questionIndex) => {
                    setActiveQuestionIndex(questionIndex);
                    setQuizStatus("reviewing");
                  },
                  isFeedbackLoading: isUserQuizResultFeedbackPending,
                  feedback: userQuizResultFeedbackData
                }
              ),
              shouldShowQuestions && /* @__PURE__ */ jsxs(Fragment, { children: [
                activeQuestion && activeQuestion.type === "mcq" && /* @__PURE__ */ jsx(
                  AIMCQQuestion,
                  {
                    question: activeQuestion,
                    questionState: activeQuestionState,
                    setSelectedOptions: handleSelectOptions,
                    onSubmit: handleSubmit,
                    onNext: handleNextQuestion,
                    onSkip: handleSkip,
                    isLastQuestion,
                    onComplete: handleComplete
                  }
                ),
                activeQuestion && activeQuestion.type === "open-ended" && /* @__PURE__ */ jsx(
                  AIOpenEndedQuestion,
                  {
                    quizSlug: quizSlug ?? "",
                    question: activeQuestion,
                    questionState: activeQuestionState,
                    onSubmit: handleSubmit,
                    onNext: handleNextQuestion,
                    setUserAnswer: handleSetUserAnswer,
                    setCorrectAnswer: handleSetCorrectAnswer,
                    isLastQuestion,
                    onComplete: handleComplete,
                    onSkip: handleSkip
                  },
                  activeQuestion.id
                )
              ] })
            ] }) })
          }
        ),
        quizStatus === "reviewing" && /* @__PURE__ */ jsx(
          AIQuizResultStrip,
          {
            activeQuestionIndex,
            questionStates,
            onReview: (questionIndex) => {
              setActiveQuestionIndex(questionIndex);
              setQuizStatus("reviewing");
            },
            onComplete: () => {
              setQuizStatus("submitted");
            }
          }
        )
      ]
    }
  );
}

function GenerateAIQuiz(props) {
  const { onQuizSlugChange } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState([]);
  const questionsRef = useRef([]);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
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
    if (!isPaidUser && limits && limits?.quiz?.used >= limits?.quiz?.limit) {
      setError("You have reached the limit for this format");
      setIsLoading(false);
      setShowUpgradeModal(true);
      return;
    }
    const params = getUrlParams();
    const paramsTerm = params?.term;
    const paramsFormat = params?.format;
    params?.src || "search";
    if (!paramsTerm) {
      return;
    }
    let questionAndAnswers = [];
    const sessionId = params?.id;
    if (sessionId) {
      questionAndAnswers = getQuestionAnswerChatMessages(sessionId);
    }
    handleGenerateQuiz({
      term: paramsTerm,
      format: paramsFormat,
      questionAndAnswers
    });
  }, [isLimitDataLoading, isPaidUser]);
  const handleGenerateQuiz = async (options) => {
    const { term, format, isForce, prompt, questionAndAnswers } = options;
    if (!isLoggedIn()) {
      window.location.href = "/ai";
      return;
    }
    await generateAIQuiz({
      term,
      format,
      isForce,
      prompt,
      questionAndAnswers,
      onDetailsChange: (details) => {
        const { quizId, quizSlug, title, userId } = details;
        const aiQuizData = {
          _id: quizId,
          userId,
          title,
          slug: quizSlug,
          keyword: term,
          format,
          content: "",
          questionAndAnswers: questionAndAnswers || [],
          questions: questionsRef.current || [],
          viewCount: 0,
          lastVisitedAt: /* @__PURE__ */ new Date(),
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        };
        queryClient.setQueryData(aiQuizOptions(quizSlug).queryKey, aiQuizData);
        onQuizSlugChange?.(quizSlug);
        window.history.replaceState(null, "", `/ai/quiz/${quizSlug}`);
      },
      onLoadingChange: setIsLoading,
      onError: setError,
      onStreamingChange: setIsStreaming,
      onQuestionsChange: (questions2) => {
        setQuestions(questions2);
        questionsRef.current = questions2;
      }
    });
  };
  const upgradeModal = showUpgradeModal ? /* @__PURE__ */ jsx(
    UpgradeAccountModal,
    {
      onClose: () => {
        window.location.href = "/ai/quiz";
      }
    }
  ) : null;
  if (error) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      upgradeModal,
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-20 flex h-full flex-col items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx(AlertCircleIcon, { className: "size-10 text-gray-500" }),
        /* @__PURE__ */ jsx("p", { className: "text-center", children: error })
      ] }) })
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
    /* @__PURE__ */ jsx(AIQuizContent, { isStreaming, questions })
  ] });
}

function AIQuiz(props) {
  const { quizSlug: defaultQuizSlug } = props;
  const [quizSlug, setQuizSlug] = useState(defaultQuizSlug);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const {
    data: aiQuiz,
    isLoading: isLoadingBySlug,
    error: aiQuizError
  } = useQuery(aiQuizOptions(quizSlug), queryClient);
  const {
    data: tokenUsage,
    isLoading: isTokenUsageLoading,
    refetch: refetchTokenUsage
  } = useQuery(aiLimitOptions(), queryClient);
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const isLoading = isLoadingBySlug || isRegenerating || isTokenUsageLoading || isBillingDetailsLoading;
  return /* @__PURE__ */ jsxs(AIQuizLayout, { children: [
    showUpgradeModal && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setShowUpgradeModal(false) }),
    /* @__PURE__ */ jsxs("div", { className: "relative grow", children: [
      isLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-20 flex h-full flex-col items-center justify-center bg-white", children: /* @__PURE__ */ jsx(LoadingChip, { message: "Loading Quiz" }) }),
      !isLoading && aiQuizError && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-20 flex h-full flex-col items-center justify-center bg-white", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx(AlertCircleIcon, { className: "size-10 text-gray-500" }),
        /* @__PURE__ */ jsx("p", { className: "text-center", children: aiQuizError?.message || "Something went wrong" })
      ] }) }),
      quizSlug && !aiQuizError && /* @__PURE__ */ jsx(
        AIQuizContent,
        {
          quizSlug,
          questions: aiQuiz?.questions ?? [],
          isLoading
        }
      ),
      !quizSlug && !aiQuizError && /* @__PURE__ */ jsx(GenerateAIQuiz, { onQuizSlugChange: setQuizSlug })
    ] })
  ] });
}

export { AIQuiz as A };
