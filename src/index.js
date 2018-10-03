import React from "react";
import ReactDOM from "react-dom";
import SinglePageSlider from "./SinglePageSlider";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <SinglePageSlider />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
