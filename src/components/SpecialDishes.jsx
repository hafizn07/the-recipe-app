import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import { AllMenuContext } from './AllMenuContext';
import AddToCart from "./AddToCart";

const SpecialDishes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentDish, setCurrentDish] = useState("");
  const [addToCartItem, setAddToCartItem] = useState([]);

  const allMenus = useContext(AllMenuContext)

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

  let maxSpecialDishes = 8;

  // eslint-disable-next-line array-callback-return
  let specialMenu = allMenus.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return <CardDish menuItem={menuItem} showPopup={showPopupHandler} />;
    }
  });

  return (
    <section className="special-dishes">
      {showPopup && (
        <Popup 
        closePopup={closePopupHandler} 
        currentDish={currentDish} 
        addToCartHandler={addToCartHandler} />
      )}

      <div className="container">
        <AddToCart addToCartItem={addToCartItem} />
        <div className="special-dishes-content text-center">
          <h2>Our special dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            voluptates rem odit eligendi harum ducimus praesentium numquam
            voluptatum dignissimos culpa asperiores, dicta, id sit sequi.
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">{specialMenu}</ul>
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;
