module.exports = (timestamp, format) => {
  const date = new Date(timestamp);
  const zeros = (num) => (num < 10 ? `0${num}` : num);
  const resolver = {
    M: zeros(date.getMonth() + 1),
    D: zeros(date.getDate()),
    Y: date.getFullYear(),
    h: zeros(date.getHours() % 12 || "12"),
    m: zeros(date.getMinutes()),
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
