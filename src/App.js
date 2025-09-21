import "./App.css";
import React from 'react';
import MainComponent from "./components/MainComponent";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </div>
  );
}

export default App;