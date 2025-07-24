import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { M as Modal, c as cn, h as httpPost } from './BaseLayout_C3JOBLhD.mjs';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';

function CreateRoadmapModal(props) {
  const { onClose, onCreated, teamId } = props;
  const titleRef = useRef(null);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const isInvalidDescription = description?.trim().length > 80;
  async function handleSubmit(e, redirect = true) {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    if (title.trim() === "" || isInvalidDescription) {
      toast.error("Please fill all the fields");
      return;
    }
    setIsLoading(true);
    const { response, error } = await httpPost(
      `${"https://api.roadmap.sh"}/v1-create-roadmap`,
      {
        title,
        description,
        ...teamId && {
          teamId
        },
        nodes: [],
        edges: []
      }
    );
    if (error) {
      setIsLoading(false);
      toast.error(error?.message || "Something went wrong, please try again");
      return;
    }
    toast.success("Roadmap created successfully");
    if (redirect) {
      window.location.href = `${"https://draw.roadmap.sh"}/${response?._id}`;
      return;
    }
    if (onCreated) {
      onCreated(response);
      return;
    }
    onClose();
    setTitle("");
    setDescription("");
    setIsLoading(false);
  }
  useEffect(() => {
    titleRef.current?.focus();
  }, []);
  return /* @__PURE__ */ jsxs(
    Modal,
    {
      onClose,
      bodyClassName: "p-4",
      wrapperClassName: cn(teamId && "max-w-lg"),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Create Roadmap" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500", children: "Add a title and description to your roadmap." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "title",
                className: "block text-xs uppercase text-gray-400",
                children: "Roadmap Title"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx(
              "input",
              {
                ref: titleRef,
                type: "text",
                name: "title",
                id: "title",
                required: true,
                className: "block w-full rounded-md border border-gray-300 px-2.5 py-2 text-black outline-hidden focus:border-black sm:text-sm",
                placeholder: "Enter Title",
                value: title,
                onChange: (e) => setTitle(e.target.value)
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "description",
                className: "block text-xs uppercase text-gray-400",
                children: "Description"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative mt-1", children: [
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "description",
                  name: "description",
                  required: true,
                  className: cn(
                    "block h-24 w-full resize-none rounded-md border border-gray-300 px-2.5 py-2 text-black outline-hidden focus:border-black sm:text-sm",
                    isInvalidDescription && "border-red-300 bg-red-100"
                  ),
                  placeholder: "Enter Description",
                  value: description,
                  onChange: (e) => setDescription(e.target.value)
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-2 right-2 text-xs text-gray-400", children: [
                description.length,
                "/80"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn("mt-4 flex justify-between gap-2", teamId && "mt-8"),
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: onClose,
                    type: "button",
                    className: cn(
                      "block h-9 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-black outline-hidden hover:border-gray-300 hover:bg-gray-50 focus:border-gray-300 focus:bg-gray-100",
                      !teamId && "w-full"
                    ),
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-2", !teamId && "w-full"), children: [
                  teamId && !isLoading && /* @__PURE__ */ jsx(
                    "button",
                    {
                      disabled: isLoading,
                      type: "button",
                      onClick: (e) => handleSubmit(e, false),
                      className: "flex h-9 items-center justify-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black outline-hidden hover:bg-black hover:text-white focus:bg-black focus:text-white",
                      children: isLoading ? /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin" }) : "Save as Placeholder"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      disabled: isLoading,
                      type: "submit",
                      className: cn(
                        "flex h-9 items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white outline-hidden hover:bg-gray-800 focus:bg-gray-800",
                        teamId ? "hidden sm:flex" : "w-full"
                      ),
                      children: isLoading ? /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin" }) : teamId ? "Continue to Editor" : "Create"
                    }
                  )
                ] })
              ]
            }
          ),
          teamId && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("p", { className: "mt-4 hidden rounded-md border border-orange-200 bg-orange-50 p-2.5 text-sm text-orange-600 sm:block", children: [
              "Preparing the roadmap might take some time, feel free to save it as a placeholder and anyone with the role ",
              /* @__PURE__ */ jsx("strong", { children: "admin" }),
              " ",
              "or ",
              /* @__PURE__ */ jsx("strong", { children: "manager" }),
              " can prepare it later."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 rounded-md border border-orange-200 bg-orange-50 p-2.5 text-sm text-orange-600 sm:hidden", children: "Create a placeholder now and prepare it later." })
          ] })
        ] })
      ]
    }
  );
}

export { CreateRoadmapModal as C };
