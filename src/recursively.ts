import validate from "./validate";

interface CallbackArgs {
  key: string;
  path: string;
  value: any;
  depth: number;
}

function recursively(
  input: any,
  callback: (args: CallbackArgs) => any,
  depth = 0,
  path: string[] = [],
): any {
  function makePath(curr: string | number): [string, string] {
    const key = String(curr);
    const fullPath = path[1] ? `${path[1]}.${key}` : key;
    return [key, fullPath];
  }

  if (validate.isArray(input)) {
    const results: any[] = [];
    for (let i = 0; i < input.length; i++) {
      results.push(recursively(input[i], callback, depth + 1, makePath(i)));
    }
    return results;
  }

  if (validate.isObject(input)) {
    const result: Record<string, any> = {};
    for (const key in input) {
      if (!Object.prototype.hasOwnProperty.call(input, key)) continue;
      result[key] = recursively(input[key], callback, depth + 1, makePath(key));
    }
    return result;
  }

  return callback({ key: path[0], path: path[1], value: input, depth });
}

export default recursively;
