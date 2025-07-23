import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { $ as $$AccountSidebar } from '../../chunks/AccountSidebar_C_DQmMJ7.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { c as cn, u as useOutsideClick, p as pageProgressMessage, n as httpPatch, h as httpPost, e as httpGet } from '../../chunks/BaseLayout_DfQviQZ5.mjs';
import { Globe, LockIcon, ChevronDown, Loader2, X, CheckIcon, FileBadge, CheckCircle, ArrowUpRight, Copy, Check, Eye, EyeOff } from 'lucide-react';
import { u as useToast } from '../../chunks/use-toast_BYLkOsfO.mjs';
import { C as CreateRoadmapModal } from '../../chunks/CreateRoadmapModal_NtptFEb6.mjs';
import 'js-cookie';
import { u as useDebounceValue } from '../../chunks/use-debounce_BdAoSD5T.mjs';
import { U as UploadProfilePicture } from '../../chunks/UploadProfilePicture_DMQOthtl.mjs';
import { u as useCopyText } from '../../chunks/use-copy-text_Bqwbcq8G.mjs';
import { $ as $$AccountLayout } from '../../chunks/AccountLayout_C4SmqpML.mjs';
export { renderers } from '../../renderers.mjs';

function SelectionButton(props) {
  const {
    icon: Icon,
    text,
    isDisabled,
    isSelected,
    onClick,
    className,
    ...rest
  } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ...rest,
      className: cn(
        "rounded-md flex items-center border p-1 px-2 text-sm",
        isSelected ? "border-gray-500 bg-gray-300" : "",
        !isDisabled ? "cursor-pointer" : "cursor-not-allowed opacity-40",
        className
      ),
      disabled: isDisabled,
      onClick,
      children: [
        Icon && /* @__PURE__ */ jsx(Icon, { size: 13, className: "mr-1.5" }),
        text
      ]
    }
  );
}

function VisibilityDropdown(props) {
  const { visibility, setVisibility } = props;
  const toast = useToast();
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => {
    setIsVisibilityDropdownOpen(false);
  });
  const [isVisibilityDropdownOpen, setIsVisibilityDropdownOpen] = useState(false);
  async function updateProfileVisibility(visibility2) {
    pageProgressMessage.set("Updating profile visibility");
    setIsVisibilityDropdownOpen(false);
    const { error } = await httpPatch(
      `${"https://api.hnmdevs.com"}/v1-update-public-profile-visibility`,
      {
        profileVisibility: visibility2
      }
    );
    if (error) {
      toast.error(error.message || "Something went wrong");
      return;
    }
    pageProgressMessage.set("");
    setVisibility(visibility2);
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          setIsVisibilityDropdownOpen(true);
        },
        className: cn(
          "flex items-center gap-1 rounded-lg border border-black py-1 pl-1.5 pr-2 text-sm capitalize text-black",
          {
            invisible: isVisibilityDropdownOpen
          }
        ),
        children: [
          visibility === "public" && /* @__PURE__ */ jsx(Globe, { className: "mr-1", size: 13 }),
          visibility === "private" && /* @__PURE__ */ jsx(LockIcon, { className: "mr-1", size: 13 }),
          visibility,
          /* @__PURE__ */ jsx(ChevronDown, { size: 13, className: "ml-1" })
        ]
      }
    ),
    isVisibilityDropdownOpen && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "absolute right-0 top-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg",
        ref: dropdownRef,
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: cn(
                "flex w-full items-center gap-2 py-2.5 pl-3 pr-3.5 text-left text-sm hover:bg-gray-100",
                {
                  "bg-gray-200": visibility === "public"
                }
              ),
              onClick: () => updateProfileVisibility("public"),
              children: [
                /* @__PURE__ */ jsx(Globe, { size: 13 }),
                "Public"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: cn(
                "flex w-full items-center gap-2 py-2.5 pl-3 pr-3.5 text-left text-sm hover:bg-gray-100",
                {
                  "bg-gray-200": visibility === "private"
                }
              ),
              onClick: () => updateProfileVisibility("private"),
              children: [
                /* @__PURE__ */ jsx(LockIcon, { size: 13 }),
                "Private"
              ]
            }
          )
        ]
      }
    )
  ] });
}

