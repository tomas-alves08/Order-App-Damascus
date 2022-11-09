import React, { useContext } from "react";
import StateContext from "../store/state-context";

const Receipt = () => {
  const { state, dispatch, setCartDisplay, setOrderDisplay } =
    useContext(StateContext);

  const handleClose = () => {
    dispatch({ type: "RESET" });
    setCartDisplay(false);
    setOrderDisplay(false);
  };

  return (
    <div className="cart-page-container" onClick={handleClose}>
      <div className="receipt-container">
        <div className="receipt-btn-container">
          <button className="receipt-btn" onClick={handleClose}>
            X
          </button>
        </div>
        <p className="receipt-title">Order Receipt</p>
        <div className="receipt-card-container">
          {state.items.map((el) => (
            <div key={el.item} className="receipt-item-container">
              <div className="receipt-item-subcontainer">
                <p className="receipt-item">{el.qty}x</p>
                <p className="receipt-item">{el.item}</p>
              </div>
              <p className="receipt-item">$NZ{el.amount}</p>
            </div>
          ))}
        </div>
        <hr className="receipt-line" />
        <div className="total-amount-container">
          <p className="receipt-amount">Total Amount</p>
          <p className="receipt-amount">NZ${state.totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
