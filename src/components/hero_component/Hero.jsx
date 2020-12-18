import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../logo.png';
import { Accordion, CssBaseline } from '@material-ui/core';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import AppleIcon from '@material-ui/icons/Apple';
import './Hero.css';

const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    margin: theme.spacing(1),
    border:'1px solid #1a1a1a',

    '&:hover, &:focus': {
      backgroundColor: '#1a1a1a',
      color:'#fff'
    },
    position:'relative',
    top:"190px",
    left:"-250px",
  },
  carousel:{
    zIndex:"1",
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    height:'300px',
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
          <CarouselItem>
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
                        Slide 1 
          </CarouselItem>          
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
          <CarouselItem>Slide 4</CarouselItem>
          <CarouselItem>Slide 5</CarouselItem>
          <CarouselItem>Slide 5</CarouselItem>
      </Carousel> 
    
    </div>
  )
}

export default Hero

