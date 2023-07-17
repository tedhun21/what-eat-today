import { Route, Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Decided from "./pages/Decided"
import Undecided from "./pages/Undecided"

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" component={<Start />} />
        <Route path="/Decided" component={<Decided />} />
        <Route path="/Undecided" component={<Undecided />} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
