import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BringEveryoneTogether from "./containers/BringEveryoneTogether";
import Features from "./containers/Features";

function App() {
  return (
    <div className="App">
      <Header />
      <BringEveryoneTogether />
      <Features />
    </div>
  );
}

export default App;
