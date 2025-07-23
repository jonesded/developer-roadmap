import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$GuideContent } from '../../chunks/GuideContent_dPZAVH0a.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B-BXcELP.mjs';
import { a as getGuideById } from '../../chunks/guide_CTGroPUz.mjs';
import { g as getOpenGraphImageUrl } from '../../chunks/open-graph_BMQllw-Q.mjs';
export { renderers } from '../../renderers.mjs';

const $$WebDeveloperPortfolio = createComponent(async ($$result, $$props, $$slots) => {
  const guideId = "frontend-web-developer-portfolio";
  const guide = await getGuideById(guideId);
  const { frontmatter: guideData } = guide;
  const ogImageUrl = guideData.seo.ogImageUrl || getOpenGraphImageUrl({
    group: "guide",
    resourceId: guideId
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": guideData.seo.title, "description": guideData.seo.description, "permalink": guideData.excludedBySlug, "canonicalUrl": guideData.canonicalUrl, "ogImageUrl": ogImageUrl }, { "changelog-banner": async ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GuideContent", $$GuideContent, { "guide": guide })}  ` })}`;
}, "/workspace/src/pages/frontend/web-developer-portfolio.astro", void 0);

const $$file = "/workspace/src/pages/frontend/web-developer-portfolio.astro";
const $$url = "/frontend/web-developer-portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WebDeveloperPortfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
