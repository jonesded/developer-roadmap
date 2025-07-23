import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { AwardIcon, InfoIcon, Play, ArrowRightIcon, MousePointerClick, CheckIcon, Star, ChevronLeftIcon, ChevronRightIcon, User2Icon, StarIcon, BrainIcon, FileQuestionIcon, CodeIcon, BookIcon, ClipboardIcon, FileCheckIcon, MinusIcon, PlusIcon, TrophyIcon, ChevronDown, CircleDot, ChevronDownIcon, Trophy, Award, DatabaseIcon, TableIcon, LayersIcon, GitMergeIcon, WrenchIcon, BarChartIcon, GitBranchIcon, ArrowUpDownIcon, Eye, NotebookTextIcon } from 'lucide-react';
import { c as cn, B as GitHubIcon, i as isLoggedIn, b as getUrlParams, E as COURSE_PURCHASE_PARAM, H as SAMPLE_AFTER_LOGIN_KEY, d as deleteUrlParam, I as COURSE_PURCHASE_SUCCESS_PARAM, J as CourseLoginPopup } from './BaseLayout_BrSKT5L_.mjs';
import { R as RoadmapLogoIcon } from './RoadmapLogo_CqzCGDrz.mjs';
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from './Popover_C4OKBc7t.mjs';
import { useState, useEffect, useRef, useMemo, useLayoutEffect } from 'react';
import { V as VideoModal } from './VideoModal_CVkFIgAu.mjs';
import { queryOptions, useQuery, useMutation } from '@tanstack/react-query';
import { c as coursePriceOptions } from './billing_raRJBpT1.mjs';
import { h as httpGet, q as queryClient, a as httpPost } from './query-client_rwy39LWF.mjs';
import { u as useToast } from './use-toast_BYLkOsfO.mjs';
import { u as useCopyText } from './use-copy-text_Bqwbcq8G.mjs';
import { R as Rating } from './Rating_D2NDwOJI.mjs';
import { a as markdownToHtml } from './markdown_rbU7j7cH.mjs';
import { g as getTailwindScreenDimension } from './is-mobile_BHDNWQGh.mjs';
import 'clsx';

function Spotlight(props) {
  const { className, fill } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: cn(
        "animate-spotlight pointer-events-none absolute z-1 h-[169%] w-[238%] opacity-0 lg:w-[138%]",
        className
      ),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 3787 2842",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx("g", { filter: "url(#filter)", children: /* @__PURE__ */ jsx(
          "ellipse",
          {
            cx: "1924.71",
            cy: "273.501",
            rx: "1924.71",
            ry: "273.501",
            transform: "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",
            fill: fill || "white",
            fillOpacity: "0.21"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
          "filter",
          {
            id: "filter",
            x: "0.860352",
            y: "0.838989",
            width: "3785.16",
            height: "2840.26",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ jsx(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape"
                }
              ),
              /* @__PURE__ */ jsx(
                "feGaussianBlur",
                {
                  stdDeviation: "151",
                  result: "effect1_foregroundBlur_1065_8"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}

function AuthorCredentials$1() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-white lg:mt-auto", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://assets.roadmap.sh/guest/kamran-course-pf-agibf.jpg",
        className: "aspect-[4/5] h-[110px] w-[88px] rounded-xl object-cover shadow-md",
        alt: "Kamran Ahmed"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl font-medium transition-colors duration-200", children: "by Kamran Ahmed" }),
        /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-sm text-gray-400", children: "Your teacher for this course" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://github.com/kamranahmedse",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex cursor-pointer items-center gap-1 rounded-md bg-gradient-to-r from-yellow-500/15 to-orange-500/15 px-2 py-1.5 backdrop-blur-sm transition-all duration-200 hover:border-yellow-400/40 hover:from-yellow-500/25 hover:to-orange-500/25",
            children: [
              /* @__PURE__ */ jsx(GitHubIcon, { className: "size-3 text-yellow-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-yellow-200", children: "#2 Most Starred Developer" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Popover, { children: [
          /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "inline-flex cursor-pointer items-center gap-1 rounded-md bg-gradient-to-r from-yellow-500/15 to-orange-500/15 px-2 py-1.5 backdrop-blur-sm transition-all duration-200 hover:border-yellow-400/40 hover:from-yellow-500/25 hover:to-orange-500/25", children: [
            /* @__PURE__ */ jsx(AwardIcon, { className: "size-3 text-yellow-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-yellow-200", children: "Founder roadmap.sh" }),
            /* @__PURE__ */ jsx(InfoIcon, { className: "ml-auto size-3 text-yellow-400/70 hover:text-yellow-300" })
          ] }) }),
          /* @__PURE__ */ jsxs(
            PopoverContent,
            {
              className: "border-zinc-700 bg-zinc-900 px-2.5 text-sm text-zinc-200",
              side: "top",
              align: "start",
              children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/",
                    className: "text-blue-400 underline hover:text-blue-500 focus:text-blue-500",
                    children: "roadmap.sh"
                  }
                ),
                " ",
                "provides community-curated roadmaps, study plans, paths, and resources for developers and IT professionals. Serving 2M+ registered users, it is the 6th most-starred open source project on GitHub"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}

function PlatformDemo$1() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isVideoModalOpen && /* @__PURE__ */ jsx(
      VideoModal,
      {
        videoId: "6S1CcF-ngeQ",
        onClose: () => setIsVideoModalOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative aspect-video w-full grow overflow-hidden rounded-lg", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://assets.roadmap.sh/guest/course-environment-87jg8.png",
          alt: "Course Environment",
          className: "absolute inset-0 h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: () => setIsVideoModalOpen(true),
          className: "group absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 transition-all hover:bg-black/50",
          children: /* @__PURE__ */ jsx("div", { className: "flex size-12 items-center justify-center rounded-full bg-white/90 transition-transform group-hover:scale-105 lg:size-16", children: /* @__PURE__ */ jsx(Play, { className: "ml-1 fill-current text-black lg:size-8" }) })
        }
      )
    ] })
  ] });
}

function courseProgressOptions(courseSlug) {
  return queryOptions({
    queryKey: ["course-progress", courseSlug],
    retryOnMount: false,
    queryFn: async () => {
      return httpGet(
        `/v1-course-progress/${courseSlug}`
      );
    },
    enabled: !!isLoggedIn()
  });
}

const SQL_COURSE_SLUG$1 = "sql";
function BuyButton$1(props) {
  const { variant = "main", floatingClassName } = props;
  const [isFakeLoading, setIsFakeLoading] = useState(true);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const toast = useToast();
  useCopyText();
  const { data: coursePricing, isLoading: isLoadingPrice } = useQuery(
    coursePriceOptions({ courseSlug: SQL_COURSE_SLUG$1 }),
    queryClient
  );
  const { data: courseProgress, isLoading: isLoadingCourseProgress } = useQuery(
    courseProgressOptions(SQL_COURSE_SLUG$1),
    queryClient
  );
  const {
    mutate: createCheckoutSession,
    isPending: isCreatingCheckoutSession,
    isSuccess: isCheckoutSessionCreated
  } = useMutation(
    {
      mutationFn: (body) => {
        return httpPost(
          "/v1-create-checkout-session",
          body
        );
      },
      onMutate: () => {
        toast.loading("Creating checkout session...");
      },
      onSuccess: (data) => {
        if (!window.gtag) {
          window.location.href = data.checkoutUrl;
          return;
        }
        window?.fireEvent({
          action: `${SQL_COURSE_SLUG$1}_begin_checkout`,
          category: "course",
          label: `${SQL_COURSE_SLUG$1} Course Checkout Started`,
          callback: () => {
            window.location.href = data.checkoutUrl;
          }
        });
        setTimeout(() => {
          window.location.href = data.checkoutUrl;
        }, 3e3);
      },
      onError: (error) => {
        console.error(error);
        toast.error(error?.message || "Failed to create checkout session");
      }
    },
    queryClient
  );
  useEffect(() => {
    const urlParams = getUrlParams();
    const shouldTriggerPurchase = urlParams[COURSE_PURCHASE_PARAM] === "1";
    const shouldTriggerSample = localStorage.getItem(SAMPLE_AFTER_LOGIN_KEY) === "1";
    if (shouldTriggerSample) {
      localStorage.removeItem(SAMPLE_AFTER_LOGIN_KEY);
      window.location.href = `${undefined                                     }/${SQL_COURSE_SLUG$1}`;
    } else if (shouldTriggerPurchase) {
      deleteUrlParam(COURSE_PURCHASE_PARAM);
      initPurchase();
    }
  }, []);
  useEffect(() => {
    const urlParams = getUrlParams();
    const param = urlParams?.[COURSE_PURCHASE_SUCCESS_PARAM];
    if (!param) {
      return;
    }
    const success = param === "1";
    if (success) {
      window?.fireEvent({
        action: `${SQL_COURSE_SLUG$1}_purchase_complete`,
        category: "course",
        label: `${SQL_COURSE_SLUG$1} Course Purchase Completed`
      });
    } else {
      window?.fireEvent({
        action: `${SQL_COURSE_SLUG$1}_purchase_canceled`,
        category: "course",
        label: `${SQL_COURSE_SLUG$1} Course Purchase Canceled`
      });
    }
    deleteUrlParam(COURSE_PURCHASE_SUCCESS_PARAM);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFakeLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const isLoadingPricing = isFakeLoading || isCheckoutSessionCreated || isLoadingPrice || !coursePricing || isLoadingCourseProgress || isCreatingCheckoutSession;
  const isAlreadyEnrolled = !!courseProgress?.enrolledAt;
  function initPurchase() {
    if (!isLoggedIn()) {
      setIsLoginPopupOpen(true);
      return;
    }
    const encodedCourseSlug = encodeURIComponent(`/courses/${SQL_COURSE_SLUG$1}`);
    const successUrl = `/thank-you?next=${encodedCourseSlug}`;
    createCheckoutSession({
      courseId: SQL_COURSE_SLUG$1,
      success: successUrl,
      cancel: `/courses/${SQL_COURSE_SLUG$1}?${COURSE_PURCHASE_SUCCESS_PARAM}=0`
    });
  }
  function onBuyClick() {
    if (!isLoggedIn()) {
      setIsLoginPopupOpen(true);
      return;
    }
    const hasEnrolled = !!courseProgress?.enrolledAt;
    if (hasEnrolled) {
      window.location.href = `${undefined                                     }/${SQL_COURSE_SLUG$1}`;
      return;
    }
    initPurchase();
  }
  function onReadSampleClick() {
    if (!isLoggedIn()) {
      localStorage.setItem(SAMPLE_AFTER_LOGIN_KEY, "1");
      setIsLoginPopupOpen(true);
      return;
    }
    window?.fireEvent({
      action: `${SQL_COURSE_SLUG$1}_demo_started`,
      category: "course",
      label: `${SQL_COURSE_SLUG$1} Course Demo Started`
    });
    setTimeout(() => {
      window.location.href = `${undefined                                     }/${SQL_COURSE_SLUG$1}`;
    }, 200);
  }
  const courseLoginPopup = isLoginPopupOpen && /* @__PURE__ */ jsx(CourseLoginPopup, { onClose: () => setIsLoginPopupOpen(false) });
  if (variant === "main") {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      courseLoginPopup,
      /* @__PURE__ */ jsxs("div", { className: "relative flex w-full flex-col items-center gap-2 md:w-auto", children: [
        isVideoModalOpen && /* @__PURE__ */ jsx(
          VideoModal,
          {
            videoId: "6S1CcF-ngeQ",
            onClose: () => setIsVideoModalOpen(false)
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col gap-2 md:flex-row md:gap-0", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onBuyClick,
              disabled: isLoadingPricing,
              className: cn(
                "group relative mr-2 inline-flex w-full min-w-[235px] items-center justify-center overflow-hidden rounded-xl bg-linear-to-r from-yellow-500 to-yellow-300 px-8 py-3 text-base font-semibold text-black transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] focus:outline-hidden active:ring-0 md:w-auto md:rounded-full md:text-lg",
                (isLoadingPricing || isCreatingCheckoutSession) && "striped-loader-yellow pointer-events-none mr-4 scale-105 bg-yellow-500"
              ),
              children: isLoadingPricing ? /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children: " " }) : isAlreadyEnrolled ? /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children: "Start Learning" }) : /* @__PURE__ */ jsxs("span", { className: "relative flex items-center gap-2", children: [
                "Buy now for",
                " ",
                coursePricing?.isEligibleForDiscount ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "hidden text-base line-through opacity-75 md:inline", children: [
                    "$",
                    coursePricing?.fullPrice
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "text-base md:text-xl", children: [
                    "$",
                    coursePricing?.regionalPrice
                  ] })
                ] }) : /* @__PURE__ */ jsxs("span", { children: [
                  "$",
                  coursePricing?.regionalPrice
                ] }),
                /* @__PURE__ */ jsx(ArrowRightIcon, { className: "h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onReadSampleClick,
              "data-demo-button": true,
              className: cn(
                "group relative hidden items-center justify-center overflow-hidden rounded-xl border border-yellow-500/30 bg-transparent px-6 py-3 text-base font-medium text-yellow-500 transition-all duration-300 ease-out hover:bg-yellow-500/10 focus:outline-hidden active:ring-0 md:rounded-full",
                {
                  "hidden lg:inline-flex": !isLoadingPricing && !isAlreadyEnrolled
                }
              ),
              children: /* @__PURE__ */ jsxs("span", { className: "relative flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(MousePointerClick, { className: "h-5 w-5" }),
                "Access Demo"
              ] })
            }
          )
        ] }),
        !isLoadingPricing && /* @__PURE__ */ jsxs("span", { className: "absolute top-full z-50 flex w-max translate-y-4 flex-row items-center justify-center text-sm text-yellow-400", children: [
          "Lifetime access ",
          /* @__PURE__ */ jsx("span", { className: "mx-2", children: "·" }),
          " ",
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setIsVideoModalOpen(true),
              className: "flex cursor-pointer flex-row items-center gap-1.5 underline underline-offset-4 hover:text-yellow-500",
              children: [
                /* @__PURE__ */ jsx(Play, { className: "size-3 fill-current" }),
                " Watch Video (3 min)"
              ]
            }
          )
        ] })
      ] })
    ] });
  }
  if (variant === "top-nav") {
    return /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onBuyClick,
        disabled: isLoadingPricing,
        className: `animate-fade-in rounded-full px-5 py-2 text-base font-medium text-yellow-700 transition-colors hover:text-yellow-500`,
        children: "Purchase Course"
      }
    );
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    courseLoginPopup,
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "relative flex flex-col items-center gap-2",
          floatingClassName
        ),
        children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onBuyClick,
            disabled: isLoadingPricing,
            className: cn(
              "group relative inline-flex min-w-[220px] items-center justify-center overflow-hidden rounded-full bg-[rgb(168,85,247)] px-8 py-3 font-medium text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] focus:outline-hidden",
              (isLoadingPricing || isCreatingCheckoutSession) && "striped-loader pointer-events-none bg-[rgb(168,85,247)]"
            ),
            children: isLoadingPricing ? /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children: " " }) : isAlreadyEnrolled ? /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children: "Start Learning" }) : /* @__PURE__ */ jsxs("span", { className: "relative flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Start learning now" }),
              /* @__PURE__ */ jsx("span", { className: "inline md:hidden", children: "Start now" }),
              "- $",
              coursePricing?.regionalPrice,
              /* @__PURE__ */ jsx(ArrowRightIcon, { className: "h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" })
            ] })
          }
        )
      }
    )
  ] });
}

