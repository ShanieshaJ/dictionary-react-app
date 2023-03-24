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
          <Dictionary defaultKeyword="person" />
        </main>
        <footer>
          <small>
            This project is open-source code on{" "}
            <a
              href="https://github.com/ShanieshaJ/dictionary-react-app"
              target="_blank"
              className="projectLink"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dapper-lolly-c07873.netlify.app/"
              target="_blank"
              className="projectLink"
              rel="noopener noreferrer"
            >
              {" "}
              Netlify{" "}
            </a>{" "}
            <span className="heartBeat">❤️</span> by Shaniesha John{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
export default App;
