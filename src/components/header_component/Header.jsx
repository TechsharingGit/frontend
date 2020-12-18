import React from 'react';
import { Navbar, Nav, NavDropdown, Container ,Form, Button ,Row, Col} from 'react-bootstrap';
import logo from '../../logo.png';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { emphasize, 
         withStyles, 
         makeStyles,
         ThemeProvider } from '@material-ui/core/styles';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import PersonIcon from '@material-ui/icons/Person';
import Icon from '@material-ui/core/Icon';
import './Header.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor:'#F0FFFF',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-end',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  button:{
    backgroundColor:'#4ec477',
    border: 0,
    fontSize: 16,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 40px',
    position:"absolute",
    right:"50px",
    top:"20px"

  },
  breadCrumbs:{
    position:"absolute",
    right:"300px",
    top:"45px",

  },
  breadCrumbs1:{
    position:"absolute",
    top:"35px",
    right:"230px",

  },

}));

const themeInstance = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    seperator:">",
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


const Header = () => {
  const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar} >  
                  <Breadcrumbs className={classes.breadCrumbs} aria-label="breadcrumb" seperator=">" style={{padding:"30px"}}>
                <StyledBreadcrumb component="a" href="#" label="Director Message"  style={{textDecoration:"none"}} />
                <StyledBreadcrumb component="a" href="#" label="School Partner's" style={{textDecoration:"none"}}/>
                <StyledBreadcrumb component="a" href="#" label="Functions" deleteIcon={<ExpandMoreIcon style={{fontSize:"10px"}}/>} onDelete={handleClick} style={{textDecoration:"none"}}/>      
                <StyledBreadcrumb component="a" href="#" label="Course Details"  style={{textDecoration:"none"}} />
                <StyledBreadcrumb component="a" href="#" label="Student's Corner"  style={{textDecoration:"none"}} />
                <StyledBreadcrumb component="a" href="#" label="Offerings"  style={{textDecoration:"none"}} />
            </Breadcrumbs>
            <Breadcrumbs className={classes.breadCrumbs1} aria-label="breadcrumb" seperator=">" >
                <StyledBreadcrumb component="a" href="#" label="Offerings"  style={{textDecoration:"none"}} />
                <StyledBreadcrumb component="a" href="#" label="Results"  style={{textDecoration:"none"}} />
                <StyledBreadcrumb component="a" href="#" label="Career"  style={{textDecoration:"none"}} />
            </Breadcrumbs>
          </Toolbar>
                <Button  className={classes.button}
                        endIcon={<PersonIcon />}>
                    Sign In
                </Button>
          </AppBar>

        </div> 
    )
}

export default Header
