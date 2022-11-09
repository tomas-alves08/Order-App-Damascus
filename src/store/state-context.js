import React from 'react'

const StateContext = React.createContext({
  state: {
    items: [],
    totalQty: 0,
    totalAmount: 0,
  },
})

export default StateContext