function PurchaseBanner() {
  const bannerRef = useRef(null);
  const [isFullyInView, setIsFullyInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const bannerRect = bannerRef.current.getBoundingClientRect();
      const bannerTop = bannerRect.top;
      const bannerBottom = bannerRect.bottom;
      const scrollTop = window.scrollY;
      const fullyVisible = bannerTop >= 0 && bannerBottom <= window.innerHeight;
      setIsFullyInView(fullyVisible || scrollTop > bannerRect.top);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const Banner = (props) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: props.ref,
        className: cn(
          "top-4 z-50 mt-14 flex w-full flex-col gap-4 rounded-2xl bg-yellow-950 p-5 shadow-lg ring-1 ring-yellow-500/40 lg:sticky lg:flex-row lg:items-center lg:justify-between",
          props.className
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "order-3 flex w-full flex-col items-center gap-2 lg:order-0 lg:w-fit lg:items-start", children: ["7-Day Money-Back Guarantee", "Lifetime access & updates"].map(
            (text, index) => /* @__PURE__ */ jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1.5 text-yellow-500",
                children: [
                  /* @__PURE__ */ jsx(CheckIcon, { className: "size-5 stroke-[2.5]" }),
                  text
                ]
              },
              index
            )
          ) }),
          /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-0", children: /* @__PURE__ */ jsx(
            BuyButton$1,
            {
              variant: "floating",
              floatingClassName: "translate-x-0 lg:-translate-x-5"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx(Rating, { rating: 4.9, className: "hidden lg:flex" }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-base font-semibold text-yellow-500", children: [
              /* @__PURE__ */ jsx(Star, { className: "block size-4 fill-current lg:hidden" }),
              "4.9 avg. Review"
            ] })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Banner, { ref: bannerRef }),
    /* @__PURE__ */ jsx(
      Banner,
      {
        className: cn(
          "fixed top-[unset] right-0 bottom-0 left-0 rounded-none lg:hidden",
          isFullyInView ? "flex" : "hidden"
        )
      }
    )
  ] });
}

function ReviewCarousel() {
  const reviews = [
    {
      companyName: "Cloud Camping",
      companyLogo: "https://assets.roadmap.sh/guest/cloudcamping-mcpl6.jpeg",
      name: "Robin Wieruch",
      role: "Author - Multiple Best-Sellers",
      rating: 5,
      text: [
        "Kamran has been in the **educative space for a long time**, and it shows in the way he teaches SQL: clear, structured, and straight to the point.",
        "Even if you've used SQL before, this **course will fill in gaps you didn't even realize you had**. Get ready to level up your database skills!"
      ],
      avatarUrl: "https://assets.roadmap.sh/guest/robin.jpeg",
      isProminent: true
    },
    {
      companyName: "Hack Mamba",
      companyLogo: "https://assets.roadmap.sh/guest/hackmbamba-h0ivr.jpeg",
      name: "William Imoh",
      role: "Founder and Data Enthusiast",
      rating: 5,
      text: [
        "I bought this course for the advanced chapters but ended up completing the entire course. I learned a lot of new things and it was **well worth the investment**.",
        "No matter your SQL experience, this course is **a must-have** if you want to level up your SQL and data analysis skills. Highly recommended!"
      ],
      avatarUrl: "https://assets.roadmap.sh/guest/william-imoh-sd2dk.jpg",
      isProminent: true
    },
    {
      companyName: "GlobalLogic",
      companyLogo: "https://assets.roadmap.sh/guest/globallogic_logo-3m3ho.jpeg",
      name: "Martina Milagros",
      role: "Software Engineer",
      rating: 5,
      text: [
        "Thanks to Kamran Ahmed for the **incredible Master SQL course!** I truly appreciate the way you break down complex topics with such clarity and ease.",
        "**Highly recommend this course** to anyone looking to level up their SQL game!"
      ],
      avatarUrl: "https://assets.roadmap.sh/guest/martina-awc4x.jpeg"
    },
    {
      companyName: "Cisco",
      companyLogo: "https://assets.roadmap.sh/guest/cisco-gyw5b.jpeg",
      name: "Tomáš Janků",
      role: "Sr. Software Engineer",
      rating: 5,
      text: "The course and it's interactivity is excellent and I'd honestly say it's **one of the best** on the SQL theme I've seen out there.",
      avatarUrl: "https://assets.roadmap.sh/guest/tomas-janku-6bg89.jpeg"
    },
    {
      companyName: "Beyond Works",
      companyLogo: "https://assets.roadmap.sh/guest/beyondwordsio_logo-xia4m.jpeg",
      name: "Gourav Khunger",
      role: "Software Engineer",
      rating: 5,
      text: [
        "This course was **absolutely brilliant!** The integrated database environment to practice what I learned was the best part. Being able to **run queries immediately** and see results in real-time made everything click so much faster than traditional learning methods."
      ],
      avatarUrl: "https://assets.roadmap.sh/guest/gourav-h2f3a.png"
    },
    {
      companyName: "xpertSea",
      companyLogo: "https://assets.roadmap.sh/guest/xpertsea-y24hu.jpeg",
      name: "Meabed",
      role: "CTO",
      rating: 5,
      text: "Kamran has **clearly put a lot of thought** into this course. The content, structure and exercises were all great.",
      avatarUrl: "https://assets.roadmap.sh/guest/meabed-fu83q.jpeg"
    },
    {
      companyName: "Powersoft19",
      companyLogo: "https://assets.roadmap.sh/guest/powersoft19-sk4t1.jpeg",
      name: "Mohsin Aheer",
      role: "Sr. Software Engineer",
      rating: 5,
      text: "I already knew SQL but this course **taught me a bunch of new things.** Practical examples and challenges were great. Highly recommended!",
      avatarUrl: "https://assets.roadmap.sh/guest/mohsinaheer-szchu.jpeg"
    },
    {
      companyName: "xpertSea",
      companyLogo: "https://assets.roadmap.sh/guest/xpertsea-y24hu.jpeg",
      name: "Zeeshan",
      role: "Sr. Software Engineer",
      rating: 5,
      text: "Loved the teaching style and the way the course was structured. The **AI tutor was a great help** when I wanted some extra help.",
      avatarUrl: "https://assets.roadmap.sh/guest/ziishaned-qjepj.png"
    },
    {
      companyName: "University of Regensburg",
      companyLogo: "https://assets.roadmap.sh/guest/university_of_regensburg_logo-01784.jpeg",
      name: "Faisal Ahsan",
      role: "Software Engineer",
      rating: 5,
      text: "The course and the learning experience was great. What I really liked was the **no-fluff explanations** and **practical examples**.",
      avatarUrl: "https://assets.roadmap.sh/guest/faisal-q78p2.jpeg"
    },
    {
      companyName: "xpertSea",
      companyLogo: "https://assets.roadmap.sh/guest/xpertsea-y24hu.jpeg",
      name: "Adnan Ahmed",
      role: "Engineering Manager",
      rating: 5,
      text: "Having the integrated IDE made a huge difference. Being able to **immediately practice** what I learned was **invaluable**.",
      avatarUrl: "https://assets.roadmap.sh/guest/idnan-fzps5.jpeg"
    },
    {
      name: "Kalvin Chakma",
      role: "Jr. Software Engineer",
      rating: 5,
      text: "Best SQL course I've taken. The progression from basic to advanced concepts is **well thought out**, and the challenges are **excellent**.",
      avatarUrl: "https://assets.roadmap.sh/guest/kalvin-d65ol.jpeg"
    }
  ];
  const [batchSize, setBatchSize] = useState(3);
  const maxBatchNumber = Math.ceil(reviews.length / batchSize);
  const [currentBatchNumber, setCurrentBatchNumber] = useState(0);
  const currentBatch = useMemo(() => {
    const result = reviews.slice(
      currentBatchNumber * batchSize,
      (currentBatchNumber + 1) * batchSize
    );
    if (result.length < batchSize) {
      const remaining = batchSize - result.length;
      return [...result, ...reviews.slice(0, remaining)];
    }
    return result;
  }, [currentBatchNumber, batchSize]);
  const handleNextBatch = () => {
    setCurrentBatchNumber((prev) => (prev + 1) % maxBatchNumber);
  };
  const handlePreviousBatch = () => {
    setCurrentBatchNumber(
      (prev) => (prev - 1 + maxBatchNumber) % maxBatchNumber
    );
  };
  useLayoutEffect(() => {
    const size = getTailwindScreenDimension();
    if (size === "2xl") {
      setBatchSize(3);
    } else if (size === "xl" || size === "lg") {
      setBatchSize(2);
    } else {
      setBatchSize(1);
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-16 w-full max-w-5xl", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-center text-2xl font-medium text-zinc-200 md:text-3xl", children: "What other learners said" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 mb-6 flex items-center justify-end gap-2 xl:hidden", children: [
      /* @__PURE__ */ jsx(
        NavigateButton,
        {
          onClick: handlePreviousBatch,
          icon: /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "h-4 w-4 stroke-[2.5] text-white" })
        }
      ),
      /* @__PURE__ */ jsx(
        NavigateButton,
        {
          onClick: handleNextBatch,
          icon: /* @__PURE__ */ jsx(ChevronRightIcon, { className: "h-4 w-4 stroke-[2.5] text-white" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-0 flex gap-4 xl:mt-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 -left-2 hidden shrink-0 -translate-x-full flex-col items-center justify-center xl:flex", children: /* @__PURE__ */ jsx(
        NavigateButton,
        {
          onClick: handlePreviousBatch,
          icon: /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "h-5 w-5 stroke-[2.5] text-white" })
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "grid auto-rows-fr grid-cols-1 items-stretch gap-2 sm:grid-cols-2 xl:grid-cols-3", children: currentBatch.map((review, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "review-testimonial relative flex h-full flex-col overflow-hidden rounded-2xl bg-linear-to-br from-yellow-500/10 via-yellow-500/5 to-transparent p-8 backdrop-blur-sm lg:min-h-[456px] [&_strong]:font-normal [&_strong]:text-yellow-300/70",
            index === 2 && batchSize === 3 && "hidden xl:flex",
            index === 1 && batchSize === 3 && "hidden lg:flex"
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-8 -right-8 h-32 w-32 rounded-full bg-yellow-500/5" }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-4", children: [
              review.avatarUrl && /* @__PURE__ */ jsx(
                "img",
                {
                  src: review.avatarUrl,
                  alt: review.name,
                  className: "h-16 w-16 rounded-full border-2 border-yellow-500/20 object-cover"
                }
              ),
              !review.avatarUrl && /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800", children: /* @__PURE__ */ jsx(User2Icon, { className: "h-8 w-8 text-zinc-400" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-zinc-100", children: review.name }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-500/70", children: review.role }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 flex", children: Array.from({ length: review.rating }).map((_, i) => /* @__PURE__ */ jsx(
                  StarIcon,
                  {
                    className: "h-4 w-4 fill-yellow-500 text-yellow-500"
                  },
                  i
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col gap-3", children: (typeof review.text === "string" ? [review.text] : review.text).map((text, index2) => /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-zinc-400 [&_strong]:font-semibold! [&_strong]:text-white!",
                dangerouslySetInnerHTML: {
                  __html: markdownToHtml(text)
                }
              },
              index2
            )) }),
            review?.companyName && /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-3", children: [
              review?.companyLogo && /* @__PURE__ */ jsx(
                "img",
                {
                  src: review?.companyLogo,
                  alt: review?.companyName,
                  className: "h-10 w-10 rounded-lg border border-yellow-500/20 object-cover"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-medium text-zinc-200", children: review?.companyName })
            ] })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 -right-2 hidden shrink-0 translate-x-full flex-col items-center justify-center xl:flex", children: /* @__PURE__ */ jsx(
        NavigateButton,
        {
          onClick: handleNextBatch,
          icon: /* @__PURE__ */ jsx(ChevronRightIcon, { className: "h-5 w-5 stroke-[2.5] text-white" })
        }
      ) })
    ] })
  ] });
}
function NavigateButton(props) {
  const { onClick, icon } = props;
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: "flex items-center justify-center rounded-full bg-zinc-800 p-2 hover:bg-zinc-700",
      children: icon
    }
  );
}

