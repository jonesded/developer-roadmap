import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, e as addAttribute, d as renderSlot, g as renderScript, b as renderTemplate } from './astro/server_Cqa-EqH9.mjs';
import { e as httpGet, i as isLoggedIn, j as $$AstroIcon } from './BaseLayout_B-BXcELP.mjs';
import { T as TeamDropdown } from './TeamDropdown_B6MS2Uis.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Map } from 'lucide-react';
import { u as useIsMounted } from './use-is-mounted_DjfnSlIF.mjs';
import { u as useIsPaidUser } from './billing_5mov2PsZ.mjs';
import { U as UpgradeSidebarCard } from './UpgradeSidebarCard_C_86f4JN.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_vuvdVS66.mjs';

function SidebarFriendsCounter() {
  const [friendCounts, setFriendCounts] = useState();
  async function getFriendCounts() {
    const { response, error } = await httpGet(
      `${"https://api.imoogleai.xyz"}/v1-get-friend-counts`
    );
    if (error || !response) {
      return;
    }
    setFriendCounts(response);
  }
  useEffect(() => {
    getFriendCounts().finally(() => null);
  }, []);
  const pendingCount = friendCounts?.receivedCount || 0;
  if (!pendingCount) {
    return null;
  }
  return /* @__PURE__ */ jsx("span", { className: "flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white", children: pendingCount });
}

