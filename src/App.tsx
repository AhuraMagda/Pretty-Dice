
import './App.css'
import D6 from './components/D6.tsx'
import React from 'react'

function App() {
  
  const [allTheDice, setAllTheDice] = React.useState([<D6 key={0} id={0}/>])

  const rollAll = () => {
    const diceToClick = document.querySelectorAll(".dice")
    diceToClick.forEach(die => (die as HTMLElement).click())
  }

  const addDie = () => {
    setAllTheDice(prevDice => [...prevDice, <D6 id={prevDice.length} key={prevDice.length}/>])
  }

  const deleteDie = () => {
    setAllTheDice(prevDice => prevDice.slice(0, -1))
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
    <main>
      <h1>Roll dice / Tenzies</h1>
      <div className='dice-container'>
        {allTheDice}
      </div>
      <div className='buttons-container'>
        <button className='add-btn' onClick={addDie}>Add Die</button>
        <button className='add-btn' onClick={deleteDie}>Delete Die</button>
        <button className='roll-btn' onClick={rollAll}>Roll</button>
        <button className='barbie-btn' onClick={makeBarbie}>Barbie</button>
      </div>

    </main>
  )
}

export default App



// Media query tak, żeby wykrywało ile jest kostek?
// U góry wybór, roll dice / tenzies / ???
// max liczba kostek
// Magic Dice - should I do that? 6 - Yes, 1 - No