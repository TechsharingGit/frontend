import  React, { useState } from 'react';
import './SignUp.css';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Notification from '../../notifications/Notifications';
import { useForm, Controller } from 'react-hook-form';



import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '70%',
      },
    },
    formControl:{
    margin: theme.spacing(1),
    minWidth: 120,
    },
    vertical:{
      minWidth:"16px",
    },
    dialogWrapper:{
        padding:theme.spacing(2),
        position:"absolute",
        top:"48px",

    },
    dispDialogTitle :{
      position:"relative",
      left:"320px",
      bottom:"10px",
      minWidth:"40px",
    },
    error: {
      color: 'red',
    },
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const SignUp = () => {

  // const { register, handleSubmit, errors, control } = useForm();
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [option, setOption] = useState('');
    const [notify,setNotify] = useState({
      isOpen :false,
      message : '',
      type:''
    });

    const { register, handleSubmit, control, errors } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      phoneNo: '',
      remember: false,
    },
  });

    const [userDetails, setUserDetails] = React.useState({
          fullname:"",
          email:"",
          password:"",
          phoneNo:"",
          city:"",
          vertical:""
          
    });

    

    let isError = false;
    let helpertext = " "

    const errorMessg = () => {

      isError="true";
      helpertext="Must not be empty";
    }


    // const handleChange = (e) => {
    //   //const name = event.target.name;
    //   // setOption(event.target.value,);
    //   // console.log(event.target.value);
    //     setUserDetails({
    //       vertical:e.target.value
    //     });
    //     console.log(userDetails.vertical);

    //   };

    const handleUserData = (e) => {

      const newValue = e.target.value;
      const inputName = e.target.name;

      setUserDetails(prevValue => {
          if(inputName === "fullname"){
            if(newValue.length <= 0) {

                // errorMessg();
              
            }
          
        
         
             return {
              fullname : newValue,
              email:prevValue.email,
              password:prevValue.password,
              phoneNo:prevValue.phoneNo,
              city:prevValue.city,
              vertical:prevValue.vertical

             }
             
          } else if(inputName === "email"){
            return {
              fullname : prevValue.fullname,
              email:newValue,
              password:prevValue.password,
              phoneNo:prevValue.phoneNo,
              city:prevValue.city,
              vertical:prevValue.vertical 
                  }
          } else if(inputName === "password") {
                return {
                  fullname : prevValue.fullname,
                  email:prevValue.email,
                  password:newValue,
                  phoneNo:prevValue.phoneNo,
                  city:prevValue.city,
                  vertical:prevValue.vertical    
                }
          } else if(inputName === "phoneNo") {
                return {
                  fullname : prevValue.fullname,
                  email:prevValue.email,
                  password:prevValue.password,
                  phoneNo:newValue,
                  city:prevValue.city,
                  vertical:prevValue.vertical 

                }
          } else if(inputName === "city") {
                return {
                  fullname : prevValue.fullname,
                  email:prevValue.email,
                  password:prevValue.password,
                  phoneNo:prevValue.phoneNo,
                  city:newValue,
                  vertical:prevValue.vertical 
                }
          } else if(inputName === "vertical") {
              return {
                fullname : prevValue.fullname,
                email:prevValue.email,
                password:prevValue.password,
                phoneNo:prevValue.phoneNo,
                city:prevValue.city,
                vertical:newValue
              }
          }
      });
    }

    const handleSubmitData = (e) => {
      // e.preventDefault();

      const registeredUser = {
        fullname: userDetails.fullname,
        email: userDetails.email,
        password: userDetails.password,
        phoneNo: userDetails.phoneNo,
        city: userDetails.city,
        vertical: userDetails.vertical
      }

      axios.post('http://localhost:4000/',registeredUser)
      .then(response => console.log(response.data))

    }

    // const handleClick = (e) => {
    //     setOpen(false);
    //     e.preventDefault();
    //     setNotify({
    //       isOpen:true,
    //       message:"Successfully Registered",
    //       type:"success"
    //     })
    //   };

      const handleClose = (e) => {
        setOpen(false);
        e.preventDefault();
      }

      //  const handleFullName = (e) => {
      //       setUserDetails({
      //         fullname:e.target.value
             
      //       });
      //       console.log(userDetails.fullname);
      //  } 

      //  const handleEmail = (e) => {
      //     setUserDetails({
      //         email:e.target.value

      //     });

      //  }


    // const handlePassword = (e) => {
    //       setUserDetails({
    //         password:e.target.value
    //       });
    // }
    
    // const handlePhoneno = (e) => {
    //     setUserDetails({
    //         phoneNo:e.target.value
    //     });
    // }

    // const handleCity = (e) => {
    //     setUserDetails({
    //         city:e.target.value
    //     });

    // }

    
    return (
        <div>
            <Dialog
        classes={{paper:classes.dialogWrapper}}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        >
                <DialogTitle id="alert-dialog-slide-title">{"Not Signed Up?"}
                  <Button className={classes.dispDialogTitle} color="secondary" variant="contained" onClick={handleClose}>X</Button>
                
                </DialogTitle>
                    {/* <DialogContent dividers> */}
                    <form className={classes.root} 
                          noValidate 
                          autoComplete="off"
                          onSubmit={handleSubmit(handleSubmitData)}
                                
                    >
                        <TextField id="standard-basic" 
                                   label="Name" 
                                   name="fullname" 
                                   onChange={handleUserData} 
                                   value={userDetails.fullname}
                                   required 
                                   error= {isError}
                                   helperText ={helpertext}
                                   autoComplete='fullname'
                                   fullWidth
                                   />
                        <TextField id="standard-basic" 
                                   label="Email-Id" 
                                   name="email" 
                                   value={userDetails.email}
                                   error={!!errors.email} 
                                   onChange={handleUserData} 
                                   autoComplete='email'
                                   inputRef={register({
                                              required: 'You must provide the email address!',
                                              pattern: {
                                              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                              message: 'You must provide a valid email address!',
                                           },
                                          })}  
                                   />
                {errors.email && (
            <span className={classes.error}>{errors.email.message}</span>
          )};                   
                        <TextField
                              id="standard-password-input"
                              label="Password"
                              type="password"
                              autoComplete="current-password"
                              onChange={handleUserData}
                              name="password"
                              value={userDetails.password}
                              inputRef={register({
              required: 'You must provide a password.',
              minLength: {
                value: 6,
                message: 'Your password must be greater than 6 characters',
              },
            })}
            
                              // error = {isError}
                              // helperText={isError ? "Must not be empty" : " "}
                       />
          {errors.password && (
            <span className={classes.error}>{errors.password.message}</span>
          )}  
                        <TextField id="standard-basic" 
                                   label="Contact No"
                                   type="number"
                                   name="phoneNo"
                                   value={userDetails.phoneNo}
                                   onChange={handleUserData}
                                   autoComplete='phoneNo'
                                   inputRef={register({
              required: 'You must provide a contact no.',
              maxLength: {
                value: 10,
                message: 'Your contact no must be not be greater than 10 number',
              },
              minLength: {
                value: 10,
                message: 'Your contact no must be not be lesser than 10 number',
              },
            })}
                                    />
               {errors.phoneNo && (
            <span className={classes.error}>{errors.phoneNo.message}</span>
          )}  
                        <TextField id="standard-basic" 
                                   label="City" 
                                   name="city" 
                                   value={userDetails.city} 
                                   onChange={handleUserData}
                                   autoComplete='city'  
                                   />
                        
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Vertical</InputLabel>
        <Select
          className={classes.vertical}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={option}
          value={userDetails.vertical}
          onChange={handleUserData}
          autoComplete='vertical'
          name="vertical"
        >
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="School">School</MenuItem>
          
        </Select>
        </FormControl>
                    
                    {/* </DialogContent> */}
                    <DialogActions>
          <Button 
                  // onClick={handleClick} 
                  color="primary" 
                  variant="contained"
                  type="submit"
                  value="submit"
                  // onSubmit={handleSubmitData}
                  >
            SignUp
          </Button>
          <Button 
          onClick={handleClose} 
          color="secondary" 
          variant="contained">
            Cancel
          </Button>
        </DialogActions>    
        </form>
            </Dialog>
            <Notification 
                notify={notify}
                setNotify={setNotify}
            />
        </div>
    )
}

export default SignUp
