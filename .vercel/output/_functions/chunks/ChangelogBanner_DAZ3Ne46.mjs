import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, e as addAttribute, b as renderTemplate } from './astro/server_Cqa-EqH9.mjs';
import { g as getAllChangelogs } from './changelog_CNibRO16.mjs';
import { DateTime } from 'luxon';
import { j as $$AstroIcon } from './BaseLayout_C3JOBLhD.mjs';

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$ChangelogBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ChangelogBanner;
  const allChangelogs = await getAllChangelogs();
  const top10Changelogs = allChangelogs.slice(0, 10);
  return renderTemplate`${maybeRenderHead()}<div class="border-t bg-white py-6 text-left sm:py-16 sm:text-center"> <div class="container max-w-[650px]!"> <p class="text-2xl font-bold sm:text-5xl"> <img src="/images/gifs/rocket.gif" alt="Rocket" class="mr-2 hidden h-12 w-12 sm:inline">
Actively Maintained
</p> <p class="mb-2 mt-1 text-sm leading-relaxed text-gray-600 sm:my-2 sm:my-5 sm:text-lg">
We are always improving our content, adding new resources and adding
      features to enhance your learning experience.
</p> <div class="relative mt-2 text-left sm:mt-8"> <div class="absolute inset-y-0 left-[120px] hidden w-px -translate-x-[0.5px] translate-x-[5.75px] bg-gray-300 sm:block"></div> <ul class="relative flex flex-col gap-4 py-4"> ${top10Changelogs.map((changelog) => {
    const formattedDate = DateTime.fromISO(
      changelog.frontmatter.date
    ).toFormat("dd LLL, yyyy");
    return renderTemplate`<li class="relative"> <a${addAttribute(`/changelog#${changelog.id}`, "href")} class="flex flex-col items-start sm:flex-row sm:items-center"> <span class="shrink-0 pr-0 text-right text-sm tracking-wide text-gray-400 sm:w-[120px] sm:pr-4"> ${formattedDate} </span> <span class="hidden h-3 w-3 shrink-0 rounded-full bg-gray-300 sm:block"></span> <span class="text-balance text-base font-medium text-gray-900 sm:pl-8"> ${changelog.frontmatter.title} </span> </a> </li>`;
  })} </ul> </div> <div class="mt-2 flex flex-col gap-2 sm:flex-row sm:mt-8 sm:items-center sm:justify-center"> <a href="/changelog" class="inline-block rounded-lg border border-black bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-700 sm:rounded-full sm:px-6 sm:text-base">
View Full Changelog
</a> <button data-guest-required data-popup="login-popup" class="flex flex-row items-center gap-2 rounded-lg border border-black bg-white px-4 py-2 text-sm text-black transition-all hover:bg-black hover:text-white sm:rounded-full sm:pl-4 sm:pr-5 sm:text-base"> ${renderComponent($$result, "AstroIcon", $$AstroIcon, { "icon": "bell", "class": "h-5 w-5" })}
Subscribe for Notifications
</button> </div> </div> </div>`;
}, "/workspace/src/components/ChangelogBanner.astro", void 0);

export { $$ChangelogBanner as $ };
