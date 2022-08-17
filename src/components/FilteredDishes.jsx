import React, { useContext, useEffect, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import Pagination from "./Pagination";
import { AllMenuContext } from "./AllMenuContext";
import AddToCart from "./AddToCart";

function FilteredDishes(props) {
  const [category, setCategory] = useState([]);
  const [singleDish, setSingleDish] = useState([]);
  const allMenus = useContext(AllMenuContext);
  const [showPopup, setShowPopup] = useState(false);
  const [currentDish, setCurrentDish] = useState("");
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [activeDish, setActiveDish] = useState("Beef");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [addToCartItem, setAddToCartItem] = useState([]);

  let indexOfLastDish = currentPage * itemsPerPage;
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;
  let showTheseDishesNow = filteredDishes.slice(
    indexOfFirstDish,
    indexOfLastDish
  );

  //Get all the categories
  async function getAllTheCategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setCategory(categoryData.categories);
  }

  //Get only one dish
  async function getOnlyOneDish() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL);
    let singleDishData = await response.json();
    setSingleDish(singleDishData.meals);
  }

  useEffect(() => {
    getAllTheCategories();
    getOnlyOneDish();
  }, []);

  //function to show the popup
  function showPopupHandler(dishName) {
    setShowPopup(true);
    setCurrentDish(dishName);
  }

  //function to close the popup
  function closePopupHandler() {
    setShowPopup(false);
  }

  //Add to cart handler (from popup.js)
  function addToCartHandler (addToCartImg, addToCartTitle){
    setAddToCartItem(
      [
        ...addToCartItem,
        {
          "img" : addToCartImg,
          "title" : addToCartTitle
        }
      ]
    )
  }


  //show only single dish
  let maxSingleDish = 4;
  let singleDishItem = singleDish.map((item, index) => {
    if (index < maxSingleDish) {
      return (
        <li>
          <img src={item.strMealThumb} className="br-10" alt="img" />
          <h5>{item.strMeal}</h5>
        </li>
      );
    }
  });

  //show dishes on onClick function
  function showFilteredDishesHandler(category) {
    setSingleDish([]);
    setActiveDish(category);

    let filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItem) => {
        return <CardDish menuItem={menuItem} showPopup={showPopupHandler} />;
      });

    setFilteredDishes(filteredDishesAre);
  }

  //show all the categories in list
  let menuCategories = category.map((item) => {
    return (
      <li
        className={item.strCategory === activeDish ? "active" : ""}
        onClick={() => {
          showFilteredDishesHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });

  //rendering
  return (
    <div className="filtred-dishes">
      {showPopup && (
        <Popup 
        closePopup={closePopupHandler} 
        currentDish={currentDish} 
        addToCartHandler={addToCartHandler} />
      )}
      <div className="container">
      <AddToCart addToCartItem={addToCartItem} />
        <div className="text-center">
          <h2>Choose your dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet in
            quis debitis at totam nesciunt consequuntur laboriosam consequatur
            beatae quas!
          </p>
        </div>

        <div className="filterd-dishes">
          <ul>{menuCategories}</ul>
        </div>

        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {singleDishItem}
            {filteredDishes.length !== 0 || singleDishItem.length !== 0 ?
              (showTheseDishesNow)
              : (
                <div className="alert">
                  <h3> Sorry, No items found!!</h3>
                  <h4> Please try another dish </h4>
                </div>
              )}
          </ul>
        </div>

        <Pagination
          filteredDishes={filteredDishes}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default FilteredDishes;
