import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$GuideContent } from '../../chunks/GuideContent_dPZAVH0a.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B-BXcELP.mjs';
import { a as getGuideById } from '../../chunks/guide_CTGroPUz.mjs';
import { g as getOpenGraphImageUrl } from '../../chunks/open-graph_BMQllw-Q.mjs';
export { renderers } from '../../renderers.mjs';

const $$DevopsVsSre = createComponent(async ($$result, $$props, $$slots) => {
  const guideId = "devops-vs-sre";
  const guide = await getGuideById(guideId);
  const { frontmatter: guideData } = guide;
  const ogImageUrl = guideData.seo.ogImageUrl || getOpenGraphImageUrl({
    group: "guide",
    resourceId: guideId
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": guideData.seo.title, "description": guideData.seo.description, "permalink": guideData.excludedBySlug, "canonicalUrl": guideData.canonicalUrl, "ogImageUrl": ogImageUrl }, { "changelog-banner": async ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "GuideContent", $$GuideContent, { "guide": guide })}  ` })}`;
}, "/workspace/src/pages/devops/devops-vs-sre.astro", void 0);

const $$file = "/workspace/src/pages/devops/devops-vs-sre.astro";
const $$url = "/devops/devops-vs-sre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DevopsVsSre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
