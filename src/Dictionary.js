import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <section>
        <form className="dictionarySearch">
          <input
            className="input-text"
            type="search"
            placeholder="Type a word..."
          ></input>
          <input className="input-submit" type="submit" value="Search"></input>
        </form>
      </section>
    </div>
  );
}