function SectionHeader$1(props) {
  const { title, description, className } = props;
  return /* @__PURE__ */ jsxs("div", { className: cn("mx-auto mt-24 w-full text-center", className), children: [
    /* @__PURE__ */ jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsx("h4", { className: "text-2xl font-medium text-zinc-200 md:text-3xl", children: title }) }),
    typeof description === "string" ? /* @__PURE__ */ jsx("p", { className: "mt-2 text-center text-lg text-balance text-zinc-400 md:mt-5 md:text-xl", children: description }) : description
  ] });
}

function CourseFeatures() {
  const features = [
    {
      title: "AI Tutor",
      description: "Powerful AI tutor to help you with your queries, provide additional explanations and help if you get stuck.",
      icon: BrainIcon,
      imgUrl: "https://assets.roadmap.sh/guest/ai-integration.png"
    },
    {
      title: "Real-world Challenges",
      description: "The course is packed with practical challenges and quizzes, allowing you to test your knowledge and skills.",
      icon: FileQuestionIcon,
      imgUrl: "https://assets.roadmap.sh/guest/coding-challenges.png"
    },
    {
      title: "Coding Environment",
      description: "With the integrated IDE, you can practice your SQL queries in real-time, getting instant feedback on your results.",
      icon: CodeIcon,
      imgUrl: "https://assets.roadmap.sh/guest/coding-environment.png"
    },
    {
      title: "Textual Course",
      description: "Unlike video-based courses where you have to learn at the pace of the instructor, this course is text-based, allowing you to learn at your own pace.",
      icon: BookIcon,
      imgUrl: "https://assets.roadmap.sh/guest/textual-course.png"
    },
    {
      title: "Take Notes",
      description: "The course allows you to take notes, where you can write down your thoughts and ideas. You can visit them later to review your progress.",
      icon: ClipboardIcon,
      imgUrl: "https://assets.roadmap.sh/guest/course-notes.png"
    },
    {
      title: "Completion Certificate",
      description: "The course provides a completion certificate, which you can share with your potential employers.",
      icon: FileCheckIcon,
      imgUrl: "https://assets.roadmap.sh/guest/course-certificate.jpg"
    }
  ];
  const [expandedFeatureIndex, setExpandedFeatureIndex] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      SectionHeader$1,
      {
        title: "Not your average SQL course",
        description: "Built around a text-based interactive approach and packed with practical challenges, this comprehensive SQL bootcamp stands out with features that make it truly unique."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-10 w-full max-w-2xl divide-y divide-zinc-800 overflow-hidden rounded-xl border border-zinc-800", children: features.map((feature, index) => /* @__PURE__ */ jsx(
      CourseFeature$1,
      {
        ...feature,
        isExpanded: expandedFeatureIndex === index,
        onExpand: () => setExpandedFeatureIndex(
          expandedFeatureIndex === index ? null : index
        )
      },
      feature.title
    )) })
  ] });
}
function CourseFeature$1(props) {
  const {
    title,
    description,
    icon: Icon,
    imgUrl,
    isExpanded,
    onExpand
  } = props;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(
          "flex w-full items-center justify-between gap-2 px-5 py-3 hover:bg-transparent",
          !isExpanded && "bg-zinc-900"
        ),
        onClick: onExpand,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 shrink-0 text-yellow-600" }),
            /* @__PURE__ */ jsx("h3", { className: cn("text-lg", isExpanded && "text-zinc-200"), children: title })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-zinc-400 hover:text-zinc-300", children: isExpanded ? /* @__PURE__ */ jsx(MinusIcon, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(PlusIcon, { className: "h-5 w-5" }) })
        ]
      }
    ),
    isExpanded && /* @__PURE__ */ jsxs("div", { className: "grid gap-4 px-5 py-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg text-balance text-white", children: description }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: imgUrl,
          alt: title,
          className: "h-full w-full rounded-lg sm:order-2"
        }
      )
    ] })
  ] });
}

function MeetYourInstructor() {
  const features = [
    {
      icon: TrophyIcon,
      text: "Multiple GitHub Star Awards"
    },
    {
      icon: GitHubIcon,
      text: "#2 Most Starred Developer"
    },
    {
      icon: AwardIcon,
      text: "Google Developer Expert"
    },
    {
      icon: AwardIcon,
      text: "2M+ roadmap.sh users"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "mx-auto mt-14 max-w-4xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-gradient-to-br from-yellow-500/20 via-yellow-500/10 to-transparent p-8 md:p-12", children: [
    /* @__PURE__ */ jsx("h4", { className: "mb-2 text-center text-xl font-medium text-zinc-200 md:text-2xl", children: "Meet your instructor" }),
    /* @__PURE__ */ jsx("div", { className: "mb-12 text-center text-3xl font-bold text-yellow-400 md:text-4xl", children: "Kamran Ahmed" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12 lg:flex-row lg:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://assets.roadmap.sh/guest/kamran-lqjta.jpeg",
            alt: "Kamran Ahmed",
            className: "h-40 w-40 rounded-full object-cover ring-4 ring-yellow-500/40 transition-all duration-300 hover:ring-yellow-500/60"
          }
        ) }),
        /* @__PURE__ */ jsx("h5", { className: "mt-6 text-xl font-semibold text-zinc-100", children: "Kamran Ahmed" }),
        /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "Founder of roadmap.sh" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-8", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: features.map((feature, index) => {
          const IconComponent = feature.icon;
          return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-lg border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 p-3", children: [
            /* @__PURE__ */ jsx(IconComponent, { className: "size-4 shrink-0 text-yellow-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-zinc-300", children: feature.text })
          ] }, index);
        }) }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "prose prose-zinc max-w-none", children: [
          /* @__PURE__ */ jsx("p", { className: "m-0 text-xl leading-relaxed text-zinc-300", children: "Kamran is the creator of roadmap.sh (2M+ registered users!) and an engineering leader with over a decade of experience in the tech industry. Throughout his career he's built and scaled software systems, designed complex data systems, and worked with large amounts of data to create efficient solutions." }),
          /* @__PURE__ */ jsx("p", { className: "m-0 text-xl leading-relaxed text-zinc-300", children: "This hands-on, AI-assisted course is his distilled blueprint on how to master SQL queries, from beginner to advanced." })
        ] }) })
      ] })
    ] })
  ] }) });
}

