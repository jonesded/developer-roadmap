import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot } from './astro/server_Cqa-EqH9.mjs';
import { $ as $$BaseLayout } from './BaseLayout_C3JOBLhD.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter = {} } = Astro2.props;
  const { title, description, noIndex = false } = frontmatter;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...frontmatter }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container prose py-12"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/workspace/src/layouts/MarkdownLayout.astro", void 0);

export { $$MarkdownLayout as $ };
