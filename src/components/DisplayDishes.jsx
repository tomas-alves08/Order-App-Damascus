import React, { useState, useContext } from "react";
import StateContext from "../store/state-context";
import dishesArr from "../dishes.json";

import MealStage from "./MealStage";

const DisplayDishes = () => {
  const [input, setInput] = useState("");
  const { state, dispatch } = useContext(StateContext);

  console.log("REDUCER: ", state);

  // FORM INPUT DATA
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (item, amount, price) => {
    if (amount > 0) {
      dispatch({
        type: "ADD",
        action: { item, amount, price },
      });
    }
    setInput("");
  };

  // DISPLAY DISHES FUNCTIONALITY
  const [mealState, setMealState] = useState("Cold Mezzah");
  const dishesSortedByStage = dishesArr.filter((el) => el.dish === mealState);

  const dishes = dishesSortedByStage.map((dish) => (
    <div key={dish.id} className="display-dish-container">
      <div className="dish-header">
        <p className="dish-title">{dish.name}</p>
        <p className="dish-price">${dish.price}</p>
      </div>
      <hr />
      <div className="dish-img-container">
        <img className="dish-img" src={dish.img} alt={dish.name} />
      </div>
      {dish.ingredients && (
        <p className="dish-ingredient">
          <u>Ingredients</u>: {dish.ingredients.join(", ")}
        </p>
      )}
      <div className="dish-diet-container">
        {dish.diet?.map((el) => (
          <p key={el} className="dish-diet">
            {el}
          </p>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(dish.name, input, dish.price);
        }}
      >
        <div className="order-container">
          <label className="amount-label" htmlFor={dish.id}>
            Amount:
          </label>
          <input
            className="amount-input"
            id={dish.id}
            name={dish.name}
            price={dish.price}
            min="1"
            value={"" || input}
            onChange={handleInput}
          />
          <button className="btn-dish">+ Add</button>
        </div>
      </form>
    </div>
  ));

  return (
    <>
      <MealStage mealState={mealState} setMealState={setMealState} />
      <div className="dishes-container">{dishes}</div>
    </>
  );
};

export default DisplayDishes;
