import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage'
import ProductDetails from './Components/ProductDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
