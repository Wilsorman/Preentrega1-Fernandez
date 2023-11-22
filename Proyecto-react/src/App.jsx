import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  
  

  return (
    <>
<Navbar/>
<ItemListContainer className="introduccion" greeting={"Bienvenidos a mi Primer E-commerce"} />
    </>
  )
}

export default App
