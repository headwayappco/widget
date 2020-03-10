import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example1b from "./Example1b";
import Example5 from "./Example5";

const Button = ({ active, value, onClick, children }) => {
  return (
    <button
      onClick={() => onClick(value)}
      style={{
        padding: 10,
        background: active === value ? "#bbf" : "#eee",
        margin: 5,
        borderRadius: 3,
        outline: "none",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
};

function App() {
  const [view, setView] = useState("example1");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Button active={view} value="example1" onClick={setView}>
            Simplest
          </Button>
          <Button active={view} value="example1b" onClick={setView}>
            Self Trigger
          </Button>
          <Button active={view} value="example2" onClick={setView}>
            External Trigger
          </Button>
          <Button active={view} value="example3" onClick={setView}>
            Badge placement
          </Button>
          <Button active={view} value="example4" onClick={setView}>
            Handlers
          </Button>
          <Button active={view} value="example5" onClick={setView}>
            Options object
          </Button>
          <Button active={view} value="none" onClick={setView}>
            Hide All
          </Button>
        </div>
        {view === "example1" && <Example1 />}
        {view === "example1b" && <Example1b />}
        {view === "example2" && <Example2 />}
        {view === "example3" && <Example3 />}
        {view === "example4" && <Example4 />}
        {view === "example5" && <Example5 />}
      </header>
    </div>
  );
}

export default App;
