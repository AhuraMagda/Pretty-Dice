
import React, { ChangeEvent } from "react";




function TenziesWin({onUpdateTenzies, clickCount}: any) {

    const newGame = () => {
        const diceToClick = document.querySelectorAll(".dice")
        diceToClick.forEach(die => (die as HTMLElement).click())
        onUpdateTenzies(false)
    }

    const [playersOnTheBoard, setPlayersOnTheBoard] = React.useState([<p>Magda 31.08.2023</p>])

    const [playerName, setPlayerName] = React.useState("")

    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    let currentDate = ` ${currentDay}.${currentMonth}.${currentYear}`;

    const [isPlayerOnTheBoard, setIsPlayerOnTheBoard] = React.useState(false)

    const writeNewPlayer = () => {
        setPlayersOnTheBoard(prevPlayers => [...prevPlayers, <p>{playerName}{currentDate}{clickCount}</p>])
        setIsPlayerOnTheBoard(true)
    }

    const handlePlayerName = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target       
        setPlayerName(value)
    }

    return (
        <>
            <h2>TENZIES! You Won</h2>

            <button className="tenzies-new" onClick={newGame}>New Game</button>

            <div className="players-board">
                {!isPlayerOnTheBoard && <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={playerName} onChange={handlePlayerName} />
                    <button id="players-board__button" onClick={writeNewPlayer}>save</button>
                </div>}
                <h2>Users that played:</h2>
                {playersOnTheBoard}
            </div>
        </>
    )
}

export default TenziesWin