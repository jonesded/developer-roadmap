import { jsx } from 'react/jsx-runtime';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import { c as cn } from './BaseLayout_BrSKT5L_.mjs';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-lg border border-gray-200 bg-white p-2 text-black shadow-sm outline-none",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover as P, PopoverTrigger as a, PopoverContent as b };
