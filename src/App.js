import React from 'react'
import Menus from './components/Menus'
import './App.scss'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Menus />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App