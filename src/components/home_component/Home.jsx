import React, {useEffect, useState} from 'react';
import loadjs from 'loadjs';
import Hero from '../hero_component/Hero';
import Cards from '../card_component/Cards';
import Testimonials from '../testimonials_component/Testimonials';
import './Home.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const script_path = process.env.PUBLIC_URL + '/assets/js/';

const Home = () => {
  useEffect(() => {
    loadjs([script_path+'owl.carousel.min.js', script_path+'box-slider-all.jquery.min.js',script_path+'fancybox.js'], 'foobar');
    loadjs.ready('foobar', function() {
    });
  },[]);
  return (
    <section>
      <Hero/>
      <Testimonials/>
      <Cards/>
    </section>
  );
}

export default Home