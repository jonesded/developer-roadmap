import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { LogInIcon, ChevronDown, User2, CreditCardIcon, Settings, LogOutIcon, X, Plus, Swords, MessageCircle, Map, BookOpen, Star, Compass, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { r as removeAuthToken, c as cn, i as isLoggedIn } from './BaseLayout_DfQviQZ5.mjs';
import { u as useIsPaidUser } from './billing_B5wE6dhK.mjs';
import { U as UpgradeAccountModal } from './UpgradeAccountModal_DhdxALHd.mjs';
import { q as queryClient } from './query-client_BnT_580V.mjs';
import { a as aiLimitOptions } from './ai-course_ei-HsZ8o.mjs';
import { useQuery } from '@tanstack/react-query';
import { A as AILimitsPopup } from './AILimitsPopup_D9TX8s0R.mjs';
import { u as useAuth } from './use-auth_BcMOZVvs.mjs';
import { s as showLoginPopup } from './popup_DWUkHIfQ.mjs';
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, d as DropdownMenuSeparator } from './DropdownMenu_-ZOWibIC.mjs';
import { U as UpgradeSidebarCard } from './UpgradeSidebarCard_Ii6cDQFY.mjs';
import { R as RoadmapLogoIcon } from './RoadmapLogo_CqzCGDrz.mjs';

function AITutorLogo(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 310 248",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ jsx("rect", { width: "310", height: "247.211", fill: "black" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M205.179 45.1641H263.851V201.278H205.179V45.1641Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M45.1641 45.1743H104.598L104.598 202.048H45.1641L45.1641 45.1743Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M160.984 45.1743V103.716L45.1641 103.716L45.1641 45.1743H160.984Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M125.171 45.1743H184.605V201.284H125.171V45.1743Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M159.841 131.85V173.88L63.8324 173.88L63.8324 131.85H159.841Z",
            fill: "white"
          }
        )
      ]
    }
  );
}

function useClientMount() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
}

const REDIRECT_PAGE_AFTER_AUTH = "redirect_page_after_auth";
function logout() {
  localStorage.removeItem(REDIRECT_PAGE_AFTER_AUTH);
  removeAuthToken();
  window.location.href = "/";
}

function UserDropdown(props) {
  const currentUser = useAuth();
  const { isPaidUser, isLoading } = useIsPaidUser();
  const isMounted = useClientMount();
  if (!isMounted || isLoading) {
    return null;
  }
  if (!currentUser) {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: showLoginPopup,
        className: "animate-fade-in inline-flex h-auto w-full items-center justify-center gap-2 rounded-lg border border-gray-700 bg-black px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 outline-none hover:!opacity-80 disabled:cursor-not-allowed disabled:opacity-60",
        children: [
          /* @__PURE__ */ jsx(LogInIcon, { className: "size-4" }),
          "Free Signup or Login"
        ]
      }
    );
  }
  const userAvatar = currentUser?.avatar ? `${"https://dodrc8eu8m09s.cloudfront.net/avatars"}/${currentUser?.avatar}` : "/images/default-avatar.png";
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("button", { className: "group flex w-full items-center gap-3 rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-black focus:outline-none data-[state=open]:bg-gray-100 data-[state=open]:text-black", children: [
      /* @__PURE__ */ jsx("div", { className: "relative size-7 shrink-0 overflow-hidden rounded-full", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: userAvatar,
          alt: currentUser.name,
          className: "absolute inset-0 h-full w-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col text-left", children: [
        /* @__PURE__ */ jsx("span", { className: "truncate font-medium text-gray-900", children: currentUser.name }),
        /* @__PURE__ */ jsx("span", { className: "truncate text-xs text-gray-500", children: isPaidUser ? "Pro Member" : "Free User" })
      ] }),
      /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-[var(--radix-dropdown-menu-trigger-width)] min-w-52 rounded-lg border border-gray-200 bg-white p-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/account",
            className: "flex w-full items-center gap-3 rounded px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-black",
            children: [
              /* @__PURE__ */ jsx(User2, { className: "size-4" }),
              "Account"
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/account/billing",
            className: "flex w-full items-center gap-3 rounded px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-black",
            children: [
              /* @__PURE__ */ jsx(CreditCardIcon, { className: "size-4" }),
              "Billing"
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/account/settings",
            className: "flex w-full items-center gap-3 rounded px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-black",
            children: [
              /* @__PURE__ */ jsx(Settings, { className: "size-4" }),
              "Settings"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, { className: "my-1" }),
      /* @__PURE__ */ jsxs(
        DropdownMenuItem,
        {
          className: "flex w-full items-center gap-3 rounded px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 hover:text-red-700",
          onSelect: () => {
            logout();
          },
          children: [
            /* @__PURE__ */ jsx(LogOutIcon, { className: "size-4" }),
            "Logout"
          ]
        }
      )
    ] })
  ] });
}

