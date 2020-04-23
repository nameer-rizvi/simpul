module.exports = (msg) => {
  const time = () => {
    const date = new Date();
    const format = (num) => (num < 10 ? `0${num}` : num);
    const month = format(date.getMonth() + 1);
    const day = format(date.getDate());
    const year = date.getFullYear();
    const hour = format(date.getHours() % 12 || 12);
    const minutes = format(date.getMinutes());
    const m = date.getHours() > 11 ? "PM" : "AM";
    return `${month}/${day}/${year} ${hour}:${minutes} ${m}`;
  };
  const placeholder =
    "[logti] message is not / does not contain a recognizable string.";
  const findAndReturnFirstStringProp = (obj) => {
    const stringIndex = Object.keys(obj).find(
      (i) => obj[i] && obj[i].constructor === String
    );
    return stringIndex ? obj[stringIndex] : placeholder;
  };
  const message = () =>
    msg.constructor === String
      ? msg
      : msg.message
      ? msg.message
      : msg.constructor === Object
      ? findAndReturnFirstStringProp(msg)
      : placeholder;
  console.log(`[${time()}] ${msg ? message() : placeholder}`);
};
