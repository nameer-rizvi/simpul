import validate from "./validate";

function escaper(input: unknown): string | undefined {
  if (validate.isString(input)) {
    if ("escape" in RegExp && typeof RegExp.escape === "function") {
      return RegExp.escape(input);
    } else {
      return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }
}

export default escaper;

// Alternate RegEx: dirty.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
