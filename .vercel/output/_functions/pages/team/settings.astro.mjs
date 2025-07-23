import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { T as TeamSidebar } from '../../chunks/TeamSidebar_DlMvZEAa.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { u as useOutsideClick, l as useKeydown, v as httpDelete, p as pageProgressMessage, S as Spinner, e as httpGet, w as httpPut } from '../../chunks/BaseLayout_DfQviQZ5.mjs';
import { U as UploadProfilePicture } from '../../chunks/UploadProfilePicture_DMQOthtl.mjs';
import { u as useTeamId } from '../../chunks/use-team-id_YU7lJR0h.mjs';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
import { b as $isCurrentTeamAdmin } from '../../chunks/team_B533nqZG.mjs';
import { useStore } from '@nanostores/react';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_C4SmqpML.mjs';
export { renderers } from '../../renderers.mjs';

function DeleteTeamPopup(props) {
  const { onClose } = props;
  const toast = useToast();
  const popupBodyEl = useRef(null);
  const inputEl = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmationText, setConfirmationText] = useState("");
  const { teamId } = useTeamId();
  useOutsideClick(popupBodyEl, () => {
    onClose();
  });
  useKeydown("Escape", () => {
    onClose();
  });
  useEffect(() => {
    inputEl.current?.focus();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    if (confirmationText.toUpperCase() !== "DELETE") {
      setError("Verification text does not match");
      setIsLoading(false);
      return;
    }
    const { response, error: error2 } = await httpDelete(
      `${"https://api.hnmdevs.com"}/v1-delete-team/${teamId}`
    );
    if (error2 || !response) {
      setIsLoading(false);
      setError(error2?.message || "Something went wrong");
      return;
    }
    toast.success("Team deleted successfully");
    window.location.href = "/account";
  };
  const handleClosePopup = () => {
    setIsLoading(false);
    setError("");
    setConfirmationText("");
    onClose();
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50", children: /* @__PURE__ */ jsx("div", { className: "relative h-full w-full max-w-md p-4 md:h-auto", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: popupBodyEl,
      className: "popup-body relative rounded-lg bg-white p-4 shadow-sm",
      children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-black", children: "Delete Team" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "This will permanently delete your team and all associated data." }),
        /* @__PURE__ */ jsx("p", { className: "-mb-2 mt-3 text-base font-medium text-black", children: 'Please type "delete" to confirm.' }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "my-4", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputEl,
                type: "text",
                name: "delete-account",
                id: "delete-account",
                className: "mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 outline-hidden placeholder:text-gray-400 focus:border-gray-400",
                placeholder: 'Type "delete" to confirm',
                required: true,
                autoFocus: true,
                value: confirmationText,
                onInput: (e) => setConfirmationText(e.target.value)
              }
            ),
            error && /* @__PURE__ */ jsx("p", { className: "mt-2 rounded-lg bg-red-100 p-2 text-red-700", children: error })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                disabled: isLoading,
                onClick: handleClosePopup,
                className: "grow cursor-pointer rounded-lg bg-gray-200 py-2 text-center",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isLoading || confirmationText.toUpperCase() !== "DELETE",
                className: "grow cursor-pointer rounded-lg bg-red-500 py-2 text-white disabled:opacity-40",
                children: isLoading ? "Please wait .." : "Confirm"
              }
            )
          ] })
        ] })
      ]
    }
  ) }) }) });
}

function UpdateTeamForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const isCurrentTeamAdmin = useStore($isCurrentTeamAdmin);
  const toast = useToast();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [teamType, setTeamType] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [personalProgressOnly, setPersonalProgressOnly] = useState(false);
  const validTeamSizes = [
    "0-1",
    "2-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+"
  ];
  const [isDisabled, setIsDisabled] = useState(false);
  const { teamId } = useTeamId();
  useEffect(() => {
    setIsDisabled(!isCurrentTeamAdmin);
  }, [isCurrentTeamAdmin]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !teamType) {
      setIsLoading(false);
      return;
    }
    const { response, error } = await httpPut(
      `${"https://api.hnmdevs.com"}/v1-update-team/${teamId}`,
      {
        name,
        website,
        type: teamType,
        gitHubUrl: gitHub || void 0,
        personalProgressOnly,
        ...teamType === "company" && {
          teamSize,
          linkedInUrl: linkedIn || void 0
        }
      }
    );
    if (error) {
      setIsLoading(false);
      toast.error(error.message || "Something went wrong");
      return;
    }
    if (response) {
      await loadTeam();
      setIsLoading(false);
      toast.success("Team updated successfully");
    }
  };
  async function loadTeam() {
    const { response, error } = await httpGet(
      `${"https://api.hnmdevs.com"}/v1-get-team/${teamId}`
    );
    if (error || !response) {
      console.log(error);
      return;
    }
    setName(response.name);
    setAvatar(response.avatar || "");
    setWebsite(response?.links?.website || "");
    setLinkedIn(response?.links?.linkedIn || "");
    setGitHub(response?.links?.github || "");
    setTeamType(response.type);
    setPersonalProgressOnly(response.personalProgressOnly ?? false);
    if (response.teamSize) {
      setTeamSize(response.teamSize);
    }
  }
  useEffect(() => {
    if (!teamId) {
      return;
    }
    loadTeam().finally(() => {
      pageProgressMessage.set("");
    });
  }, [teamId]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      UploadProfilePicture,
      {
        isDisabled,
        type: "logo",
        avatarUrl: avatar ? `${"https://dodrc8eu8m09s.cloudfront.net/avatars"}/${avatar}` : "/images/default-avatar.png",
        teamId
      }
    ),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "name",
            className: 'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',
            children: "Name"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "name",
            id: "name",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "roadmap.sh",
            disabled: isDisabled,
            required: true,
            value: name,
            onInput: (e) => setName(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "website",
            className: `text-sm leading-none text-slate-500 ${teamType === "company" ? 'after:content-["*"]' : ""}`,
            children: "Website"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            required: teamType === "company",
            type: "text",
            name: "website",
            id: "website",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "https://roadmap.sh",
            disabled: isDisabled,
            value: website,
            onInput: (e) => setWebsite(e.target.value)
          }
        )
      ] }),
      teamType === "company" && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "linkedIn",
            className: "text-sm leading-none text-slate-500",
            children: "LinkedIn URL"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "linkedIn",
            id: "linkedIn",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "https://linkedin.com/company/roadmapsh",
            disabled: isDisabled,
            value: linkedIn,
            onInput: (e) => setLinkedIn(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "gitHub",
            className: "text-sm leading-none text-slate-500",
            children: "GitHub URL"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "gitHub",
            id: "gitHub",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "https://github.com/roadmapsh",
            disabled: isDisabled,
            value: gitHub,
            onInput: (e) => setGitHub(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "type",
            className: 'text-sm leading-none text-slate-500  after:text-red-400 after:content-["*"]',
            children: "Type"
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            name: "type",
            id: "type",
            className: "mt-2 block h-[42px] w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            disabled: isDisabled,
            value: teamType || "",
            onChange: (e) => setTeamType(e.target.value),
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Select type" }),
              /* @__PURE__ */ jsx("option", { value: "company", children: "Company" }),
              /* @__PURE__ */ jsx("option", { value: "study_group", children: "Study Group" })
            ]
          }
        )
      ] }),
      teamType === "company" && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "team-size",
            className: 'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',
            children: "Team size"
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            name: "team-size",
            id: "team-size",
            className: "mt-2 block h-[42px] w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            required: teamType === "company",
            disabled: isDisabled,
            value: teamSize,
            onChange: (e) => setTeamSize(e.target.value),
            children: [
              /* @__PURE__ */ jsx("option", { value: "", selected: true, children: "Select team size" }),
              validTeamSizes.map((size) => /* @__PURE__ */ jsxs("option", { value: size, children: [
                size,
                " people"
              ] }))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex h-[42px] w-full items-center rounded-lg border border-gray-300 px-3 py-2 shadow-xs", children: /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "personal-progress-only",
          className: "flex items-center gap-2 text-sm leading-none text-slate-500",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                name: "personal-progress-only",
                id: "personal-progress-only",
                disabled: isDisabled,
                checked: personalProgressOnly,
                onChange: (e) => setPersonalProgressOnly(e.target.checked)
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "Members can only see their personal progress" })
          ]
        }
      ) }),
      personalProgressOnly && /* @__PURE__ */ jsx("p", { className: "mt-2 rounded-lg border border-orange-300 bg-orange-50 p-2 text-sm text-orange-700", children: "Only admins and managers will be able to see the progress of members" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex w-full flex-col", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "inline-flex h-11 w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",
          disabled: isDisabled || isLoading,
          children: isLoading ? /* @__PURE__ */ jsx(Spinner, {}) : "Update"
        }
      ) })
    ] }),
    !isCurrentTeamAdmin && /* @__PURE__ */ jsx("p", { className: "mt-2 rounded-lg border border-red-300 bg-red-50 p-2 text-sm text-red-700", children: "Only team admins can update team information." }),
    isCurrentTeamAdmin && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("hr", { className: "my-8" }),
      isDeleting && /* @__PURE__ */ jsx(
        DeleteTeamPopup,
        {
          onClose: () => {
            setIsDeleting(false);
          }
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold sm:text-2xl", children: "Delete Team" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-400", children: "Permanently delete this team and all of its resources." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsDeleting(true),
          "data-popup": "delete-team-popup",
          className: "font-regular mt-4 w-full rounded-lg bg-red-600 py-2 text-base text-white outline-hidden focus:ring-2 focus:ring-red-500 focus:ring-offset-1",
          children: "Delete Team"
        }
      )
    ] })
  ] });
}

const $$Settings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Team Settings", "noIndex": true, "initialLoadingMessage": "Loading Settings" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamSidebar", TeamSidebar, { "activePageId": "settings", "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamSidebar", "client:component-export": "TeamSidebar" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "UpdateTeamForm", UpdateTeamForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TeamSettings/UpdateTeamForm", "client:component-export": "UpdateTeamForm" })} ` })} ` })}`;
}, "/workspace/src/pages/team/settings.astro", void 0);

const $$file = "/workspace/src/pages/team/settings.astro";
const $$url = "/team/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Settings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
