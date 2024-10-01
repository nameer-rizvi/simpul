function parsejson(json: string): any {
  try {
    return JSON.parse(json);
  } catch {}
}

export default parsejson;
