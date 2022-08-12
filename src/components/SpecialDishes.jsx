import React from "react";

const SpecialDishes = (props) => {
    
    let maxSpecialDishes = 8

    let specialMenu = props.specialMenu.map((menuItem, index) => {
      if(index<maxSpecialDishes){
        return(
            <li>
              <img src={menuItem.strMealThumb} className="br-10" alt="" />
              <h5>{menuItem.strMeal}</h5>
            </li>
        )
      }
    })

  return (
    <section className="special-dishes">
      <div className="container">
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
