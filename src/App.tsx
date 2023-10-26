
import './App.css'
import RollDice from './components/RollDice'
import Tenzies from './components/Tenzies'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Footer from './components/Footer'

function App() {

const activeStyle = {
  textDecoration: "underline"
}

const customStyle = ({ isActive }: { isActive: boolean }) =>
isActive ? activeStyle : null;

  return (
    <>
      <main>
        <BrowserRouter>
        <NavLink style={customStyle} to="/">Roll Dice</NavLink>
        <NavLink style={customStyle} to="/tenzies">Tenzies</NavLink>
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

