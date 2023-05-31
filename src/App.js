import "./App.css";
import { useState } from "react";

export function camelCaseToSpace(colorName) {
  const reg = /\B([A-Z])\B/g;

  return colorName.replace(reg, " $1");
}
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
      {console.log(camelCaseToSpace("help"))}
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
//mediumvioletred
//midnightblue
export default App;
