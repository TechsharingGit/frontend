import React,{useState, useEffect} from 'react';
import { Navbar, Nav, NavDropdown, Container ,Form, Button ,Row, Col} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { emphasize, withStyles, makeStyles,ThemeProvider } from '@material-ui/core/styles';
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
import {IconButton, Drawer} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import './Header.css';

const com_logo = process.env.PUBLIC_URL + '/assets/images/';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor:'#d9f7b7',
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
    backgroundColor:'#0fc54e',
    border: 0,
    fontSize: 11,
    borderRadius: 10,
    fontWeight:'normal',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '1px 10px',
    position:"absolute",
    right:"50px",
    top:"0px"

  },
  breadCrumbs:{
    

  },
  breadCrumbs1:{
    position:"absolute",
    top:"0px",
    right:"125px",

  },
  drawerContainer: {
    marginTop: '20px',
    width:'200px',
  },
  mobileLogo:{
    marginTop:'20px',
    display: "flex",
    justifyContent:'center',
    alignItems:'center',
  },
  deskTopLogo:{
    margin:'10px 0',
    float:'left',
  }
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
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1024
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);
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

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <div className="row_full">
          <Typography className={classes.deskTopLogo} component="a">
              <img style={{width:'65%'}} src={`${com_logo}logo.png`}/>
          </Typography>
          <IconButton style={{float:'right',marginTop:'25px'}}
            {...{
              edge: "end",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
          <MenuIcon style={{fontSize:'36px',color:'#4ec477'}} />
          </IconButton>
        </div>

        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <Typography className={classes.mobileLogo} component="a">
            <img style={{width:'45%'}} src={`${com_logo}logo.png`}/>
          </Typography>
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <Link style={{textDecoration:"none"}}>
        <MenuItem className="mobmenuItem">Director Message</MenuItem>
        <MenuItem className="mobmenuItem">School Partner's</MenuItem>
        <MenuItem className="mobmenuItem">Functions</MenuItem>
        <MenuItem className="mobmenuItem">Course Details</MenuItem>
        <MenuItem className="mobmenuItem">Student's Corner</MenuItem>
        <MenuItem className="mobmenuItem">Results</MenuItem>
        <MenuItem className="mobmenuItem">Career</MenuItem>
        <MenuItem className="mobmenuItem">Sign In</MenuItem>
      </Link>
    );
};

  const displayDesktop = () => {
    return (
        <div>{getMenuBottom()}</div>
    );
  };

  const getMenuBottom = () => {
    return (
      <Toolbar className={classes.toolbar} > 
          <Typography component="a">
            <img style={{width:'60%'}} src={`${com_logo}logo.png`}/>
          </Typography>
          <Breadcrumbs className={classes.breadCrumbs} aria-label="breadcrumb" separator="|" style={{padding:"23px 23px 10px 23px"}}>
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
            <MenuItem  onClick={handleItemClick}>Button 1</MenuItem>
            <MenuItem  onClick={handleItemClick}>Button 2</MenuItem>
            <NestedMenuItem className="subMenu"
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
          <Button className={classes.button}endIcon={<PersonIcon />}>Sign In</Button>
      </Toolbar>
    );
  };


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
              {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </div> 
    )
}

export default Header