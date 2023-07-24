import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/Header.js";
import Start from "./pages/Start";
import Decided from "./pages/Decided";
import DecidedResult from "./pages/DecidedResult";
import Result from "./pages/Result";
import { useWeather } from "./functions/useWeather";

function App() {
  const { weather, weatherClass } = useWeather();

  return (
    <div className={weatherClass} id="TimeBackground">
      <Header weather={weather} />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/decided" element={<Decided />} />
        <Route path="/decided-result/:section" element={<DecidedResult />} />
        <Route path="/result/:subclass" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
