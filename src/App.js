import { useState } from "react";
import "./styles.css";

const objectdb = {
  "📋": "clipboard",
  "📎": "paper clip",
  "📅": "claender",
  "🧭": "compass",
  "🎈": "balloon"
};

var objectarray = Object.keys(objectdb);

export default function App() {
  var [meaning, setMeaning] = useState();

  function onchangehandler(event) {
    var userInput = event.target.value;
    var meaning = objectdb[userInput];
    setMeaning(meaning);
    console.log(meaning);
  }

  function onclickhandler(item) {
    var meaning = objectdb[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Object Decipherer</h1>
      <input onChange={onchangehandler}></input>
      <div>{meaning}</div>
      <div>
        {objectarray.map((item) => (
          <span key={item} onClick={() => onclickhandler(item)}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
