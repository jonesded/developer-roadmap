import { jsx, jsxs } from 'react/jsx-runtime';
import { useMutation } from '@tanstack/react-query';
import { M as Modal } from './BaseLayout_DfQviQZ5.mjs';
import { a as httpPost, q as queryClient } from './query-client_BnT_580V.mjs';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';
import { V as VerifyUpgrade } from './VerifyUpgrade_DdPJc1ui.mjs';
import { Loader2Icon } from 'lucide-react';

function UpdatePlanConfirmation(props) {
  const { planDetails, onClose, onCancel } = props;
  const toast = useToast();
  const {
    mutate: updatePlan,
    isPending,
    status
  } = useMutation(
    {
      mutationFn: (body) => {
        return httpPost(
          "/v1-update-subscription-plan",
          body
        );
      },
      onError: (error) => {
        console.error(error);
        toast.error(error?.message || "Failed to Create Customer Portal");
      }
    },
    queryClient
  );
  if (!planDetails) {
    return null;
  }
  const selectedPrice = planDetails;
  if (status === "success") {
    return /* @__PURE__ */ jsx(VerifyUpgrade, { newPriceId: selectedPrice.priceId });
  }
  return /* @__PURE__ */ jsxs(
    Modal,
    {
      onClose: isPending ? () => {
      } : onClose,
      bodyClassName: "rounded-xl bg-white p-6",
      children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-black", children: "Subscription Update" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-balance text-gray-600", children: [
          "Your plan will be updated to the",
          " ",
          /* @__PURE__ */ jsx("b", { className: "text-black", children: planDetails.interval }),
          " plan, and will be charged",
          " ",
          /* @__PURE__ */ jsxs("b", { className: "text-black", children: [
            "$",
            selectedPrice.amount,
            "/",
            selectedPrice.interval
          ] }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "rounded-md border border-gray-200 py-2 text-sm font-semibold transition-colors hover:bg-gray-50 disabled:opacity-50",
              onClick: onCancel,
              disabled: isPending,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "flex items-center justify-center rounded-md bg-purple-600 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-500 disabled:opacity-50",
              disabled: isPending,
              onClick: () => {
                updatePlan({ priceId: selectedPrice.priceId });
              },
              children: [
                isPending && /* @__PURE__ */ jsx(Loader2Icon, { className: "mr-2 size-4 animate-spin stroke-[2.5]" }),
                !isPending && "Confirm"
              ]
            }
          )
        ] })
      ]
    }
  );
}

export { UpdatePlanConfirmation as U };
