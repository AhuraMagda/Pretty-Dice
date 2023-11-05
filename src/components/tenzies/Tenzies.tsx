import "./Tenzies.css";
import React from "react";
import TenziesWin from "./TenziesWin";
import TenziesPlay from "./TenziesPlay";

export default function Tenzies() {
  const [tenzies, setTenzies] = React.useState<boolean>(false);

  function updateTenzies(value: boolean) {
    setTenzies(value);
  }

  const [clickCount, setClickCount] = React.useState(0);

  function updateClickCount(number: number) {
    setClickCount(number ? (prev) => prev + number : 0);
  }

  return (
    <div className="game-container tenzies">
      <h1>Tenzies</h1>
      <h2>Your moves: {clickCount}</h2>
      {!tenzies && (
        <TenziesPlay
          onUpdateTenzies={updateTenzies}
          onUpdateClickCount={updateClickCount}
        />
      )}
      {tenzies && (
        <TenziesWin
          onUpdateTenzies={updateTenzies}
          clickCount={clickCount}
          onUpdateClickCount={updateClickCount}
        />
      )}
    </div>
  );
}