const sidebarItems = [
  {
    key: "new",
    label: "Create with AI",
    href: "/ai",
    icon: Plus
  },
  {
    key: "quiz",
    label: "Test my Skills",
    href: "/ai/quiz",
    icon: Swords
  },
  {
    key: "chat",
    label: "Ask AI Tutor",
    href: "/ai/chat",
    icon: MessageCircle
  },
  {
    key: "roadmap-chat",
    label: "Roadmap Chat",
    href: "/ai/roadmap-chat",
    icon: Map
  },
  {
    key: "library",
    label: "My Learning",
    href: "/ai/courses",
    icon: BookOpen
  },
  {
    key: "staff-picks",
    label: "Staff Picks",
    href: "/ai/staff-picks",
    icon: Star
  },
  {
    key: "community",
    label: "Community",
    href: "/ai/community",
    icon: Compass
  }
];
function AITutorSidebar(props) {
  const { activeTab, isFloating, onClose } = props;
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showAILimitsPopup, setShowAILimitsPopup] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const { isPaidUser, isLoading: isPaidUserLoading } = useIsPaidUser();
  const { data: limits, isLoading: isLimitsLoading } = useQuery(
    aiLimitOptions(),
    queryClient
  );
  const { used, limit } = limits ?? { used: 0, limit: 0 };
  useEffect(() => {
    setIsInitialLoad(false);
  }, []);
  const isLoading = isPaidUserLoading || isLimitsLoading;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isUpgradeModalOpen && /* @__PURE__ */ jsx(UpgradeAccountModal, { onClose: () => setIsUpgradeModalOpen(false) }),
    showAILimitsPopup && /* @__PURE__ */ jsx(
      AILimitsPopup,
      {
        onClose: () => setShowAILimitsPopup(false),
        onUpgrade: () => {
          setIsUpgradeModalOpen(true);
          setShowAILimitsPopup(false);
        }
      }
    ),
    /* @__PURE__ */ jsxs(
      "aside",
      {
        className: cn(
          "flex w-[255px] shrink-0 flex-col border-r border-slate-200",
          isFloating ? "fixed top-0 bottom-0 left-0 z-50 flex border-r-0 bg-white shadow-xl" : "hidden lg:flex"
        ),
        children: [
          isFloating && /* @__PURE__ */ jsx("button", { className: "absolute top-3 right-3", onClick: onClose, children: /* @__PURE__ */ jsx(
            X,
            {
              strokeWidth: 3,
              className: "size-3.5 text-gray-400 hover:text-black"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-center px-6 py-5", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center gap-1", children: /* @__PURE__ */ jsx(AITutorLogo, { className: "size-11 text-gray-500", color: "black" }) }),
            /* @__PURE__ */ jsxs("div", { className: "my-3 flex flex-col", children: [
              /* @__PURE__ */ jsx("h2", { className: "-mb-px text-base font-semibold text-black", children: "AI Tutor" }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500", children: [
                "by",
                " ",
                /* @__PURE__ */ jsx("a", { href: "/", className: "underline-offset-2 hover:underline", children: "roadmap.sh" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "max-w-[150px] text-xs text-gray-500", children: "Your personalized learning companion for any topic" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "list-none space-y-1", children: [
            sidebarItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              AITutorSidebarItem,
              {
                item,
                isActive: activeTab === item.key
              }
            ) }, item.key)),
            !isInitialLoad && isLoggedIn() && !isPaidUser && !isLoading && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              UpgradeSidebarCard,
              {
                onUpgrade: () => setIsUpgradeModalOpen(true)
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mx-2 mt-auto mb-2", children: /* @__PURE__ */ jsx(UserDropdown, {}) })
        ]
      }
    ),
    isFloating && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40 bg-black/50", onClick: onClose })
  ] });
}
function AITutorSidebarItem(props) {
  const { item, as = "a", onClick, className, isActive } = props;
  const Component = as;
  return /* @__PURE__ */ jsx(
    Component,
    {
      ...as === "a" ? { href: item.href } : {},
      ...as === "button" ? { onClick } : {},
      className: cn(
        "font-regular flex w-full items-center border-r-2 px-5 py-2 text-sm transition-all",
        isActive ? "border-r-black bg-gray-100 text-black" : "border-r-transparent text-gray-500 hover:border-r-gray-300",
        className
      ),
      children: /* @__PURE__ */ jsxs("span", { className: "flex grow items-center", children: [
        /* @__PURE__ */ jsx(item.icon, { className: "mr-2 size-4" }),
        item.label
      ] })
    }
  );
}

function AITutorLayout(props) {
  const { children, activeTab, wrapperClassName, containerClassName } = props;
  const [isSidebarFloating, setIsSidebarFloating] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-10 flex flex-row items-center justify-between border-b border-slate-200 bg-white px-4 py-3 lg:hidden", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "flex flex-row items-center gap-1.5", children: /* @__PURE__ */ jsx(RoadmapLogoIcon, { className: "size-6 text-gray-500", color: "black" }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex flex-row items-center gap-1",
          onClick: () => setIsSidebarFloating(!isSidebarFloating),
          children: /* @__PURE__ */ jsx(Menu, { className: "size-5 text-gray-500" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "flex flex-grow flex-row lg:h-screen",
          containerClassName
        ),
        children: [
          /* @__PURE__ */ jsx(
            AITutorSidebar,
            {
              onClose: () => setIsSidebarFloating(false),
              isFloating: isSidebarFloating,
              activeTab
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "flex flex-grow flex-col overflow-y-scroll bg-gray-100 p-3 lg:p-4",
                wrapperClassName
              ),
              children
            }
          )
        ]
      }
    )
  ] });
}

export { AITutorLayout as A, useClientMount as u };
