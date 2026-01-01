function delay(input = 1000, onDelay?: () => void): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, input)).then(onDelay);
}

export default delay;
