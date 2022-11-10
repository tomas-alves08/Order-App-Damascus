export const reducerFn = (state, action) => {
  const [type, payload] = [action.type, action.action]

  console.log('PAYLOAD: ', payload)

  if (type === 'ADD') {
    // VARIABLES
    let newItem
    let updatedItem
    let updatedItems

    // EXITING ITEM
    const existingCartItemIdx = state.items.findIndex(
      (el) => el.item === payload.item
    )
    let existingCartItem = state.items[existingCartItemIdx]

    // ADD ITEM
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        qty: Number(existingCartItem.qty) + Number(payload.amount),
        amount: existingCartItem.amount + payload.amount * payload.price,
        price: payload.price,
      }

      // UPDATE EXISTING ITEM
      updatedItems = [...state.items]
      updatedItems[existingCartItemIdx] = updatedItem
    } else {
      newItem = {
        item: payload.item,
        qty: Number(payload.amount),
        amount: payload.amount * payload.price,
        price: payload.price,
      }

      // UPDATE NEW ITEM
      updatedItems = [...state.items, newItem]
    }

    // UPDATE TOTAL QUANTITY & AMOUNT
    const updatedTotalQty = Number(state.totalQty) + Number(payload.amount)
    const updatedTotalAmount =
      state.totalAmount + payload.amount * payload.price

    return {
      items: updatedItems,
      totalQty: updatedTotalQty,
      totalAmount: updatedTotalAmount,
    }
  } else if (type === 'SUBTRACT') {
    // VARIABLES
    let updatedItem
    let updatedItems

    // EXISTING ITEM
    const existingCartItemIdx = state.items.findIndex(
      (el) => el.item === payload.item
    )

    console.log('SUBTRACT index: ', existingCartItemIdx)

    const existingCartItem = state.items[existingCartItemIdx]

    console.log('SUBTRACT cart item: ', existingCartItem)
    console.log('SUBTRACT payload', payload)

    // SUBTRACT ITEM
    if (existingCartItem && existingCartItem.qty > payload.amount) {
      updatedItem = {
        ...existingCartItem,
        qty: Number(existingCartItem.qty) - Number(payload.amount),
        amount: existingCartItem.amount - payload.amount * payload.price,
      }

      // UPDATE ITEM
      updatedItems = [...state.items]

      console.log('SUBTRACT updated item: ', updatedItem)
      updatedItems[existingCartItemIdx] = updatedItem
    } else if (existingCartItem && existingCartItem.qty <= payload.amount) {
      // DELETE ITEM FROM LIST
      updatedItems = [...state.items]
      updatedItems = updatedItems.filter((el) => el.item !== payload.item)
    }

    // UPDATE TOTAL QUANTITY & AMOUNT
    const updatedTotalQty = Number(state.totalQty) - Number(payload.amount)
    const updatedTotalAmount =
      state.totalAmount - payload.amount * payload.price

    return {
      items: updatedItems,
      totalQty: updatedTotalQty,
      totalAmount: updatedTotalAmount,
      price: payload.price,
    }
  } else if (type === 'RESET') {
    return {
      items: [],
      totalQty: 0,
      totalAmount: 0,
    }
  } else {
    return state
  }
}
