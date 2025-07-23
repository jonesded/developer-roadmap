import { jsx } from 'react/jsx-runtime';
import { M as Modal } from './BaseLayout_B-BXcELP.mjs';

function VideoModal(props) {
  const { videoId, onClose, startTime = "0" } = props;
  return /* @__PURE__ */ jsx(
    Modal,
    {
      onClose,
      wrapperClassName: "w-[90vw] max-w-4xl h-auto",
      bodyClassName: "p-0 bg-black",
      overlayClassName: "items-start md:items-center",
      children: /* @__PURE__ */ jsx("div", { className: "relative w-full pt-[56.25%]", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          className: "absolute inset-0 h-full w-full",
          src: `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startTime}`,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        }
      ) })
    }
  );
}

export { VideoModal as V };