function ChapterRow$1(props) {
  const {
    counter,
    icon,
    title,
    description,
    lessonCount,
    challengeCount,
    isExpandable = true,
    className,
    lessons = []
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const regularLessons = lessons.filter((l) => l.type === "lesson");
  const challenges = lessons.filter(
    (l) => ["challenge", "quiz"].includes(l.type)
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("group relative overflow-hidden select-none", className),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            role: "button",
            onClick: () => isExpandable && setIsExpanded(!isExpanded),
            className: cn(
              "relative rounded-xl border border-zinc-800 bg-zinc-800 p-6",
              "bg-linear-to-br from-zinc-900/90 via-zinc-900/70 to-zinc-900/50",
              !isExpanded && "hover:bg-linear-to-br hover:from-zinc-900/95 hover:via-zinc-900/80 hover:to-zinc-900/60",
              !isExpanded && "hover:cursor-pointer hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]",
              isExpanded && "cursor-pointer rounded-b-none border-b-0"
            ),
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ jsx("div", { className: "rounded-full bg-yellow-500/10 p-3", children: icon }) }),
              /* @__PURE__ */ jsxs("div", { className: "grow", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold tracking-wide text-white", children: [
                  /* @__PURE__ */ jsxs("span", { className: "inline text-gray-500 md:hidden", children: [
                    counter,
                    ".",
                    " "
                  ] }),
                  title
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-zinc-400", children: description }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 text-sm text-zinc-500", children: /* @__PURE__ */ jsxs("span", { children: [
                    lessonCount,
                    " Lessons"
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 text-sm text-zinc-500", children: /* @__PURE__ */ jsxs("span", { children: [
                    challengeCount,
                    " Challenges"
                  ] }) })
                ] })
              ] }),
              isExpandable && /* @__PURE__ */ jsx("div", { className: "shrink-0 rounded-full bg-zinc-800/80 p-2 text-zinc-400 group-hover:bg-zinc-800 group-hover:text-zinc-500", children: /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: cn(
                    "h-4 w-4 transition-transform",
                    isExpanded ? "rotate-180" : ""
                  )
                }
              ) })
            ] })
          }
        ),
        isExpanded && /* @__PURE__ */ jsx("div", { className: "rounded-b-xl border border-t-0 border-zinc-800 bg-linear-to-br from-zinc-900/50 via-zinc-900/30 to-zinc-900/20", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 divide-zinc-800 md:grid-cols-2 md:divide-x", children: [
          regularLessons.length > 0 && /* @__PURE__ */ jsxs("div", { className: "p-6 pb-0 md:pb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-medium tracking-wider text-zinc-500 uppercase", children: "Lessons" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: regularLessons.map((lesson, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 text-zinc-400 cursor-text",
                children: [
                  /* @__PURE__ */ jsx(BookIcon, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: lesson.title })
                ]
              },
              index
            )) })
          ] }),
          challenges.length > 0 && /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-medium tracking-wider text-zinc-500 uppercase", children: "Exercises" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: challenges.map((challenge, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 text-zinc-400 cursor-text",
                children: [
                  challenge.type === "challenge" ? /* @__PURE__ */ jsx(CodeIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(CircleDot, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: challenge.title })
                ]
              },
              index
            )) })
          ] })
        ] }) })
      ]
    }
  );
}

