import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { MoreVertical, Play, Trash2, BookOpen } from 'lucide-react';
import { useRef, useState } from 'react';
import { u as useOutsideClick, l as useKeydown, c as cn } from './BaseLayout_C3JOBLhD.mjs';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';
import { useMutation } from '@tanstack/react-query';
import { q as queryClient, b as httpDelete } from './query-client_B4F1D3EC.mjs';
import { g as getRelativeTimeString } from './date_iLNlXR7B.mjs';

function AICourseActions(props) {
  const { courseSlug, onDeleted } = props;
  const toast = useToast();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const { mutate: deleteCourse, isPending: isDeleting } = useMutation(
    {
      mutationFn: async () => {
        return httpDelete(`/v1-delete-ai-course/${courseSlug}`);
      },
      onSuccess: () => {
        toast.success("Course deleted");
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey?.[0] === "user-ai-courses"
        });
        onDeleted?.();
      },
      onError: (error) => {
        toast.error(error?.message || "Failed to delete course");
      }
    },
    queryClient
  );
  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });
  useKeydown("Escape", () => {
    setIsOpen(false);
  });
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full", ref: dropdownRef, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "h-full text-gray-400 hover:text-gray-700",
        onClick: (e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        },
        children: /* @__PURE__ */ jsx(MoreVertical, { size: 16 })
      }
    ),
    isOpen && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 top-8 z-10 w-48 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/ai/${courseSlug}`,
          className: "flex w-full items-center gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70",
          children: [
            /* @__PURE__ */ jsx(Play, { className: "h-3.5 w-3.5" }),
            "Start Course"
          ]
        }
      ),
      !isConfirming && /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex w-full items-center gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70",
          onClick: () => setIsConfirming(true),
          disabled: isDeleting,
          children: !isDeleting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }),
            "Delete Course"
          ] }) : "Deleting..."
        }
      ),
      isConfirming && /* @__PURE__ */ jsxs("span", { className: "flex w-full items-center justify-between gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70", children: [
        "Are you sure?",
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setIsConfirming(false);
                deleteCourse();
              },
              disabled: isDeleting,
              className: "text-red-500 underline hover:text-red-800",
              children: "Yes"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsConfirming(false),
              className: "text-red-500 underline hover:text-red-800",
              children: "No"
            }
          )
        ] })
      ] })
    ] })
  ] });
}

function AICourseCard(props) {
  const {
    course,
    showActions = true,
    showProgress = true,
    variant = "row"
  } = props;
  const difficultyColor = {
    beginner: "text-green-700",
    intermediate: "text-blue-700",
    advanced: "text-purple-700"
  }[course.difficulty] || "text-gray-700";
  const modulesCount = course.modules?.length || 0;
  const totalTopics = course.lessonCount || 0;
  const completedTopics = course.done?.length || 0;
  const progressPercentage = totalTopics > 0 ? Math.round(completedTopics / totalTopics * 100) : 0;
  getRelativeTimeString(course?.updatedAt);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-grow", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/ai/${course.slug}`,
        className: cn(
          "group relative flex h-full w-full gap-3 overflow-hidden rounded-lg border border-gray-200 bg-white p-4 text-left transition-all hover:border-gray-300 hover:bg-gray-50 sm:gap-4",
          variant === "column" && "flex-col",
          variant === "row" && "flex-row sm:flex-row sm:items-center"
        ),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
            course.difficulty && /* @__PURE__ */ jsx("div", { className: "mb-1 flex items-center gap-2", children: /* @__PURE__ */ jsx(
              "span",
              {
                className: `rounded-full text-xs font-medium capitalize opacity-80 ${difficultyColor}`,
                children: course.difficulty
              }
            ) }),
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: cn(
                  "line-clamp-2 text-base font-semibold text-balance text-gray-900",
                  {
                    "max-w-[95%]": variant === "column"
                  }
                ),
                children: course.title?.replace(": A Beginner's Guide", "")?.replace(" for beginners", "")?.replace(": A Comprehensive Guide", "")
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7 flex items-center gap-4 sm:gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "hidden items-center text-xs text-gray-600 sm:flex", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "mr-1 h-3.5 w-3.5" }),
              /* @__PURE__ */ jsxs("span", { children: [
                modulesCount,
                " modules"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-600", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "mr-1 h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  totalTopics,
                  " lessons"
                ] })
              ] }),
              showProgress && totalTopics > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("span", { className: "hidden text-gray-400 sm:inline", children: "•" }),
                /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center text-xs font-medium text-gray-700", children: [
                  progressPercentage,
                  "% complete"
                ] }) })
              ] })
            ] })
          ] })
        ]
      }
    ),
    showActions && course.slug && /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ jsx(AICourseActions, { courseSlug: course.slug }) })
  ] });
}

export { AICourseCard as A };
