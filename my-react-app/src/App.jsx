import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import DetailPage from './pages/Detail'

function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('http://127.0.0.1:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage products={products} />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>

    </>
  )
}

export default App