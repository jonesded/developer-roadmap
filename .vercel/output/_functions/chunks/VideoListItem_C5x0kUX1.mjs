import { jsxs, jsx } from 'react/jsx-runtime';

function VideoListItem(props) {
  const { video } = props;
  const { frontmatter, id } = video;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      className: "block no-underline py-2 group text-md items-center text-gray-600 hover:text-blue-600 flex justify-between border-b",
      href: `/videos/${id}`,
      children: [
        /* @__PURE__ */ jsxs("span", { className: "group-hover:translate-x-2 transition-transform", children: [
          frontmatter.title,
          frontmatter.isNew && /* @__PURE__ */ jsxs("span", { className: "bg-green-300 text-green-900 text-xs font-medium px-1.5 py-0.5 rounded-xs uppercase ml-1.5", children: [
            "New",
            /* @__PURE__ */ jsxs("span", { className: "hidden sm:inline", children: [
              "·",
              new Date(frontmatter.date).toLocaleString("default", {
                month: "long"
              })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "capitalize text-gray-500 text-xs hidden sm:block", children: frontmatter.duration }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-xs block sm:hidden", children: " »" })
      ]
    }
  );
}

export { VideoListItem as V };
