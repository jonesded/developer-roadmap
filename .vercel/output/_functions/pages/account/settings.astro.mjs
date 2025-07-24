import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountSidebar } from '../../chunks/AccountSidebar_CVrXcpx7.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_DPxxQUwD.mjs';
import { f as $$Popup, c as cn, p as pageProgressMessage, n as httpPatch, h as httpPost, e as httpGet } from '../../chunks/BaseLayout_C3JOBLhD.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
export { renderers } from '../../renderers.mjs';

const $$DeleteAccountPopup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Popup", $$Popup, { "id": "delete-account-popup", "title": "Delete Account", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="-mt-2.5"> <p>
This will permanently delete your account and all your associated data
      including your progress.
</p> <p class="text-black font-medium -mb-2 mt-3 text-base">Please type "delete" to confirm.</p> ${renderComponent($$result2, "DeleteAccountForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/DeleteAccount/DeleteAccountForm", "client:component-export": "DeleteAccountForm" })} </div> ` })}`;
}, "/workspace/src/components/DeleteAccount/DeleteAccountPopup.astro", void 0);

const $$DeleteAccount = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DeleteAccountPopup", $$DeleteAccountPopup, {})} ${maybeRenderHead()}<h2 class="text-xl font-bold sm:text-2xl">Delete Account</h2> <p class="mt-2 text-gray-400">
Permanently remove your account from the roadmap.sh. This cannot be undone and all your progress and data will be lost.
</p> <button data-popup="delete-account-popup" class="mt-4 w-full rounded-lg bg-red-600 py-2 text-base font-regular text-white outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-1">
Delete Account
</button>`;
}, "/workspace/src/components/DeleteAccount/DeleteAccount.astro", void 0);

function UpdateEmailForm(props) {
  const {
    authProvider,
    currentEmail,
    newEmail: defaultNewEmail = "",
    onSendVerificationCode,
    onVerificationCancel
  } = props;
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(defaultNewEmail !== "");
  const [newEmail, setNewEmail] = useState(defaultNewEmail);
  const [isResendDone, setIsResendDone] = useState(false);
  const handleSentVerificationCode = async (e) => {
    e.preventDefault();
    if (!newEmail || !newEmail.includes("@") || isSubmitted) {
      return;
    }
    setIsLoading(true);
    pageProgressMessage.set("Sending verification code");
    const { response, error } = await httpPatch(
      `${"https://api.roadmap.sh"}/v1-update-user-email`,
      { email: newEmail }
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      setIsLoading(false);
      pageProgressMessage.set("");
      return;
    }
    pageProgressMessage.set("");
    setIsLoading(false);
    setIsSubmitted(true);
    onSendVerificationCode?.(newEmail);
  };
  const handleResendVerificationCode = async () => {
    if (isResendDone) {
      toast.error("You have already resent the verification code");
      return;
    }
    setIsLoading(true);
    pageProgressMessage.set("Resending verification code");
    const { response, error } = await httpPatch(
      `${"https://api.roadmap.sh"}/v1-resend-email-verification-code`,
      { email: newEmail }
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      setIsLoading(false);
      pageProgressMessage.set("");
      return;
    }
    toast.success("Verification code has been resent");
    pageProgressMessage.set("");
    setIsResendDone(true);
    setIsLoading(false);
  };
  const handleCancelEmailVerification = async () => {
    setIsLoading(true);
    pageProgressMessage.set("Cancelling email verification");
    const { response, error } = await httpPatch(
      `${"https://api.roadmap.sh"}/v1-cancel-email-verification`,
      {}
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      setIsLoading(false);
      pageProgressMessage.set("");
      return;
    }
    pageProgressMessage.set("");
    onVerificationCancel?.();
    setIsSubmitted(false);
    setNewEmail("");
    setIsLoading(false);
  };
  if (authProvider && authProvider !== "email") {
    return /* @__PURE__ */ jsxs("div", { className: "block", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold sm:text-2xl", children: "Update Email" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-2 text-gray-400", children: [
        "You have used ",
        authProvider,
        " when signing up. Please set your password first."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "current-email",
            className: "text-sm leading-none text-slate-500",
            children: "Current Email"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "current-email",
            id: "current-email",
            autoComplete: "current-email",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            required: true,
            disabled: true,
            value: currentEmail
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 rounded-lg border border-red-600 px-2 py-1 text-red-600", children: "Please set your password first to update your email." })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 block", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold sm:text-2xl", children: "Update Email" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-400", children: "Use the form below to update your email." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSentVerificationCode, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "current-email",
            className: "text-sm leading-none text-slate-500",
            children: "Current Email"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "current-email",
            id: "current-email",
            autoComplete: "current-email",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            required: true,
            disabled: true,
            value: currentEmail
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn("flex w-full flex-col", {
            "rounded-lg border border-green-500 p-3": isSubmitted
          }),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "new-email",
                  className: "text-sm leading-none text-slate-500",
                  children: "New Email"
                }
              ),
              isSubmitted && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleResendVerificationCode,
                  disabled: isLoading || isResendDone,
                  className: "flex items-center gap-1 text-sm font-medium leading-none text-green-600 transition-colors hover:text-green-700",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Resend Verification Link" }),
                    /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Resend Code" })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "new-email",
                id: "new-email",
                autoComplete: "new-email",
                className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
                required: true,
                placeholder: "Enter new email",
                value: newEmail,
                onChange: (e) => setNewEmail(e.target.value),
                disabled: isSubmitted
              }
            ),
            !isSubmitted && /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isLoading || !newEmail || !newEmail.includes("@") || isSubmitted,
                className: "mt-3 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",
                children: isLoading ? "Please wait..." : "Send Verification Link"
              }
            ),
            isSubmitted && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: handleCancelEmailVerification,
                  disabled: isLoading,
                  className: "font-regular mt-4 w-full rounded-lg border border-red-600 py-2 text-sm text-red-600 outline-hidden transition-colors hover:bg-red-500 hover:text-white focus:ring-2 focus:ring-red-500 focus:ring-offset-1",
                  children: "Cancel Update"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "mt-3 flex items-center gap-2 rounded-lg bg-green-100 p-4", children: /* @__PURE__ */ jsxs("span", { className: "text-sm text-green-800", children: [
                "A verification link has been sent to your",
                " ",
                /* @__PURE__ */ jsx("span", { children: "new email address" }),
                ". Please follow the instructions in email to verify and update your email."
              ] }) })
            ] })
          ]
        }
      )
    ] })
  ] });
}

function UpdatePasswordForm(props) {
  const { authProvider } = props;
  const toast = useToast();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (newPassword !== newPasswordConfirmation) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }
    const { response, error } = await httpPost(
      `${"https://api.roadmap.sh"}/v1-update-password`,
      {
        oldPassword: authProvider === "email" ? currentPassword : "social-auth",
        password: newPassword,
        confirmPassword: newPasswordConfirmation
      }
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      setIsLoading(false);
      return;
    }
    setCurrentPassword("");
    setNewPassword("");
    setNewPasswordConfirmation("");
    toast.success("Password updated successfully");
    setIsLoading(false);
    setTimeout(() => {
      window.location.reload();
    }, 1e3);
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 hidden md:block", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "Password" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-400", children: "Use the form below to update your password." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      authProvider === "email" && /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "current-password",
            className: "text-sm leading-none text-slate-500",
            children: "Current Password"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            disabled: authProvider !== "email",
            type: "password",
            name: "current-password",
            id: "current-password",
            autoComplete: "current-password",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-100",
            required: true,
            minLength: 6,
            placeholder: "Current password",
            value: currentPassword,
            onInput: (e) => setCurrentPassword(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "new-password",
            className: "text-sm leading-none text-slate-500",
            children: "New Password"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            name: "new-password",
            id: "new-password",
            autoComplete: "new-password",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            required: true,
            minLength: 6,
            placeholder: "New password",
            value: newPassword,
            onInput: (e) => setNewPassword(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "new-password-confirmation",
            className: "text-sm leading-none text-slate-500",
            children: "Confirm New Password"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            name: "new-password-confirmation",
            id: "new-password-confirmation",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            autoComplete: "new-password",
            required: true,
            minLength: 6,
            placeholder: "Confirm New Password",
            value: newPasswordConfirmation,
            onInput: (e) => setNewPasswordConfirmation(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: isLoading || !newPassword || newPassword !== newPasswordConfirmation,
          className: "inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",
          children: isLoading ? "Please wait..." : "Update Password"
        }
      )
    ] })
  ] });
}

function ProfileSettingsPage() {
  const toast = useToast();
  const [authProvider, setAuthProvider] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const loadProfile = async () => {
    const { error, response } = await httpGet(
      `${"https://api.roadmap.sh"}/v1-me`
    );
    if (error || !response) {
      toast.error(error?.message || "Something went wrong");
      return;
    }
    const { authProvider: authProvider2, email, newEmail: newEmail2 } = response;
    setAuthProvider(authProvider2);
    setCurrentEmail(email);
    setNewEmail(newEmail2 || "");
  };
  useEffect(() => {
    loadProfile().finally(() => {
      pageProgressMessage.set("");
    });
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(UpdatePasswordForm, { authProvider }),
    /* @__PURE__ */ jsx("hr", { className: "my-8" }),
    /* @__PURE__ */ jsx(
      UpdateEmailForm,
      {
        authProvider,
        currentEmail,
        newEmail,
        onSendVerificationCode: (newEmail2) => {
          setNewEmail(newEmail2);
          loadProfile().finally(() => {
          });
        },
        onVerificationCancel: () => {
          loadProfile().finally(() => {
          });
        }
      },
      newEmail
    )
  ] });
}

const $$Settings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Settings", "description": "", "noIndex": true, "initialLoadingMessage": "Loading settings", "permalink": "/account/settings" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "settings", "activePageTitle": "Settings" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ProfileSettingsPage", ProfileSettingsPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/ProfileSettings/ProfileSettingsPage", "client:component-export": "ProfileSettingsPage" })} ${maybeRenderHead()}<hr class="my-8"> ${renderComponent($$result3, "DeleteAccount", $$DeleteAccount, {})} ` })} ` })}`;
}, "/workspace/src/pages/account/settings.astro", void 0);

const $$file = "/workspace/src/pages/account/settings.astro";
const $$url = "/account/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
