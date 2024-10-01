function delay(ms: number = 1000, onDelay?: () => void): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => {
      if (onDelay) onDelay();
      resolve();
    }, ms),
  );
}

export default delay;
