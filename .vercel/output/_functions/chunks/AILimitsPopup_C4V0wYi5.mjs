import { jsxs, jsx } from 'react/jsx-runtime';
import { Gift } from 'lucide-react';
import { M as Modal } from './BaseLayout_BrSKT5L_.mjs';
import { f as formatCommaNumber } from './number_D9-I_I5P.mjs';
import { b as billingDetailsOptions } from './billing_raRJBpT1.mjs';
import { q as queryClient } from './query-client_rwy39LWF.mjs';
import { useQuery } from '@tanstack/react-query';
import { a as aiLimitOptions } from './ai-course_sZQdwLbV.mjs';

function AILimitsPopup(props) {
  const { onClose, onUpgrade } = props;
  const { data: limits, isLoading } = useQuery(aiLimitOptions(), queryClient);
  const { used, limit } = limits ?? { used: 0, limit: 0 };
  const { data: userBillingDetails, isLoading: isBillingDetailsLoading } = useQuery(billingDetailsOptions(), queryClient);
  const isPaidUser = userBillingDetails?.status === "active";
  return /* @__PURE__ */ jsxs(
    Modal,
    {
      onClose,
      wrapperClassName: "rounded-xl max-w-xl w-full h-auto",
      bodyClassName: "p-6",
      overlayClassName: "items-start md:items-center",
      children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-8 text-center text-xl font-semibold", children: "Daily AI Limits" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
              "Usage: ",
              formatCommaNumber(used),
              " / ",
              formatCommaNumber(limit),
              " tokens"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
              Math.round(used / limit * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-2.5 w-full rounded-full bg-gray-200", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-2.5 rounded-full bg-yellow-500",
              style: { width: `${Math.min(100, used / limit * 100)}%` }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-gray-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Used Today" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: formatCommaNumber(used) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Daily Limit" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: formatCommaNumber(limit) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("div", { className: "space-y-3 text-gray-600", children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
          "Limit resets every 24 hours.",
          " ",
          !isPaidUser && "Consider upgrading for more tokens."
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto flex flex-col gap-2 pt-4", children: [
          !isPaidUser && /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: onUpgrade,
              className: "flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-yellow-500",
              children: [
                /* @__PURE__ */ jsx(Gift, { className: "size-4" }),
                "Upgrade to Unlimited"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "w-full rounded-lg bg-gray-200 px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-300",
              children: "Close"
            }
          )
        ] })
      ]
    }
  );
}

export { AILimitsPopup as A };
