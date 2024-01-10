import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeCP from "./components/HomeCP";
import QuizCP from "./components/QuizCP";
import ResultsCP from "./components/ResultsCP";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeCP/>}></Route>
      <Route path="/play" element={<QuizCP/>}></Route>
      <Route path="/result" element={<ResultsCP/>}></Route>
    </Routes>
  );
}

export default App;