function ProfileUsername(props) {
  const { username, setUsername, profileVisibility, currentUsername } = props;
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isUnique, setIsUnique] = useState(null);
  const debouncedUsername = useDebounceValue(username, 500);
  useEffect(() => {
    checkIsUnique(debouncedUsername).then();
  }, [debouncedUsername]);
  const checkIsUnique = async (username2) => {
    if (isLoading || !username2) {
      return;
    }
    if (username2.length < 3) {
      setIsUnique(false);
      return;
    }
    if (currentUsername && username2 === currentUsername && isUnique !== false) {
      setIsUnique(true);
      return;
    }
    setIsLoading(true);
    const { response, error } = await httpPost(`${"https://api.hnmdevs.com"}/v1-check-is-unique-username`, {
      username: username2
    });
    if (error || !response) {
      setIsUnique(null);
      setIsLoading(false);
      toast.error(error?.message || "Something went wrong. Please try again.");
      return;
    }
    setIsUnique(response.isUnique);
    setIsLoading(false);
  };
  const USERNAME_REGEX = /^[a-zA-Z0-9]*$/;
  const isUserNameValid = (value) => USERNAME_REGEX.test(value) && value.length <= 20;
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ jsxs(
      "label",
      {
        htmlFor: "username",
        className: "flex min-h-[16.5px] items-center justify-between text-sm leading-none text-slate-500",
        children: [
          /* @__PURE__ */ jsx("span", { children: "Profile URL" }),
          !isLoading && /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
            currentUsername && (currentUsername === username || !username || !isUnique) && /* @__PURE__ */ jsxs("span", { className: "text-xs", children: [
              "Current URL",
              " ",
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `${"https://roadmap.sh"}/u/${currentUsername}`,
                  target: "_blank",
                  className: "ml-0.5 rounded-md border border-purple-500 px-1.5 py-0.5 font-mono text-xs font-medium text-purple-700 transition-colors hover:bg-purple-500 hover:text-white",
                  children: [
                    "roadmap.sh/u/",
                    currentUsername
                  ]
                }
              )
            ] }),
            currentUsername !== username && username && isUnique && /* @__PURE__ */ jsxs("span", { className: "text-xs text-green-600", children: [
              "URL after update",
              " ",
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "ml-0.5 rounded-md border border-purple-500 px-1.5 py-0.5 text-xs font-medium text-purple-700 transition-colors",
                  children: [
                    "roadmap.sh/u/",
                    username
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center overflow-hidden rounded-lg border border-gray-300", children: [
      /* @__PURE__ */ jsx("span", { className: "border-r border-gray-300 bg-gray-100 p-2", children: "roadmap.sh/u/" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grow", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "username",
            id: "username",
            className: "w-full px-3 py-2 outline-hidden placeholder:text-gray-400",
            placeholder: "johndoe",
            spellCheck: false,
            value: username,
            title: "Username must be at least 3 characters long and can only contain letters, numbers, and underscores",
            onKeyDown: (e) => {
              const keyCode = e.key;
              if (!isUserNameValid(keyCode) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(
                keyCode
              )) {
                e.preventDefault();
              }
            },
            onInput: (e) => {
              const value = e.target.value?.trim();
              if (!isUserNameValid(value)) {
                return;
              }
              setUsername(e.target.value.toLowerCase());
            },
            required: profileVisibility === "public"
          }
        ),
        username && /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 right-0 top-0 flex items-center px-2", children: isLoading ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : isUnique === false ? /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-500" }) : isUnique === true ? /* @__PURE__ */ jsx(CheckIcon, { className: "h-4 w-4 text-green-500" }) : null })
      ] })
    ] })
  ] });
}

