function pricelimit(price, limit) {
  return Math.ceil((price + price * limit) * 100) / 100;
}

module.exports = pricelimit;
