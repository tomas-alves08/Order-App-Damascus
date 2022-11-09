import React from "react";
import dishesArr from "../dishes.json";

const MealStage = ({ mealState, setMealState }) => {
  const mealsStagesObj = new Set(dishesArr.map((el) => el.dish));
  const mealsStagesArr = [...mealsStagesObj];

  console.log("Meals: ", mealsStagesArr);

  return (
    <div className="meal-stage-container">
      {mealsStagesArr.map((stage) => (
        <button
          key={stage}
          className={
            mealState === stage ? "stage-btn stage-active" : "stage-btn"
          }
          onClick={() => setMealState(stage)}
        >
          {stage}
        </button>
      ))}
    </div>
  );
};

export default MealStage;
