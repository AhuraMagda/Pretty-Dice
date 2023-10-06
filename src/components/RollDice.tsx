
import React from "react"
import D6 from "./D6"
import "./RollDice.css"

import RollDiceButtons from "./RollDiceButtons"

function RollDice() {

  const [allTheDice, setAllTheDice] = React.useState([<D6 key={0} id={0}/>])

  const addDie = () => {
    setAllTheDice(prevDice => [...prevDice, <D6 id={prevDice.length} key={prevDice.length}/>])
  }
  
  const deleteDie = () => {
      setAllTheDice(prevDice => prevDice.slice(0, -1))
  }
  let diceClass = allTheDice.length === 1 ? "dice-container-one-die" : allTheDice.length === 2 ? "dice-container-two-die" : ""

    return (
        <div className="game-container roll-dice">
            <h1>Roll dice</h1>
            <p>Click on the die or roll all with a button</p>

            <div className={`dice-container ${diceClass}`}>
              {allTheDice}
            </div>

            <RollDiceButtons addDie={addDie} deleteDie={deleteDie}/>

        </div>
    )
}

export default RollDice;