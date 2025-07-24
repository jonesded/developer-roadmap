import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { DateTime } from 'luxon';
import { M as Modal } from './BaseLayout_C3JOBLhD.mjs';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

function GoogleCalendarIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: "100",
      height: "100",
      viewBox: "0 0 48 48",
      ...props,
      children: [
        /* @__PURE__ */ jsx("rect", { width: "22", height: "22", x: "13", y: "13", fill: "#fff" }),
        /* @__PURE__ */ jsx(
          "polygon",
          {
            fill: "#1e88e5",
            points: "25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#1e88e5",
            d: "M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"
          }
        ),
        /* @__PURE__ */ jsx(
          "polygon",
          {
            fill: "#fbc02d",
            points: "34,42 14,42 13,38 14,34 34,34 35,38"
          }
        ),
        /* @__PURE__ */ jsx(
          "polygon",
          {
            fill: "#4caf50",
            points: "38,35 42,34 42,14 38,13 34,14 34,34"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#1e88e5",
            d: "M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"
          }
        ),
        /* @__PURE__ */ jsx("polygon", { fill: "#e53935", points: "34,34 34,42 42,34" }),
        /* @__PURE__ */ jsx("path", { fill: "#1565c0", d: "M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z" }),
        /* @__PURE__ */ jsx("path", { fill: "#1565c0", d: "M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z" })
      ]
    }
  );
}

function OutlookCalendarIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: 100,
      height: 100,
      viewBox: "0 0 48 48",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#1976d2",
            d: "M28,13h14.533C43.343,13,44,13.657,44,14.467v19.066C44,34.343,43.343,35,42.533,35H28V13z"
          }
        ),
        /* @__PURE__ */ jsx("rect", { width: 14, height: "15.542", x: 28, y: "17.958", fill: "#fff" }),
        /* @__PURE__ */ jsx("polygon", { fill: "#1976d2", points: "27,44 4,39.5 4,8.5 27,4" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "M15.25,16.5c-3.176,0-5.75,3.358-5.75,7.5s2.574,7.5,5.75,7.5S21,28.142,21,24	S18.426,16.5,15.25,16.5z M15,28.5c-1.657,0-3-2.015-3-4.5s1.343-4.5,3-4.5s3,2.015,3,4.5S16.657,28.5,15,28.5z"
          }
        ),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "28.047", y: "29.737", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "31.448", y: "29.737", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "34.849", y: "29.737", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "28.047", y: "26.159", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "31.448", y: "26.159", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "34.849", y: "26.159", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "38.25", y: "26.159", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "28.047", y: "22.706", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "31.448", y: "22.706", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "34.849", y: "22.706", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "38.25", y: "22.706", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "31.448", y: "19.112", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "34.849", y: "19.112", fill: "#1976d2" }),
        /* @__PURE__ */ jsx("rect", { width: "2.7", height: "2.9", x: "38.25", y: "19.112", fill: "#1976d2" })
      ]
    }
  );
}

function AppleCalendarIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "1736",
      height: "1693",
      viewBox: "0 0 1736 1693",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        /* @__PURE__ */ jsx("rect", { width: "1736", height: "1693", fill: "#ECEFF1" }),
        /* @__PURE__ */ jsx("rect", { x: "1", width: "1734", height: "526", fill: "#FF3D00" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M724.689 300.13L750.665 128H805.4L756.691 401.947H701.224L669.269 240.501L637.587 401.947H581.892L533 128H588.101L613.894 299.947L646.032 128H692.505L724.689 300.13Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M976.776 283.419H890.632V356.061H992.617V401.947H835.303V128H992.206V174.069H890.632V238.812H976.776V283.419Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M1024.39 401.947V128H1096.84C1128.79 128 1154.31 138.182 1173.3 158.454C1192.29 178.771 1201.97 206.623 1202.34 242.008V286.433C1202.34 322.411 1192.84 350.673 1173.8 371.219C1154.86 391.674 1128.66 401.947 1095.28 401.947H1024.39ZM1079.72 174.069V356.015H1096.29C1114.73 356.015 1127.7 351.175 1135.23 341.45C1142.76 331.725 1146.73 314.969 1147.1 291.135V243.514C1147.1 217.946 1143.49 200.094 1136.37 189.958C1129.2 179.867 1117.06 174.571 1099.85 174.069H1079.72Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M831.353 1451.15H380.138V1345.95L587.348 1082.46C613.643 1045.98 632.999 1013.97 645.462 986.442C657.925 958.91 664.133 932.52 664.133 907.271C664.133 873.256 658.29 846.592 646.512 827.324C634.78 808.056 617.843 798.423 595.748 798.423C571.553 798.423 552.379 809.654 538.182 832.072C523.984 854.536 516.863 886.086 516.863 926.767H367.492C367.492 879.785 377.216 836.821 396.663 797.875C416.111 758.929 443.456 728.703 478.698 707.153C513.941 685.556 553.84 674.781 598.35 674.781C666.735 674.781 719.736 693.638 757.444 731.351C795.152 769.065 814.006 822.621 814.006 892.067C814.006 935.168 803.552 978.954 782.735 1023.29C761.872 1067.67 724.073 1122.27 669.383 1187.11L571.051 1327.55H831.353V1451.15Z",
            fill: "#424242"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M1354.1 888.871C1354.1 926.036 1346.21 959.001 1330.41 987.766C1314.62 1016.53 1292.89 1039.5 1265.22 1056.66C1296.77 1074.56 1321.69 1099.17 1339.91 1130.58C1358.12 1161.95 1367.25 1198.89 1367.25 1241.3C1367.25 1309.33 1347.62 1363.07 1308.36 1402.52C1269.1 1441.97 1215.6 1461.69 1147.94 1461.69C1080.29 1461.69 1026.47 1441.97 986.475 1402.52C946.53 1363.07 926.535 1309.33 926.535 1241.3C926.535 1198.89 935.62 1161.9 953.88 1130.35C972.095 1098.81 997.203 1074.24 1029.11 1056.71C1001.04 1039.54 979.171 1016.58 963.376 987.811C947.58 959.047 939.683 926.128 939.683 888.916C939.683 821.936 958.445 769.521 995.971 731.625C1033.45 693.729 1083.8 674.781 1146.89 674.781C1210.71 674.781 1261.2 693.912 1298.36 732.127C1335.52 770.343 1354.1 822.576 1354.1 888.871ZM1147.94 1338.05C1170.36 1338.05 1187.66 1328.46 1199.76 1309.38C1211.85 1290.29 1217.88 1263.72 1217.88 1229.71C1217.88 1195.69 1211.58 1169.07 1198.94 1149.76C1186.29 1130.45 1168.94 1120.81 1146.89 1120.81C1124.8 1120.81 1107.36 1130.45 1094.58 1149.76C1081.79 1169.07 1075.36 1195.69 1075.36 1229.71C1075.36 1263.72 1081.75 1290.29 1094.58 1309.38C1107.36 1328.51 1125.16 1338.05 1147.94 1338.05ZM1205.78 896.724C1205.78 866.909 1200.94 843.076 1191.31 825.224C1181.68 807.326 1166.89 798.377 1146.89 798.377C1127.95 798.377 1113.57 807.052 1103.8 824.402C1093.98 841.752 1089.05 865.859 1089.05 896.724C1089.05 926.904 1093.98 951.148 1103.8 969.594C1113.61 987.994 1128.31 997.217 1147.94 997.217C1167.57 997.217 1182.14 987.994 1191.59 969.594C1201.04 951.194 1205.78 926.904 1205.78 896.724Z",
            fill: "#424242"
          }
        )
      ]
    }
  );
}

function FileIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      width: 100,
      height: 100,
      viewBox: "0 0 48 48",
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { fill: "#90CAF9", d: "M40 45L8 45 8 3 30 3 40 13z" }),
        /* @__PURE__ */ jsx("path", { fill: "#E1F5FE", d: "M38.5 14L29 14 29 4.5z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#1976D2",
            d: "M16 21H33V23H16zM16 25H29V27H16zM16 29H33V31H16zM16 33H29V35H16z"
          }
        )
      ]
    }
  );
}

function generateRoadmapIcsFile(title, details, location, startDate, endDate) {
  const ics = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
DTSTART:${startDate.toISOString().replace(/-|:|\.\d+/g, "")}
DTEND:${endDate.toISOString().replace(/-|:|\.\d+/g, "")}
RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR

BEGIN:VALARM
TRIGGER:-PT30M
ACTION:DISPLAY
DESCRIPTION:Reminder: ${title} starts in 30 minutes
END:VALARM

BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder: ${title} starts in 15 minutes
END:VALARM

END:VEVENT
END:VCALENDAR
  `.trim();
  return new Blob([ics], { type: "text/calendar" });
}
function ScheduleEventModal(props) {
  const { onClose, roadmapId } = props;
  let roadmapTitle = "";
  if (roadmapId === "devops") {
    roadmapTitle = "DevOps";
  } else if (roadmapId === "ios") {
    roadmapTitle = "iOS";
  } else if (roadmapId === "postgresql-dba") {
    roadmapTitle = "PostgreSQL";
  } else if (roadmapId === "devrel") {
    roadmapTitle = "DevRel";
  } else if (roadmapId === "qa") {
    roadmapTitle = "QA";
  } else if (roadmapId === "api-design") {
    roadmapTitle = "API Design";
  } else if (roadmapId === "ai-data-scientist") {
    roadmapTitle = "AI/Data Scientist";
  } else if (roadmapId === "technical-writer") ; else if (roadmapId === "software-architect") {
    roadmapTitle = "Software Architecture";
  } else if (roadmapId === "ai-engineer") {
    roadmapTitle = "AI Engineer";
  } else {
    roadmapTitle = roadmapId.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = `https://roadmap.sh/${roadmapId}`;
  const title = `Learn from ${roadmapTitle} Roadmap - roadmap.sh`;
  const details = `
Learn from the ${roadmapTitle} roadmap on roadmap.sh

Visit the roadmap at https://roadmap.sh/${roadmapId}
  `.trim();
  const handleDownloadICS = () => {
    setIsLoading(true);
    const calendarTitle = selectedCalendar || "ICS";
    triggerScheduleEvent(
      `${calendarTitle.charAt(0).toUpperCase()}${calendarTitle.slice(1)}`
    );
    const startDate = DateTime.now().minus({
      minutes: DateTime.now().minute % 30
    });
    const endDate = startDate.plus({ hours: 1 });
    const blob = generateRoadmapIcsFile(
      title,
      details,
      location,
      startDate.toJSDate(),
      endDate.toJSDate()
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${roadmapTitle}.ics`;
    a.click();
    setIsLoading(false);
    URL.revokeObjectURL(url);
  };
  const triggerScheduleEvent = function(type) {
    window.fireEvent({
      category: "ScheduleTimeClick",
      action: `Schedule Learning Time`,
      label: `Schedule Learning Time / ${type}`,
      value: `Schedule Learning Time / ${type}`
    });
  };
  const handleGoogleCalendar = () => {
    setIsLoading(true);
    triggerScheduleEvent("Google");
    const baseURL = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const startDate = DateTime.now().minus({
      minutes: DateTime.now().minute % 30
    });
    const endDate = startDate.plus({ hours: 1 });
    const eventDetails = new URLSearchParams({
      text: title,
      dates: `${startDate.toISO().replace(/-|:|\.\d+/g, "")}/${endDate.toISO().replace(/-|:|\.\d+/g, "")}`,
      details,
      location,
      recur: "RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR"
    }).toString();
    setIsLoading(false);
    window.open(`${baseURL}&${eventDetails}`, "_blank");
  };
  const stepDetails = {
    apple: {
      title: "Add to Apple Calendar",
      steps: [
        "Download the iCS File",
        "Open the downloaded file, and it will automatically open your default calendar app.",
        /* @__PURE__ */ jsxs(Fragment, { children: [
          "If Apple Calendar is not your default calendar app, open Apple Calendar, go to ",
          /* @__PURE__ */ jsx("strong", { children: "File > Import" }),
          ", and choose the downloaded file."
        ] })
      ]
    },
    outlook: {
      title: "Add to Outlook Calendar",
      steps: [
        "Download the iCS File",
        /* @__PURE__ */ jsxs(Fragment, { children: [
          "Open Outlook and go to",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "File > Open & Export > Import/Export" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          "In the Import and Export Wizard select",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "Import an iCalendar (.ics) or vCalendar file (.vcs)" }),
          ". You can then choose to keep it a separate calendar or make it a new calendar."
        ] })
      ]
    }
  };
  return /* @__PURE__ */ jsx(
    Modal,
    {
      onClose,
      bodyClassName: "bg-transparent shadow-none",
      wrapperClassName: "h-auto max-w-lg",
      overlayClassName: "items-start md:items-center",
      children: /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-white px-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center p-4 py-6 text-center", children: [
        selectedCalendar && /* @__PURE__ */ jsx(
          CalendarSteps,
          {
            title: stepDetails[selectedCalendar].title,
            steps: stepDetails[selectedCalendar].steps,
            onDownloadICS: handleDownloadICS,
            onCancel: () => {
              setSelectedCalendar(null);
            },
            isLoading
          }
        ),
        !selectedCalendar && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold", children: "Schedule Learning Time" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-balance text-base text-gray-600", children: "Block some time on your calendar to stay consistent" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ jsx(
              CalendarButton,
              {
                icon: GoogleCalendarIcon,
                label: "Google Calendar",
                onClick: handleGoogleCalendar,
                isLoading
              }
            ),
            /* @__PURE__ */ jsx(
              CalendarButton,
              {
                icon: AppleCalendarIcon,
                label: "Apple Calendar",
                onClick: () => {
                  setSelectedCalendar("apple");
                }
              }
            ),
            /* @__PURE__ */ jsx(
              CalendarButton,
              {
                icon: OutlookCalendarIcon,
                label: "Outlook Calendar",
                onClick: () => {
                  setSelectedCalendar("outlook");
                }
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "mx-auto my-4 text-base text-gray-600", children: "or download the iCS file and import it to your calendar app" }),
            /* @__PURE__ */ jsx(
              CalendarButton,
              {
                icon: FileIcon,
                label: "Download File (.ics)",
                onClick: handleDownloadICS
              }
            )
          ] })
        ] })
      ] }) })
    }
  );
}
function CalendarButton(props) {
  const { icon: Icon, label, isLoading, onClick } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: "flex w-full items-center justify-between gap-2 rounded-lg border px-3 py-3 leading-none hover:bg-gray-100 disabled:opacity-60 data-[loading='true']:cursor-progress",
      "data-loading": isLoading,
      disabled: isLoading,
      onClick,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 shrink-0 stroke-[2.5]" }),
          label
        ] }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 stroke-[2.5]" })
      ]
    }
  );
}
function CalendarSteps(props) {
  const { steps, onDownloadICS, onCancel, title, isLoading } = props;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold", children: title }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-col gap-2", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "relative top-px flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-600", children: index + 1 }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ jsx("p", { className: "text-left text-base text-gray-800", children: step }) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex-1 rounded-md border border-gray-300 py-2 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-60 data-[loading='true']:cursor-progress",
          onClick: onCancel,
          disabled: isLoading,
          children: "Go back"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "flex-1 rounded-md bg-black py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-60 data-[loading='true']:cursor-progress",
          onClick: onDownloadICS,
          disabled: isLoading,
          "data-loading": isLoading,
          children: "Download"
        }
      )
    ] })
  ] });
}

export { ScheduleEventModal as S };
