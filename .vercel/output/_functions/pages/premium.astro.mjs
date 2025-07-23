import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { c as cn, i as isLoggedIn, $ as $$BaseLayout } from '../chunks/BaseLayout_B-BXcELP.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Star, Users2, Bot, GitPullRequest, Lock, Play, Zap, Clock, Book, Wand2, PartyPopper, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { u as useToast } from '../chunks/use-toast_BYLkOsfO.mjs';
import { a as httpPost, q as queryClient } from '../chunks/query-client_CBXGK_YM.mjs';
import { U as USER_SUBSCRIPTION_PLAN_PRICES, b as billingDetailsOptions } from '../chunks/billing_5mov2PsZ.mjs';
import { V as VideoModal } from '../chunks/VideoModal_CB0u1dGE.mjs';
import { s as showLoginPopup } from '../chunks/popup_DWUkHIfQ.mjs';
import { U as UpdatePlanConfirmation } from '../chunks/UpdatePlanConfirmation_CySnlcNM.mjs';
export { renderers } from '../renderers.mjs';

function CredibilityItem(props) {
  const Icon = props.icon;
  return /* @__PURE__ */ jsxs("div", { className: "group flex flex-col items-center text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900/50", children: /* @__PURE__ */ jsx(
      Icon,
      {
        className: cn(`h-6 w-6`, props.iconClassName),
        strokeWidth: 1.5
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white", children: props.value }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-sm font-medium text-slate-400", children: props.label }),
    /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-xs text-slate-500", children: props.subLabel })
  ] });
}
function CredibilityStats() {
  return /* @__PURE__ */ jsx("div", { className: "mb-10 hidden md:block", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-slate-700 bg-slate-800/50 p-8 md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 md:mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white md:text-4xl", children: "The Platform Developers Trust" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-slate-400", children: "Join millions of developers in their learning journey" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-4", children: [
      /* @__PURE__ */ jsx(
        CredibilityItem,
        {
          icon: Star,
          iconClassName: "text-yellow-400 fill-current",
          value: "#6",
          label: "Most Starred Project",
          subLabel: "Among 200M+ Repositories"
        }
      ),
      /* @__PURE__ */ jsx(
        CredibilityItem,
        {
          icon: Users2,
          iconClassName: "text-blue-400",
          value: "2.1M+",
          label: "Active Developers",
          subLabel: "Learning & Growing Daily"
        }
      ),
      /* @__PURE__ */ jsx(
        CredibilityItem,
        {
          icon: Bot,
          iconClassName: "text-indigo-400",
          value: "37K+",
          label: "Discord Members",
          subLabel: "Active Community Support"
        }
      ),
      /* @__PURE__ */ jsx(
        CredibilityItem,
        {
          icon: GitPullRequest,
          iconClassName: "text-purple-400",
          value: "1000+",
          label: "Contributors",
          subLabel: "Community Driven Project"
        }
      )
    ] })
  ] }) });
}

function FeatureCard(props) {
  const {
    title,
    description,
    duration = "2:30",
    videoId,
    thumbnail,
    onClick,
    isComingSoon = false
  } = props;
  if (isComingSoon) {
    return /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-lg border border-dashed border-slate-600/50 bg-slate-800/30 p-4 text-left opacity-90", children: [
      /* @__PURE__ */ jsx("div", { className: "relative block aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-indigo-900/20 to-purple-900/20", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm", children: /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6 text-indigo-400/70", strokeWidth: 1.5 }) }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-1 text-sm font-medium text-slate-100", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs leading-relaxed text-slate-500", children: description })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick,
      className: "group relative overflow-hidden rounded-lg border border-slate-700 bg-[#151F33] p-4 text-left hover:border-blue-400",
      children: [
        /* @__PURE__ */ jsx("span", { className: "group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-slate-900/50", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: thumbnail,
            alt: title,
            className: "absolute inset-0 h-full w-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100", children: /* @__PURE__ */ jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm", children: /* @__PURE__ */ jsx(Play, { className: "h-6 w-6 fill-current text-white", strokeWidth: 2 }) }) }),
        /* @__PURE__ */ jsx("span", { className: "absolute top-1 right-1 rounded bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm", children: duration }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-1 text-sm font-medium text-white", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs leading-relaxed text-slate-400", children: description })
        ] })
      ]
    }
  );
}

function StatsItem(props) {
  const Icon = props.icon;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-purple-500", strokeWidth: 1.5 }),
    /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: props.text })
  ] });
}

