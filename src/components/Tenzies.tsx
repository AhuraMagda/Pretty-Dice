import D6 from "./D6";
import React from "react";

function Tenzies() {
    const makeNewDice = () => {
        const randomDiceArray = [];
        for (let i=0; i < 9; i++) {
            randomDiceArray.push(<D6 key={i} id={i} isHeld={false}/>)
        }   
        return randomDiceArray
      }
    
    const [allTheDice, setAllTheDice] = React.useState(makeNewDice())

    const rollAll = () => {
        const diceToClick = document.querySelectorAll(".dice")
        diceToClick.forEach(die => (die as HTMLElement).click())
      }

    return (
        <div className="tenzies">
            <h1>Tenzies</h1>
            <div className="dice-container">
                {allTheDice}
            </div>
            <button className="tenzies-new" onClick={rollAll}>roll</button>
        </div>
    )
}

export default Tenzies;