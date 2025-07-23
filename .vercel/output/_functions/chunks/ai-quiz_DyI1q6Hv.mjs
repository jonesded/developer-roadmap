import { nanoid } from 'nanoid';
import { r as readChatStream } from './chat_CErZ2BPm.mjs';
import { h as httpGet, q as queryClient } from './query-client_rwy39LWF.mjs';
import { a as aiLimitOptions } from './ai-course_sZQdwLbV.mjs';
import { queryOptions } from '@tanstack/react-query';
import { i as isLoggedIn } from './BaseLayout_BrSKT5L_.mjs';

async function generateAIQuiz(options) {
  const {
    term,
    format,
    quizSlug,
    onLoadingChange,
    onError,
    isForce = false,
    prompt,
    onDetailsChange,
    onFinish,
    questionAndAnswers,
    onStreamingChange,
    onQuestionsChange
  } = options;
  onLoadingChange?.(true);
  onStreamingChange?.(false);
  try {
    let response = null;
    if (quizSlug && isForce) {
      response = await fetch(
        `${undefined                              }/v1-regenerate-ai-quiz/${quizSlug}`,
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
        `${undefined                              }/v1-generate-ai-quiz`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            keyword: term,
            format,
            isForce,
            customPrompt: prompt,
            questionAndAnswers
          }),
          credentials: "include"
        }
      );
    }
    if (!response.ok) {
      const data = await response.json();
      console.error(
        "Error generating quiz:",
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
        const questions = generateAiQuizQuestions(message);
        onQuestionsChange?.(questions);
      },
      onMessageEnd: async (result) => {
        queryClient.invalidateQueries(aiLimitOptions());
        onStreamingChange?.(false);
      },
      onDetails: async (details) => {
        if (!details?.quizId || !details?.quizSlug) {
          throw new Error("Invalid details");
        }
        onDetailsChange?.(details);
      }
    });
    onFinish?.();
  } catch (error) {
    onError?.(error?.message || "Something went wrong");
    console.error("Error in quiz generation:", error);
    onLoadingChange?.(false);
    onStreamingChange?.(false);
  }
}
function generateAiQuizQuestions(questionData) {
  const questions = [];
  const lines = questionData.split("\n");
  let currentQuestion = null;
  let context = null;
  const addCurrentQuestion = () => {
    if (!currentQuestion) {
      return;
    }
    if (currentQuestion.type === "mcq") {
      currentQuestion.options = currentQuestion.options.sort(
        () => Math.random() - 0.5
      );
    }
    questions.push(currentQuestion);
    currentQuestion = null;
  };
  for (const line of lines) {
    if (!line) {
      continue;
    }
    if (line.startsWith("###")) {
      addCurrentQuestion();
      currentQuestion = {
        id: nanoid(),
        title: line.slice(3).trim(),
        type: "open-ended",
        options: []
      };
      context = "question";
    } else if (line.startsWith("##")) {
      if (!currentQuestion) {
        continue;
      }
      currentQuestion.answerExplanation = line.slice(2).trim();
      context = "explanation";
    } else if (line.startsWith("#")) {
      addCurrentQuestion();
      const title = line.slice(1).trim();
      currentQuestion = {
        id: nanoid(),
        title,
        type: "mcq",
        options: []
      };
      context = "question";
    } else if (line.startsWith("-")) {
      if (!currentQuestion) {
        continue;
      }
      const rawOption = line.slice(1).trim();
      const isCorrect = rawOption.startsWith("*");
      const title = rawOption.slice(isCorrect ? 1 : 0).trim();
      currentQuestion.options.push({
        id: nanoid(),
        title,
        isCorrect
      });
      context = "option";
    } else {
      if (!currentQuestion) {
        continue;
      }
      if (context === "question") {
        currentQuestion.title += `
${line}`;
      } else if (context === "explanation") {
        currentQuestion.answerExplanation = (currentQuestion?.answerExplanation || "") + `
${line}`;
      } else if (context === "option") {
        const lastOption = currentQuestion.options.at(-1);
        if (lastOption) {
          lastOption.title += `
${line}`;
        }
      }
    }
  }
  addCurrentQuestion();
  return questions;
}
function aiQuizOptions(quizSlug) {
  return queryOptions({
    queryKey: ["ai-quiz", quizSlug],
    queryFn: async () => {
      const res = await httpGet(
        `/v1-get-ai-quiz/${quizSlug}`
      );
      return {
        ...res,
        questions: generateAiQuizQuestions(res.content)
      };
    },
    enabled: !!quizSlug
  });
}
function listUserAiQuizzesOptions(params = {
  perPage: "21",
  currPage: "1",
  query: ""
}) {
  return queryOptions({
    queryKey: ["user-ai-quizzes", params],
    queryFn: () => {
      return httpGet(
        `/v1-list-user-ai-quizzes`,
        params
      );
    },
    enabled: !!isLoggedIn()
  });
}

export { aiQuizOptions as a, generateAIQuiz as g, listUserAiQuizzesOptions as l };
