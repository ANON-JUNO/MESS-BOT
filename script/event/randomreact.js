module.exports.config = {
  name: "randomreact",
  version: "69",
  credits: "cliff",
};

module.exports.handleEvent = async function ({ api, event }) {
  if (event.body) {
    const emojis = ['🤍'
      ];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    api.setMessageReaction(randomEmoji, event.messageID, () => {}, true);
  }
};
