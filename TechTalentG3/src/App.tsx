import { useState } from 'react'
import './App.css'
import HeaderInteractivo from './componentes/HeaderInteractivo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <HeaderInteractivo/>
    </>
  )
}

export default App