function FAQRow$1({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-zinc-800 bg-zinc-900", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsExpanded(!isExpanded),
        className: "flex w-full items-center justify-between gap-2 p-4 text-left md:p-6",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-normal text-balance text-white md:text-xl", children: question }),
          /* @__PURE__ */ jsx(
            ChevronDownIcon,
            {
              className: `h-5 w-5 text-zinc-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    isExpanded && /* @__PURE__ */ jsx("div", { className: "border-t border-zinc-800 p-6 pt-4 text-base leading-relaxed md:text-lg", children: /* @__PURE__ */ jsx("p", { children: answer }) })
  ] });
}
function FAQSection$1() {
  const faqs = [
    {
      question: "What is the format of the course?",
      answer: "The course is written in textual format. There are several chapters; each chapter has a set of lessons, followed by a set of practice problems and quizzes. You can learn at your own pace and revisit the content anytime."
    },
    {
      question: "What prerequisites do I need for this course?",
      answer: "No prior SQL knowledge is required. The course starts from the basics and gradually progresses to advanced topics."
    },
    {
      question: "Do I need to have a local database to follow the course?",
      answer: "No, we have an integrated coding playground, populated with a sample databases depending on the lesson, that you can use to follow the course. You can also use your own database if you have one."
    },
    {
      question: "How long do I have access to the course?",
      answer: "You get lifetime access to the course including all future updates. Once you purchase, you can learn at your own pace and revisit the content anytime."
    },
    {
      question: "What kind of support is available?",
      answer: "You get access to an AI tutor within the course that can help you with queries 24/7. Additionally, you can use the community forums to discuss problems and get help from other learners."
    },
    {
      question: "Will I get a certificate upon completion?",
      answer: "Yes, upon completing the course and its challenges, you'll receive a certificate of completion that you can share with employers or add to your LinkedIn profile."
    },
    {
      question: "Can I use this for job interviews?",
      answer: "Absolutely! The course covers common SQL interview topics and includes practical challenges similar to what you might face in technical interviews. The hands-on experience will prepare you well for real-world scenarios."
    },
    {
      question: "What if I don't like the course?",
      answer: "You can request a refund within 30 days of purchase by emailing info@roadmap.sh. The refund amount will be prorated based on when you request it. For example, if you request a refund 15 days after purchase, you'll receive 50% back. I'd also love to hear your feedback to improve the course."
    },
    {
      question: "I already know SQL, can I still take this course?",
      answer: "Yes! The course starts from the basics and gradually progresses to advanced topics. You can skip the chapters that you already know and focus on the ones that you need."
    },
    {
      question: "Do you offer any team licenses?",
      answer: "Yes, please contact me at kamran@roadmap.sh"
    },
    {
      question: "How can I gift this course to someone?",
      answer: "Please contact me at kamran@roadmap.sh and I will be happy to help you."
    },
    {
      question: "What if I have a question that is not answered here?",
      answer: "Please contact me at kamran@roadmap.sh and I will be happy to help you."
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SectionHeader$1,
      {
        title: "Frequently Asked Questions",
        description: null,
        className: "mt-10 md:mt-24"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-6 w-full max-w-3xl space-y-2 md:mt-8 md:space-y-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsx(FAQRow$1, { ...faq }, index)) })
  ] });
}

const SQL_COURSE_SLUG = "sql";
function BuyButton(props) {
  const { variant = "main" } = props;
  const [isFakeLoading, setIsFakeLoading] = useState(true);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const toast = useToast();
  useCopyText();
  const { data: coursePricing, isLoading: isLoadingPrice } = useQuery(
    coursePriceOptions({ courseSlug: SQL_COURSE_SLUG }),
    queryClient
  );
  const { data: courseProgress, isLoading: isLoadingCourseProgress } = useQuery(
    courseProgressOptions(SQL_COURSE_SLUG),
    queryClient
  );
  const {
    mutate: createCheckoutSession,
    isPending: isCreatingCheckoutSession,
    isSuccess: isCheckoutSessionCreated
  } = useMutation(
    {
      mutationFn: (body) => {
        return httpPost(
          "/v1-create-checkout-session",
          body
        );
      },
      onMutate: () => {
        toast.loading("Creating checkout session...");
      },
      onSuccess: (data) => {
        if (!window.gtag) {
          window.location.href = data.checkoutUrl;
          return;
        }
        window?.fireEvent({
          action: `${SQL_COURSE_SLUG}_begin_checkout`,
          category: "course",
          label: `${SQL_COURSE_SLUG} Course Checkout Started`,
          callback: () => {
            window.location.href = data.checkoutUrl;
          }
        });
        setTimeout(() => {
          window.location.href = data.checkoutUrl;
        }, 3e3);
      },
      onError: (error) => {
        console.error(error);
        toast.error(error?.message || "Failed to create checkout session");
      }
    },
    queryClient
  );
  useEffect(() => {
    const urlParams = getUrlParams();
    const shouldTriggerPurchase = urlParams[COURSE_PURCHASE_PARAM] === "1";
    const shouldTriggerSample = localStorage.getItem(SAMPLE_AFTER_LOGIN_KEY) === "1";
    if (shouldTriggerSample) {
      localStorage.removeItem(SAMPLE_AFTER_LOGIN_KEY);
      window.location.href = `${undefined                                     }/${SQL_COURSE_SLUG}`;
    } else if (shouldTriggerPurchase) {
      deleteUrlParam(COURSE_PURCHASE_PARAM);
      initPurchase();
    }
  }, []);
  useEffect(() => {
    const urlParams = getUrlParams();
    const param = urlParams?.[COURSE_PURCHASE_SUCCESS_PARAM];
    if (!param) {
      return;
    }
    const success = param === "1";
    if (success) {
      window?.fireEvent({
        action: `${SQL_COURSE_SLUG}_purchase_complete`,
        category: "course",
        label: `${SQL_COURSE_SLUG} Course Purchase Completed`
      });
    } else {
      window?.fireEvent({
        action: `${SQL_COURSE_SLUG}_purchase_canceled`,
        category: "course",
        label: `${SQL_COURSE_SLUG} Course Purchase Canceled`
      });
    }
    deleteUrlParam(COURSE_PURCHASE_SUCCESS_PARAM);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFakeLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const isLoadingPricing = isFakeLoading || isCheckoutSessionCreated || isLoadingPrice || !coursePricing || isLoadingCourseProgress || isCreatingCheckoutSession;
  const isAlreadyEnrolled = !!courseProgress?.enrolledAt;
  function initPurchase() {
    if (!isLoggedIn()) {
      setIsLoginPopupOpen(true);
      return;
    }
    const encodedCourseSlug = encodeURIComponent(`/courses/${SQL_COURSE_SLUG}`);
    const successUrl = `/thank-you?next=${encodedCourseSlug}`;
    createCheckoutSession({
      courseId: SQL_COURSE_SLUG,
      success: successUrl,
      cancel: `/courses/${SQL_COURSE_SLUG}?${COURSE_PURCHASE_SUCCESS_PARAM}=0`
    });
  }
  function onBuyClick() {
    if (!isLoggedIn()) {
      setIsLoginPopupOpen(true);
      return;
    }
    const hasEnrolled = !!courseProgress?.enrolledAt;
    if (hasEnrolled) {
      window.location.href = `${undefined                                     }/${SQL_COURSE_SLUG}`;
      return;
    }
    initPurchase();
  }
  function onReadSampleClick() {
    if (!isLoggedIn()) {
      localStorage.setItem(SAMPLE_AFTER_LOGIN_KEY, "1");
      setIsLoginPopupOpen(true);
      return;
    }
    window?.fireEvent({
      action: `${SQL_COURSE_SLUG}_demo_started`,
      category: "course",
      label: `${SQL_COURSE_SLUG} Course Demo Started`
    });
    setTimeout(() => {
      window.location.href = `${undefined                                     }/${SQL_COURSE_SLUG}`;
    }, 200);
  }
  const courseLoginPopup = isLoginPopupOpen && /* @__PURE__ */ jsx(CourseLoginPopup, { onClose: () => setIsLoginPopupOpen(false) });
  if (variant === "main") {
    return /* @__PURE__ */ jsxs("div", { className: "relative flex w-full flex-col items-center gap-2 md:w-auto", children: [
      courseLoginPopup,
      isVideoModalOpen && /* @__PURE__ */ jsx(
        VideoModal,
        {
          videoId: "6S1CcF-ngeQ",
          onClose: () => setIsVideoModalOpen(false)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col gap-2 md:flex-row md:gap-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onBuyClick,
            disabled: isLoadingPricing,
            className: cn(
              "group relative mr-2 inline-flex w-full min-w-[235px] items-center justify-center overflow-hidden rounded-xl bg-linear-to-r from-yellow-500 to-yellow-300 px-8 py-3 text-base font-semibold text-black transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] focus:outline-hidden active:ring-0 md:w-auto md:rounded-full md:text-lg",
              (isLoadingPricing || isCreatingCheckoutSession) && "striped-loader-yellow pointer-events-none mr-4 scale-105 bg-yellow-500"
            ),
            children: isLoadingPricing ? /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children: " " }) : isAlreadyEnrolled ? /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children: "Start Learning" }) : /* @__PURE__ */ jsxs("span", { className: "relative flex items-center gap-2", children: [
              "Buy now for",
              " ",
              coursePricing?.isEligibleForDiscount ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("span", { className: "hidden text-base line-through opacity-75 md:inline", children: [
                  "$",
                  coursePricing?.fullPrice
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "text-base md:text-xl", children: [
                  "$",
                  coursePricing?.regionalPrice
                ] })
              ] }) : /* @__PURE__ */ jsxs("span", { children: [
                "$",
                coursePricing?.regionalPrice
              ] }),
              /* @__PURE__ */ jsx(ArrowRightIcon, { className: "h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onReadSampleClick,
            "data-demo-button": true,
            className: cn(
              "group relative hidden items-center justify-center overflow-hidden rounded-xl border border-yellow-500/30 bg-transparent px-6 py-3 text-base font-medium text-yellow-500 transition-all duration-300 ease-out hover:bg-yellow-500/10 focus:outline-hidden active:ring-0 md:rounded-full",
              {
                "hidden lg:inline-flex": !isLoadingPricing && !isAlreadyEnrolled
              }
            ),
            children: /* @__PURE__ */ jsxs("span", { className: "relative flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MousePointerClick, { className: "h-5 w-5" }),
              "Access Demo"
            ] })
          }
        )
      ] }),
      !isLoadingPricing && /* @__PURE__ */ jsxs("span", { className: "absolute top-full z-50 flex w-max translate-y-4 flex-row items-center justify-center text-sm text-yellow-400", children: [
        "Lifetime access ",
        /* @__PURE__ */ jsx("span", { className: "mx-2", children: "·" }),
        " ",
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsVideoModalOpen(true),
            className: "flex cursor-pointer flex-row items-center gap-1.5 underline underline-offset-4 hover:text-yellow-500",
            children: [
              /* @__PURE__ */ jsx(Play, { className: "size-3 fill-current" }),
              " Watch Video (3 min)"
            ]
          }
        )
      ] })
    ] });
  }
  if (variant === "top-nav") {
    return /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onBuyClick,
        disabled: isLoadingPricing,
        className: `animate-fade-in rounded-full px-5 py-2 text-base font-medium text-yellow-700 transition-colors hover:text-yellow-500`,
        children: "Purchase Course"
      }
    );
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center gap-2", children: [
    courseLoginPopup,
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onBuyClick,
        disabled: isLoadingPricing,
        className: cn(
          "group relative inline-flex min-w-[220px] items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-yellow-500 to-yellow-300 px-8 py-2 font-medium text-black transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] focus:outline-hidden",
          (isLoadingPricing || isCreatingCheckoutSession) && "striped-loader-yellow pointer-events-none bg-yellow-500"
        ),
        children: isLoadingPricing ? /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children: " " }) : isAlreadyEnrolled ? /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children: "Start Learning" }) : /* @__PURE__ */ jsxs("span", { className: "relative flex items-center gap-2", children: [
          "Buy Now $",
          coursePricing?.regionalPrice,
          /* @__PURE__ */ jsx(ArrowRightIcon, { className: "h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" })
        ] })
      }
    ),
    !isLoadingPricing && !isAlreadyEnrolled && /* @__PURE__ */ jsxs("span", { className: "top-full text-sm text-yellow-400", children: [
      "Lifetime access ",
      /* @__PURE__ */ jsx("span", { className: "mx-1", children: "·" }),
      " Free updates"
    ] })
  ] });
}

function AccountButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { data: courseProgress, isLoading: isLoadingCourseProgress } = useQuery(
    courseProgressOptions(SQL_COURSE_SLUG),
    queryClient
  );
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const buttonClasses = "rounded-full px-5 py-2 text-base font-medium text-yellow-700 hover:text-yellow-500 transition-colors";
  const hasEnrolled = !!courseProgress?.enrolledAt;
  const loginModal = /* @__PURE__ */ jsx(
    CourseLoginPopup,
    {
      checkoutAfterLogin: false,
      onClose: () => {
        setShowLoginModal(false);
      }
    }
  );
  if (!isVisible || isLoadingCourseProgress) {
    return /* @__PURE__ */ jsx("button", { className: `${buttonClasses} opacity-0`, children: "..." });
  }
  if (!isLoggedIn()) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowLoginModal(true),
          className: `${buttonClasses} animate-fade-in`,
          children: "Login"
        }
      ),
      showLoginModal && loginModal
    ] });
  }
  if (!hasEnrolled) {
    return /* @__PURE__ */ jsx(BuyButton, { variant: "top-nav" });
  }
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: `${undefined                                     }/${SQL_COURSE_SLUG}`,
      className: `${buttonClasses} animate-fade-in`,
      children: "Start Learning"
    }
  );
}

function AuthorCredentials() {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-8 flex flex-col items-start gap-4 text-sm text-zinc-400 sm:flex-row sm:flex-wrap sm:items-center md:mt-12 md:justify-center md:gap-x-3 md:gap-y-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://assets.roadmap.sh/guest/kamran-lqjta.jpeg",
          className: "size-8 rounded-full object-cover mr-1.5",
          alt: "Kamran Ahmed"
        }
      ),
      /* @__PURE__ */ jsx("span", { children: "Course by" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://twitter.com/kamrify",
          target: "_blank",
          className: "font-medium text-yellow-500 hover:text-yellow-400",
          children: "Kamran Ahmed"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden flex-wrap items-center gap-x-3 gap-y-2 sm:flex sm:justify-center", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://github.com/kamranahmedse",
          target: "_blank",
          className: "hidden items-center gap-1 sm:inline-flex text-yellow-500 hover:text-yellow-400",
          children: [
            /* @__PURE__ */ jsx("svg", { className: "size-4 fill-zinc-400", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.291 2.747-1.022 2.747-1.022.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" }) }),
            "#2 most-starred on GitHub"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("svg", { className: "size-3 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }) }),
        "founder roadmap.sh"
      ] })
    ] })
  ] });
}

function AuthorQuoteMessage() {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto mt-14 max-w-2xl sm:mt-20", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-linear-to-br from-yellow-500/10 via-yellow-400/5 to-yellow-300/10 p-8 sm:p-12", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 -translate-y-1/2 translate-x-1/2", children: /* @__PURE__ */ jsx("div", { className: "size-[500px] rounded-full bg-yellow-500/5 blur-3xl" }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 hidden text-2xl font-semibold text-yellow-500 md:block", children: "From your Instructor" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 hidden flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-zinc-400 md:flex", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1", children: [
          /* @__PURE__ */ jsx(Trophy, { className: "size-4 text-yellow-500/80" }),
          "Multiple GitHub Star Awards"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1", children: [
          /* @__PURE__ */ jsx("svg", { className: "size-4 fill-yellow-500/80", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.291 2.747-1.022 2.747-1.022.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" }) }),
          "#2 Most Starred Developer"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1", children: [
          /* @__PURE__ */ jsx(Award, { className: "size-4 text-yellow-500/80" }),
          "Founder roadmap.sh"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1", children: [
          /* @__PURE__ */ jsx(Award, { className: "size-4 text-yellow-500/80" }),
          "Google Developer Expert"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative mt-0 md:mt-8", children: /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed text-zinc-200 sm:text-xl", children: `"As someone who has worked extensively with databases throughout my career, I know firsthand how crucial SQL skills are. I've created this course to share the practical knowledge that has helped me build and scale data systems at various companies."` }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://assets.roadmap.sh/guest/kamran-lqjta.jpeg",
            alt: "Kamran Ahmed",
            className: "size-14 rounded-full ring-2 ring-yellow-500/20"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium text-yellow-500", children: "Kamran Ahmed" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-zinc-400", children: [
            "Founder roadmap.sh",
            " ",
            /* @__PURE__ */ jsx("span", { className: "mx-1 hidden sm:inline", children: "·" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://twitter.com/kamrify",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "ml-0.5 text-yellow-500/80 underline underline-offset-4 hover:text-yellow-500",
                children: "@kamrify"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] }) });
}

function ChapterRow(props) {
  const {
    counter,
    icon,
    title,
    description,
    lessonCount,
    challengeCount,
    isExpandable = true,
    className,
    lessons = []
  } = props;
  const [isExpanded, setIsExpanded] = useState(true);
  const regularLessons = lessons.filter((l) => l.type === "lesson");
  const challenges = lessons.filter(
    (l) => ["challenge", "quiz"].includes(l.type)
  );
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsExpanded(!isMobile);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("group relative select-none overflow-hidden", className),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            role: "button",
            onClick: () => isExpandable && setIsExpanded(!isExpanded),
            className: cn(
              "relative rounded-xl border border-zinc-800 bg-zinc-800 p-6",
              "bg-linear-to-br from-zinc-900/90 via-zinc-900/70 to-zinc-900/50",
              !isExpanded && "hover:bg-linear-to-br hover:from-zinc-900/95 hover:via-zinc-900/80 hover:to-zinc-900/60",
              !isExpanded && "hover:cursor-pointer hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]",
              isExpanded && "cursor-pointer rounded-b-none border-b-0"
            ),
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "hidden shrink-0 md:block", children: /* @__PURE__ */ jsx("div", { className: "rounded-full bg-yellow-500/10 p-3", children: icon }) }),
              /* @__PURE__ */ jsxs("div", { className: "grow", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold tracking-wide text-white", children: [
                  /* @__PURE__ */ jsxs("span", { className: "inline text-gray-500 md:hidden", children: [
                    counter,
                    ".",
                    " "
                  ] }),
                  title
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-zinc-400", children: description }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 text-sm text-zinc-500", children: /* @__PURE__ */ jsxs("span", { children: [
                    lessonCount,
                    " Lessons"
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 text-sm text-zinc-500", children: /* @__PURE__ */ jsxs("span", { children: [
                    challengeCount,
                    " Challenges"
                  ] }) })
                ] })
              ] }),
              isExpandable && /* @__PURE__ */ jsx("div", { className: "shrink-0 rounded-full bg-zinc-800/80 p-2 text-zinc-400 group-hover:bg-zinc-800 group-hover:text-yellow-500", children: /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: cn(
                    "h-4 w-4 transition-transform",
                    isExpanded ? "rotate-180" : ""
                  )
                }
              ) })
            ] })
          }
        ),
        isExpanded && /* @__PURE__ */ jsx("div", { className: "rounded-b-xl border border-t-0 border-zinc-800 bg-linear-to-br from-zinc-900/50 via-zinc-900/30 to-zinc-900/20", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 divide-zinc-800 md:grid-cols-2 md:divide-x", children: [
          regularLessons.length > 0 && /* @__PURE__ */ jsxs("div", { className: "p-6 pb-0 md:pb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500", children: "Lessons" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: regularLessons.map((lesson, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 text-zinc-400 hover:text-yellow-500",
                children: [
                  /* @__PURE__ */ jsx(BookIcon, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: lesson.title })
                ]
              },
              index
            )) })
          ] }),
          challenges.length > 0 && /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500", children: "Exercises" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: challenges.map((challenge, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 text-zinc-400 hover:text-yellow-500",
                children: [
                  challenge.type === "challenge" ? /* @__PURE__ */ jsx(CodeIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(CircleDot, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: challenge.title })
                ]
              },
              index
            )) })
          ] })
        ] }) })
      ]
    }
  );
}

function CourseAuthor() {
  return /* @__PURE__ */ jsx("div", { className: "mt-8 w-full max-w-3xl space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-5", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://assets.roadmap.sh/guest/kamran-lqjta.jpeg",
        className: "size-12 rounded-full bg-yellow-500/10 md:size-16",
        alt: "Kamran Ahmed"
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://twitter.com/kamrify",
        target: "_blank",
        className: "flex flex-col",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-zinc-200 md:text-2xl", children: "Kamran Ahmed" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-zinc-500 md:text-lg", children: "Software Engineer" })
        ]
      }
    )
  ] }) });
}

function CourseFeature(props) {
  const { title, icon: Icon, description, imgUrl } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  useEffect(() => {
    function onScroll() {
      if (isZoomed) {
        setIsZoomed(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isZoomed]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isZoomed && /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => {
          setIsZoomed(false);
          setIsExpanded(false);
        },
        className: "fixed inset-0 z-999 flex cursor-zoom-out items-center justify-center bg-black/75",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: imgUrl,
            alt: title,
            className: "max-h-[50%] max-w-[90%] rounded-xl object-contain"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "fixed inset-0 z-10 bg-black/70 opacity-100 transition-opacity duration-200 ease-out",
          {
            "pointer-events-none opacity-0": !isExpanded
          }
        ),
        onClick: () => setIsExpanded(false)
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsExpanded(!isExpanded),
          className: cn(
            "z-20 flex w-full cursor-pointer items-center rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-left transition-colors duration-200 ease-out hover:bg-zinc-800/40",
            {
              "relative bg-zinc-800 hover:bg-zinc-800": isExpanded
            }
          ),
          children: [
            /* @__PURE__ */ jsxs("span", { className: "flex grow items-center space-x-3", children: [
              /* @__PURE__ */ jsx(Icon, {}),
              /* @__PURE__ */ jsx("span", { children: title })
            ] }),
            isExpanded ? /* @__PURE__ */ jsx(MinusIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(PlusIcon, { className: "h-4 w-4" })
          ]
        }
      ),
      isExpanded && /* @__PURE__ */ jsxs("div", { className: "absolute left-0 top-full z-20 translate-y-2 rounded-lg border border-zinc-800 bg-zinc-800 p-4", children: [
        /* @__PURE__ */ jsx("p", { children: description }),
        imgUrl && /* @__PURE__ */ jsx(
          "img",
          {
            onClick: () => {
              setIsZoomed(true);
              setIsExpanded(false);
            },
            src: imgUrl,
            alt: title,
            className: "mt-4 h-auto pointer-events-none md:pointer-events-auto w-full cursor-zoom-in rounded-lg object-right-top"
          }
        )
      ] })
    ] })
  ] });
}

function SectionHeader(props) {
  const { title, description, className } = props;
  return /* @__PURE__ */ jsxs("div", { className: cn("mx-auto w-full mt-24 max-w-3xl", className), children: [
    /* @__PURE__ */ jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center rounded-xl ", children: /* @__PURE__ */ jsx("span", { className: "text-2xl md:text-3xl font-medium text-zinc-200", children: title }) }),
      /* @__PURE__ */ jsx("div", { className: "h-[1px] grow bg-linear-to-r from-yellow-500/20 to-transparent" })
    ] }) }),
    typeof description === "string" ? /* @__PURE__ */ jsx("p", { className: "mt-2 md:mt-5 text-lg md:text-xl text-zinc-400", children: description }) : description
  ] });
}

function FAQRow({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-zinc-800 bg-zinc-900", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsExpanded(!isExpanded),
        className: "flex w-full items-center justify-between p-4 md:p-6 text-left gap-2",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl text-balance font-normal text-white", children: question }),
          /* @__PURE__ */ jsx(
            ChevronDownIcon,
            {
              className: `h-5 w-5 text-zinc-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    isExpanded && /* @__PURE__ */ jsx("div", { className: "border-t border-zinc-800 p-6 pt-4 text-base md:text-lg leading-relaxed", children: /* @__PURE__ */ jsx("p", { children: answer }) })
  ] });
}
function FAQSection() {
  const faqs = [
    {
      question: "What is the format of the course?",
      answer: "The course is written in textual format. There are several chapters; each chapter has a set of lessons, followed by a set of practice problems and quizzes. You can learn at your own pace and revisit the content anytime."
    },
    {
      question: "What prerequisites do I need for this course?",
      answer: "No prior SQL knowledge is required. The course starts from the basics and gradually progresses to advanced topics."
    },
    {
      question: "Do I need to have a local database to follow the course?",
      answer: "No, we have an integrated coding playground, populated with a sample databases depending on the lesson, that you can use to follow the course. You can also use your own database if you have one."
    },
    {
      question: "How long do I have access to the course?",
      answer: "You get lifetime access to the course including all future updates. Once you purchase, you can learn at your own pace and revisit the content anytime."
    },
    {
      question: "What kind of support is available?",
      answer: "You get access to an AI tutor within the course that can help you with queries 24/7. Additionally, you can use the community forums to discuss problems and get help from other learners."
    },
    {
      question: "Will I get a certificate upon completion?",
      answer: "Yes, upon completing the course and its challenges, you'll receive a certificate of completion that you can share with employers or add to your LinkedIn profile."
    },
    {
      question: "Can I use this for job interviews?",
      answer: "Absolutely! The course covers common SQL interview topics and includes practical challenges similar to what you might face in technical interviews. The hands-on experience will prepare you well for real-world scenarios."
    },
    {
      question: "What if I don't like the course?",
      answer: "You can request a refund within 30 days of purchase by emailing info@roadmap.sh. The refund amount will be prorated based on when you request it. For example, if you request a refund 15 days after purchase, you'll receive 50% back. I'd also love to hear your feedback to improve the course."
    },
    {
      question: "I already know SQL, can I still take this course?",
      answer: "Yes! The course starts from the basics and gradually progresses to advanced topics. You can skip the chapters that you already know and focus on the ones that you need."
    },
    {
      question: "Do you offer any team licenses?",
      answer: "Yes, please contact me at kamran@roadmap.sh"
    },
    {
      question: "How can I gift this course to someone?",
      answer: "Please contact me at kamran@roadmap.sh and I will be happy to help you."
    },
    {
      question: "What if I have a question that is not answered here?",
      answer: "Please contact me at kamran@roadmap.sh and I will be happy to help you."
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about the course below.",
        className: "mt-10 md:mt-24"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-6 md:mt-8 w-full max-w-3xl space-y-2 md:space-y-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsx(FAQRow, { ...faq }, index)) })
  ] });
}

