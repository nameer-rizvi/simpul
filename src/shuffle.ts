function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    if (i !== j) {
      const tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
  }
  return array;
}

export default shuffle;
