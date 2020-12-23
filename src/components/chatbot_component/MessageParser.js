class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const lowercase = message.toLowerCase();
        if(lowercase.includes("hello"))
        {
            this.actionProvider.handleChatMessage();
        }
        if(lowercase.includes("functions")){
            this.actionProvider.optionsHandler();
        }
    }
  }
  
  export default MessageParser;