function AccountSidebarUpgrade() {
  const isMounted = useIsMounted();
  const { isPaidUser, isLoading: isPaidUserLoading } = useIsPaidUser();
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  if (!isMounted || isPaidUserLoading || !isLoggedIn() || isPaidUser) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isUpgradeModalOpen && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setIsUpgradeModalOpen(false) }),
    /* @__PURE__ */ jsx(
      UpgradeSidebarCard,
      {
        onUpgrade: () => setIsUpgradeModalOpen(true),
        className: "mt-4 -mr-px rounded-r-none ml-0",
        descriptionClassName: "leading-normal",
        title: "Upgrade",
        description: "Unlock premium features including AI tutor and more.",
        showLimit: false
      }
    )
  ] });
}

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$AccountSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccountSidebar;
  const { hasDesktopSidebar = true, activePageId, activePageTitle } = Astro2.props;
  const sidebarLinks = [
    {
      href: "/account",
      title: "Activity",
      id: "activity",
      isNew: false,
      icon: {
        glyph: "analytics",
        classes: "h-3 w-4"
      }
    },
    {
      href: "/account/update-profile",
      title: "Profile",
      id: "profile",
      isNew: false,
      icon: {
        glyph: "user",
        classes: "h-4 w-4"
      }
    },
    {
      href: "/account/friends",
      title: "Friends",
      id: "friends",
      isNew: false,
      icon: {
        glyph: "users",
        classes: "h-4 w-4"
      }
    },
    {
      href: "/account/roadmaps",
      title: "Roadmaps",
      id: "roadmaps",
      isNew: false,
      icon: {
        glyph: "users",
        classes: "h-4 w-4",
        component: Map
      }
    },
    {
      href: "/account/road-card",
      title: "Road Card",
      id: "road-card",
      isNew: false,
      icon: {
        glyph: "badge",
        classes: "h-4 w-4"
      }
    },
    {
      href: "/account/billing",
      title: "Billing",
      id: "billing",
      isNew: false,
      icon: {
        glyph: "credit-card",
        classes: "h-4 w-4"
      }
    },
    {
      href: "/account/settings",
      title: "Settings",
      id: "settings",
      isNew: false,
      icon: {
        glyph: "cog",
        classes: "h-4 w-4"
      }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative mb-5 block border-b p-4 shadow-inner md:hidden"> <button class="flex h-10 w-full items-center justify-between rounded-md border bg-white px-2 text-center text-sm font-medium text-gray-900" id="settings-menu"> ${activePageTitle} ${renderComponent($$result, "AstroIcon", $$AstroIcon, { "icon": "dropdown" })} </button> <ul id="settings-menu-dropdown" class="absolute right-0 left-0 z-10 mt-1 hidden space-y-1.5 bg-white p-2 shadow-lg"> <li> <a href="/team"${addAttribute(`flex w-full items-center rounded px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-200 ${activePageId === "team" ? "bg-slate-100" : ""}`, "class")}> ${renderComponent($$result, "AstroIcon", $$AstroIcon, { "icon": "users", "class": `h-4 w-4 mr-2` })}
Teams
</a> </li> ${sidebarLinks.map((sidebarLink) => {
    const isActive = activePageId === sidebarLink.id;
    return renderTemplate`<li> <a${addAttribute(sidebarLink.href, "href")}${addAttribute(`flex w-full items-center rounded px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-200 ${isActive ? "bg-slate-100" : ""}`, "class")}> ${sidebarLink.icon.component ? renderTemplate`${renderComponent($$result, "sidebarLink.icon.component", sidebarLink.icon.component, { "className": `${sidebarLink.icon.classes} mr-2` })}` : renderTemplate`${renderComponent($$result, "AstroIcon", $$AstroIcon, { "icon": sidebarLink.icon.glyph, "class": `${sidebarLink.icon.classes} mr-2` })}`} ${sidebarLink.title} </a> </li>`;
  })} </ul> </div> <div class="container flex min-h-screen items-stretch"> <!-- Start Desktop Sidebar --> ${hasDesktopSidebar && renderTemplate`<aside class="hidden w-[195px] shrink-0 border-r border-slate-200 py-10 md:block"> ${renderComponent($$result, "TeamDropdown", TeamDropdown, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamDropdown/TeamDropdown", "client:component-export": "TeamDropdown" })} <nav> <ul class="space-y-1"> ${sidebarLinks.map((sidebarLink) => {
    const isActive = activePageId === sidebarLink.id;
    return renderTemplate`<li> <a${addAttribute(sidebarLink.href, "href")}${addAttribute(`font-regular flex w-full items-center border-r-2 px-2 py-1.5 text-sm ${isActive ? "border-r-black bg-gray-100 text-black" : "border-r-transparent text-gray-500 hover:border-r-gray-300"}`, "class")}> <span class="flex grow items-center"> ${sidebarLink.icon.component ? renderTemplate`${renderComponent($$result, "sidebarLink.icon.component", sidebarLink.icon.component, { "className": `${sidebarLink.icon.classes} mr-2` })}` : renderTemplate`${renderComponent($$result, "AstroIcon", $$AstroIcon, { "icon": sidebarLink.icon.glyph, "class": `${sidebarLink.icon.classes} mr-2` })}`} ${sidebarLink.title} </span> ${sidebarLink.isNew && !isActive && renderTemplate`<span class="relative mr-1 flex items-center"> <span class="relative rounded-full bg-gray-200 p-1 text-xs"></span> <span class="absolute top-0 right-0 bottom-0 left-0 animate-ping rounded-full bg-gray-400 p-1 text-xs"></span> </span>`} ${sidebarLink.id === "friends" && renderTemplate`${renderComponent($$result, "SidebarFriendsCounter", SidebarFriendsCounter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Friends/SidebarFriendsCounter", "client:component-export": "SidebarFriendsCounter" })}`} </a> </li>`;
  })} ${renderComponent($$result, "AccountSidebarUpgrade", AccountSidebarUpgrade, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AccounSidebar/AccountSidebarUpgrade", "client:component-export": "AccountSidebarUpgrade" })} </ul> </nav> </aside>`} <!-- /End Desktop Sidebar --> <div${addAttribute([
    "grow px-0 py-0 md:py-10",
    { "md:px-10": hasDesktopSidebar, "md:px-5": !hasDesktopSidebar }
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div> ${renderScript($$result, "/workspace/src/components/AccountSidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspace/src/components/AccountSidebar.astro", void 0);

export { $$AccountSidebar as $ };