const paidFeaturesList = [
  "Unlimited Courses and Guides",
  "Unlimited AI Roadmaps",
  "Chat History Access",
  "AI tutor on Roadmaps",
  "Custom Roadmaps (up to 100)",
  "AI-Powered Roadmap Editor",
  "Peronsal AI Coach",
  "and more..."
];
const features = [
  {
    title: "Chat with Roadmaps",
    description: "Ask questions and get instant answers on any roadmap through AI",
    videoId: "fq0UgNcj3Ek",
    thumbnail: "https://assets.roadmap.sh/guest/chat-with-roadmaps-ew2l9.png",
    duration: "2:17"
  },
  {
    title: "Unlimited AI Courses",
    description: "No more paying for expensive courses, create unlimited courses with AI",
    videoId: "uCcQNhdVUVQ",
    thumbnail: "https://assets.roadmap.sh/guest/ai-courses-m07ra.png",
    duration: "3:07"
  },
  {
    title: "In-depth Guides",
    description: "Create unlimited personalized in-depth learning guides with AI",
    videoId: "5kwYjCg2Lu4",
    thumbnail: "https://assets.roadmap.sh/guest/ai-guides-s4bjj.png",
    duration: "1:33"
  },
  {
    title: "AI as Learning Companion",
    description: "Use AI-powered learning companion to accelerate your roadmap progress",
    videoId: "Jso_HRviEOE",
    thumbnail: "https://assets.roadmap.sh/guest/roadmap-ai-tools-adhqq.png",
    duration: "2:45",
    startTime: "18"
  },
  {
    title: "Your Personal Coach",
    description: "Get career guidance, roadmap and personalized growth suggestions",
    videoId: "77VwAeFmoIw",
    thumbnail: "https://assets.roadmap.sh/guest/career-guidance-t2mpu.png",
    duration: "3:45",
    startTime: "4"
  },
  {
    title: "Learn Roadmap Topics",
    description: "Learn roadmap topics directly from within the nodes without leaving the roadmap",
    videoId: "0jZ1Lse1Y3E",
    thumbnail: "https://assets.roadmap.sh/guest/smarter-roadmaps-f46ku.png",
    duration: "3:11",
    startTime: "5"
  },
  {
    title: "Test Yourself",
    description: "Test your knowledge and prepare for interviews with AI",
    videoId: "ScruGC8uzjo",
    thumbnail: "https://assets.roadmap.sh/guest/test-yourself-uwzqo.png",
    duration: "2:15"
  },
  {
    title: "Powerful Roadmap Editor",
    description: "Create and edit roadmaps with ease using our powerful roadmap editor",
    videoId: "L2HZIHIgwOI",
    thumbnail: "https://assets.roadmap.sh/guest/ai-based-roadmap-editor-ochm8.png",
    duration: "1:30"
  },
  {
    title: "Early Access to New Features",
    description: "We have more amazing features coming soon! Be the first to try them out!",
    isComingSoon: true
  }
];

