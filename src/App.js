import "./App.css";
import { useState, useRef, useEffect } from "react";
function App() {
  const [currentColor, setCurrentColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);
  const newButtonColor = currentColor === "red" ? "blue" : "red";

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
      <button
        style={{ backgroundColor: isChecked ? "gray" : currentColor }}
        onClick={() => setCurrentColor(newButtonColor)}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      {console.log(isChecked)}
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        checked={isChecked}
      />
    </div>
  );
}

export default App;
