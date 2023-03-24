import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handlePhotos(response) {
    setPhotos(response.data.photos);
  }

  function searchWord() {
    const apiKey = "34c07bt895o4bb1e093cad279ab94f19";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(photosApiUrl).then(handlePhotos);
  }

  function load() {
    setLoaded(true);
    searchWord();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 p-1">
                <input
                  type="search"
                  className="search"
                  defaultValue={props.defaultKeyword}
                  placeholder="Type in a word to search"
                  autoFocus={true}
                  onChange={handleKeywordChange}
                />
              </div>
              <div className="col-1 p-1">
                <button type="submit" className="btn btn-primary">
                  🔍
                </button>
              </div>
            </div>
            <div className="hints">
              Suggested words: person, travel, love, diamond, aphrodite, dream
            </div>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

export default Dictionary;
