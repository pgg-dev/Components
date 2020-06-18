import React from "react";
import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <Button>default</Button>
      <Button disabled>disabled</Button>
      <Button variant="outlined">disabled</Button>
    </div>
  );
}

export default App;
