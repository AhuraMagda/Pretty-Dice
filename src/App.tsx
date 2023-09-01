
import './App.css'
import RollDice from './components/RollDice'
import Tenzies from './components/Tenzies'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  console.log("APP Component")
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

