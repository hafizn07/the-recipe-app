import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext';
import { DispatchContext } from '../context/AppProvider'


function Popup({ closePopup, currentDish, addToCartHandler }) { //props destructuring

  const allMenus = useContext(AllMenuContext)
  const dispatch = useContext(DispatchContext)
  console.log("Dispatch : ", dispatch);

  let dishesDetails = allMenus.filter((menuItem) => {
    return menuItem.strMeal === currentDish
  }).map((item) => {
    return (
      <div className="popup-content-data">
        <div className="popup-header">
          <img src={item.strMealThumb} className="br-10" alt="" />
          <h5 className='popup-header-category'>{item.strCategory}</h5>
        </div>

        <h2>{item.strMeal}</h2>
        <p>{item.strInstructions}</p>

        <ul className='dish-ingredients flex'>
          <li>{item.strIngredient1}</li>
          <li>{item.strIngredient2}</li>
          <li>{item.strIngredient3}</li>
          <li>{item.strIngredient4}</li>
        </ul>
        <button
          onClick={() => {
            dispatch({type: "add_to_cart", payload: {
              title: item.strMeal ,
              img: item.strMealThumb,
            }
          })
          }}> Add to cart </button>

        {/* onClick={() => addToCartHandler(item.strMealThumb, item.strMeal)}>Add to Cart */}
        <h5 className='popup-close' onClick={closePopup}>Close</h5>
      </div>
    )
  })

  return (
    <div className='popup'>
      <div className="popup-content">
        {dishesDetails}
      </div>
    </div>
  )
}

export default Popup