import React from "react";
import Results from "./Results";
import "./Dictionary.css";

function Dictionary() {
  return (
    <div className="Dictionary">
      <section>
        <form className="form-control">
          <div className="row">
            <div className="col-9 p-1">
              <input
                type="text"
                className="search"
                placeholder="Search for a word"
              />
            </div>
            <div className="col-1 p-1">
              <button className="btn btn-primary">🔍</button>
            </div>
          </div>
        </form>
      </section>
      <Results />
    </div>
  );
}

export default Dictionary;
