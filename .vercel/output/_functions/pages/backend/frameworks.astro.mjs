import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$GuideContent } from '../../chunks/GuideContent_dPZAVH0a.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B-BXcELP.mjs';
import { a as getGuideById } from '../../chunks/guide_CTGroPUz.mjs';
import { g as getOpenGraphImageUrl } from '../../chunks/open-graph_BMQllw-Q.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$Frameworks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Frameworks;
  const guideId = "backend-frameworks";
  const guide = await getGuideById(guideId).catch(() => null);
  if (!guide) {
    return Astro2.redirect("/404");
  }
  const { frontmatter: guideData } = guide;
  const ogImageUrl = guideData.seo.ogImageUrl || getOpenGraphImageUrl({
    group: "guide",
    resourceId: guideId
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": guideData.seo.title, "description": guideData.seo.description, "permalink": `/backend/frameworks`, "canonicalUrl": guideData.canonicalUrl, "ogImageUrl": ogImageUrl }, { "changelog-banner": async ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GuideContent", $$GuideContent, { "guide": guide })}  ` })}`;
}, "/workspace/src/pages/backend/frameworks.astro", void 0);

const $$file = "/workspace/src/pages/backend/frameworks.astro";
const $$url = "/backend/frameworks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Frameworks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
