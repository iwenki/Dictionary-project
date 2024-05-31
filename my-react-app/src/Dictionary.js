import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [Keyword, setKeyword]=useState("");
  function search(event){
    event.preventDefault();
    alert(`Flipping through the dictionary for ${Keyword}`);
  }
  function handleKeywordChange(event){
setKeyword(event.target.value); 
  }
  return (<div className="Dictionary">What word are you thinking about?
  <form onSubmit={search}>
    <input type="search" onChange={handleKeywordChange} autoFocus={true}/>
  </form>
  </div>);
}
