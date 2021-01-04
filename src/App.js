import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/header_component/Header';
import Footer from './components/footer_component/Footer';
import Home from './components/home_component/Home';
import Chatbott from './components/chatbot_component/Chatbott';
import Offering from './components/offering_component/Offering';
import Ourresult from './components/ourresult_component/Ourresult';
import Director from './components/director_component/Director';
import Career from './components/schoolpartner_component/Career';
import Expertcounselling from './components/expertcounselling_component/Expertcounselling';
import SignUp from './components/SigninAndSignUpComponent/SignUp/SignUp';
const script_path = process.env.PUBLIC_URL + '/assets/js/';

const App = () => {
  return (
      <Router>
          <Header />

         

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/offering">
              <Offering />
            </Route>
            <Route path="/ourresult">
              <Ourresult />
            </Route>

            <Route path="/directormsg">
              <Director />
            </Route>
            <Route path="/career">
              <Career />
            </Route>
            <Route path="/expert">
              <Expertcounselling />
            </Route>
          </Switch>

          <SignUp/>
          <Chatbott/>
          <Footer />
      </Router>
  );
}

export default App;
