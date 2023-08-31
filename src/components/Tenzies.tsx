import D6 from "./D6";
import React from "react";

function Tenzies() {

    const [sides, setSides] = React.useState(["0","1","2","3","4","5","6","7","8"])


    const handleSideChange = (newSide: string, id: number) => {
        setSides(prevSides => prevSides.map((side, index) => index === id ? newSide : side))
    }

    const makeNewDice = () => {
        const randomDiceArray = [];
        for (let i=0; i < 9; i++) {
            randomDiceArray.push(<D6 key={i} id={i} changeSide={handleSideChange}/>)
        }   
        return randomDiceArray
      }
    
    const allTheDice  = makeNewDice()
    const [tenzies, setTenzies] = React.useState(false) 


    React.useEffect(()=> {
        const timeoutId = setTimeout(()=>{
            const allSame = sides.every(side => side === sides[0])
            allSame && setTenzies(true)
        }, 1000)
        return () => clearTimeout(timeoutId)
    }, [sides])


    const newGame = () => {
        const diceToClick = document.querySelectorAll(".dice")
        diceToClick.forEach(die => (die as HTMLElement).click())
        setTenzies(false)
    }

    return (
        <div className="tenzies">
            <h1>Tenzies</h1>
            {tenzies && <h2>TENZIES! You Won</h2>}
            <div className="dice-container">
                {allTheDice}
            </div>
            {tenzies && <button className="tenzies-new" onClick={newGame}>new</button>}
        </div>
    )
}

export default Tenzies;