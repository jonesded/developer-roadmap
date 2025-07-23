import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountSidebar } from '../../chunks/AccountSidebar_CmRcSHZn.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_BpeWaMTO.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { p as pageProgressMessage, b as getUrlParams, c as cn } from '../../chunks/BaseLayout_B-BXcELP.mjs';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
import { useQuery, useMutation } from '@tanstack/react-query';
import { b as billingDetailsOptions, U as USER_SUBSCRIPTION_PLAN_PRICES } from '../../chunks/billing_5mov2PsZ.mjs';
import { q as queryClient, a as httpPost } from '../../chunks/query-client_CBXGK_YM.mjs';
import { U as UpgradeAccountModal } from '../../chunks/UpgradeAccountModal_vuvdVS66.mjs';
import { V as VerifyUpgrade } from '../../chunks/VerifyUpgrade_Bjaod_vc.mjs';
import { CreditCard, Zap, MessageCircleIcon, SparklesIcon, HeartHandshake, Ellipsis, AlertTriangle, CircleX, AlertCircle, RefreshCw, Calendar, ArrowRightLeft, Loader2 } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const perks = [
  {
    icon: Zap,
    text: "Unlimited AI course generations"
  },
  {
    icon: MessageCircleIcon,
    text: "Unlimited AI Chat feature usage"
  },
  {
    icon: SparklesIcon,
    text: "Early access to new features"
  },
  {
    icon: HeartHandshake,
    text: "Support the development of platform"
  },
  {
    icon: Ellipsis,
    text: "more perks coming soon!"
  }
];
function EmptyBillingScreen(props) {
  const { onUpgrade } = props;
  return /* @__PURE__ */ jsxs("div", { className: "mt-12 flex h-full w-full flex-col items-center", children: [
    /* @__PURE__ */ jsx(CreditCard, { className: "mb-3 h-12 w-12 text-gray-300" }),
    /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-semibold text-black", children: "No Active Subscription" }),
    /* @__PURE__ */ jsx("p", { className: "text-balance text-gray-700", children: "Unlock pro benefits by upgrading to a subscription" }),
    /* @__PURE__ */ jsx("div", { className: "my-8 flex flex-col gap-2", children: perks.map((perk) => /* @__PURE__ */ jsxs("p", { className: "textsm flex items-center text-gray-600", children: [
      /* @__PURE__ */ jsx(perk.icon, { className: "mr-2 h-4 w-4 text-gray-500" }),
      perk.text
    ] }, perk.text)) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onUpgrade,
        className: "inline-flex items-center justify-center rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-80 focus:outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-2",
        children: "Upgrade Account"
      }
    )
  ] });
}

function BillingWarning(props) {
  const {
    message,
    onButtonClick,
    buttonText,
    isLoading,
    icon: Icon = AlertTriangle
  } = props;
  return /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-600", children: [
    /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }),
    /* @__PURE__ */ jsxs("span", { children: [
      message,
      buttonText && /* @__PURE__ */ jsx(
        "button",
        {
          disabled: isLoading,
          onClick: () => {
            onButtonClick?.();
          },
          className: "font-semibold underline underline-offset-4 disabled:cursor-not-allowed disabled:opacity-50 ml-0.5",
          children: buttonText
        }
      )
    ] })
  ] });
}

