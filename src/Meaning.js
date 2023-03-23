import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="partOfSpeechText">{props.meaning.partOfSpeech}</h3>
      <h4 className="defineTitle">Definition: </h4>
      <p className="definition">{props.meaning.definition}</p>
      <h4 className="exampleTitle">Example: </h4>
      <p className="defineExample">{props.meaning.example}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
export default Meaning;
