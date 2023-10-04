
import "./Tenzies.css"
import React from "react";

import TenziesWin from "./TenziesWin";
import TenziesPlay from "./TenziesPlay";

function Tenzies() {
    const [tenzies, setTenzies] = React.useState(false) 

    function updateTenzies(value: boolean) {
        setTenzies(value)
    }
    
    const [clickCount, setClickCount] = React.useState(0)

    function updateClickCount(number: number) {
        setClickCount(number)
    }


    return (
        <div className="game-container tenzies">
            <h1>Tenzies</h1>
            <h2>Your moves: {clickCount}</h2>
            {!tenzies && <TenziesPlay onUpdateTenzies={updateTenzies} onUpdateClickCount={updateClickCount}/>}
            {tenzies && <TenziesWin onUpdateTenzies={updateTenzies} clickCount={clickCount} onUpdateClickCount={updateClickCount}/>} 
        </div>
    )
}

export default Tenzies;