function FloatingPurchase() {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    function onScroll() {
      setIsHidden(window.scrollY < 400);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "fixed bottom-0 left-0 right-0 z-5 flex items-center justify-center transition-all duration-200 ease-out",
        {
          "pointer-events-none -bottom-10 opacity-0": isHidden
        }
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden mb-5 md:flex w-full max-w-[800px] items-center justify-between rounded-2xl bg-yellow-950 p-5 shadow-lg ring-1 ring-yellow-500/40", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-1 text-xl font-medium text-white", children: "Go from Zero to Hero in SQL" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-400", children: "Get instant access to the course and start learning today" })
          ] }),
          /* @__PURE__ */ jsx(BuyButton, { variant: "floating" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex md:hidden w-full flex-col bg-yellow-950 px-4 pt-3 pb-4 shadow-lg ring-1 ring-yellow-500/40", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-3", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-white", children: "Master SQL Today" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-zinc-400", children: "Get instant lifetime access" })
          ] }),
          /* @__PURE__ */ jsx(BuyButton, { variant: "floating" })
        ] })
      ]
    }
  );
}

function PlatformDemo() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isVideoModalOpen && /* @__PURE__ */ jsx(
      VideoModal,
      {
        videoId: "6S1CcF-ngeQ",
        onClose: () => setIsVideoModalOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-12 w-full max-w-5xl sm:mt-24", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://assets.roadmap.sh/guest/course-environment-87jg8.png",
          alt: "Course Environment",
          className: "w-full rounded-xl"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: () => setIsVideoModalOpen(true),
          className: "group absolute inset-0 flex cursor-pointer items-center justify-center rounded-xl bg-black/40 transition-all hover:bg-black/50",
          children: /* @__PURE__ */ jsx("div", { className: "flex size-12 items-center justify-center rounded-full bg-white/90 transition-transform group-hover:scale-105 lg:size-16", children: /* @__PURE__ */ jsx(Play, { className: "ml-1 fill-current text-black lg:size-8" }) })
        }
      )
    ] })
  ] });
}

function ReviewsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const reviews = [
    {
      name: "Robin Wieruch",
      role: "Author - Multiple best-selling books",
      rating: 5,
      text: [
        "Kamran has been in the **educative space for a long time**, and it shows in the way he teaches SQL: clear, structured, and straight to the point.",
        "He breaks down SQL fundamentals in a way that's both **intuitive and practical**, helping you not just write queries, but truly understand how databases work.",
        "Even if you've used SQL before, this **course will fill in gaps you didn't even realize you had**. Get ready to level up your database skills!"
      ],
      avatarUrl: "https://assets.roadmap.sh/guest/robin.jpeg",
      isProminent: true
    },
    {
      name: "William Imoh",
      role: "Founder and Data Enthusiast",
      rating: 5,
      text: [
        "I have been working with SQL and databases for a long time, I bought this course for the advanced chapters but ended up completing the entire course. I learned a lot of new things and it was **well worth the investment**.",
        "No matter your SQL experience, this course is **a must-have** if you want to level up your SQL and data analysis skills. Highly recommended!"
      ],
      avatarUrl: "https://assets.roadmap.sh/guest/william-imoh-sd2dk.jpg",
      isProminent: true
    },
    {
      name: "Tomáš Janků",
      role: "Software Engineer",
      rating: 5,
      text: "The course and it's interactivity is excellent and I'd honestly say it's **one of the best** on the SQL theme I've seen out there.",
      avatarUrl: "https://assets.roadmap.sh/guest/tomas-janku-6bg89.jpeg"
    },
    {
      name: "Gourav Khunger",
      role: "Software Engineer",
      rating: 5,
      text: "This course was **absolutely brilliant!** The integrated database environment to practice what I learned was the best part.",
      avatarUrl: "https://assets.roadmap.sh/guest/gourav-h2f3a.png"
    },
    {
      name: "Meabed",
      role: "CTO",
      rating: 5,
      text: "Kamran has **clearly put a lot of thought** into this course. The content, structure and exercises were all great.",
      avatarUrl: "https://assets.roadmap.sh/guest/meabed-fu83q.jpeg"
    },
    {
      name: "Mohsin Aheer",
      role: "Sr. Software Engineer",
      rating: 5,
      text: "I already knew SQL but this course **taught me a bunch of new things.** Practical examples and challenges were great. Highly recommended!",
      avatarUrl: "https://assets.roadmap.sh/guest/mohsinaheer-szchu.jpeg"
    },
    {
      name: "Reeve Tee",
      role: "Software Engineer",
      rating: 5,
      text: "I found the course **highly comprehensive and incredibly valuable**. I would love to see more courses like this!",
      avatarUrl: ""
    },
    {
      name: "Zeeshan",
      role: "Sr. Software Engineer",
      rating: 5,
      text: "Loved the teaching style and the way the course was structured. The **AI tutor was a great help** when I got stuck.",
      avatarUrl: "https://assets.roadmap.sh/guest/ziishaned-qjepj.png"
    },
    {
      name: "Adnan Ahmed",
      role: "Engineering Manager",
      rating: 5,
      text: "Having the integrated IDE made a huge difference. Being able to **immediately practice** what I learned was **invaluable**.",
      avatarUrl: "https://assets.roadmap.sh/guest/idnan-fzps5.jpeg"
    },
    {
      name: "Kalvin Chakma",
      role: "Jr. Software Engineer",
      rating: 5,
      text: "Best SQL course I've taken. The progression from basic to advanced concepts is **well thought out**, and the challenges are **excellent**.",
      avatarUrl: "https://assets.roadmap.sh/guest/kalvin-d65ol.jpeg"
    },
    {
      name: "Faisal Ahsan",
      role: "Software Engineer",
      rating: 5,
      text: "The course and the learning experience was great. What I really liked was the **no-fluff explanations** and **practical examples**.",
      avatarUrl: "https://assets.roadmap.sh/guest/faisal-q78p2.jpeg"
    }
  ];
  const prominentReviews = reviews.filter((r) => r.isProminent);
  const regularReviews = reviews.filter((r) => !r.isProminent);
  return /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn("rounded-2xl pb-0 pt-24", {
          "pb-8": isExpanded
        }),
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 md:mb-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2", children: prominentReviews.map((review, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "review-testimonial relative overflow-hidden rounded-2xl bg-linear-to-br from-yellow-500/10 via-yellow-500/5 to-transparent p-8 backdrop-blur-sm [&_strong]:font-normal [&_strong]:text-yellow-300/70",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-yellow-500/5" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  review.avatarUrl && /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: review.avatarUrl,
                      alt: review.name,
                      className: "h-16 w-16 rounded-full border-2 border-yellow-500/20 object-cover"
                    }
                  ),
                  !review.avatarUrl && /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800", children: /* @__PURE__ */ jsx(User2Icon, { className: "h-8 w-8 text-zinc-400" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-zinc-100", children: review.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-500/70", children: review.role }),
                    /* @__PURE__ */ jsx("div", { className: "mt-1 flex", children: Array.from({ length: review.rating }).map((_, i) => /* @__PURE__ */ jsx(
                      StarIcon,
                      {
                        className: "h-4 w-4 fill-yellow-500 text-yellow-500"
                      },
                      i
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-col gap-3", children: (typeof review.text === "string" ? [review.text] : review.text).map((text, index2) => /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-zinc-300",
                    dangerouslySetInnerHTML: {
                      __html: markdownToHtml(text)
                    }
                  },
                  index2
                )) })
              ]
            },
            index
          )) }) }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
                isExpanded ? "" : "max-h-[400px] overflow-hidden"
              ),
              children: [
                regularReviews.map((review, index) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: cn(
                      "review-testimonial shrink-0 break-inside-avoid-column rounded-xl p-6 backdrop-blur-sm [&_strong]:font-normal [&_strong]:text-yellow-300/70",
                      {
                        "bg-linear-to-br from-yellow-500/10 via-yellow-500/5 to-transparent": review.isSecondaryProminent,
                        "bg-zinc-800/30": !review.isSecondaryProminent
                      }
                    ),
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                        review.avatarUrl && /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: review.avatarUrl,
                            alt: review.name,
                            className: "h-12 w-12 rounded-full object-cover"
                          }
                        ),
                        !review.avatarUrl && /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800", children: /* @__PURE__ */ jsx(User2Icon, { className: "h-6 w-6 text-zinc-400" }) }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-zinc-100", children: review.name }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-400", children: review.role })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "mt-2 flex", children: Array.from({ length: review.rating }).map((_, i) => /* @__PURE__ */ jsx(
                        StarIcon,
                        {
                          className: "h-4 w-4 fill-yellow-500 text-yellow-500"
                        },
                        i
                      )) }),
                      /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: "mt-4 text-zinc-300",
                          dangerouslySetInnerHTML: {
                            __html: markdownToHtml(review.text)
                          }
                        }
                      )
                    ]
                  },
                  index
                )),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#121212] via-[#121212]/80 to-transparent",
                      isExpanded ? "opacity-0" : "opacity-100"
                    )
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn("absolute left-1/2 top-full -translate-x-1/2", {
          "-translate-y-1/2": !isExpanded
        }),
        children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsExpanded(!isExpanded),
            className: "flex items-center gap-2 rounded-full bg-zinc-800 px-6 py-2 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-700 hover:text-zinc-100",
            children: [
              isExpanded ? "Show Less" : "Show More Reviews",
              /* @__PURE__ */ jsx(
                ChevronDownIcon,
                {
                  className: `h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`
                }
              )
            ]
          }
        )
      }
    )
  ] });
}

