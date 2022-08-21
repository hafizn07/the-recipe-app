import React from 'react'
import Menus from './components/Menus'
import './App.scss'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppProvider } from './context/AppProvider'

const App = () => {
  return (
    <div>
      <Router>
        <AppProvider>
        <Routes>
          <Route exact path="/" element={<Menus />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        </AppProvider>
      </Router>
    </div>
  )
}

export default App