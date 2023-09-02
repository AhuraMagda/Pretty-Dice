import D6 from "./D6";
import React, { ChangeEvent } from "react";
import "./Tenzies.css"


function Tenzies() {
    console.log("Tenzies Component")
    const [sides, setSides] = React.useState(["0","1", "2", "3", "4", "5", "6", "7"])

    const [clickCount, setClickCount] = React.useState(0)

    const handleSideChange = (newSide: string, id: number) => {
        setSides(prevSides => prevSides.map((side, index) => index === id ? newSide : side))
    }

    const makeNewDice = () => {
        const randomDiceArray = [];
        for (let i=0; i < 8; i++) {
            randomDiceArray.push(<D6 key={i} id={i} changeSide={handleSideChange}/>)
        }   
        return randomDiceArray
      }
    
    const allTheDice = makeNewDice()
    
    const [tenzies, setTenzies] = React.useState(false) 

    React.useEffect(()=> {
        const timeoutId = setTimeout(()=>{
            const allSame = sides.every(side => side === sides[0]);
            allSame && setTenzies(true);
        }, 1000)
        return () => clearTimeout(timeoutId)
    }, [sides])


    const newGame = () => {
        const diceToClick = document.querySelectorAll(".dice")
        diceToClick.forEach(die => (die as HTMLElement).click())
        setTenzies(false)
        setClickCount(0)
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
        setPlayersOnTheBoard(prevPlayers => [...prevPlayers, <p>{playerName}{currentDate}</p>])
        setIsPlayerOnTheBoard(true)
    }

    const handlePlayerName = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target       
        setPlayerName(value)
    }
    
    React.useEffect(() => {
        const clickHandler = () => {
            setClickCount(prevCount => prevCount + 1)
        }

        if (!tenzies) {   
            const diceToClick = document.querySelectorAll(".dice");
            diceToClick.forEach((die) => die.addEventListener("click", clickHandler));
            diceToClick.forEach(die=>console.log(die))
        } else {     
            const diceToClick = document.querySelectorAll(".dice");
            diceToClick.forEach((die) => die.removeEventListener("click", clickHandler));
            diceToClick.forEach(die=>console.log(die))
        }
    }, [tenzies]);

    // Players Board
    return (
        <div className="game-container tenzies">
            <h1>Tenzies</h1>
            {!tenzies && <p>Click on the die untill all the dies are the same</p>}
            {tenzies && <h2>TENZIES! You Won</h2>}
            <h2>Your moves (for now it is what it is): {clickCount}</h2>
            <div className="dice-container">
                {allTheDice}
            </div>
            {tenzies && <button className="tenzies-new" onClick={newGame}>New Game</button>}

            
            {tenzies && <div className="players-board">
                {!isPlayerOnTheBoard && <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={playerName} onChange={handlePlayerName} />
                    <button id="players-board__button" onClick={writeNewPlayer}>save</button>
                </div>}
                <h2>Users that played:</h2>
                {playersOnTheBoard}
            </div>}
        </div>
    )
}

export default Tenzies;