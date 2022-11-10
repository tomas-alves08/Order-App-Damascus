import React, { useContext } from 'react'
import StateContext from '../store/state-context'

const Cart = () => {
  const { state, dispatch, setCartDisplay, setOrderDisplay } =
    useContext(StateContext)
  console.log('CART: ', state)

  const handleClickOutside = (e) => {
    if (e.target.className === 'cart-page-container') {
      setCartDisplay(false)
    }
  }

  const dispatchItem = (type, item, amount, price) => {
    return dispatch({
      type: type,
      action: { item, amount, price },
    })
  }

  return (
    <div className="cart-page-container" onClick={handleClickOutside}>
      <div className="cart-container">
        {state.items.map((dish) => (
          <>
            <div key={dish.item} className="cart-item-container">
              <div className="cart-title-container">
                <p className="cart-item">{dish.item}</p>
                <div className="cart-amount-container">
                  <p className="cart-item-amount">NZ$ {dish.amount}</p>
                  <p className="cart-item-qty">(x{dish.qty})</p>
                </div>
              </div>

              <div className="cart-btn-container">
                <button
                  className="cart-btn"
                  onClick={() => dispatchItem('ADD', dish.item, 1, dish.price)}
                >
                  +
                </button>
                <button
                  className="cart-btn btn-minus"
                  onClick={() =>
                    dispatchItem('SUBTRACT', dish.item, 1, dish.price)
                  }
                >
                  -
                </button>
              </div>
            </div>
          </>
        ))}
        <hr className="line" />
        <div className="total-amount-container">
          <p className="total-amount">Total Amount</p>
          <p className="total-amount">${state.totalAmount}</p>
        </div>
        <div className="total-amount-btn-container">
          <button
            className="total-amount-btn close-btn"
            onClick={() => setCartDisplay(false)}
          >
            Close
          </button>
          <button
            className="total-amount-btn order-btn"
            onClick={() => setOrderDisplay(true)}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
