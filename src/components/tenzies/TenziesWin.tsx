import React, { ChangeEvent } from "react";
import { addDoc, onSnapshot } from "firebase/firestore";
import { usersCollection } from "../../firebase";
import { TenziesProps } from "../../types/types";
import { startNewGame } from "./helpers/startNewGame";
import { displayTop10players } from "./helpers/displayTop10players";
import { UsersArrayProps } from "../../types/types";
import TenziesWinnersBoard from "./TenziesWinnersBoard";
import { getAndSortUsersArray } from "./helpers/getAndSortUsersArray";
import { format } from "date-fns";
import { FORMAT_DATE_WITH_DOTS } from "../../utils/formatDates"

export default function TenziesWin({
  onUpdateTenzies,
  clickCount,
  onUpdateClickCount,
}: TenziesProps) {
  const [playerName, setPlayerName] = React.useState("");

  const handlePlayerName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPlayerName(value);
  };

  const [playersOnTheBoard, setPlayersOnTheBoard] = React.useState<
    JSX.Element[]
  >([]);
  const [isPlayerOnTheBoard, setIsPlayerOnTheBoard] = React.useState(false);

  const currentDate = format(new Date(), FORMAT_DATE_WITH_DOTS);

  async function addNewPlayer() {
    const newPlayer = {
      name: playerName,
      score: clickCount,
      date: currentDate,
    };
    await addDoc(usersCollection, newPlayer);
    setIsPlayerOnTheBoard(true);
  }

  React.useEffect(() => {
    const unsubscribe = onSnapshot(usersCollection, function (snapshot) {
      const usersArray: UsersArrayProps[] = getAndSortUsersArray(snapshot);
      const playersByScore: JSX.Element[] = displayTop10players(usersArray);
      setPlayersOnTheBoard(playersByScore);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <h2>TENZIES! You Won</h2>

      <button
        className="tenzies-new"
        onClick={() => {
          startNewGame(onUpdateTenzies, onUpdateClickCount);
        }}
      >
        New Game
      </button>

      <TenziesWinnersBoard
        isPlayerOnTheBoard={isPlayerOnTheBoard}
        playerName={playerName}
        handlePlayerName={handlePlayerName}
        addNewPlayer={addNewPlayer}
      >
        {playersOnTheBoard}
      </TenziesWinnersBoard>
    </>
  );
}
