





function RollDiceButtons(props: any) {
    const rollAll = () => {
        const diceToClick = document.querySelectorAll(".dice")
        diceToClick.forEach(die => (die as HTMLElement).click())
    }
    
    return (
        <div className='buttons-container'>
            <button className='add-btn' onClick={props.addDie}>Add Die</button>
            <button className='add-btn' onClick={props.deleteDie}>Delete Die</button>
            <button className='roll-btn' onClick={rollAll}>Roll</button>
        </div>
    )
}

export default RollDiceButtons