import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";

class Routes extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/catalog" component={Catalog} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Routes;