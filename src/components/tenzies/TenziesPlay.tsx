import D6 from "../d6/D6";
import React from "react";
import { TenziesProps } from "./Tenzies";

function TenziesPlay({ onUpdateTenzies, onUpdateClickCount }: TenziesProps) {
  const [sides, setSides] = React.useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]);

  const handleSideChange = (newSide: string, id: number) => {
    setSides((prevSides) =>
      prevSides.map((side, index) => (index === id ? newSide : side))
    );
  };

  const makeNewDiceBoard = () => {
    const randomDiceArray = [];
    for (let i = 0; i < 8; i++) {
      randomDiceArray.push(<D6 key={i} id={i} changeSide={handleSideChange} />);
    }
    return randomDiceArray;
  };

  const allTheDice = makeNewDiceBoard();

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      const allSame = sides.every((side) => side === sides[0]);
      allSame && onUpdateTenzies(true);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [sides]);

  React.useEffect(() => {
    const clickHandler = () => {
      onUpdateClickCount(1);
    };
    const diceToClick = document.querySelectorAll(".dice");
    diceToClick.forEach((die) => die.addEventListener("click", clickHandler));

    return () => {
      diceToClick.forEach((die) =>
        die.removeEventListener("click", clickHandler)
      );
    };
  }, []);

  return (
    <>
      <p>Click on the die untill all the dies are the same</p>
      <div className="dice-container">{allTheDice}</div>
    </>
  );
}

export default TenziesPlay;
