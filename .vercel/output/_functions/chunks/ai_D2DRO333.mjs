import { nanoid } from 'nanoid';

const IS_KEY_ONLY_ROADMAP_GENERATION = false;
function generateAiCourseStructure(data) {
  const lines = data.split("\n");
  let title = "";
  const modules = [];
  let currentModule = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (i === 0 && line.startsWith("#")) {
      title = line.replace("#", "").trim();
    } else if (line.startsWith("## ")) {
      if (currentModule) {
        modules.push(currentModule);
      }
      currentModule = {
        title: line.replace("## ", ""),
        lessons: []
      };
    } else if (line.startsWith("- ") && currentModule) {
      currentModule.lessons.push(line.replace("- ", ""));
    }
  }
  if (currentModule) {
    modules.push(currentModule);
  }
  return {
    title,
    modules,
    done: []
  };
}
const NEW_LINE = "\n".charCodeAt(0);
async function readAIRoadmapStream(reader, {
  onStream,
  onStreamEnd
}) {
  const decoder = new TextDecoder("utf-8");
  let result = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    if (value) {
      let start = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] === NEW_LINE) {
          result += decoder.decode(value.slice(start, i + 1));
          await onStream?.(result);
          start = i + 1;
        }
      }
      if (start < value.length) {
        result += decoder.decode(value.slice(start));
      }
    }
  }
  await onStream?.(result);
  await onStreamEnd?.(result);
  reader.releaseLock();
}
async function readAIRoadmapContentStream(reader, {
  onStream,
  onStreamEnd
}) {
  const decoder = new TextDecoder("utf-8");
  let result = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    if (value) {
      result += decoder.decode(value);
      onStream?.(result);
    }
  }
  onStream?.(result);
  onStreamEnd?.(result);
  reader.releaseLock();
}
async function readStream(reader, {
  onStream,
  onStreamEnd
}) {
  const decoder = new TextDecoder("utf-8");
  let result = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    if (value) {
      let start = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] === NEW_LINE) {
          result += decoder.decode(value.slice(start, i + 1));
          await onStream?.(result);
          start = i + 1;
        }
      }
      if (start < value.length) {
        result += decoder.decode(value.slice(start));
      }
    }
  }
  await onStream?.(result);
  await onStreamEnd?.(result);
  reader.releaseLock();
}
function generateAiCourseLessonQuestions(questionData) {
  const questions = [];
  const lines = questionData.split("\n");
  let currentQuestion = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("#")) {
      if (currentQuestion) {
        questions.push(currentQuestion);
        currentQuestion = null;
      }
      const title = line.replace("#", "").trim();
      currentQuestion = {
        id: nanoid(),
        title,
        options: []
      };
    } else if (line.startsWith("-")) {
      if (!currentQuestion) {
        continue;
      }
      let title = line.replace("-", "").trim();
      const isCorrect = title.startsWith("*");
      title = title.replace("*", "").trim();
      currentQuestion.options.push({
        id: nanoid(),
        title,
        isCorrect
      });
    }
  }
  if (currentQuestion) {
    questions.push(currentQuestion);
  }
  return questions;
}
function generateAICourseRoadmapStructure(data, isCourseRoadmap = false) {
  const lines = data.split("\n");
  const result = [];
  let currentTopic = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("###")) {
      if (currentTopic) {
        result.push(currentTopic);
      }
      const label = line.replace("###", "").trim();
      currentTopic = {
        id: nanoid(),
        type: "topic",
        label,
        children: []
      };
    } else if (line.startsWith("##")) {
      result.push({
        id: nanoid(),
        type: "label",
        label: line.replace("##", "").trim()
      });
    } else if (i === 0 && line.startsWith("#")) {
      const title = line.replace("#", "").trim();
      result.push({
        id: nanoid(),
        type: "title",
        label: title
      });
    } else if (line.startsWith("-")) {
      if (currentTopic) {
        const label = line.replace("-", "").trim();
        let id = nanoid();
        if (isCourseRoadmap) {
          const currentTopicIndex = result.length - 1;
          const subTopicIndex = currentTopic.children?.length || 0;
          id = `${currentTopicIndex}-${subTopicIndex}`;
        }
        currentTopic.children?.push({
          id,
          type: "subtopic",
          label
        });
      }
    }
  }
  if (currentTopic) {
    result.push(currentTopic);
  }
  return result;
}

export { IS_KEY_ONLY_ROADMAP_GENERATION as I, readAIRoadmapContentStream as a, readAIRoadmapStream as b, generateAiCourseLessonQuestions as c, generateAiCourseStructure as d, generateAICourseRoadmapStructure as g, readStream as r };
