import  React from 'react';
import Header from './components/header_component/Header';
import Footer from './components/footer_component/Footer';
import Hero from './components/hero_component/Hero';
import Cards from './components/card_component/Cards';
import Chatbott from './components/chatbot_component/Chatbott';
import Testimonials from './components/testimonials_component/Testimonials';
import SignUp from './components/SigninAndSignUpComponent/SignUp/SignUp';
//import './App.css';

const App = () => {
  return (
    <div className="App">
        <Header />
        <main>
        <Hero />
        <Chatbott />
        <Testimonials/>
        <Cards />
        </main> 
        <Footer />
    </div>
  );
}

export default App;
