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
  return (
    <div className="App">
      <h1>Object Decipherer</h1>
      <input></input>
    </div>
  );
}
