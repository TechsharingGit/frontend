import React,{useState,useEffect} from 'react';
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
chatBot : {
    textAlign : "center",
    backgroundColor: "#282c34",
    minHeight:'100vh',
    display: "flex",
    justifyContent:"center",
    
},
chatButton :{

    padding:0,
    minWidth:"25px",
    position:"absolute",
    zIndex:5,
    top:"10px",
    right:"10px"
}

}));

const Chatbott = () => {

    const [showBot,toggleBot] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            toggleBot(true);   
        },5000)
        
    }, [])
    

    const classes = useStyles();

    function clickHandler() {
        toggleBot((prev) => !prev)
        
    }

    return (
        <div className="chatBoxres">
            <div style={{height:'100%',position:'relative'}} className="row_full">
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
        </div>
    )
}

export default Chatbott
