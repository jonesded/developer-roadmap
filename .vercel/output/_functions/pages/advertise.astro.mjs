import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { p as pageProgressMessage, h as httpPost, $ as $$BaseLayout } from '../chunks/BaseLayout_B-BXcELP.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { C as CheckIcon } from '../chunks/CheckIcon_B3c1RSNy.mjs';
export { renderers } from '../renderers.mjs';

function Input(props) {
  const { label, name, type, value, onChange, required, rows } = props;
  return /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: name, className: "block text-sm font-medium text-gray-700", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
    ] }),
    type === "textarea" ? /* @__PURE__ */ jsx(
      "textarea",
      {
        placeholder: label,
        id: name,
        name,
        value,
        onChange,
        rows,
        className: "mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-xs focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
        autoComplete: "off",
        "data-1p-ignore": "",
        "data-form-type": "other",
        "data-lpignore": "true"
      }
    ) : /* @__PURE__ */ jsx(
      "input",
      {
        type,
        id: name,
        placeholder: label,
        name,
        value,
        onChange,
        required,
        className: "mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-xs focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
        autoComplete: "off",
        "data-1p-ignore": "",
        "data-form-type": "other",
        "data-lpignore": "true"
      }
    )
  ] });
}
function AdvertiseForm() {
  const [status, setStatus] = useState();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    updates: false
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    pageProgressMessage.set("Please wait");
    const { response, error: error2 } = await httpPost(
      `${"https://api.imoogleai.xyz"}/v1-advertise`,
      formData
    );
    if (!response || error2) {
      pageProgressMessage.set("");
      setError(error2?.message || "Something went wrong. Please try again.");
      return;
    }
    setStatus("submitted");
    pageProgressMessage.set("");
  }
  if (status === "submitted") {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center rounded-md border bg-gray-50 p-12 text-center", children: [
      /* @__PURE__ */ jsx(CheckIcon, { additionalClasses: "h-12 w-12 text-green-500 mb-5" }),
      /* @__PURE__ */ jsx("h2", { className: "text-balance text-xl font-semibold text-gray-900", children: "Thank you for your interest in advertising with roadmap.sh" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-500", children: "We will get back to you soon." })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-5 text-balance text-2xl font-bold", children: "Ready to learn more? Fill out the form below to get started!" }),
    error && /* @__PURE__ */ jsx("div", { className: "relative mb-4 rounded-sm border border-red-400 bg-red-100 px-4 py-3 text-red-700", children: error }),
    /* @__PURE__ */ jsxs("form", { className: "mb-5", onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-0 sm:grid-cols-2 sm:gap-4", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "First Name",
            name: "firstName",
            type: "text",
            value: formData.firstName,
            onChange: handleInputChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "Last Name",
            name: "lastName",
            type: "text",
            value: formData.lastName,
            onChange: handleInputChange,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-0 sm:grid-cols-2 sm:gap-4", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "Title",
            name: "title",
            type: "text",
            value: formData.title,
            onChange: handleInputChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "Company",
            name: "company",
            type: "text",
            value: formData.company,
            onChange: handleInputChange,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-0 sm:grid-cols-2 sm:gap-4", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "Email",
            name: "email",
            type: "email",
            value: formData.email,
            onChange: handleInputChange,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "Phone",
            name: "phone",
            type: "tel",
            value: formData.phone,
            onChange: handleInputChange
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        Input,
        {
          label: "Message (Optional)",
          name: "message",
          type: "textarea",
          value: formData.message,
          onChange: handleInputChange,
          rows: 4
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ jsx(
          "input",
          {
            id: "updates",
            name: "updates",
            type: "checkbox",
            checked: formData.updates,
            onChange: handleInputChange,
            className: "h-4 w-4 rounded-sm border-gray-300 text-indigo-600 focus:ring-indigo-500"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "ml-3 text-sm", children: /* @__PURE__ */ jsx("label", { htmlFor: "updates", className: "font-medium text-gray-700", children: "I want to receive occasional updates about new products or advertising opportunities with roadmap.sh" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-indigo-700 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          children: "Send"
        }
      ) })
    ] })
  ] });
}

const $$Advertise = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Advertise with roadmap.sh", "permalink": "/advertise" }, { "changelog-banner": ($$result2) => renderTemplate`${maybeRenderHead()}<div></div>`, "default": ($$result2) => renderTemplate` <div class="bg-white py-8 sm:py-20"> <div class="container"> <div class="mb-2 sm:mb-8 flex items-center"> <div> <h1 class="mb-0 sm:mb-3 text-2xl font-bold sm:text-4xl">
Advertise with roadmap.sh
</h1> <p class="text-lg sm:text-xl text-gray-500">
The best way to reach developers
</p> </div> </div> <p class="mb-5">
With hundreds of thousands of monthly visitors and over 1 million
        registered users, roadmap.sh is the resource developers choose to skill
        up and advance their careers. This community effort creates guides and
        educational content where developers can choose their path to success.
</p> <p class="mb-4 sm:mb-9"> <span class="font-bold">roadmap.sh</span> also provides opportunities to
        advertise to developers where your message stands out on our platform to
        generate valuable results. Do more with your budget and achieve your marketing
        goals by targeting your ideal segments of our developer audience. Don’t wait
        to get your message in front of aspirational developers.
</p> ${renderComponent($$result2, "AdvertiseForm", AdvertiseForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AdvertiseForm", "client:component-export": "AdvertiseForm" })} </div> </div>  ` })}`;
}, "/workspace/src/pages/advertise.astro", void 0);

const $$file = "/workspace/src/pages/advertise.astro";
const $$url = "/advertise";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Advertise,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
