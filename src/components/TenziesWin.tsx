
import React, { ChangeEvent } from "react";
import { addDoc, onSnapshot } from 'firebase/firestore'
import { usersCollection } from "../firebase"

function TenziesWin({onUpdateTenzies, clickCount}: any) {

    const newGame = () => {
        const diceToClick = document.querySelectorAll(".dice")
        diceToClick.forEach(die => (die as HTMLElement).click())
        onUpdateTenzies(false)
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

    const [playersOnTheBoard, setplayersOnTheBoard] = React.useState("")

    const [isPlayerOnTheBoard, setIsPlayerOnTheBoard] = React.useState(false)



    // const docRef = doc(db, "tenziesscore", "SF")
    // const docSnap = await getDoc(docRef)

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
            console.log("changed")
             const usersArray = snapshot.docs.map(user=>({
                ...user.data(),
                id: user.id
             }))
             console.log(usersArray[0].name)

             const players: string[] = []
             usersArray.forEach(player => players.push(`name: ${player.name} score: ${player.score} date: ${player.date}`))

             setplayersOnTheBoard(players)
        })
        return unsubscribe
    }, [])

    console.log(usersCollection)




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
                <h2>Users that played:</h2>
                {playersOnTheBoard}
            </div>
        </>
    )
}

export default TenziesWin