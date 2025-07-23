import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { r as removeAuthToken } from './BaseLayout_DfQviQZ5.mjs';

function getDimensions(file) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = () => {
      resolve({ width: 0, height: 0 });
    };
    img.src = URL.createObjectURL(file);
  });
}
async function validateImage(file) {
  const dimensions = await getDimensions(file);
  if (dimensions.width > 3e3 || dimensions.height > 3e3) {
    return "Image dimensions are too big. Maximum 3000x3000 pixels.";
  }
  if (dimensions.width < 100 || dimensions.height < 100) {
    return "Image dimensions are too small. Minimum 100x100 pixels.";
  }
  if (file.size > 1024 * 1024) {
    return "Image size is too big. Maximum 1MB.";
  }
  return null;
}
function UploadProfilePicture(props) {
  const { avatarUrl, teamId, type, isDisabled = false } = props;
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const onImageChange = async (e) => {
    setError("");
    const file2 = e.target.files?.[0];
    if (!file2) {
      return;
    }
    const error2 = await validateImage(file2);
    if (error2) {
      setError(error2);
      return;
    }
    setFile(
      Object.assign(file2, {
        preview: URL.createObjectURL(file2)
      })
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("name", "avatar");
    formData.append("avatar", file);
    let res;
    if (type === "avatar") {
      res = await fetch(
        `${"https://api.hnmdevs.com"}/v1-upload-profile-picture`,
        {
          method: "POST",
          body: formData,
          credentials: "include"
        }
      );
    } else {
      res = await fetch(
        `${"https://api.hnmdevs.com"}/v1-upload-team-logo/${teamId}`,
        {
          method: "POST",
          body: formData,
          credentials: "include"
        }
      );
    }
    if (res.ok) {
      window.location.reload();
      return;
    }
    const data = await res.json();
    setError(data?.message || "Something went wrong");
    setIsLoading(false);
    if (data.status === 401) {
      removeAuthToken();
      window.location.reload();
    }
  };
  useEffect(() => {
    return () => {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      encType: "multipart/form-data",
      className: "flex flex-col gap-2",
      children: [
        props.label && /* @__PURE__ */ jsx("label", { htmlFor: "avatar", className: "text-sm leading-none text-slate-500", children: props.label }),
        /* @__PURE__ */ jsxs("div", { className: "mb-2 mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(
            "label",
            {
              htmlFor: "avatar",
              title: "Change profile picture",
              className: "relative cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("div", { className: "relative block h-24 w-24 items-center overflow-hidden rounded-full", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "absolute inset-0 h-full w-full bg-gray-100 object-cover text-sm leading-8 text-red-700",
                    src: file?.preview || avatarUrl,
                    alt: file?.name ?? "Error!",
                    loading: "lazy",
                    decoding: "async",
                    onLoad: () => file && URL.revokeObjectURL(file.preview)
                  }
                ) }),
                !file && !isDisabled && /* @__PURE__ */ jsx(
                  "button",
                  {
                    disabled: isDisabled,
                    type: "button",
                    className: "absolute bottom-1 right-0 rounded-sm bg-gray-600 px-2 py-1 text-xs leading-none text-gray-50 ring-2 ring-white",
                    onClick: () => {
                      if (isLoading) return;
                      inputRef.current?.click();
                    },
                    children: "Edit"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              disabled: isDisabled,
              ref: inputRef,
              id: "avatar",
              type: "file",
              name: "avatar",
              accept: "image/png, image/jpeg, image/jpg, image/pjpeg",
              className: "hidden",
              onChange: onImageChange
            }
          ),
          file && /* @__PURE__ */ jsxs("div", { className: "ml-5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setFile(null);
                  inputRef.current?.value && (inputRef.current.value = "");
                },
                className: "flex h-9 min-w-[96px] items-center justify-center rounded-md border border-red-300 bg-red-100 text-sm font-medium text-red-700 disabled:cursor-not-allowed disabled:opacity-60",
                disabled: isLoading || isDisabled,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "flex h-9 min-w-[96px] items-center justify-center rounded-md border border-gray-300 text-sm font-medium text-black disabled:cursor-not-allowed disabled:opacity-60",
                disabled: isLoading || isDisabled,
                children: isLoading ? "Uploading.." : "Upload"
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ jsx("p", { className: "mt-2 rounded-lg bg-red-100 p-2 text-red-700", children: error })
      ]
    }
  );
}

export { UploadProfilePicture as U };
