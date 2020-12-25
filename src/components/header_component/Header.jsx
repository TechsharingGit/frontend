import React,{useState, useEffect} from 'react';
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
import { Menu, MenuItem } from "@material-ui/core";
import NestedMenuItem from "material-ui-nested-menu-item";
import AppBar from '@material-ui/core/AppBar'; 
import Toolbar from '@material-ui/core/Toolbar'
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import PersonIcon from '@material-ui/icons/Person';
import Icon from '@material-ui/core/Icon';
import './Header.css';
const com_logo = process.env.PUBLIC_URL + '/assets/images/';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor:'#c7e5f9',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: '100px',
    alignItems: 'flex-end',
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  button:{
    backgroundColor:'#4ec477',
    border: 0,
    fontSize: 12,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '5px 10px',
    position:"absolute",
    right:"50px",
    top:"15px"

  },
  breadCrumbs:{
    position:"absolute",
    right:"300px",
    top:"45px",

  },
  breadCrumbs1:{
    position:"absolute",
    top:"20px",
    right:"125px",

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


const Header = () => {
  const [menuPosition, setMenuPosition] = useState(null);
  const classes = useStyles();

  const handleRightClick = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY+20,
      left: event.pageX-50
    });
  };

  const handleItemClick = (event) => {
    setMenuPosition(null);
  };

  const handleClick = (event) => {
    event.preventDefault();
  }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar} > 

                <Typography component="a">
                    <img style={{width:'65%'}} src={`${com_logo}logo.png`}/>
                  </Typography>

                  <Breadcrumbs className={classes.breadCrumbs} aria-label="breadcrumb" separator="|" style={{padding:"23px"}}>
                    <StyledBreadcrumb className="menuList" component="a" href="#" label="Director Message"  style={{textDecoration:"none"}} />
                    <StyledBreadcrumb className="menuList" component="a" href="#" label="School Partner's" style={{textDecoration:"none"}}/>
                    <StyledBreadcrumb className="menuList" component="a" href="#" label="Functions" deleteIcon={<ExpandMoreIcon style={{fontSize:"10px",position:'relative'}}/>} onDelete={handleClick} onClick={handleRightClick} style={{textDecoration:"none"}}/>  
                    <StyledBreadcrumb className="menuList" component="a" href="#" label="Course Details"  style={{textDecoration:"none"}} />
                    <StyledBreadcrumb className="menuList" component="a" href="#" label="Student's Corner"  style={{textDecoration:"none"}} />
                    <StyledBreadcrumb className="menuList" component="a" href="#" label="Offerings"  style={{textDecoration:"none"}} />
                </Breadcrumbs>
                
                <Menu
                  open={!!menuPosition}
                  onClose={() => setMenuPosition(null)}
                  anchorReference="anchorPosition"
                  anchorPosition={menuPosition}
                >
                  <MenuItem onClick={handleItemClick}>Button 1</MenuItem>
                  <MenuItem onClick={handleItemClick}>Button 2</MenuItem>
                  <NestedMenuItem className="submenu"
                    label="Button 3"
                    parentMenuOpen={!!menuPosition}
                    onClick={handleItemClick}
                  >
                    <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
                    <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
                    <NestedMenuItem
                      label="Sub-Button 3"
                      parentMenuOpen={!!menuPosition}
                      onClick={handleItemClick}
                    >
                      <MenuItem onClick={handleItemClick}>Sub-Sub-Button 1</MenuItem>
                      <MenuItem onClick={handleItemClick}>Sub-Sub-Button 2</MenuItem>
                    </NestedMenuItem>
                  </NestedMenuItem>
                  <MenuItem onClick={handleItemClick}>Button 4</MenuItem>
                  <NestedMenuItem
                    label="Button 5"
                    parentMenuOpen={!!menuPosition}
                    onClick={handleItemClick}
                  >
                    <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
                    <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
                  </NestedMenuItem>
                </Menu>


            <Breadcrumbs className={classes.breadCrumbs1} aria-label="breadcrumb" separator="|" >
                <StyledBreadcrumb className="menuList" component="a" href="#" label="Offerings"  style={{textDecoration:"none"}} />
                <StyledBreadcrumb className="menuList" component="a" href="#" label="Results"  style={{textDecoration:"none"}} />
                <StyledBreadcrumb className="menuList" component="a" href="#" label="Career"  style={{textDecoration:"none"}} />
            </Breadcrumbs>
          </Toolbar>
                <Button className={classes.button}endIcon={<PersonIcon />}>Sign In
                </Button>
          </AppBar>

        </div> 
    )
}

export default Header