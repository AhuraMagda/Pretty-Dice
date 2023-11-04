import React from "react";
import { TenziesProps } from "../../types/types";
import { makeNewDiceBoard } from "./helpers/makeNewDiceBoard";
import { checkIfAllSame } from "./helpers/checkIfAllSame";
import {
  addEventListnerToAll,
  removeEventListnersFromAll,
} from "./helpers/addRemoveEvents";
import { updateSidesOfAllDice } from "./helpers/updateSidesOfAllDice";

export default function TenziesPlay({
  onUpdateTenzies,
  onUpdateClickCount,
}: TenziesProps) {
  const [sidesOfAllDice, setSidesOfAllDice] = React.useState([
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
    setSidesOfAllDice((prevSides) => {
      return updateSidesOfAllDice(prevSides, id, newSide);
    });
  };

  const displayedDice = makeNewDiceBoard(handleSideChange);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      const allSame: boolean = checkIfAllSame(sidesOfAllDice);
      allSame && onUpdateTenzies(true);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [sidesOfAllDice]);

  React.useEffect(() => {
    const clickHandler = () => {
      onUpdateClickCount(1);
    };
    const diceOnTheScreen: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".dice");
    addEventListnerToAll(diceOnTheScreen, clickHandler, "click");

    return () => {
      removeEventListnersFromAll(diceOnTheScreen, clickHandler, "click");
    };
  }, []);

  return (
    <>
      <p>Click on the die untill all the dies are the same</p>
      <div className="dice-container">{displayedDice}</div>
    </>
  );
}
