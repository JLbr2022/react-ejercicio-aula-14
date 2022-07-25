import React from "react";
import "./App.css";
import Challenge from "./Challenge";

function App() {
  return (
    <div className="App">
      {/* <Challenge userName="José" /> */}
      <Challenge userName="José" content="Challenge accepted," />
    </div>
  );
}

export default App;
