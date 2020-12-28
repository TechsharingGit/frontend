import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        top:theme.spacing(14)
    }

}))

const Notifications = (props) => {
    const classes = useStyles();
    const {notify, setNotify} = props;

    const handleClose =(e,reason) => {
        if(reason === 'clickaway') {
            return; 
        }
        setNotify({
            ...notify,
            isOpen:false
        })

    }

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{vertical:"top",horizontal:"center"}}
            onClose={handleClose}
        >
            <Alert severity={notify.type}
                   onClose={handleClose} 
            >
            {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notifications
