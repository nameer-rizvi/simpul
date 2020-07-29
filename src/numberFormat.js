exports.financial = (number, decimal, symbol) =>
  (symbol ? symbol : "$") +
  Number(parseFloat(number).toFixed(decimal || 2)).toLocaleString("en", {
    minimumFractionDigits: decimal || 2,
  });