function PremiumPage() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [switchPlanDetails, setSwitchPlanDetails] = useState(null);
  const toast = useToast();
  useEffect(() => {
    window?.fireEvent?.({
      action: "tutor_pricing",
      category: "ai_tutor",
      label: "Clicked Upgrade to Pro"
    });
  }, []);
  const {
    mutate: createCheckoutSession,
    isPending: isCreatingCheckoutSession
  } = useMutation(
    {
      mutationFn: (body) => {
        return httpPost(
          "/v1-create-subscription-checkout-session",
          body
        );
      },
      onSuccess: (data) => {
        window.location.href = data.checkoutUrl;
      },
      onError: (error) => {
        console.error(error);
        toast.error(error?.message || "Failed to create checkout session");
      }
    },
    queryClient
  );
  const monthlyPlan = USER_SUBSCRIPTION_PLAN_PRICES.find(
    (p) => p.interval === "month"
  );
  const yearlyPlan = USER_SUBSCRIPTION_PLAN_PRICES.find(
    (p) => p.interval === "year"
  );
  const { data: billingDetails } = useQuery(
    billingDetailsOptions(),
    queryClient
  );
  const isSubscriptionCanceled = ["canceled", "incomplete_expired"].includes(
    billingDetails?.status || ""
  );
  const currentPriceId = isSubscriptionCanceled ? null : billingDetails?.priceId;
  const currentPlan = USER_SUBSCRIPTION_PLAN_PRICES.find(
    (plan) => plan.priceId === currentPriceId
  );
  const activeVideoStartTime = features.find((feature) => feature.videoId === activeVideoId)?.startTime || "0";
  function handleUpgrade(plan) {
    if (!isLoggedIn()) {
      showLoginPopup();
      return;
    }
    if (!plan) {
      return;
    }
    setSelectedPlan(plan.interval);
    if (currentPriceId && plan.priceId !== currentPriceId) {
      setSwitchPlanDetails(plan);
      return;
    }
    const currentUrlPath = window.location.pathname;
    const encodedCurrentUrlPath = encodeURIComponent(currentUrlPath);
    const successPage = `/thank-you?next=${encodedCurrentUrlPath}&s=1`;
    window?.fireEvent?.({
      action: "tutor_checkout",
      category: "ai_tutor",
      label: "Checkout Started"
    });
    createCheckoutSession(
      {
        priceId: plan.priceId,
        success: successPage,
        cancel: `${currentUrlPath}?s=0`
      },
      {
        onSuccess: () => {
          window?.fireEvent?.({
            action: `tutor_checkout_${plan.interval === "month" ? "mo" : "an"}`,
            category: "ai_tutor",
            label: `${plan.interval} Plan Checkout Started`
          });
        }
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-slate-900 to-black", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto mb-10 max-w-4xl lg:mb-20", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 inline-flex items-center gap-2 rounded-full bg-slate-800/50 px-4 py-2 text-blue-400", children: [
          /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Unlock All Premium Features" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mb-6 text-4xl font-bold text-balance text-white md:text-5xl", children: "Learn Faster with AI" }),
        /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg text-balance text-slate-400 md:text-xl", children: "Generate unlimited courses about any topic, get career guidance and instant answers from AI, test your skills and more" }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#pricing",
            className: "group mx-auto block rounded-2xl bg-gradient-to-b from-indigo-600 to-indigo-700 px-8 py-4 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/25",
            children: [
              /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center gap-3 text-lg text-white sm:hidden", children: "Upgrade now" }),
              /* @__PURE__ */ jsxs("span", { className: "hidden items-center justify-center gap-3 text-lg sm:flex", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-indigo-100", children: "Upgrade for just" }),
                /* @__PURE__ */ jsx("span", { className: "font-bold text-white", children: "$10/month" }),
                /* @__PURE__ */ jsx("span", { className: "text-white transition-transform duration-200 group-hover:translate-x-1", children: "→" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-5 flex items-center justify-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3 text-white" }),
          /* @__PURE__ */ jsx("span", { className: "text-indigo-200", children: "2 months free with yearly plan" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mb-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:mb-20", children: [
        /* @__PURE__ */ jsx(StatsItem, { icon: Users2, text: "+2.1M Learners" }),
        /* @__PURE__ */ jsx(StatsItem, { icon: Bot, text: "+160K Roadmaps" }),
        /* @__PURE__ */ jsx(StatsItem, { icon: Book, text: "+150K Courses" }),
        /* @__PURE__ */ jsx(StatsItem, { icon: Wand2, text: "+1M AI Chats" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-10 lg:mb-20", children: [
        /* @__PURE__ */ jsxs("p", { className: "mb-8 text-center text-sm text-slate-400", children: [
          /* @__PURE__ */ jsx(PartyPopper, { className: "relative -top-0.5 mr-2 inline-block h-4 w-4 text-blue-400" }),
          "Paid users",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-bold text-blue-400", children: "get unlimited access" }),
          " ",
          "to all the features below."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 md:grid-cols-3", children: features.map((feature, index) => /* @__PURE__ */ jsx(
          FeatureCard,
          {
            title: feature.title,
            description: feature.description,
            videoId: feature.videoId,
            thumbnail: feature.thumbnail,
            duration: feature.duration,
            isComingSoon: feature.isComingSoon,
            onClick: feature.videoId ? () => setActiveVideoId(feature.videoId) : void 0
          },
          feature.videoId || `coming-soon-${index}`
        )) })
      ] }),
      /* @__PURE__ */ jsx(CredibilityStats, {}),
      /* @__PURE__ */ jsxs("div", { className: "mb-20 pt-10", id: "pricing", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-6 text-center text-3xl font-bold text-white lg:mb-12", children: "Choose Your Plan" }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-5xl gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-slate-700 bg-slate-800/50 p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-4 text-2xl font-bold text-white", children: "Monthly" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-5xl font-bold text-white", children: "$10" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "/ month" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-400", children: "Perfect for continuous learning" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleUpgrade(monthlyPlan),
                disabled: isCreatingCheckoutSession || currentPlan?.interval === "month",
                className: `mb-8 w-full rounded-lg px-6 py-3 font-medium transition-colors disabled:opacity-50  ${currentPlan?.interval === "month" ? "bg-gray-800 text-white cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`,
                children: isCreatingCheckoutSession && selectedPlan === "month" ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" }),
                  "Processing..."
                ] }) : currentPlan?.interval === "month" ? "Current Plan" : currentPlan ? "Switch to Monthly Plan" : "Start Monthly Plan"
              }
            ),
            /* @__PURE__ */ jsx("ul", { className: "space-y-4 text-slate-300", children: paidFeaturesList.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(
                CheckCircle,
                {
                  className: "mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-400",
                  strokeWidth: 2
                }
              ),
              /* @__PURE__ */ jsx("span", { children: feature })
            ] }, feature)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl border-2 border-blue-400 bg-slate-800/50 p-8", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 transform", children: /* @__PURE__ */ jsx("span", { className: "rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white", children: "Most Popular" }) }),
            /* @__PURE__ */ jsx("h3", { className: "mb-4 text-2xl font-bold text-white", children: "Yearly" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-5xl font-bold text-white", children: "$100" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "/ year" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 font-medium text-blue-400", children: "Save $20 (2 months free)" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleUpgrade(yearlyPlan),
                disabled: isCreatingCheckoutSession || currentPlan?.interval === "year",
                className: `mb-8 w-full rounded-lg px-6 py-3 font-medium transition-colors disabled:opacity-50  ${currentPlan?.interval === "year" ? "bg-green-600 text-white cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`,
                children: isCreatingCheckoutSession && selectedPlan === "year" ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" }),
                  "Processing..."
                ] }) : currentPlan?.interval === "year" ? "Current Plan" : currentPlan ? "Switch to Yearly Plan" : "Start Yearly Plan"
              }
            ),
            /* @__PURE__ */ jsx("ul", { className: "space-y-4 text-slate-300", children: paidFeaturesList.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(
                CheckCircle,
                {
                  className: "mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-400",
                  strokeWidth: 2
                }
              ),
              /* @__PURE__ */ jsx("span", { children: feature })
            ] }, feature)) })
          ] })
        ] })
      ] })
    ] }),
    activeVideoId && /* @__PURE__ */ jsx(
      VideoModal,
      {
        videoId: activeVideoId,
        startTime: activeVideoStartTime,
        onClose: () => setActiveVideoId(null)
      }
    ),
    switchPlanDetails && /* @__PURE__ */ jsx(
      UpdatePlanConfirmation,
      {
        planDetails: switchPlanDetails,
        onClose: () => setSwitchPlanDetails(null),
        onCancel: () => setSwitchPlanDetails(null)
      }
    )
  ] });
}

