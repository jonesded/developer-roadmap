import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Cqa-EqH9.mjs';
import { a as SQLCoursePage, S as SQLCourseVariantPage } from '../../chunks/SQLCourseVariantPage_XS5QXRgc.mjs';
import { $ as $$SkeletonLayout } from '../../chunks/SkeletonLayout_BiNdppmE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Sql = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SkeletonLayout", $$SkeletonLayout, { "htmlClassName": "varify-antiflicker", "title": "Master SQL", "briefTitle": "Learn SQL from the ground up", "ogImageUrl": "https://assets.roadmap.sh/guest/sql-course-bjc53.png", "description": "Learn SQL from the ground up. This SQL programming class is designed to help you go from beginner to expert through hands-on practice with real-world scenarios, mastering everything from basic to complex queries.", "keywords": [
    "sql",
    "database",
    "database management",
    "database administration"
  ], "canonicalUrl": "/courses/sql", "hasVarify": true, "jsonLd": [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": "https://roadmap.sh/courses/sql",
      name: "Master SQL",
      description: "A comprehensive SQL course designed to take you from beginner to advanced levels, featuring 55+ lessons, 100+ challenges, an integrated IDE, and an AI tutor. Ideal for developers, data analysts, and anyone working with data.",
      provider: {
        "@type": "Organization",
        name: "roadmap.sh",
        url: "https://roadmap.sh"
      },
      publisher: {
        "@type": "Organization",
        name: "roadmap.sh",
        url: "https://roadmap.sh"
      },
      timeRequired: "PT60H",
      isAccessibleForFree: false,
      offers: {
        "@type": "Offer",
        url: "https://roadmap.sh/courses/sql",
        price: "59.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: "paid"
      },
      image: ["https://assets.roadmap.sh/guest/sql-course-bjc53.png"],
      coursePrerequisites: [],
      teaches: [
        "SQL syntax and queries",
        "Data filtering and sorting",
        "Joins and subqueries",
        "Aggregate functions",
        "Stored procedures",
        "Views and indexes",
        "Transactions and ACID properties",
        "Query optimization techniques"
      ],
      educationalLevel: "Beginner to Advanced",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: 500
      },
      inLanguage: "en",
      review: [
        {
          "@type": "Review",
          reviewBody: "This course was absolutely brilliant! The integrated database environment to practice what I learned was the best part.",
          author: {
            "@type": "Person",
            name: "Gourav Khunger"
          }
        },
        {
          "@type": "Review",
          reviewBody: "Kamran has clearly put a lot of thought into this course. The content, structure and exercises were all great.",
          author: {
            "@type": "Person",
            name: "Meabed"
          }
        },
        {
          "@type": "Review",
          reviewBody: "I already knew SQL but this course taught me a bunch of new things. Practical examples and challenges were great. Highly recommended!",
          author: {
            "@type": "Person",
            name: "Mohsin Aheer"
          }
        }
      ],
      educationalCredentialAwarded: {
        "@type": "EducationalOccupationalCredential",
        name: "Certificate of Completion",
        credentialCategory: "Certificate",
        url: "https://roadmap.sh/courses/sql"
      },
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: "PT60H"
        }
      ]
    }
  ] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="course-variant-1"> ${renderComponent($$result2, "SQLCoursePage", SQLCoursePage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/SQLCourse/SQLCoursePage.tsx", "client:component-export": "SQLCoursePage" })} </div> <div class="course-variant-2 !hidden"> ${renderComponent($$result2, "SQLCourseVariantPage", SQLCourseVariantPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/SQLCourseVariant/SQLCourseVariantPage", "client:component-export": "SQLCourseVariantPage" })} </div> ` })}`;
}, "/workspace/src/pages/courses/sql.astro", void 0);

const $$file = "/workspace/src/pages/courses/sql.astro";
const $$url = "/courses/sql";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sql,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
