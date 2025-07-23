const formatter = Intl.NumberFormat("en-US", {
  useGrouping: true
});
function formatCommaNumber(number) {
  return formatter.format(number);
}
function decimalIfNeeded(number) {
  return number % 1 === 0 ? number.toString() : number.toFixed(1);
}
function humanizeNumber(number) {
  if (number < 1e3) {
    return formatCommaNumber(number);
  }
  if (number < 1e6) {
    return `${decimalIfNeeded(number / 1e3)}k`;
  }
  return `${decimalIfNeeded(number / 1e6)}m`;
}
function getPercentage(portion, total) {
  if (portion <= 0 || total <= 0) {
    return 0;
  }
  if (portion >= total) {
    return 100;
  }
  const percentage = portion / total * 100;
  return Math.min(Math.round(percentage), 100);
}

export { decimalIfNeeded as d, formatCommaNumber as f, getPercentage as g, humanizeNumber as h };
