


import D6 from "./D6";
import React from "react";

console.log("tenzies play reredners")

function TenziesPlay({onUpdateTenzies}: any) {
    const [sides, setSides] = React.useState(["0", "1", "2", "3", "4", "5", "6", "7"])

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
    

    React.useEffect(()=> {
        const timeoutId = setTimeout(()=>{
            const allSame = sides.every(side => side === sides[0]);
            allSame && onUpdateTenzies(true);
        }, 1000)
        return () => clearTimeout(timeoutId)
    }, [sides])

    

    return (
        <>
            <p>Click on the die untill all the dies are the same</p>
            <div className='dice-container'>
              {allTheDice}
            </div>
        </>

    )
}

export default TenziesPlay