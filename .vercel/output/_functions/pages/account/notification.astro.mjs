import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountSidebar } from '../../chunks/AccountSidebar_C_DQmMJ7.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { p as pageProgressMessage, e as httpGet, n as httpPatch } from '../../chunks/BaseLayout_DfQviQZ5.mjs';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
import { XIcon } from 'lucide-react';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_C4SmqpML.mjs';
export { renderers } from '../../renderers.mjs';

function AcceptIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "#000",
      className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.5 12.75l6 6 9-13.5"
        }
      )
    }
  );
}

function NotificationPage() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState("");
  const lostNotifications = async () => {
    const { error: error2, response } = await httpGet(
      `${"https://api.hnmdevs.com"}/v1-get-invitation-list`
    );
    if (error2 || !response) {
      toast.error(error2?.message || "Something went wrong");
      return;
    }
    setNotifications(response);
  };
  async function respondInvitation(status, inviteId) {
    setIsLoading(true);
    setError("");
    const { response, error: error2 } = await httpPatch(
      `${"https://api.hnmdevs.com"}/v1-respond-invite/${inviteId}`,
      {
        status
      }
    );
    if (error2 || !response) {
      setError(error2?.message || "Something went wrong");
      setIsLoading(false);
      return;
    }
    if (status === "accept") {
      window.location.href = `/team/activity?t=${response.teamId}`;
    } else {
      window.dispatchEvent(
        new CustomEvent("refresh-notification", {
          detail: {
            count: notifications.length - 1
          }
        })
      );
      setNotifications(
        notifications.filter((notification) => notification._id !== inviteId)
      );
      setIsLoading(false);
    }
  }
  useEffect(() => {
    lostNotifications().finally(() => {
      pageProgressMessage.set("");
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 hidden md:block", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "Notification" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-400", children: "Manage your notifications" })
    ] }),
    notifications.length === 0 && /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center justify-center", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-400", children: [
      "No notifications, you can",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/team/new",
          className: "text-blue-500 underline hover:no-underline",
          children: "create a team"
        }
      ),
      " ",
      "and invite your friends to join."
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: notifications.map((notification) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-md border p-2", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-medium text-gray-900", children: notification.name }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            disabled: isLoading,
            className: "inline-flex rounded-sm border p-1 hover:bg-gray-50 disabled:opacity-75",
            onClick: () => respondInvitation("accept", notification?._id),
            children: /* @__PURE__ */ jsx(AcceptIcon, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            disabled: isLoading,
            className: "inline-flex rounded-sm border p-1 hover:bg-gray-50 disabled:opacity-75",
            onClick: () => respondInvitation("reject", notification?._id),
            children: /* @__PURE__ */ jsx(XIcon, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })) })
  ] });
}

const $$Notification = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Notification", "description": "", "noIndex": true, "initialLoadingMessage": "Loading notification" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "notification", "activePageTitle": "Notification" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "NotificationPage", NotificationPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Notification/NotificationPage", "client:component-export": "NotificationPage" })} ` })} ` })}`;
}, "/workspace/src/pages/account/notification.astro", void 0);

const $$file = "/workspace/src/pages/account/notification.astro";
const $$url = "/account/notification";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Notification,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
