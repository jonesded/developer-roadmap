import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot } from './astro/server_Cqa-EqH9.mjs';
import { $ as $$BaseLayout } from './BaseLayout_C3JOBLhD.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$AccountLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccountLayout;
  const props = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...props, "noIndex": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}   `, "login-popup": ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "page-footer": ($$result2) => renderTemplate`<div></div>` })}`;
}, "/workspace/src/layouts/AccountLayout.astro", void 0);

export { $$AccountLayout as $ };
