





function RollDiceButtons(props) {
    const rollAll = () => {
        const diceToClick = document.querySelectorAll(".dice")
        diceToClick.forEach(die => (die as HTMLElement).click())
    }
    
    const makeBarbie = () => {
        document.documentElement.style.setProperty('--bg-color-1', 'pink');
        document.documentElement.style.setProperty('--bg-color-2', 'pink');
        document.documentElement.style.setProperty('--bg-color-3', 'pink');
        document.documentElement.style.setProperty('--bg-color-4', 'pink');
        document.documentElement.style.setProperty('--bg-color-5', 'pink');
        document.documentElement.style.setProperty('--bg-color-6', 'pink');
    }

    return (
        <div className='buttons-container'>
            <button className='add-btn' onClick={props.addDie}>Add Die</button>
            <button className='add-btn' onClick={props.deleteDie}>Delete Die</button>
            <button className='roll-btn' onClick={rollAll}>Roll</button>
            <button className='barbie-btn' onClick={makeBarbie}>Barbie</button>
        </div>
    )
}

export default RollDiceButtons