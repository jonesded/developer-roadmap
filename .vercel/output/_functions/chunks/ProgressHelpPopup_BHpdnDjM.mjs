import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './astro/server_Cqa-EqH9.mjs';
import { f as $$Popup } from './BaseLayout_C3JOBLhD.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$ProgressHelpPopup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProgressHelpPopup;
  return renderTemplate`${renderComponent($$result, "Popup", $$Popup, { "id": "progress-help", "title": "", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="-mt-2.5"> <p class="mb-3 text-2xl font-semibold leading-5 text-gray-900">
Track your Progress
</p> <p class="text-sm leading-4 text-gray-600">
Login and use one of the options listed below.
</p> <div class="mt-4 flex flex-col gap-1.5"> <div class="rounded-md border px-3 py-3 text-gray-500"> <span class="mb-1.5 block text-xs font-medium uppercase text-green-600">Option 1</span> <p class="text-sm">
Click the roadmap topics and use <span class="underline">Update Progress</span> dropdown to update your progress.
</p> </div> <div class="rounded-md border border-yellow-300 bg-yellow-50 px-3 py-3 text-gray-500"> <span class="mb-1.5 block text-xs font-medium uppercase text-green-600">Option 2</span> <p class="text-sm">Use the keyboard shortcuts listed below.</p> <ul class="flex flex-col gap-1 mt-3 mb-1.5"> <li class="text-sm leading-loose"> <kbd class="px-2 py-1.5 text-xs text-white bg-gray-900 rounded-md">Right Mouse Click</kbd> to mark as Done.
</li> <li class="text-sm leading-loose"> <kbd class="px-2 py-1.5 text-xs text-white bg-gray-900 rounded-md">Shift</kbd> + <kbd class="px-2 py-1.5 text-xs text-white bg-gray-900 rounded-md">Click</kbd> to mark as in progress.
</li> <li class="text-sm leading-loose"> <kbd class="px-2 py-1.5 text-xs text-white bg-gray-900 rounded-md">Option / Alt</kbd> + <kbd class="px-2 py-1.5 text-xs text-white bg-gray-900 rounded-md">Click</kbd> to mark as skipped.
</li> </ul> </div> </div> </div> ` })}`;
}, "/workspace/src/components/ProgressHelpPopup.astro", void 0);

export { $$ProgressHelpPopup as $ };
