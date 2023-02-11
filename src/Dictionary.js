import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

function Dictionary() {
  const [keyword, setKeyword] = useState("Peri");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //console.log(keyword);
    //console.log(keyword.length);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
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
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return (
      <div className="Dictionary">
        <section>
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 p-1">
                <input
                  type="text"
                  className="search"
                  placeholder="Search for a word"
                  onChange={updateKeyword}
                />
              </div>
              <div className="col-1 p-1">
                <button className="btn btn-primary">🔍</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default Dictionary;
