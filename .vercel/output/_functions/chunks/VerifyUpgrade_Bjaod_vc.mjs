import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { b as billingDetailsOptions } from './billing_5mov2PsZ.mjs';
import { q as queryClient } from './query-client_CBXGK_YM.mjs';
import { d as deleteUrlParam, M as Modal } from './BaseLayout_B-BXcELP.mjs';

function VerifyUpgrade(props) {
  const { newPriceId } = props;
  const { data: userBillingDetails } = useQuery(
    {
      ...billingDetailsOptions(),
      refetchInterval: 1e3
    },
    queryClient
  );
  useEffect(() => {
    if (!userBillingDetails) {
      return;
    }
    if (userBillingDetails.status === "active" && (newPriceId ? userBillingDetails.priceId === newPriceId : true)) {
      if (!newPriceId) {
        window?.fireEvent({
          action: `tutor_purchase_${userBillingDetails.interval === "month" ? "mo" : "an"}`,
          category: "ai_tutor",
          label: `${userBillingDetails.interval} Plan Purchased`
        });
      }
      deleteUrlParam("s");
      window.location.reload();
    }
  }, [userBillingDetails]);
  useEffect(() => {
    if (newPriceId) {
      return;
    }
    window?.fireEvent({
      action: "tutor_purchase",
      category: "ai_tutor",
      label: "Subscription Activated"
    });
    window?.fireEvent({
      action: "tutor_ty",
      category: "ai_tutor",
      label: "Thank You Page Visited"
    });
  }, [newPriceId]);
  return /* @__PURE__ */ jsxs(
    Modal,
    {
      onClose: () => {
      },
      bodyClassName: "rounded-xl bg-white p-6",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "mb-3 h-12 w-12 text-green-600" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-black", children: "Subscription Activated" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-center text-balance text-gray-600", children: "Your subscription has been activated successfully." }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-center text-balance text-gray-600", children: [
          "It might take a minute for the changes to reflect. We will",
          " ",
          /* @__PURE__ */ jsx("b", { className: "text-black", children: "reload" }),
          " the page for you."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "my-6 flex animate-pulse items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin stroke-[2.5px] text-green-600" }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Please wait..." })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-center text-sm text-gray-500", children: [
          "If it takes longer than expected, please email us at",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:info@roadmap.sh",
              className: "text-blue-600 underline underline-offset-2 hover:text-blue-700",
              children: "info@roadmap.sh"
            }
          ),
          "."
        ] })
      ]
    }
  );
}

export { VerifyUpgrade as V };
