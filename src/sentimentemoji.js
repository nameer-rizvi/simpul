function sentimentemoji(
  min = 0,
  max = 100,
  emojis = ["🐻", "💬", "👀", "💯", "🚀", "🔥", "⭐", "🌟", "💫", "✨"],
) {
  const size = (max - min) / emojis.length;

  return (score) => {
    let index = Math.floor(score / size);

    if (score <= min) {
      index = 0;
    } else if (score >= max) {
      index = emojis.length - 1;
    }

    return emojis[index];
  };
}

module.exports = sentimentemoji;

// const sentimentScale = [
//   {
//     score: 0,
//     emoji: "",
//   },
//   {
//     score: 1,
//     emoji: "🙂",
//   },
//   {
//     score: 2,
//     emoji: "😎😎",
//   },
//   {
//     score: 3,
//     emoji: "🥳🥳🥳",
//   },
//   {
//     score: 5,
//     emoji: "🤘😎🤘",
//   },
//   {
//     score: 10,
//     emoji: "⭐⭐",
//   },
//   {
//     score: 20,
//     emoji: "⭐⭐⭐⭐",
//   },
//   {
//     score: 30,
//     emoji: "⭐⭐⭐",
//   },
//   {
//     score: 40,
//     emoji: "😍",
//   },
//   {
//     score: 50,
//     emoji: "🤩",
//   },
//   {
//     score: 60,
//     emoji: "🤩",
//   },
//   {
//     score: 69,
//     emoji: "😏",
//     exact: true,
//   },
//   {
//     score: 70,
//     emoji: "🤩",
//   },
//   {
//     score: 80,
//     emoji: "🤩",
//   },
//   {
//     score: 90,
//     emoji: "🤩",
//   },
//   {
//     score: 100,
//     emoji: "💯",
//     exclamation: true,
//   },
//   {
//     score: 200,
//     emoji: "💯💯",
//     exclamation: true,
//   },
//   {
//     score: 300,
//     emoji: "💯💯💯",
//     exclamation: true,
//   },
//   {
//     score: 400,
//     emoji: "👏👏",
//     exclamation: true,
//   },
//   {
//     score: 500,
//     emoji: "🤯",
//     exclamation: true,
//   },
//   {
//     score: 600,
//     emoji: "",
//     exclamation: true,
//   },
//   {
//     score: 700,
//     emoji: "",
//     exclamation: true,
//   },
//   {
//     score: 800,
//     emoji: "",
//     exclamation: true,
//   },
//   {
//     score: 900,
//     emoji: "",
//     exclamation: true,
//   },
//   {
//     score: 1000,
//     emoji: "🙌🙌",
//     exclamation: true,
//   },
//   {
//     score: 2000,
//     emoji: "🚀✨💫",
//     exclamation: true,
//   },
//   {
//     score: 3000,
//     emoji: "🚀✨💫",
//     exclamation: true,
//   },
//   {
//     score: 4000,
//     emoji: "🚀✨💫",
//     exclamation: true,
//   },
//   {
//     score: 5000,
//     emoji: "🔥",
//     exclamation: true,
//   },
//   {
//     score: 10000,
//     emoji: "🔥",
//     exclamation: true,
//   },
// ];
