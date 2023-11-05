import React, { ChangeEvent } from "react";
import { addDoc, onSnapshot } from "firebase/firestore";
import { usersCollection } from "../../firebase";
import { TenziesProps } from "../../types/types";
import { startNewGame } from "./helpers/startNewGame";
import { createDate } from "./helpers/createDate";
import { displayTop10players } from "./helpers/displayTop10players";
import { usersArrayProps } from "../../types/types";


function TenziesWin({
  onUpdateTenzies,
  clickCount,
  onUpdateClickCount,
}: TenziesProps) {

  const [playerName, setPlayerName] = React.useState("");

  const handlePlayerName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPlayerName(value);
  };

  let currentDate = createDate();

  console.log(currentDate)

  const [playersOnTheBoard, setPlayersOnTheBoard] = React.useState<
    JSX.Element[]
  >([]);
  const [isPlayerOnTheBoard, setIsPlayerOnTheBoard] = React.useState(false);

  // out?
  async function addNewPlayer() {
    const newPlayer = {
      name: playerName,
      score: clickCount,
      date: currentDate,
    };
    console.log(newPlayer)
    await addDoc(usersCollection, newPlayer);
    setIsPlayerOnTheBoard(true);
  }

  React.useEffect(() => {
    const unsubscribe = onSnapshot(usersCollection, function (snapshot) {
      //map out i reszta
      const usersArray: usersArrayProps[] = snapshot.docs.map((player) => ({
        ...player.data(),
        id: player.id,
        name: player.data().name,
        score: player.data().score,
        date: player.data().date,
      }));

      usersArray.sort((a, b) => a.score - b.score);

      const playersByScore: JSX.Element[] = displayTop10players(usersArray)

      setPlayersOnTheBoard(playersByScore);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <h2>TENZIES! You Won</h2>

      <button className="tenzies-new" onClick={()=>{startNewGame(onUpdateTenzies, onUpdateClickCount)}}>
        New Game
      </button>

      <div className="players-board">
        {!isPlayerOnTheBoard && (
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={playerName}
              onChange={handlePlayerName}
            />
            <button id="players-board__button" onClick={addNewPlayer}>
              save
            </button>
          </div>
        )}
        <h2>TOP 10</h2>
        <table className="players-board__table">
          <thead>
            <tr>
              <td>NAME</td>
              <td>SCORE</td>
              <td>DATE</td>
            </tr>
          </thead>
          <tbody>
            {playersOnTheBoard}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TenziesWin;
