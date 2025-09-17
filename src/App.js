import "./App.css";
import React from 'react';
import Main from "./components/Main";

function App() {
  return (
    <div>
      {/* Passing props into Main (which is really the wrapped component) */}
      <Main title="Dashboard" user="Akash" />
    </div>
  );
}

export default App;