const sqlCourseChapters = [
  {
    icon: /* @__PURE__ */ jsx(DatabaseIcon, { className: "h-6 w-6 text-yellow-500" }),
    title: "Introduction",
    description: "Get comfortable with database concepts and SQL fundamentals.",
    lessonCount: 4,
    challengeCount: 1,
    lessons: [
      { title: "Basics of Databases", type: "lesson" },
      { title: "What is SQL?", type: "lesson" },
      { title: "Types of Queries", type: "lesson" },
      { title: "Next Steps", type: "lesson" },
      { title: "Introduction Quiz", type: "challenge" }
    ]
  },
  {
    icon: /* @__PURE__ */ jsx(TableIcon, { className: "h-6 w-6 text-yellow-500" }),
    title: "SQL Basics",
    description: "Master the essential SQL query operations and syntax.",
    lessonCount: 9,
    challengeCount: 7,
    lessons: [
      { title: "SELECT Fundamentals", type: "lesson" },
      { title: "Aliases and Constants", type: "lesson" },
      { title: "Expressions in SELECT", type: "lesson" },
      { title: "Selecting DISTINCT Values", type: "lesson" },
      { title: "Filtering with WHERE", type: "lesson" },
      { title: "Sorting with ORDER BY", type: "lesson" },
      { title: "Limiting Results with LIMIT", type: "lesson" },
      { title: "Handling NULL Values", type: "lesson" },
      { title: "Comments", type: "lesson" },
      { title: "Basic Queries Quiz", type: "quiz" },
      { title: "Projection Challenge", type: "challenge" },
      { title: "Select Expression", type: "challenge" },
      { title: "Select Unique", type: "challenge" },
      { title: "Logical Operators", type: "challenge" },
      { title: "Sorting Challenge", type: "challenge" },
      { title: "Sorting and Limiting", type: "challenge" },
      { title: "Sorting and Filtering", type: "challenge" }
    ]
  },
  {
    icon: /* @__PURE__ */ jsx(CodeIcon, { className: "h-6 w-6 text-yellow-500" }),
    title: "Manipulating Data",
    description: "Learn how to modify and manipulate data in your database.",
    lessonCount: 3,
    challengeCount: 3,
    lessons: [
      { title: "INSERT Operations", type: "lesson" },
      { title: "UPDATE Operations", type: "lesson" },
      { title: "DELETE Operations", type: "lesson" },
      { title: "Data Manipulation Quiz", type: "quiz" },
      { title: "Inserting Customers", type: "challenge" },
      { title: "Updating Bookstore", type: "challenge" },
      { title: "Deleting Books", type: "challenge" }
    ]
  },
  {
    icon: /* @__PURE__ */ jsx(LayersIcon, { className: "h-6 w-6 text-yellow-500" }),
    title: "Defining Tables",
    description: "Master database schema design and table management.",
    lessonCount: 9,
    challengeCount: 7,
    lessons: [
      { title: "Creating Tables", type: "lesson" },
      { title: "Data Types in SQLite", type: "lesson" },
      { title: "Common Data Types", type: "lesson" },
      { title: "More on Numeric Types", type: "lesson" },
      { title: "Temporal Data Types", type: "lesson" },
      { title: "CHECK Constraints", type: "lesson" },
      { title: "Primary Key Constraint", type: "lesson" },
      { title: "Modifying Tables", type: "lesson" },
      { title: "Dropping and Truncating", type: "lesson" },
      { title: "Defining Tables Quiz", type: "quiz" },
      { title: "Simple Table Creation", type: "challenge" },
      { title: "Data Types Challenge", type: "challenge" },
      { title: "Constraints Challenge", type: "challenge" },
      { title: "Temporal Validation", type: "challenge" },
      { title: "Sales Data Analysis", type: "challenge" },
      { title: "Modifying Tables", type: "challenge" },
      { title: "Removing Table Data", type: "challenge" }
    ]
  },
  {
    icon: /* @__PURE__ */ jsx(GitMergeIcon, { className: "h-6 w-6 text-yellow-500" }),
    title: "Multi-Table Queries",
    description: "Learn to work with multiple tables using JOINs and relationships.",
    lessonCount: 7,
    challengeCount: 10,
    lessons: [
      { title: "More on Relational Data", type: "lesson" },
      { title: "Relationships and Types", type: "lesson" },
      { title: "JOINs in Queries", type: "lesson" },
      { title: "Self Joins and Usecases", type: "lesson" },
      { title: "Foreign Key Constraint", type: "lesson" },
      { title: "Set Operator Queries", type: "lesson" },
      { title: "Views and Virtual Tables", type: "lesson" },
      { title: "Multi-Table Queries Quiz", type: "quiz" },
      { title: "Inactive Customers", type: "challenge" },
      { title: "Recent 3 Orders", type: "challenge" },
      { title: "High Value Orders", type: "challenge" },
      { title: "Specific Book Customers", type: "challenge" },
      { title: "Referred Customers", type: "challenge" },
      { title: "Readers Like You", type: "challenge" },
      { title: "Same Price Books", type: "challenge" },
      { title: "Multi-Section Authors", type: "challenge" },
      { title: "Expensive Books", type: "challenge" },
      { title: "Trending Tech Books", type: "challenge" }
    ]
  },
  {
    icon: /* @__PURE__ */ jsx(WrenchIcon, { className: "h-6 w-6 text-yellow-500" }),
    title: "Aggregate Functions",
    description: "Analyze and summarize data using SQL's powerful aggregation features.",
    lessonCount: 4,
    challengeCount: 10,
    lessons: [
      { title: "What is Aggregation?", type: "lesson" },
      { title: "Basic Aggregation", type: "lesson" },
      { title: "Grouping Data", type: "lesson" },
      { title: "Grouping and Filtering", type: "lesson" },
      { title: "Aggregate Queries Quiz", type: "quiz" },
      { title: "Book Sales Summary", type: "challenge" },
      { title: "Category Insights", type: "challenge" },
      { title: "Author Tier Analysis", type: "challenge" },
      { title: "Author Book Stats", type: "challenge" },
      { title: "Daily Sales Report", type: "challenge" },
      { title: "Publisher Stats", type: "challenge" },
      { title: "High Value Publishers", type: "challenge" },
      { title: "Premium Authors", type: "challenge" },
      { title: "Sales Analysis", type: "challenge" },
      { title: "Employee Performance", type: "challenge" }
    ]
  },
  {
    icon: /* @__PURE__ */ jsx(BarChartIcon, { className: "h-6 w-6 text-yellow-500" }),
    title: "Scalar Functions",
    description: "Master built-in functions for data transformation and manipulation.",
    lessonCount: 6,
    challengeCount: 5,
    lessons: [
      { title: "What are they?", type: "lesson" },
      { title: "String Functions", type: "lesson" },
      { title: "Numeric Functions", type: "lesson" },
      { title: "Date Functions", type: "lesson" },
      { title: "Conversion Functions", type: "lesson" },
      { title: "Logical Functions", type: "lesson" },
      { title: "Scalar Functions Quiz", type: "quiz" },
      { title: "Customer Contact List", type: "challenge" },
      { title: "Membership Duration", type: "challenge" },
      { title: "Book Performance", type: "challenge" },
      { title: "Book Categories", type: "challenge" },
      { title: "Monthly Sales Analysis", type: "challenge" }
    ]
  },
  {
    icon: /* @__PURE__ */ jsx(GitBranchIcon, { className: "h-6 w-6 text-yellow-500" }),
    title: "Subqueries and CTEs",
    description: "Write complex queries using subqueries and common table expressions.",
    lessonCount: 4,
    challengeCount: 6,
    lessons: [
      { title: "What are Subqueries?", type: "lesson" },
      { title: "Correlated Subqueries", type: "lesson" },
      { title: "Common Table Expressions", type: "lesson" },
      { title: "Recursive CTEs", type: "lesson" },
      { title: "Subqueries Quiz", type: "quiz" },
      { title: "Books Above Average", type: "challenge" },
      { title: "Latest Category Books", type: "challenge" },
      { title: "Low Stock by Category", type: "challenge" },
      { title: "Bestseller Rankings", type: "challenge" },
      { title: "New Customer Analysis", type: "challenge" },
      { title: "Daily Sales Report", type: "challenge" }
    ]
  },
  {
    icon: /* @__PURE__ */ jsx(ArrowUpDownIcon, { className: "h-6 w-6 text-yellow-500" }),
    title: "Window Functions",
    description: "Advanced analytics and calculations using window functions.",
    lessonCount: 5,
    challengeCount: 7,
    lessons: [
      { title: "What are they?", type: "lesson" },
      { title: "OVER and PARTITION BY", type: "lesson" },
      { title: "Use of ORDER BY", type: "lesson" },
      { title: "Ranking Functions", type: "lesson" },
      { title: "Window Frames", type: "lesson" },
      { title: "Window Functions Quiz", type: "quiz" },
      { title: "Basic Sales Metrics", type: "challenge" },
      { title: "Bestseller Comparison", type: "challenge" },
      { title: "Author Category Sales", type: "challenge" },
      { title: "Top Authors", type: "challenge" },
      { title: "Price Tier Rankings", type: "challenge" },
      { title: "Month-over-Month Sales", type: "challenge" },
      { title: "Price Range Analysis", type: "challenge" }
    ]
  }
];
function SQLCoursePage() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative flex grow flex-col items-center bg-linear-to-b from-zinc-900 to-zinc-950 px-4 pt-3 pb-52 text-zinc-400 md:px-10 md:pt-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://roadmap.sh",
          target: "_blank",
          className: "opacity-20 transition-opacity hover:opacity-100",
          children: /* @__PURE__ */ jsx(RoadmapLogoIcon, {})
        }
      ),
      /* @__PURE__ */ jsx(AccountButton, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mt-7 max-w-4xl text-left md:mt-20 md:text-center", children: [
      /* @__PURE__ */ jsx(Spotlight, { className: "top-[-200px] left-[-170px]", fill: "#EAB308" }),
      /* @__PURE__ */ jsxs("div", { className: "inline-block rounded-full bg-yellow-500/10 px-4 py-1.5 text-base text-yellow-500 md:px-6 md:py-2 md:text-lg", children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Complete Course to Master Practical SQL" }),
        /* @__PURE__ */ jsx("span", { className: "block sm:hidden", children: "Complete SQL Course" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-5 text-4xl font-bold tracking-tight text-white md:mt-8 md:text-7xl", children: [
        "Master SQL",
        " ",
        /* @__PURE__ */ jsx("span", { className: "hidden min-[384px]:inline", children: "Queries" }),
        /* @__PURE__ */ jsx("div", { className: "mt-2.5 bg-linear-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent md:text-6xl lg:text-7xl", children: "From Basic to Advanced" })
      ] }),
      /* @__PURE__ */ jsx(AuthorCredentials, {}),
      /* @__PURE__ */ jsx("p", { className: "mx-auto my-5 max-w-2xl text-xl text-zinc-300 md:my-12 lg:text-2xl", children: "A structured course to master database querying - perfect for developers, data analysts, and anyone working with data." }),
      /* @__PURE__ */ jsxs("div", { className: "hidden flex-row items-center justify-center gap-5 md:flex", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
          /* @__PURE__ */ jsx(ClipboardIcon, { className: "size-6 text-yellow-600" }),
          /* @__PURE__ */ jsx("span", { children: "55+ Lessons" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileQuestionIcon, { className: "size-6 text-yellow-600" }),
          /* @__PURE__ */ jsx("span", { children: "100+ Challenges" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
          /* @__PURE__ */ jsx(CodeIcon, { className: "size-6 text-yellow-600" }),
          /* @__PURE__ */ jsx("span", { children: "Integrated IDE" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-2", children: [
          /* @__PURE__ */ jsx(BrainIcon, { className: "size-6 text-yellow-600" }),
          /* @__PURE__ */ jsx("span", { children: "AI Tutor" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-7 flex justify-start md:mt-12 md:justify-center", children: /* @__PURE__ */ jsx(BuyButton, { variant: "main" }) })
    ] }),
    /* @__PURE__ */ jsx(ReviewsSection, {}),
    /* @__PURE__ */ jsx(PlatformDemo, {}),
    /* @__PURE__ */ jsx(AuthorQuoteMessage, {}),
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: "Not your average SQL course",
        description: "Built around a text-based interactive approach and packed with practical challenges, this comprehensive SQL bootcamp stands out with features that make it truly unique.",
        className: "mt-16 md:mt-20"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-6 w-full max-w-5xl md:mt-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsx(
        CourseFeature,
        {
          title: "Textual Course",
          icon: Eye,
          imgUrl: "https://assets.roadmap.sh/guest/textual-course.png",
          description: "Unlike video-based courses where you have to learn at the pace of the instructor, this course is text-based, allowing you to learn at your own pace."
        }
      ),
      /* @__PURE__ */ jsx(
        CourseFeature,
        {
          title: "Coding Environment",
          icon: CodeIcon,
          imgUrl: "https://assets.roadmap.sh/guest/coding-environment.png",
          description: "With the integrated IDE, you can practice your SQL queries in real-time, getting instant feedback on your results."
        }
      ),
      /* @__PURE__ */ jsx(
        CourseFeature,
        {
          title: "Practical Challenges",
          icon: FileQuestionIcon,
          imgUrl: "https://assets.roadmap.sh/guest/coding-challenges.png",
          description: "The course is packed with practical challenges and quizzes, allowing you to test your knowledge and skills."
        }
      ),
      /* @__PURE__ */ jsx(
        CourseFeature,
        {
          title: "AI Instructor",
          icon: BrainIcon,
          description: "Powerful AI tutor to help you with your queries, provide additional explanations and help if you get stuck.",
          imgUrl: "https://assets.roadmap.sh/guest/ai-integration.png"
        }
      ),
      /* @__PURE__ */ jsx(
        CourseFeature,
        {
          title: "Take Notes",
          icon: ClipboardIcon,
          description: "The course allows you to take notes, where you can write down your thoughts and ideas. You can visit them later to review your progress.",
          imgUrl: "https://assets.roadmap.sh/guest/course-notes.png"
        }
      ),
      /* @__PURE__ */ jsx(
        CourseFeature,
        {
          title: "Completion Certificate",
          icon: FileCheckIcon,
          imgUrl: "https://assets.roadmap.sh/guest/course-certificate.jpg",
          description: "The course provides a completion certificate, which you can share with your potential employers."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-7 w-full max-w-3xl text-left md:mt-9", children: /* @__PURE__ */ jsxs("p", { className: "text-lg leading-normal md:text-xl", children: [
      "Oh, and you get the",
      " ",
      /* @__PURE__ */ jsx("span", { className: "bg-linear-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent", children: "lifetime access" }),
      " ",
      "to the course including all the future updates. Also, there is a certificate of completion which you can share with your potential employers."
    ] }) }),
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: "Course Overview",
        description: "This SQL programming class is designed to help you go from beginner to expert through hands-on practice with real-world scenarios, mastering everything from basic to complex queries.",
        className: "mt-8 md:mt-24"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-8 w-full max-w-3xl space-y-4 md:mt-12", children: sqlCourseChapters.map((chapter, index) => /* @__PURE__ */ jsx(ChapterRow, { counter: index + 1, ...chapter }, index)) }),
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: "About the Author",
        className: "mt-12 md:mt-24",
        description: /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-col gap-4 text-lg leading-[1.52] md:mt-4 md:gap-6 md:text-xl", children: [
          /* @__PURE__ */ jsx("p", { children: "I am Kamran Ahmed, an engineering leader with over a decade of experience in the tech industry. Throughout my career I have built and scaled software systems, architected complex data systems, and worked with large amounts of data to create efficient solutions." }),
          /* @__PURE__ */ jsxs("p", { children: [
            "I am also the creator of",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://roadmap.sh",
                target: "_blank",
                className: "text-yellow-400",
                children: "roadmap.sh"
              }
            ),
            ", a platform trusted by millions of developers to guide their learning journeys. I love to simplify complex topics and make learning practical and accessible."
          ] }),
          /* @__PURE__ */ jsx("p", { children: "In this course, I will share everything I have learned about SQL from the basics to advanced concepts in a way that is easy to understand and apply. Whether you are just starting or looking to sharpen your skills, you are in the right place." })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(CourseAuthor, {}),
    /* @__PURE__ */ jsx(FAQSection, {}),
    /* @__PURE__ */ jsx(FloatingPurchase, {}),
    /* @__PURE__ */ jsx("div", { className: "mt-12 w-full max-w-3xl text-left md:mt-9", children: /* @__PURE__ */ jsxs("p", { className: "flex flex-col items-center justify-center gap-2 text-sm md:flex-row md:gap-0", children: [
      /* @__PURE__ */ jsx("a", { href: "/terms", target: "_blank", className: "text-zinc-500", children: "Terms of Use" }),
      /* @__PURE__ */ jsx("span", { className: "mx-4 hidden md:block", children: "·" }),
      /* @__PURE__ */ jsx("a", { href: "/privacy", target: "_blank", className: "text-zinc-500", children: "Privacy Policy" })
    ] }) })
  ] }) });
}

