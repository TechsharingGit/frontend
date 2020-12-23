import  React from 'react';
import Header from './components/header_component/Header';
import Footer from './components/footer_component/Footer';
import Hero from './components/hero_component/Hero';
import Cards from './components/card_component/Cards';
import Testimonials from './components/testimonials_component/Testimonials';
//import './App.css';

const App = () => {
  return (
    <div className="App">
        <Header />
        <main>
        <Hero />
        <Testimonials/>
        <Cards />
        </main> 
        <Footer />
    </div>
  );
}

export default App;
