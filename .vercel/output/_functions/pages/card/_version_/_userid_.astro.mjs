import { a as getDefaultOpenGraphImageBuffer } from '../../../chunks/open-graph_BMQllw-Q.mjs';
export { renderers } from '../../../renderers.mjs';

async function getRoadCard(version, userId, variant, roadmaps = "") {
  const url = new URL(
    `${"https://api.imoogleai.xyz"}/v1-badge/${version}/${userId}`
  );
  url.searchParams.set("variant", variant);
  if (roadmaps) {
    url.searchParams.set("roadmaps", roadmaps);
  }
  const response = await fetch(url.toString());
  return response.text();
}

const prerender = false;
const GET = async (context) => {
  const { userId, version } = context.params;
  if (!userId || !version) {
    const buffer = await getDefaultOpenGraphImageBuffer();
    return new Response(buffer, {
      headers: {
        "Content-Type": "image/png"
      }
    });
  }
  const searchParams = new URLSearchParams(context.url.searchParams);
  const variant = searchParams.get("variant") || "dark";
  const roadmaps = searchParams.get("roadmaps") || "";
  const svg = await getRoadCard(version, userId, variant, roadmaps);
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