const ideas = [
  "Add a link to your profile in your social media bio",
  "Include your profile link in your resume to showcase your skills",
  "Add a link to your profile in your email signature",
  "Showcase your skills in your GitHub profile",
  "Share your profile with potential employers"
];
function SkillProfileAlert() {
  return /* @__PURE__ */ jsxs("div", { className: "relative mb-5 rounded-lg bg-yellow-200 px-3 py-3 text-sm text-yellow-800", children: [
    /* @__PURE__ */ jsx(FileBadge, { className: "absolute hidden sm:block bottom-3 right-3 h-20 w-20 stroke-2 text-yellow-500 opacity-50" }),
    /* @__PURE__ */ jsxs("h2", { className: "mb-1 text-base font-semibold", children: [
      "Announcing Skill Profiles!",
      " "
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Create your skill profile to showcase your skills or learning progress. Here are some of the ways you can use your skill profile:" }),
    /* @__PURE__ */ jsx("div", { className: "my-3 ml-2 flex flex-col gap-1 sm:ml-3", children: ideas.map((idea) => /* @__PURE__ */ jsxs(
      "p",
      {
        className: "flex flex-row items-start gap-1.5 sm:items-center",
        children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "relative top-[3px] h-3.5 w-3.5 shrink-0 stroke-[2.5] sm:top-0" }),
          /* @__PURE__ */ jsx("span", { children: idea })
        ]
      },
      idea
    )) }),
    /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
      "Make sure to mark your expertise",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/roadmaps",
          target: "_blank",
          className: "font-semibold underline underline-offset-2",
          children: "in the roadmaps."
        }
      )
    ] })
  ] });
}

