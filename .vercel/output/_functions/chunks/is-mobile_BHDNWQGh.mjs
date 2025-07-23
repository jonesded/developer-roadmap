function isAndroid() {
  return typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
}
function isSmallIOS() {
  return typeof navigator !== "undefined" && /iPhone|iPod/.test(navigator.userAgent);
}
function isLargeIOS() {
  return typeof navigator !== "undefined" && (/iPad/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}
function isIOS() {
  return isSmallIOS() || isLargeIOS();
}
function isMobile() {
  return isAndroid() || isIOS();
}
function isMobileScreen() {
  return typeof window !== "undefined" && (window.innerWidth < 640 || isMobile());
}
function getTailwindScreenDimension() {
  if (window.innerWidth < 640) {
    return "sm";
  }
  if (window.innerWidth < 768) {
    return "md";
  }
  if (window.innerWidth < 1024) {
    return "lg";
  }
  if (window.innerWidth < 1280) {
    return "xl";
  }
  return "2xl";
}

export { getTailwindScreenDimension as g, isMobileScreen as i };
