import { Carousel, CarouselItem } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import './Testimonials.css';
const iconPath = process.env.PUBLIC_URL + '/assets/images/';

const useStyles = makeStyles((theme) => ({
    carousel:{
      width:'100%',
      height:'200px'
    },
  
  }));

function Testimonials() {
    const classes =  useStyles();
  return (
    <section className="row_full testimonial pad_t_b_35">
        <div className="container">
            <div className="row disFlex">
                <div className="col-sm-6">
                    <div className="row_full">

                    <h3>Testimonial</h3>

                    <Carousel className={classes.carousel} data-ride="carousel" >
                        <CarouselItem style={{height:'100%'}}>
                            <div className="row_full">
                                <div className="leftGrid">
                                    <div className="row_full testImg">
                                        <img src={`${iconPath}slider_1.jpg`}/>
                                        <span className="row_full nameElm">Gyansutrm 1</span>
                                    </div>
                                </div>

                                <div className="rightGrid">
                                    <div class="row_full testmText">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem style={{height:'100%'}}>
                            <div className="row_full">
                                <div className="leftGrid">
                                    <div className="row_full testImg">
                                        <img src={`${iconPath}slider_1.jpg`}/>
                                        <span className="row_full nameElm">Gyansutrm 2</span>
                                    </div>
                                </div>

                                <div className="rightGrid">
                                    <div class="row_full testmText">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem style={{height:'100%'}}>
                            <div className="row_full">
                                <div className="leftGrid">
                                    <div className="row_full testImg">
                                        <img src={`${iconPath}slider_1.jpg`}/>
                                        <span className="row_full nameElm">Gyansutrm 3</span>
                                    </div>
                                </div>

                                <div className="rightGrid">
                                    <div class="row_full testmText">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    </Carousel> 
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Testimonials;