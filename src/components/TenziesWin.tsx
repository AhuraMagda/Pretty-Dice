
import React, { ChangeEvent } from "react";
import { addDoc, onSnapshot } from 'firebase/firestore'
import { usersCollection } from "../firebase"
import { TenziesProps } from "./Tenzies";


function TenziesWin({onUpdateTenzies, clickCount, onUpdateClickCount}: TenziesProps) {

    const newGame = () => {
        onUpdateTenzies(false)
        onUpdateClickCount(0)
    }

    const [playerName, setPlayerName] = React.useState("")

    const handlePlayerName = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target       
        setPlayerName(value)
    }

    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    let currentDate = ` ${currentDay}.${currentMonth}.${currentYear}`;

    const [playersOnTheBoard, setPlayersOnTheBoard] = React.useState<JSX.Element[]>([]);
    const [isPlayerOnTheBoard, setIsPlayerOnTheBoard] = React.useState(false)

    async function addNewPlayer() {
        const newPlayer = {
            name: playerName,
            score: clickCount,
            date: currentDate
        }
        await addDoc(usersCollection, newPlayer)
        setIsPlayerOnTheBoard(true)
    }


    React.useEffect(()=>{
        const unsubscribe = onSnapshot(usersCollection, function(snapshot){
             const usersArray = snapshot.docs.map(player=>({
                ...player.data(),
                id: player.id,
                name: player.data().name,
                score: player.data().score,
                date: player.data().date,
             }))
             usersArray.sort((a, b) => a.score - b.score);
             const playersByScore: JSX.Element[] = []
             usersArray.forEach(
                player => playersByScore.length <= 9 && playersByScore.push(<li key={player.id}>{player.name} {player.score}</li>))

            setPlayersOnTheBoard(playersByScore)
        })
        return unsubscribe
    }, [])


    return (
        <>
            <h2>TENZIES! You Won</h2>

            <button className="tenzies-new" onClick={newGame}>New Game</button>

            <div className="players-board">
                {!isPlayerOnTheBoard && <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={playerName} onChange={handlePlayerName} />
                    <button id="players-board__button" onClick={addNewPlayer}>save</button>
                </div>}
                <h2>TOP 10</h2>
                <ol>
                    {playersOnTheBoard}
                </ol>

            </div>
        </>
    )
}

export default TenziesWin