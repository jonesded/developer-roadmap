import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, d as renderSlot, m as maybeRenderHead } from './astro/server_Cqa-EqH9.mjs';
import { $ as $$BaseLayout } from './BaseLayout_BrSKT5L_.mjs';

const $$Astro = createAstro("https://hnmdevs.com/");
const $$SkeletonLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkeletonLayout;
  const props = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...props }, { "course-announcement": ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": ($$result2) => renderTemplate`   ${renderSlot($$result2, $$slots["default"])}  `, "page-footer": ($$result2) => renderTemplate`<div></div>`, "page-header": ($$result2) => renderTemplate`<div></div>` })}`;
}, "/workspace/src/layouts/SkeletonLayout.astro", void 0);

export { $$SkeletonLayout as $ };
