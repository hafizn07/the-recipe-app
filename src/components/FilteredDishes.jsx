import React, { useState } from "react";

function FilteredDishes(props) {

  let [allMenus, setAllMenus] = useState(props.allMenus)
  let [filteredDishes, setFilteredDishes] = useState([])
  let [activeDish, setActiveDish] = useState("Beef")

  //show only single dish

  let singleDishItem = props.singleDish.map((item)=>{
    return (
      <li>
        <img src={item.strMealThumb} className="br-10" alt="img" />
        <h5>{item.strMeal}</h5>
      </li>
    )
  })

  //show dishes on onClick function
  function showFilteredDishesHandler(category) {
    props.setSingleDish([])
    setActiveDish(category)
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
      <li
        className={item.strCategory === activeDish ? "active" : ""}
        onClick={() => { showFilteredDishesHandler(item.strCategory) }}>
        {item.strCategory}
      </li>
    )
  })

  //rendering
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
            {singleDishItem}
            {filteredDishes.length !==0 || singleDishItem.length !==0 ? filteredDishes :
              <div className="alert">
                <h3> Sorry, No items found!!</h3>
                <h4> Please try another dish </h4>
                </div>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilteredDishes;
