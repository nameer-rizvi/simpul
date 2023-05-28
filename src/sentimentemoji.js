function sentimentemoji(
  max = 50,
  min = 0,
  emojis = ["🐻", "💬", "👀", "🔥", "⭐", "🌟", "💫", "✨"]
) {
  const size = (max - min) / emojis.length;

  return (score) => {
    const index =
      score <= min
        ? 0
        : score >= max
        ? emojis.length - 1
        : Math.floor(score / size);

    const emoji = emojis[index];

    return emoji;
  };
}

module.exports = sentimentemoji;
