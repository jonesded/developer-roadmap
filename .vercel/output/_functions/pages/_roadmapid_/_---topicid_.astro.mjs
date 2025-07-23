import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, F as Fragment, b as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import MarkdownItAsync from 'markdown-it-async';
import { fileURLToPath } from 'node:url';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { topicId, roadmapId } = Astro2.params;
  if (!topicId || !roadmapId) {
    Astro2.response.status = 404;
    Astro2.response.statusText = "Not found";
    return Astro2.rewrite("/404");
  }
  const topicPath = Array.isArray(topicId) ? topicId.join("/") : topicId;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const projectRoot = path.resolve(__dirname, "../../..").replace(/dist$/, "");
  let contentPath = path.join(
    projectRoot,
    "src",
    "data",
    "roadmaps",
    roadmapId,
    "content",
    `${topicPath}.md`
  );
  if (!fs.existsSync(contentPath)) {
    const indexFilePath = path.join(
      projectRoot,
      "src",
      "data",
      "roadmaps",
      roadmapId,
      "content",
      `${topicPath}/index.md`
    );
    if (!fs.existsSync(indexFilePath)) {
      Astro2.response.status = 404;
      Astro2.response.statusText = "Not found";
      return Astro2.rewrite("/404");
    }
    contentPath = indexFilePath;
  }
  const fileContent = fs.readFileSync(contentPath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  const roadmapPath = path.join(
    projectRoot,
    "src",
    "data",
    "roadmaps",
    roadmapId,
    `${roadmapId}.md`
  );
  const roadmapContent = fs.readFileSync(roadmapPath, "utf-8");
  const { data: roadmapData } = matter(roadmapContent);
  const fileWithoutBasePath = contentPath.replace(/.+?\/src\/data/, "/src/data");
  const gitHubUrl = `https://github.com/kamranahmedse/developer-roadmap/tree/master${fileWithoutBasePath}`;
  const md = MarkdownItAsync();
  const htmlContent = await md.renderAsync(content);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(gitHubUrl, "data-github-url")}></div> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(htmlContent)}` })}`;
}, "/workspace/src/pages/[roadmapId]/[...topicId].astro", void 0);

const $$file = "/workspace/src/pages/[roadmapId]/[...topicId].astro";
const $$url = "/[roadmapId]/[...topicId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
