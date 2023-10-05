
import './App.css'
import RollDice from './components/RollDice'
import Tenzies from './components/Tenzies'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Footer from './components/Footer'

function App() {

  return (
    <>
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
      <Footer />
    </>

  )
}

export default App

