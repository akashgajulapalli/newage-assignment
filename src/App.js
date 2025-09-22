import "./App.css";
import React from 'react';
import MainComponent from "./components/MainComponent";
import { Routes, Route, Link } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div>
      <Routes>
        {routes.map(item =><Route path={item.path} element={item.element} />)}
      </Routes>
    </div>
  );
}

export default App;