import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

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
          <Dictionary defaultKeyword="Aphrodite" />
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
