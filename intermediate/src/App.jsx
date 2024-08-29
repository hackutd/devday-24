import MainContent from './MainContent'
import './App.css'
import { useState } from 'react'
import Header from './Navbar'
import ItemGrid from './ItemGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <MainContent/>
     <ItemGrid />
     
    </>
  )
}

export default App
