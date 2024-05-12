const axios = require("axios");

module.exports = {
  config: {
    name: "akhiro",
    author: "AkhiroDEV",
    description: "Talk to AkhiroAI",
    usage: "{p}akhiro [query]"
  },
  async onStart({ api, event, args }){
    const question = args.join(" ");
    if (!question){
      return api.sendMessage("ℹ️ | Provide a question.", event.threadID, event.messageID)
    }
    try {
      const response = await axios.get(`https://joshweb.click/new/gpt-4_adv?prompt=${encodeURIComponent(args)}`);
      const message = response.data.content

      api.sendMessage(`${message}`, event.messageID, event.threadID);
      api.sendMessage(`Please Contact The API Developer If There Would Be An Error.
      https://www.facebook.com/carljohn.villavito`)
    } catch (error) {
      console.log(error);
      api.sendMessage(`ERROR: ${error.message}`, event.threadID, event.messageID)
    }
  }
}
