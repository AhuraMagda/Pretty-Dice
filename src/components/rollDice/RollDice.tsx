import React from "react";
import DiceCube from "../d6/DiceCube";
import "./RollDice.css";

import RollDiceButtons from "./RollDiceButtons";

function RollDice() {
  const [allTheDice, setAllTheDice] = React.useState([<DiceCube key={0} id={0} />]);

  const addDie = () => {
    setAllTheDice((prevDice) => [
      ...prevDice,
      <DiceCube id={prevDice.length} key={prevDice.length} />,
    ]);
  };

  const deleteDie = () => {
    setAllTheDice((prevDice) => prevDice.slice(0, -1));
  };

  let diceClass = `dice-container ${
    allTheDice.length === 1
      ? "dice-container-one-die"
      : allTheDice.length === 2
      ? "dice-container-two-die"
      : ""
  }`;

  return (
    <div className="game-container roll-dice">
      <h1>Roll dice</h1>
      <p>Click on the die or roll all with a button</p>

      <div className={diceClass}>{allTheDice}</div>

      <RollDiceButtons addDie={addDie} deleteDie={deleteDie} />
    </div>
  );
}

export default RollDice;
