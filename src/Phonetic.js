import React from "react";
import "./Phonetic.css";

function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <p className="wordSpeak">{props.phonetic}</p>{" "}
      </div>
    );
  }
}
export default Phonetic;
