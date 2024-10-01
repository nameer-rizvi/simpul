import _delimiter from "./delimiter";
import validate from "./validate";
import cleanstring from "./cleanstring";

function delimitersplit(
  string: string,
  delimiter: string = _delimiter,
  delimiter2?: string,
  filter?: string,
): string[] {
  if (!validate.isString(string)) return [];

  let splits = string
    .replace(/<br>|<br \/>|<br\/>|\n/g, delimiter)
    .split(delimiter);

  if (delimiter2 !== undefined) {
    splits = splits.map((s) => s.split(delimiter2)).flat();
  }

  const cleanSet: string[] = [];

  for (const split of [...new Set(splits)]) {
    const clean = cleanstring(split);
    if (validate.isString(clean) && clean.length) {
      if (filter && clean.toLowerCase() === filter.toLowerCase()) continue;
      cleanSet.push(clean);
    }
  }

  return cleanSet;
}

export default delimitersplit;
