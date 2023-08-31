
import './App.css'
import RollDice from './components/RollDice'
import Tenzies from './components/Tenzies'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {


  return (
    <main>
      <BrowserRouter>
      <Link to="/">Roll Dice</Link>
      <Link to="/tenzies">Tenzies</Link>
        <Routes>
          <Route path="/" element={<RollDice />} />
          <Route path="/tenzies" element={<Tenzies />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App



// Media query tak, żeby wykrywało ile jest kostek?
// U góry wybór, roll dice / tenzies / ???
// max liczba kostek
// Magic Dice - should I do that? 6 - Yes, 1 - No