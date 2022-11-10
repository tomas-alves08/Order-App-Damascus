import React, { useState, useReducer } from 'react'
import StateContext from '../store/state-context'
import { reducerFn } from '../store/reducer'

import Nav from './Nav'
import FrontMessage from './FrontMessage'
import DisplayDishes from './DisplayDishes'
import Footer from './Footer'
import Cart from './Cart'
import Receipt from './Receipt'

function App() {
  // USEREDUCER FUNCTIONALITY
  const [state, dispatch] = useReducer(reducerFn, {
    items: [],
    totalQty: 0,
    totalAmount: 0,
  })

  const [cartDisplay, setCartDisplay] = useState(false)
  const [orderDisplay, setOrderDisplay] = useState(false)

  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
        cartDisplay,
        setCartDisplay,
        orderDisplay,
        setOrderDisplay,
      }}
    >
      {cartDisplay && !orderDisplay && <Cart />}
      {cartDisplay && orderDisplay && <Receipt />}
      <Nav />
      <FrontMessage />
      <DisplayDishes />
      <Footer />
    </StateContext.Provider>
  )
}

export default App
