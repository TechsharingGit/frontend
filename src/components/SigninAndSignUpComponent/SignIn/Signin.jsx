import React from 'react';
import { Grid , 
        Paper,
        Avatar,
        TextField , 
        Button,
        Container,
        FormControl,
        Typography,
        InputAdornment,
    
        } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Email ,LockRounded} from '@material-ui/icons';
import './Signin.css';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
const sLogo = process.env.PUBLIC_URL + '/assets/images/';


//=========== Paper Normal Signup screen//

// const Signin = () => {
// const paperStyle = {
//     padding:20,
//     height: "70vh",
//     width:300,
//     margin:"50px auto",
//     // backgroundColor:"#8181fe"
//     backgroundColor:"#33b5e5"
//     // backgroundCcolor: "#ffffff",
//     // display:"flex",
//     // alignItems:"center",
//     // justifyContent:"center",
//     // flexDirection:"column",
//     // padding: "0 50px",
//     // height: "100%",
//     // textAlign:"center"

// }

//     return (
//         <>
//         <Container>
//         <Grid>
//             <Paper elevation={10} style={paperStyle} >
//             <Grid align="center">
//                 <Avatar style={{backgroundColor:"#000"}}><LockOpenIcon /></Avatar>
//                     <h2 style={{color:"#fff"}}>Sign In</h2>
//             </Grid>
//             <TextField style={{color:"#fff",fontWeight:"20px",marginBottom:"20px"}} label="Email id" placeholder="Enter your email-id" fullWidth required/>
//             <TextField style={{color:"#fff",fontWeight:"20px",marginBottom:"50px"}} label="password" placeholder="Enter your password" type="password" fullWidth required/>
//             <Button type="submit" variant="contained" color="primary" fullWidth>SIGN IN</Button>
//             </Paper>
//         </Grid>
//         </Container>
//         </>
        
            
        
//     )
// }

//========================= End of Paper theme ================================

//========================= Half image side login screen =======================
const useStyles = makeStyles((theme) => ({
    newUserButton : {
        position:"relative",
        bottom:"60px",
        textTransform:"none",
    },


}));

const Signin = () => {

    const { register, handleSubmit, control, errors } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
          email: '',
          password: '',
          remember: false,
        },
      });

      const [userDetails, setUserDetails] = React.useState({
        email:"",
        password:""
    });

    const handleUserData = (e) => {

        const newValue = e.target.value;
        const inputName = e.target.name;
  
        setUserDetails(prevValue => {
             if(inputName === "email"){
              return {
                email:newValue,
                password:prevValue.password,
                    }
            } else if(inputName === "password") {
                  return {
                    email:prevValue.email,
                    password:newValue,   
                  }
                }
            });
            }
        
              

    const classes = useStyles();
    return (
        <div>
            <Grid container style={{minHeight:"100vh"}}>
                <Grid item xs={12} sm={6}>
                    <img src={`${sLogo}Signlogo.jpg`} style={{width:"100%",height:"100%",objectFit:"cover"}} alt="SignLogo" />

                </Grid>
                <Grid container item xs={12} sm={6} 
                    alignItems="center" 
                    direction="column" 
                    style={{padding:10}}
                    justify="space-between"
                >
                <div />
                <div style={{display:"flex", flexDirection:"column", maxWidth:400,minWidth:300}}>
                    <Grid container justify="center">
                       <img src={`${sLogo}logo.png`} alt="logo" width={200} /> 
                    
                    </Grid>
                    <form>
                    <TextField label="Email Id" 
                               margin="normal" 
                               name="email"
                               value={userDetails.email}
                              error={!!errors.email} 
                              onChange={handleUserData} 
                               InputProps={{
                                   startAdornment: 
                                   <InputAdornment position="start">
                                   <Email />
                                   </InputAdornment>}}
                                fullWidth         
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
          )}    
                    <TextField label="Password" 
                               type="password" 
                               margin="normal"
                               name="password"
                               onChange={handleUserData}
                               value={userDetails.password}
                               InputProps={{
                                   startAdornment: 
                                   <InputAdornment position="start">
                                   <LockRounded />
                                   </InputAdornment>}} 
                                   fullWidth
                                   inputRef={register({
              required: 'You must provide a password.',
              minLength: {
                value: 6,
                message: 'Your password must be greater than 6 characters',
              },
            })}    
                                   />
         {errors.password && (
            <span className={classes.error}>{errors.password.message}</span>
          )}  
                    <div style={{height:20}}/>
                    <Button type="submit" color="primary" variant="contained" fullWidth >SIGN IN</Button>
                    </form>
                    <div style={{height:20}}/>
                    <ul>
                        <li style={{listStyle:"none",textAlign:"center",cursor:"pointer"}}>Forgot Password ?</li>
                    </ul>
                </div>
                <Grid Container justify="center" spacing={2}>
                    <Grid Item>
                        <Button className={classes.newUserButton}  variant="outlined" >New User? Register Now</Button>
                    </Grid>            
                    {/* <Grid Item>
                        <Button>Forgot Password?</Button>
                    </Grid>             */}
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

//====================== End of image side login ===========================

// const useStyles = makeStyles((theme) => ({

//     root :{
//         width:"100%",
//         height: "100vh",
//         display:"flex",
//         justifyContent:"center",
//         alignItems:"center",
//         background:"-webkit-linear-gradient(left, #7579ff, #b224ef)",

//     },