function BillingPage() {
  const toast = useToast();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showVerifyUpgradeModal, setShowVerifyUpgradeModal] = useState(false);
  const { data: billingDetails, isPending: isLoadingBillingDetails } = useQuery(
    billingDetailsOptions(),
    queryClient
  );
  const willBeCanceled = billingDetails?.cancelAtPeriodEnd;
  const isCanceled = billingDetails?.status === "canceled";
  const isPastDue = billingDetails?.status === "past_due";
  const isIncomplete = billingDetails?.status === "incomplete";
  const isIncompleteExpired = billingDetails?.status === "incomplete_expired";
  const {
    mutate: createCustomerPortal,
    isSuccess: isCreatingCustomerPortalSuccess,
    isPending: isCreatingCustomerPortal
  } = useMutation(
    {
      mutationFn: (body) => {
        return httpPost(
          "/v1-create-customer-portal",
          body
        );
      },
      onSuccess: (data) => {
        window.location.href = data.url;
      },
      onError: (error) => {
        console.error(error);
        toast.error(error?.message || "Failed to Create Customer Portal");
      }
    },
    queryClient
  );
  useEffect(() => {
    if (isLoadingBillingDetails) {
      return;
    }
    pageProgressMessage.set("");
    const shouldVerifyUpgrade = getUrlParams()?.s === "1";
    if (shouldVerifyUpgrade) {
      setShowVerifyUpgradeModal(true);
    }
  }, [isLoadingBillingDetails]);
  if (isLoadingBillingDetails || !billingDetails) {
    return null;
  }
  const selectedPlanDetails = USER_SUBSCRIPTION_PLAN_PRICES.find(
    (plan) => plan.priceId === billingDetails?.priceId
  );
  const priceDetails = selectedPlanDetails;
  const formattedNextBillDate = new Date(
    billingDetails?.currentPeriodEnd || ""
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const modals = /* @__PURE__ */ jsxs(Fragment, { children: [
    showUpgradeModal && /* @__PURE__ */ jsx(
      UpgradeAccountModal,
      {
        onClose: () => {
          setShowUpgradeModal(false);
        }
      }
    ),
    showVerifyUpgradeModal && /* @__PURE__ */ jsx(VerifyUpgrade, {})
  ] });
  if (billingDetails?.status === "none" || isIncompleteExpired) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      modals,
      /* @__PURE__ */ jsx(EmptyBillingScreen, { onUpgrade: () => setShowUpgradeModal(true) })
    ] });
  }
  if (isCanceled) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      modals,
      /* @__PURE__ */ jsx(
        BillingWarning,
        {
          icon: CircleX,
          message: "Your subscription has been canceled.",
          buttonText: "Reactivate?",
          onButtonClick: () => {
            if (willBeCanceled) {
              createCustomerPortal({});
            } else {
              setShowUpgradeModal(true);
            }
          },
          isLoading: isCreatingCustomerPortal || isCreatingCustomerPortalSuccess
        }
      ),
      /* @__PURE__ */ jsx(EmptyBillingScreen, { onUpgrade: () => setShowUpgradeModal(true) })
    ] });
  }
  if (isIncomplete) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      modals,
      /* @__PURE__ */ jsx(
        BillingWarning,
        {
          icon: AlertCircle,
          message: "Your subscription is incomplete ",
          buttonText: "please pay invoice on Stripe.",
          onButtonClick: () => {
            createCustomerPortal({});
          },
          isLoading: isCreatingCustomerPortal || isCreatingCustomerPortalSuccess
        }
      ),
      /* @__PURE__ */ jsx(EmptyBillingScreen, { onUpgrade: () => setShowUpgradeModal(true) })
    ] });
  }
  if (!priceDetails) {
    return /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Uh oh!" }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
        "We couldn't find your subscription details. Please contact support at",
        /* @__PURE__ */ jsx("a", { className: "text-blue-500 underline", href: "mailto:info@roadmap.sh", children: "info@roadmap.sh" }),
        "."
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    modals,
    /* @__PURE__ */ jsxs("div", { className: "mt-1", children: [
      isPastDue && /* @__PURE__ */ jsx(
        BillingWarning,
        {
          message: "We were not able to charge your card.",
          buttonText: "Update payment information.",
          onButtonClick: () => {
            createCustomerPortal({});
          },
          isLoading: isCreatingCustomerPortal || isCreatingCustomerPortalSuccess
        }
      ),
      willBeCanceled && /* @__PURE__ */ jsx(
        BillingWarning,
        {
          icon: CircleX,
          message: `Your subscription will be canceled on ${formattedNextBillDate}. `,
          buttonText: "Reactivate?",
          onButtonClick: () => {
            createCustomerPortal({});
          },
          isLoading: isCreatingCustomerPortal || isCreatingCustomerPortalSuccess
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-semibold text-black", children: "Current Subscription" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Thank you for being a pro member. Your plan details are below." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gray-100", children: /* @__PURE__ */ jsx(RefreshCw, { className: "size-5 text-gray-600" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs tracking-wider text-gray-400 uppercase", children: "Payment" }),
          /* @__PURE__ */ jsxs("h3", { className: "flex items-baseline text-lg font-semibold text-black", children: [
            "$",
            priceDetails.amount,
            /* @__PURE__ */ jsxs("span", { className: "ml-1 text-sm font-normal text-gray-500", children: [
              "/ ",
              priceDetails.interval
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "mt-6 pt-6",
            !isIncomplete && "border-t border-gray-100",
            isIncomplete && "-mt-6"
          ),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gray-100", children: /* @__PURE__ */ jsx(Calendar, { className: "size-5 text-gray-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs tracking-wider text-gray-400 uppercase", children: willBeCanceled ? "Expires On" : "Renews On" }),
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-black", children: formattedNextBillDate })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex gap-3 max-sm:flex-col", children: [
              !willBeCanceled && /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-hidden max-sm:grow",
                  onClick: () => {
                    setShowUpgradeModal(true);
                  },
                  children: [
                    /* @__PURE__ */ jsx(ArrowRightLeft, { className: "mr-2 h-4 w-4" }),
                    "Switch Plan"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
                  onClick: () => {
                    createCustomerPortal({});
                  },
                  disabled: isCreatingCustomerPortal || isCreatingCustomerPortalSuccess,
                  children: [
                    isCreatingCustomerPortal || isCreatingCustomerPortalSuccess ? /* @__PURE__ */ jsx(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(CreditCard, { className: "mr-2 h-4 w-4" }),
                    "Manage Subscription"
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}

const $$Billing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Billing", "description": "", "noIndex": true, "initialLoadingMessage": "Loading billing details" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "billing", "activePageTitle": "Billing" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BillingPage", BillingPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Billing/BillingPage", "client:component-export": "BillingPage" })} ` })} ` })}`;
}, "/workspace/src/pages/account/billing.astro", void 0);

const $$file = "/workspace/src/pages/account/billing.astro";
const $$url = "/account/billing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Billing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
