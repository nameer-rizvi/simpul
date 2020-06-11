module.exports = (timestamp, format, options) => {
  const date = new Date(timestamp || new Date());
  const noZero = options && options.noZero;
  const zeros = (num, noZero) => (num < 10 && !noZero ? `0${num}` : num);
  const resolver = {
    M: zeros(date.getMonth() + 1, noZero),
    D: zeros(date.getDate(), noZero),
    Y: date.getFullYear(),
    h: zeros(date.getHours() % 12 || "12", noZero),
    m: zeros(date.getMinutes()),
    s: zeros(date.getSeconds()),
    p: date.getHours() > 11 ? "PM" : "AM",
  };
  const { M, D, Y, h, m, p } = resolver;
  return format
    ? format
        .split("")
        .map((l) => resolver[l] || l)
        .join("")
    : `${M}/${D}/${Y} ${h}:${m} ${p}`;
};
