import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Start from "./pages/Start"
import Decided from "./pages/Decided"
import Undecided from "./pages/Undecided"
import Map from "./components/Map";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Decided" element={<Decided />} />
        <Route path="/Undecided" element={<Undecided />} />
      </Routes>
      <Map />
      <Footer />
    </>
  );
}

export default App;
