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
  function onchangehandler(event) {
    console.log(event.target.value);
  }

  function onclickhandler() {
    console.log("clicked");
  }

  return (
    <div className="App">
      <h1>Object Decipherer</h1>
      <input onChange={onchangehandler}></input>
      <div>
        {objectarray.map((item) => (
          <span key={item} onClick={onclickhandler}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
