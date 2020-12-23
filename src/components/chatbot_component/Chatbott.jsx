import React,{useState} from 'react';
import Chatbot from 'react-chatbot-kit'; 
import Button from '@material-ui/core/Button';
import { emphasize, 
    withStyles, 
    makeStyles,
    ThemeProvider } from '@material-ui/core/styles';

import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import './Chatbot.css';


const useStyles = makeStyles((theme) => ({

    root :{
        position:"absolute",
    },

chatBot : {
    textAlign : "center",
    backgroundColor: "#282c34",
    minHeight:'100vh',
    display: "flex",
    justifyContent:"center",
    
},

chatButton :{

    padding:0,
    minWidth:"40px",
    position:"relative",
    zIndex:5,
    top:"-18.5rem",
    right:"-1280px"


}

}));

const Chatbott = () => {

    const [showBot,toggleBot] = useState(true);
    

    const classes = useStyles();

    function clickHandler() {
        toggleBot((prev) => !prev)
        
    }

    return (
        <div className={classes.root} style={{maxWidth:"300px"}}>
        {showBot && (
            <Chatbot className={classes.chatBot}
                     config={config}
                     messageParser={MessageParser}
                     actionProvider={ActionProvider}        
            />
        )} 
        <Button 
                className={classes.chatButton} 
                variant="contained"
                 size="small"
                 color="secondary"      
                 style={{display : showBot ? "block" : "none" }} 
                 onClick={clickHandler}>X</Button>         
        </div>
    )
}

export default Chatbott
