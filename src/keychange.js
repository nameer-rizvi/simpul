const validate = require("./validate");
const math = require("./math");

// num1 === "current number", num2 === "previous number"

function keychange(obj, name, num1, num2) {
  if (validate.isObject(obj)) {
    Object.assign(obj, {
      [name + "ChangeNum"]: math.change.num(num2, num1) || 0,
      [name + "ChangePercent"]: math.change.percent(num2, num1) || 0,
    });
  }
}

module.exports = keychange;