function UpdatePublicProfileForm() {
  const [profileVisibility, setProfileVisibility] = useState("public");
  const toast = useToast();
  const [isCreatingRoadmap, setIsCreatingRoadmap] = useState(false);
  const [publicProfileUrl, setPublicProfileUrl] = useState("");
  const [isAvailableForHire, setIsAvailableForHire] = useState(false);
  const [isEmailVisible, setIsEmailVisible] = useState(true);
  const [headline, setHeadline] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [roadmapVisibility, setRoadmapVisibility] = useState("all");
  const [customRoadmapVisibility, setCustomRoadmapVisibility] = useState("all");
  const [roadmaps, setRoadmaps] = useState([]);
  const [customRoadmaps, setCustomRoadmaps] = useState([]);
  const [currentUsername, setCurrentUsername] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [dailydev, setDailydev] = useState("");
  const [website, setWebsite] = useState("");
  const [profileRoadmaps, setProfileRoadmaps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const { isCopied, copyText } = useCopyText();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { response, error } = await httpPatch(
      `${"https://api.hnmdevs.com"}/v1-update-public-profile-config`,
      {
        isAvailableForHire,
        isEmailVisible,
        profileVisibility,
        headline,
        username,
        roadmapVisibility,
        customRoadmapVisibility,
        roadmaps,
        customRoadmaps,
        github,
        twitter,
        linkedin,
        website,
        name,
        email,
        dailydev
      }
    );
    if (error || !response) {
      setIsLoading(false);
      toast.error(error?.message || "Something went wrong");
      return;
    }
    await loadProfileSettings();
    toast.success("Profile updated successfully");
    setIsProfileUpdated(true);
  };
  const loadProfileSettings = async () => {
    setIsLoading(true);
    const { error, response } = await httpGet(
      `${"https://api.hnmdevs.com"}/v1-get-profile-settings`
    );
    if (error || !response) {
      setIsLoading(false);
      toast.error(error?.message || "Something went wrong");
      return;
    }
    const {
      name: name2,
      email: email2,
      links,
      username: username2,
      profileVisibility: defaultProfileVisibility,
      publicConfig,
      avatar: avatar2
    } = response;
    setAvatar(avatar2 || "");
    setPublicProfileUrl(username2 ? `/u/${username2}` : "");
    setUsername(username2 || "");
    setCurrentUsername(username2 || "");
    setName(name2 || "");
    setEmail(email2 || "");
    setGithub(links?.github || "");
    setTwitter(links?.twitter || "");
    setLinkedin(links?.linkedin || "");
    setDailydev(links?.dailydev || "");
    setWebsite(links?.website || "");
    setProfileVisibility(defaultProfileVisibility || "public");
    setHeadline(publicConfig?.headline || "");
    setRoadmapVisibility(publicConfig?.roadmapVisibility || "all");
    setCustomRoadmapVisibility(publicConfig?.customRoadmapVisibility || "all");
    setCustomRoadmaps(publicConfig?.customRoadmaps || []);
    setRoadmaps(publicConfig?.roadmaps || []);
    setIsAvailableForHire(publicConfig?.isAvailableForHire || false);
    setIsEmailVisible(publicConfig?.isEmailVisible ?? true);
    setIsLoading(false);
  };
  const loadProfileRoadmaps = async () => {
    setIsLoading(true);
    const { error, response } = await httpGet(`${"https://api.hnmdevs.com"}/v1-get-profile-roadmaps`);
    if (error || !response) {
      setIsLoading(false);
      toast.error(error?.message || "Something went wrong");
      return;
    }
    setProfileRoadmaps(response?.roadmaps || []);
    setIsLoading(false);
  };
  useEffect(() => {
    Promise.all([loadProfileSettings(), loadProfileRoadmaps()]).finally(() => {
      pageProgressMessage.set("");
    });
  }, []);
  const publicCustomRoadmaps = profileRoadmaps.filter(
    (r) => r.isCustomResource && r.id && r.title
  );
  const publicRoadmaps = profileRoadmaps.filter(
    (r) => !r.isCustomResource && r.id && r.title
  );
  return /* @__PURE__ */ jsxs("div", { children: [
    isCreatingRoadmap && /* @__PURE__ */ jsx(CreateRoadmapModal, { onClose: () => setIsCreatingRoadmap(false) }),
    /* @__PURE__ */ jsx(SkillProfileAlert, {}),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-col justify-between gap-2 sm:mb-1 sm:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex grow flex-row items-center gap-2 sm:items-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "mr-1 text-xl font-bold sm:text-3xl", children: "Skill Profile" }),
        publicProfileUrl && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: publicProfileUrl,
              target: "_blank",
              className: "flex shrink-0 flex-row items-center gap-1 rounded-lg border border-black py-0.5 pl-1.5 pr-2.5 text-xs uppercase transition-colors hover:bg-black hover:text-white",
              children: [
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3 stroke-3" }),
                "Visit"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                copyText(`${window.location.origin}${publicProfileUrl}`);
              },
              className: cn(
                "flex shrink-0 flex-row items-center gap-1 rounded-lg border border-black py-0.5 pl-1.5 pr-2.5 text-xs uppercase transition-colors hover:bg-black hover:text-white",
                {
                  "bg-black text-white": isCopied
                }
              ),
              children: [
                !isCopied && /* @__PURE__ */ jsx(Copy, { className: "h-3 w-3 stroke-[2.5]" }),
                isCopied && /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 stroke-[2.5]" }),
                !isCopied ? "Copy URL" : "Copied!"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        VisibilityDropdown,
        {
          visibility: profileVisibility,
          setVisibility: setProfileVisibility
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 mt-2 hidden text-sm text-gray-400 sm:mt-0 sm:block sm:text-base", children: "Create your skill profile to showcase your skills." }),
    /* @__PURE__ */ jsx(
      UploadProfilePicture,
      {
        type: "avatar",
        label: "Profile picture",
        avatarUrl: avatar ? `${"https://dodrc8eu8m09s.cloudfront.net/avatars"}/${avatar}` : "/images/default-avatar.png"
      }
    ),
    /* @__PURE__ */ jsxs("form", { className: "mt-6 space-y-4 pb-10", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
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
            className: "mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            required: true,
            placeholder: "John Doe",
            value: name,
            onInput: (e) => setName(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "email",
              className: 'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',
              children: "Email"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/account/settings",
              className: "text-xs text-purple-700 underline hover:text-purple-800",
              children: "Visit settings page to change email"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "email",
            id: "email",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            required: true,
            disabled: true,
            placeholder: "john@example.com",
            value: email
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end gap-2 rounded-md text-xs text-gray-400", children: /* @__PURE__ */ jsxs("div", { className: "flex select-none items-center justify-end gap-2 rounded-md text-xs text-gray-400", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              name: "isEmailVisible",
              id: "isEmailVisible",
              checked: isEmailVisible,
              onChange: (e) => setIsEmailVisible(e.target.checked)
            }
          ),
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "isEmailVisible",
              className: "grow cursor-pointer py-1.5",
              children: "Show my email on profile"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "headline",
            className: "text-sm leading-none text-slate-500",
            children: "Headline"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "headline",
            id: "headline",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "Full Stack Developer",
            value: headline,
            onChange: (e) => setHeadline(e.target.value),
            required: profileVisibility === "public"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        ProfileUsername,
        {
          username,
          setUsername,
          profileVisibility,
          currentUsername
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "rounded-md border p-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium", children: "Which roadmap progresses do you want to show on your profile?" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            SelectionButton,
            {
              type: "button",
              text: "All Progress",
              icon: Eye,
              isDisabled: false,
              isSelected: roadmapVisibility === "all",
              onClick: () => {
                setRoadmapVisibility("all");
                setRoadmaps([]);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            SelectionButton,
            {
              type: "button",
              icon: EyeOff,
              text: "Hide my Progress",
              isDisabled: false,
              isSelected: roadmapVisibility === "none",
              onClick: () => {
                setRoadmapVisibility("none");
                setRoadmaps([]);
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-sm text-gray-400", children: "Or select the roadmaps you want to show" }),
        publicRoadmaps.length > 0 ? /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: publicRoadmaps.map((r) => /* @__PURE__ */ jsx(
          SelectionButton,
          {
            type: "button",
            text: r.title,
            isDisabled: false,
            isSelected: roadmaps.includes(r.id),
            onClick: () => {
              if (roadmapVisibility !== "selected") {
                setRoadmapVisibility("selected");
              }
              if (roadmaps.includes(r.id)) {
                setRoadmaps(roadmaps.filter((id) => id !== r.id));
              } else {
                setRoadmaps([...roadmaps, r.id]);
              }
            }
          },
          r.id
        )) }) : /* @__PURE__ */ jsxs("p", { className: "mt-2 rounded-lg bg-yellow-100 p-2 text-sm text-yellow-700", children: [
          "Update",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              target: "_blank",
              className: "font-medium underline underline-offset-2 hover:text-yellow-800",
              href: "/roadmaps",
              children: "your progress on roadmaps"
            }
          ),
          " ",
          "to show your learning activity."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-md border p-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium", children: "Pick your custom roadmaps to show on your profile" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            SelectionButton,
            {
              type: "button",
              text: "All Roadmaps",
              icon: Eye,
              isDisabled: false,
              isSelected: customRoadmapVisibility === "all",
              onClick: () => {
                setCustomRoadmapVisibility("all");
                setCustomRoadmaps([]);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            SelectionButton,
            {
              type: "button",
              text: "Hide my Roadmaps",
              icon: EyeOff,
              isDisabled: false,
              isSelected: customRoadmapVisibility === "none",
              onClick: () => {
                setCustomRoadmapVisibility("none");
                setCustomRoadmaps([]);
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-sm text-gray-400", children: "Or select the custom roadmaps you want to show" }),
        publicCustomRoadmaps.length > 0 ? /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: publicCustomRoadmaps.map((r) => /* @__PURE__ */ jsx(
          SelectionButton,
          {
            type: "button",
            text: r.title,
            isDisabled: false,
            isSelected: customRoadmaps.includes(r.id),
            onClick: () => {
              if (customRoadmapVisibility !== "selected") {
                setCustomRoadmapVisibility("selected");
              }
              if (customRoadmaps.includes(r.id)) {
                setCustomRoadmaps(
                  customRoadmaps.filter((id) => id !== r.id)
                );
              } else {
                setCustomRoadmaps([...customRoadmaps, r.id]);
              }
            }
          },
          r.id
        )) }) : /* @__PURE__ */ jsxs("p", { className: "mt-2 rounded-lg bg-yellow-100 p-2 text-sm text-yellow-700", children: [
          "You do not have any custom roadmaps.",
          " ",
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "font-medium underline underline-offset-2 hover:text-yellow-800",
              onClick: () => {
                setIsCreatingRoadmap(true);
              },
              children: "Create one now"
            }
          ),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "github",
            className: "text-sm leading-none text-slate-500",
            children: "Github"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "github",
            id: "github",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "https://github.com/username",
            value: github,
            onChange: (e) => setGithub(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "twitter",
            className: "text-sm leading-none text-slate-500",
            children: "Twitter"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "twitter",
            id: "twitter",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "https://twitter.com/username",
            value: twitter,
            onChange: (e) => setTwitter(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "linkedin",
            className: "text-sm leading-none text-slate-500",
            children: "LinkedIn"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "linkedin",
            id: "linkedin",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "https://www.linkedin.com/in/username/",
            value: linkedin,
            onChange: (e) => setLinkedin(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "dailydev",
            className: "text-sm leading-none text-slate-500",
            children: "daily.dev"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "dailydev",
            id: "dailydev",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "https://app.daily.dev/username",
            value: dailydev,
            onChange: (e) => setDailydev(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "website",
            className: "text-sm leading-none text-slate-500",
            children: "Website"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "website",
            id: "website",
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "https://example.com",
            value: website,
            onChange: (e) => setWebsite(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex select-none items-center gap-2 rounded-md border px-3 hover:bg-gray-100", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            name: "isAvailableForHire",
            id: "isAvailableForHire",
            checked: isAvailableForHire,
            onChange: (e) => setIsAvailableForHire(e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: "isAvailableForHire",
            className: "grow cursor-pointer py-1.5",
            children: "Available for Hire"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: isLoading,
          className: "inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",
          children: isLoading ? "Please wait.." : "Save Profile"
        }
      ),
      isProfileUpdated && publicProfileUrl && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: cn(
              "flex shrink-0 flex-row items-center gap-1 rounded-lg border border-black py-1.5 pl-2.5 pr-3.5 text-xs uppercase text-black transition-colors hover:bg-black hover:text-white",
              isCopied ? "border-green-600 bg-green-600 text-white hover:bg-green-600 hover:text-white" : ""
            ),
            onClick: () => {
              copyText(`${window.location.origin}${publicProfileUrl}`);
            },
            children: isCopied ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "size-4" }),
              "Copied Profile URL"
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Copy, { className: "size-4" }),
              "Copy Profile URL"
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            className: "flex shrink-0 flex-row items-center gap-1 rounded-lg border border-black py-1.5 pl-2.5 pr-3.5 text-xs uppercase text-black transition-colors hover:bg-black hover:text-white",
            href: publicProfileUrl,
            target: "_blank",
            children: [
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" }),
              "View Profile"
            ]
          }
        )
      ] })
    ] })
  ] });
}

const $$UpdateProfile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AccountLayout", $$AccountLayout, { "title": "Update Profile", "noIndex": true, "initialLoadingMessage": "Loading profile", "permalink": "/account/update-profile" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AccountSidebar", $$AccountSidebar, { "activePageId": "profile", "activePageTitle": "Profile" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "UpdatePublicProfileForm", UpdatePublicProfileForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/UpdateProfile/UpdatePublicProfileForm", "client:component-export": "UpdatePublicProfileForm" })} ` })} ` })}`;
}, "/workspace/src/pages/account/update-profile.astro", void 0);

const $$file = "/workspace/src/pages/account/update-profile.astro";
const $$url = "/account/update-profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$UpdateProfile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
