import React, { Component } from 'react';
import './sass/main.scss'
import Chr from './containers/Chr/index'
import Home from './containers/Home/index'
import About from './containers/About/index'
import Nav from './containers/Nav/index'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import ChrView from './containers/Chrview/index'
import Img from "./Pictures/logo.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Nav  />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/chr" component={Chr} />
          <Route exact path="/vchr" component={ChrView} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