const $$Premium = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Premium Features - AI-Powered Learning | roadmap.sh", "description": "Unlock unlimited AI-powered learning with roadmap.sh Premium. Generate unlimited courses, get career guidance, instant AI answers, and access exclusive features for just $10/month.", "ogImageUrl": "https://assets.roadmap.sh/guest/ai-tutor-og-6hm9j.png", "keywords": [
    "roadmap.sh premium",
    "ai learning platform",
    "developer education",
    "programming courses",
    "career guidance",
    "ai tutor",
    "coding roadmaps",
    "tech learning subscription",
    "developer tools",
    "unlimited courses",
    "ai-powered education",
    "programming mentor"
  ], "permalink": "/premium", "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "roadmap.sh Premium",
      description: "AI-powered learning platform for developers with unlimited courses, career guidance, and instant AI support.",
      image: "https://assets.roadmap.sh/guest/ai-tutor-og-6hm9j.png",
      brand: {
        "@type": "Brand",
        name: "roadmap.sh"
      },
      offers: [
        {
          "@type": "Offer",
          name: "Monthly Plan",
          price: "10.00",
          priceCurrency: "USD",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          url: "https://roadmap.sh/premium",
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "US",
            returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted"
          },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: 0,
              currency: "USD"
            },
            doesNotShip: true
          }
        },
        {
          "@type": "Offer",
          name: "Yearly Plan",
          price: "100.00",
          priceCurrency: "USD",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
          url: "https://roadmap.sh/premium",
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "US",
            returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted"
          },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: 0,
              currency: "USD"
            },
            doesNotShip: true
          }
        }
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        ratingCount: "1000"
      }
    }
  ] }, { "changelog-banner": ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PremiumPage", PremiumPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Premium/PremiumPage", "client:component-export": "PremiumPage" })}   `, "open-source-banner": ($$result2) => renderTemplate`<div></div>` })}`;
}, "/workspace/src/pages/premium.astro", void 0);

const $$file = "/workspace/src/pages/premium.astro";
const $$url = "/premium";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Premium,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
