import { useState } from "react";
import "./styles.css";

const objectdb = {
  "📋": "clipboard",
  "📎": "paper clip",
  "📅": "claender",
  "🧭": "compass",
  "🎈": "balloon",
  "⏱️": "Stopwatch",
  "⏰": "Alarm Clock",
  "💣": "Bomb"
};

var objectarray = Object.keys(objectdb);

export default function App() {
  var [meaning, setMeaning] = useState("Meaning of object will be shown here");

  function onchangehandler(event) {
    var userInput = event.target.value;
    if (userInput in objectdb) {
      var meaning = objectdb[userInput];
      setMeaning(meaning);
    } else {
      setMeaning("Dont have this object in our Database");
    }
  }

  function onclickhandler(item) {
    var meaning = objectdb[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Object Decipherer</h1>
      <input
        onChange={onchangehandler}
        placeholder={"Search you object "}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      ></input>
      <div style={{ padding: "1rem", color: "red" }}>{meaning}</div>
      <div>
        {objectarray.map((item) => (
          <span
            key={item}
            onClick={() => onclickhandler(item)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
