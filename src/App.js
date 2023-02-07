import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="logoTitle">
          <h1 className="pictureTionary">
            Picturetionary <span className="ioText">io</span>
          </h1>
        </header>
        <main className="App-section">
          <Dictionary />
        </main>
        <footer>
          <small>
            Open-source and coded with <span className="heartBeat">❤️</span> by
            Shaniesha John{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
