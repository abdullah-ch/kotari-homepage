import React from "react";
import "./App.css";
import CardsBox from "./Components/CardsBox/CardsBox";
import Sidebar from "./Components/Simpleaccordion/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <CardsBox />
    </React.Fragment>
  );
}

export default App;
