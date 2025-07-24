import { jsxs, jsx } from 'react/jsx-runtime';
import { useQuery } from '@tanstack/react-query';
import { Zap } from 'lucide-react';
import { q as queryClient } from './query-client_B4F1D3EC.mjs';
import { a as aiLimitOptions } from './ai-course_IUwlyb1o.mjs';
import { g as getPercentage } from './number_D9-I_I5P.mjs';
import { c as cn } from './BaseLayout_C3JOBLhD.mjs';

function UpgradeSidebarCard(props) {
  const {
    onUpgrade,
    title = "Upgrade",
    description = "Get access to all features and benefits of the AI Tutor.",
    descriptionClassName,
    titleClassName,
    className,
    showLimit = true
  } = props;
  const { data: limits, isLoading: isLimitsLoading } = useQuery(
    aiLimitOptions(),
    queryClient
  );
  const { used, limit } = limits ?? { used: 0, limit: 0 };
  const totalPercentage = getPercentage(used, limit);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: onUpgrade,
      className: cn(
        "animate-fade-in mx-4 mt-4 rounded-xl bg-amber-100 p-4 text-left transition-colors hover:bg-amber-200/80",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("span", { className: "mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Zap, { className: "size-4 text-amber-600" }),
          /* @__PURE__ */ jsx("span", { className: cn("font-medium text-amber-900", titleClassName), children: title })
        ] }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "mt-1 block text-left text-xs leading-4 text-amber-700",
              descriptionClassName
            ),
            children: description
          }
        ),
        showLimit && /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsx("div", { className: "relative h-1 w-full rounded-full bg-amber-300/40", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 h-full rounded-full bg-amber-600/80",
              style: {
                width: `${totalPercentage}%`
              }
            }
          ) }),
          /* @__PURE__ */ jsxs("span", { className: "mt-2 block text-xs text-amber-700", children: [
            totalPercentage,
            "% of the daily limit used"
          ] })
        ] })
      ]
    }
  );
}

export { UpgradeSidebarCard as U };
