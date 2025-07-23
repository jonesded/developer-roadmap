import path from 'node:path';
import fs from 'node:fs';
import matter from 'gray-matter';
import { fileURLToPath } from 'node:url';
export { renderers } from '../renderers.mjs';

const prerender = false;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../..").replace(/dist$/, "");
async function fetchRoadmapJson(roadmapId) {
  const response = await fetch(
    `https://roadmap.sh/api/v1-official-roadmap/${roadmapId}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch roadmap json: ${response.statusText}`);
  }
  const data = await response.json();
  if (data.error) {
    throw new Error(`Failed to fetch roadmap json: ${data.error}`);
  }
  return data;
}
const GET = async function({ params, request, props }) {
  const { roadmapId } = params;
  if (!roadmapId) {
    return new Response("Roadmap ID is required", {
      status: 400
    });
  }
  let roadmapFilePath = path.join(
    projectRoot,
    "src",
    "data",
    "roadmaps",
    roadmapId,
    `${roadmapId}.md`
  );
  let roadmapJsonPath = path.join(
    projectRoot,
    "src",
    "data",
    "roadmaps",
    roadmapId,
    `${roadmapId}.json`
  );
  if (!fs.existsSync(roadmapFilePath)) {
    return new Response(JSON.stringify({ message: "Roadmap not found" }), {
      status: 404
    });
  }
  const fileContent = fs.readFileSync(roadmapFilePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);
  if (frontmatter.renderer !== "editor") {
    const roadmapJson2 = JSON.parse(fs.readFileSync(roadmapJsonPath, "utf-8"));
    return new Response(JSON.stringify(roadmapJson2), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  const roadmapJson = await fetchRoadmapJson(roadmapId);
  return new Response(JSON.stringify(roadmapJson), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  fetchRoadmapJson,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
