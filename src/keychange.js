const validate = require("./validate");
const math = require("./math");

function keychange(obj, name, ...args) {
  if (validate.isObject(obj)) {
    Object.assign(obj, {
      [name + "ChangeNum"]: math.change.num(...args) || 0,
      [name + "ChangePercent"]: math.change.percent(...args) || 0,
    });
  }
}

module.exports = keychange;
