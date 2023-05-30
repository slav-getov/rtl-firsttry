import "./App.css";
import { useState, useRef, useEffect } from "react";
function App() {
  const [currentColor, setCurrentColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);
  const myRef = useRef();
  const newButtonColor = currentColor === "red" ? "blue" : "red";
  useEffect(() => {
    myRef.current.disabled = isChecked;

    console.log("render");
  });
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
      <button
        style={{ backgroundColor: currentColor }}
        onClick={() => setCurrentColor(newButtonColor)}
        ref={myRef}
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
