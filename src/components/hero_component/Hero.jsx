import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import AppleIcon from '@material-ui/icons/Apple';
import './Hero.css';
const com_logo = process.env.PUBLIC_URL + '/assets/images/';


const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    margin: theme.spacing(1),
    border:'1px solid #fff',
    color:'#fff',

    '&:hover, &:focus': {
      backgroundColor: '#4ec477',
      color:'#fff'
    },
    float:'left'
  },
  btnposition:{
    position:'absolute',
    width:'380px',
    bottom:'50px',
    left:'110px',
    zIndex:'3',
  },
  carousel:{
    zIndex:"1",
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    height:'350px',
    width:'100%',
    backgroundColor:'#4ec477',
    color:'#fff',
    fontSize:'4em',
    overflow:'default'
  },

}));

const Hero = () => {
  const classes =  useStyles();
  return (
    <div>
      <CssBaseline />
      <Carousel className={classes.carousel} data-ride="carousel" >
          <CarouselItem style={{height:'100%',position:'relative'}}>
                <img style={{width:'100%',height:'100%',position:'relative',zIndex:'2'}} src={`${com_logo}slider_1.jpg`}/>
                <div className={classes.btnposition}>
                  <Button className={classes.heroButtons}
                          variant="outlined"
                          size="large"
                          endIcon={<PlayArrowRoundedIcon />} >
                      Get in on <br />
                      Google Play
                  </Button>
                  <Button className={classes.heroButtons}
                          variant="outlined"
                          size="large"
                          endIcon={<AppleIcon />} >
                    Get in on <br />
                    App Store
                  </Button>
                </div>
                
          </CarouselItem>          
          <CarouselItem style={{height:'100%'}}><img style={{width:'100%',height:'100%'}} src={`${com_logo}slider_2.jpg`}/></CarouselItem>
          <CarouselItem style={{height:'100%'}}><img style={{width:'100%',height:'100%'}} src={`${com_logo}slider_3.jpg`}/></CarouselItem>
          <CarouselItem style={{height:'100%'}}><img style={{width:'100%',height:'100%'}} src={`${com_logo}slider_4.jpg`}/></CarouselItem>
      </Carousel> 
    
    </div>
  )
}

export default Hero

