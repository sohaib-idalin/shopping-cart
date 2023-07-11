import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PRouter from './PRouter'
import { CartContext } from './CartContext'

function App() {

  return (
    <CartContext>
      <PRouter/>
    </CartContext>
  )
}

export default App
