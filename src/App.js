import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio.js";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
        <Container>
          
          <h1 class="navbar-brand font-weight-bold">Bikram Shankhar</h1>
            <Navbar/>
            <Switch>
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} /> 
              <Route exact path="/about" component={About} />
              <Route exact path={["/", "/home", "*"]} component={Home} />

              </Switch>  
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
