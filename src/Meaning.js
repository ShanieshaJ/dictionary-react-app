import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p className="definition">{definition.definition}</p>
            <p className="example">{definition.example}</p>
          </div>
        );
      })}
      <p className="synonyms">
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}

export default Meaning;
