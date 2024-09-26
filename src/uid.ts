function uid(radix: number = 32): string {
  return Date.now().toString(radix) + Math.random().toString(radix).substr(2);
}

export default uid;