function SQLCourseVariantPage() {
  return /* @__PURE__ */ jsx("div", { className: "relative flex grow flex-col items-center bg-linear-to-b from-zinc-900 to-zinc-950 px-4 pb-52 text-zinc-400 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-7 w-full max-w-5xl md:mt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(Spotlight, { className: "top-[-200px] left-[-170px]", fill: "#EAB308" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-7 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://roadmap.sh",
            target: "_blank",
            className: "transition-opacity hover:opacity-100",
            children: /* @__PURE__ */ jsx(RoadmapLogoIcon, { className: "size-12 sm:size-22" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start gap-2.5", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl", children: "Master SQL Queries" }),
          /* @__PURE__ */ jsx("p", { className: "text-left text-xl text-balance text-zinc-300 md:text-2xl", children: "Complete course with AI Tutor, real-world challenges and more" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "my-5 text-xl leading-relaxed text-zinc-300 md:my-10 lg:text-xl", children: "Get certified for SQL queries and ready to deploy your newly-gained skill in 30 days. Perfect for developers, data analysts, and anyone working with data. Level up risk-free with a 7-day money-back guarantee." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col-reverse gap-7 lg:flex-row lg:gap-14", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full shrink-0 flex-row-reverse items-start justify-between gap-3 text-lg md:flex lg:w-auto lg:flex-col", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-7 flex flex-col gap-2 lg:mb-0 lg:gap-4", children: [
            { Icon: NotebookTextIcon, text: "55+ Lessons" },
            { Icon: FileQuestionIcon, text: "100+ Challenges" },
            { Icon: BrainIcon, text: "AI Tutor" },
            { Icon: CodeIcon, text: "Integrated IDE" }
          ].map(({ Icon, text }, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-row items-center gap-2 text-base text-zinc-300 lg:text-xl",
              children: [
                /* @__PURE__ */ jsx(Icon, { className: "size-5 text-yellow-400 lg:size-6" }),
                /* @__PURE__ */ jsx("span", { children: text })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsx(AuthorCredentials$1, {})
        ] }),
        /* @__PURE__ */ jsx(PlatformDemo$1, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx(PurchaseBanner, {}),
    /* @__PURE__ */ jsx(ReviewCarousel, {}),
    /* @__PURE__ */ jsx(CourseFeatures, {}),
    /* @__PURE__ */ jsx(MeetYourInstructor, {}),
    /* @__PURE__ */ jsx(
      SectionHeader$1,
      {
        title: "Course Overview",
        description: "This SQL programming class is designed to help you go from beginner to expert through hands-on practice with real-world scenarios, mastering everything from basic to complex queries.",
        className: "mt-8 md:mt-24"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-8 w-full max-w-3xl space-y-4 md:mt-12", children: sqlCourseChapters.map((chapter, index) => /* @__PURE__ */ jsx(ChapterRow$1, { counter: index + 1, ...chapter }, index)) }),
    /* @__PURE__ */ jsx(
      SectionHeader$1,
      {
        title: "Ready to master SQL?",
        description: "Start learning SQL queries risk-free with a 7-day money-back guarantee.",
        className: "mt-8 md:mt-24"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-8 w-full", children: /* @__PURE__ */ jsx(BuyButton$1, { variant: "floating" }) }),
    /* @__PURE__ */ jsx(FAQSection$1, {}),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-12 w-full max-w-3xl text-left md:mt-9", children: /* @__PURE__ */ jsxs("p", { className: "flex flex-col items-center justify-center gap-2 text-sm md:flex-row md:gap-0", children: [
      /* @__PURE__ */ jsx("a", { href: "/terms", target: "_blank", className: "text-zinc-500", children: "Terms of Use" }),
      /* @__PURE__ */ jsx("span", { className: "mx-4 hidden md:block", children: "·" }),
      /* @__PURE__ */ jsx("a", { href: "/privacy", target: "_blank", className: "text-zinc-500", children: "Privacy Policy" })
    ] }) })
  ] }) });
}

export { SQLCourseVariantPage as S, SQLCoursePage as a };
