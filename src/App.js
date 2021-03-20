import React from "react";
import "./App.css";
import CardsBox from "./Components/CardsBox/CardsBox";
import Sidebar from "./Components/Simpleaccordion/Sidebar";

function App() {
  return (
    <React.Fragment>
    <div className="homepage">
    <Sidebar />
      <CardsBox  />
    </div>
    </React.Fragment>
  );
}

export default App;
