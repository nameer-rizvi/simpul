import validate from "./validate";

interface CallbackArgs {
  key: string;
  path: string;
  value: any;
  depth: number;
}

function recursively(
  json: any,
  callback: (args: CallbackArgs) => any,
  depth: number = 0,
  path: string[] = []
): any {
  function makePath(curr: string | number): [string, string] {
    const path0 = curr.toString();
    const path1 = path?.[1] ? `${path[1]}.${curr}` : curr.toString();
    return [path0, path1];
  }

  if (validate.isArray(json)) {
    for (let i = 0; i < json.length; i++) {
      json[i] = recursively(json[i], callback, depth + 1, makePath(i));
    }
    return json;
  }

  if (validate.isObject(json)) {
    for (const key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        // TODO
        // json[key] = recursively(json[key], callback, depth + 1, makePath(key));
      }
    }
    return json;
  }

  return callback({ key: path[0], path: path[1], value: json, depth });
}

export default recursively;
