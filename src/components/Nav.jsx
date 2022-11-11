import React, { useContext, useState, useEffect } from "react";
import StateContext from "./../store/state-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { state, setCartDisplay } = useContext(StateContext);
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const btnStyle = `button ${btnHighlighted ? "bump" : null}`;

  useEffect(() => {
    if (state.items.length === 0) {
      return;
    } else {
      setBtnHighlighted(true);
    }

    setTimeout(() => setBtnHighlighted(false), 300);
  }, [state]);

  return (
    <>
      <div className="nav-container">
        <div className="logo">Damascus Restaurant</div>
        <div className="nav-btn-container">
          <button className={btnStyle} onClick={() => setCartDisplay(true)}>
            <FontAwesomeIcon className="icon" icon={faCartShopping} />
            <p className="btn-text">Your Cart</p>
            <div className="badge">
              <p className="cart-amount">{state.totalQty}</p>
            </div>
          </button>
        </div>
      </div>
      <div className="img-container">
        <img className="background-img" src="./img/damascus.jpg" />
      </div>
    </>
  );
};

export default Nav;