//     error: {
//         color: 'red',
//       },
//     contain:{
//         overflow:"hidden",
//         position:"relative",
//         width:"900px",
//         height:"550px",
//         background:"#fff"

//     },
//     form:{
//         position:"relative",
//         width:"640px",
//         height:"100%",
//         padding:"50px 30px",
//         webkitTransition:"-webkit-transform 1.2s ease-in-out",
//         transition:"-webkit-transform 1.2s ease-in-out",
//         transition:"transform 1.2s ease-in-out",
//     },

//     type:{
//         width:"100%",
//         fontSize:"30px",
//         textAlign:"center"
//     },

//     textfld :{
//         display:"block",
//         width:"260px",
//         margin:"25px auto",
//         textAlign:"center",
//         fontSize:"14px",
//         fontWeight:600,
//         color:"#505f75",
//         textTransform:"uppercase"

//     },
//     btns:{
//         display:"block",
//         margin:"20px auto",
//         width:"260px",
//         height:"36px"       
//     },

//     forPassd:{
//          textAlign:"center",
//          fontSize:"14px",
//          cursor:"pointer"
//     },
//     containsub1:{
//             overflow:"hidden",
//              position:"absolute",
//              left:"640px",
//              top:"0",
//              width:"900px",
//              height:"100%",
//              paddingLeft:"260px",
//              background:"#fff",
//              webkitTransition:"-webkit-transform 1.2s ease-in-out",
//              transition:"-webkit-transform 1.2s ease-in-out",
//              transition:"transform 1.2s ease-in-out",

//     },
    
//     imgclassH2 :{
//         fontSize:"1.5rem",
//         zIndex:2,
//         position:"absolute",
//         left:0,
//         top:"50px",
//         width:"100%";
//         padding:"0 20px",
//         textAlign:"center",
//         color:"#fff",
//         -webkitTransition:"-webkit-transform 1.2s ease-in-out",
//         transition:"-webkit-transform 1.2s ease-in-out",
//         transition:"transform 1.2s ease-in-out",
//         marginBottom:"10px",
//         fontWeight:"normal" 

//     },
//     imgclassP:{
//         fontSize:"14px",
//         lineHeight:1.5
//     },
// }));


// const Signin = () => {
//         const classes = useStyles();

//         const { register, handleSubmit, control, errors } = useForm({
//         mode: 'onChange',
//         reValidateMode: 'onChange',
//         defaultValues: {
//           email: '',
//           password: '',
//           remember: false,
//         },
//       });

//       const [userDetails, setUserDetails] = React.useState({
//         email:"",
//         password:""
//     });

//     const handleUserData = (e) => {

//         const newValue = e.target.value;
//         const inputName = e.target.name;
  
//         setUserDetails(prevValue => {
//              if(inputName === "email"){
//               return {
//                 email:newValue,
//                 password:prevValue.password,
//                     }
//             } else if(inputName === "password") {
//                   return {
//                     email:prevValue.email,
//                     password:newValue,   
//                   }
//                 }
//             });
//             }

//     return (
//         <div className={classes.root}>
//             <Container className={classes.contain}>
//                 <Typography variant="h2" 
//                             align="center"
//                             className={classes.type}                            
//                             >Sign In</Typography>
//                 <form className={classes.form}>
//                     <TextField label="Email Id" 
//                                margin="normal" 
//                                className={classes.textfld}
//                                name="email"
//                                value={userDetails.email}
//                               error={!!errors.email} 
//                               onChange={handleUserData} 
//                                InputProps={{
//                                    startAdornment: 
//                                    <InputAdornment position="start">
//                                    <Email />
//                                    </InputAdornment>}}
//                                 fullWidth         
//                                 inputRef={register({
//                                               required: 'You must provide the email address!',
//                                               pattern: {
//                                               value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                                               message: 'You must provide a valid email address!',
//                                            },
//                                           })}  
//                     />
//                     {errors.email && (
//             <span className={classes.error}>{errors.email.message}</span>
//           )}    
//                     <TextField label="Password" 
//                                type="password" 
//                                margin="normal"
//                                name="password"
//                                className={classes.textfld}
//                                onChange={handleUserData}
//                                value={userDetails.password}
//                                InputProps={{
//                                    startAdornment: 
//                                    <InputAdornment position="start">
//                                    <LockRounded />
//                                    </InputAdornment>}} 
//                                    fullWidth
//                                    inputRef={register({
//               required: 'You must provide a password.',
//               minLength: {
//                 value: 6,
//                 message: 'Your password must be greater than 6 characters',
//               },
//             })}    
//                                    />
//          {errors.password && (
//             <span className={classes.error}>{errors.password.message}</span>
//           )}  
                
//           <Button type="submit" 
//                   color="primary" 
//                   variant="contained" 
//                   className={classes.btns}
//                   fullWidth >SIGN IN</Button>
            
//             <Typography variant="subtitle1"
//                         className={classes.forPassd}
//             >Forgot password?</Typography>

//                 </form>
//                 <Container className={classes.containsub1}>
//                     <div className="imgclass">                   
//                        <Typography className={classes.imgclassH2} variant="h2">New Here</Typography>  
//                        <Typography className={classes.imgclassP} variant="subtitle1">Sign Up and discover new opportunity</Typography>
//                        <Typography className={classes.imgclassH2} variant="h2">One of Us?</Typography>  
//                        <Typography className={classes.imgclassP} variant="subtitle1">If you already has an account, just sign in</Typography>    
//                     </div>
//                 </Container>
//             </Container>
            
//         </div>
//     )
// }

export default Signin

 

