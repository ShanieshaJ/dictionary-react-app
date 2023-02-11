import React from "react";
import "./Phonetic.css";

function Phonetic(props) {
  if (props.phonetics.audio) {
    return (
      <div className="Phonetic">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <span className="wordSpeak">{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}

export default Phonetic;
