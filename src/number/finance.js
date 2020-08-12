module.exports = (number = 0, decimal = 2, symbol = "$") =>
  symbol +
  Number(parseFloat(number).toFixed(decimal)).toLocaleString("en", {
    minimumFractionDigits: decimal,
  });
