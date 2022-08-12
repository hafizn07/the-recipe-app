import React, { useState } from "react";

function FilteredDishes(props){

  let [allMenus, setAllMenus] = useState(props.allMenus)
  let [filteredDishes, setFilteredDishes] = useState([])

  //show dishes on onClick function
  function showFilteredDishesHandler(category) {
    let filteredDishesAre = allMenus.filter((item) => {
      return item.strCategory === category
    }).map((item) => {
      return (
        <li>
          <img src={item.strMealThumb} className="br-10" alt="img" />
          <h5>{item.strMeal}</h5>
        </li>
      )
    })
    setFilteredDishes(filteredDishesAre)
  }

  //show all the categories in list
  let menuCategories = props.menuCategories.map((item) => {
    return (
      <li onClick={() => { showFilteredDishesHandler(item.strCategory) }}>{item.strCategory}</li>
    )
  })

  return (
    <div className="filterd-dishes">
      <div className="container">
        <div className="text-center">
          <h2>Choose your dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet in
            quis debitis at totam nesciunt consequuntur laboriosam consequatur
            beatae quas!
          </p>
        </div>

        <div className="filterd-dishes">
          <ul>
            {menuCategories}
          </ul>
        </div>
        <div className="filtered-dishes-results flex">
          <ul className="flex flex-wrap gap-30">
            {filteredDishes}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilteredDishes;
