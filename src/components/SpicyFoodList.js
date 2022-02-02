import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")
  const foodsToDisplay = foods.filter((food) => { 
    if(filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })


  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArry = [ ...foods, newFood]
    // console.log(newFood);
    setFoods(newFoodArry)
  }

  // this one removes li items
  // function handleLIClick(id) {
  //   const newFoodArry = foods.filter((food) => food.id !== id)
  //   setFoods(newFoodArry)
  // }

  //this one increments the heat level in the arry
  function handleLIClick(id){
    const newFoodArry = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        }
      } else {
        return food
      }
    })
    setFoods(newFoodArry)
  }

  function handleFilter(event){
      setFilterBy(event.target.value)
  }
  
  

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLIClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
