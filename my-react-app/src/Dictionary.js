import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [Keyword, setKeyword]=useState("");
  
  function search(event){
    event.preventDefault();
    alert(`Flipping through the dictionary for ${Keyword}`);
  let apiKey = "cbc90ba0a21t28a990f44b7f6f3ea68o";
  let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${Keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleApi);
}
  function handleApi(response){
console.log(response.data);
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
