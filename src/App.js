import React from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Header from "./components/Header.js";
import Start from "./pages/Start";
import Decided from "./pages/Decided";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Decided" element={<Decided />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
