import validate from "./validate";

function escaper(dirty: string): string | undefined {
  if (validate.isString(dirty)) {
    return dirty.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

export default escaper;

// Alternate RegEx: dirty.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
