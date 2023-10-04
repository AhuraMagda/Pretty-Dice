
import "./Tenzies.css"
import React from "react";

import TenziesWin from "./TenziesWin";
import TenziesPlay from "./TenziesPlay";

function Tenzies() {
    console.log("tenzies rendered")
    const [tenzies, setTenzies] = React.useState(false) 

    function updateTenzies(value: boolean) {
        setTenzies(value)
        console.log("upd")
    }
    
    const [clickCount, setClickCount] = React.useState(0)

    function resetClickCount() {
        setClickCount(0)
    }

    React.useEffect(() => {
        const clickHandler = () => {
            setClickCount(prevCount => prevCount + 1)
        }
        const diceToClick = document.querySelectorAll(".dice");
        diceToClick.forEach((die) => die.addEventListener("click", clickHandler));

        return () => {
            diceToClick.forEach((die) => die.removeEventListener("click", clickHandler));
          }
    }, []);
    

    return (
        <div className="game-container tenzies">
            <h1>Tenzies</h1>
            <h2>Your moves: {clickCount}</h2>
            {!tenzies && <TenziesPlay onUpdateTenzies={updateTenzies}/>}
            {tenzies && <TenziesWin onUpdateTenzies={updateTenzies} clickCount={clickCount} onResetClickCount={resetClickCount}/>} 
        </div>
    )
}

export default Tenzies;