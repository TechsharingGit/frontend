import { createChatBotMessage } from "react-chatbot-kit";
import Options from './Options';

const config = {
    botName:"Drona",
  initialMessages: [createChatBotMessage(`Hi!, How can i help you?`)],

  state : {
      options:[]  
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      mapStateToProps: ["options"], 
    }
]
}


export default config