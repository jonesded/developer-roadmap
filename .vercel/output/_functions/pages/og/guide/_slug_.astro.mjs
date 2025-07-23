import { a as getDefaultOpenGraphImageBuffer, b as getResourceOpenGraph } from '../../../chunks/open-graph_CmQjHa44.mjs';
import { Transformer } from '@napi-rs/image';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async (context) => {
  const { slug } = context.params;
  if (!slug) {
    const buffer = await getDefaultOpenGraphImageBuffer();
    return new Response(buffer, {
      headers: {
        "Content-Type": "image/png"
      }
    });
  }
  const svg = await getResourceOpenGraph("guide", slug);
  const transformer = Transformer.fromSvg(svg).crop(0, 0, 1200, 630);
  return new Response(await transformer.png(), {
    headers: {
      "Content-Type": "image/png"
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
