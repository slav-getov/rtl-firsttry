import "./App.css";
import { useState } from "react";
function App() {
  const [currentColor, setCurrentColor] = useState("red");
  const newButtonColor = currentColor == "red" ? "blue" : "red";
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
      <button
        style={{ backgroundColor: currentColor }}
        onClick={() => setCurrentColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
