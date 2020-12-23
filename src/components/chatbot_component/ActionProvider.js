class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    handleChatMessage = () => {
        const message = this.createChatBotMessage("Hello! No need to worry we will figure it out!");
        this.setChatBotMessage(message);

    }

    optionsHandler = () =>
    {
      const message = this.createChatBotMessage("Sure, will provide you the with the available options.",{
        widget:"options",
      });
      this.setChatBotMessage(message);
    }


    setChatBotMessage = (message) => {
        this.setState((prevState) => ({ ...prevState,messages:[...prevState.messages,message]}))

    }

  }
  
  export default ActionProvider;