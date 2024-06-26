import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>Definition of {props.results.word}</h2>
        <h5>{props.results.phonetic}</h5>
        {props.results.meanings.map(function (meaning, index) {
          return (<div key={index}>
            <Meaning meaning={meaning}/>
            </div>);
        })}
      </div>
    );
  } else {
    return null;
  }
}
