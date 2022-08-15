import React, { useState, useEffect } from 'react'
import FilteredDishes from './FilteredDishes';
import Header from './Header';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';

import { AllMenus } from './AllMenuContext';

const Menus = () => {

    const [category, setCategory] = useState([])
    const [singleDish, setSingleDish] = useState([])


    //Get all the categories
    async function getAllTheCategories() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(API_URL);
        let categoryData = await response.json();
        setCategory(categoryData.categories)
    }

    //Get only one dish
    async function getOnlyOneDish() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
        let response = await fetch(API_URL);
        let singleDishData = await response.json();
        setSingleDish(singleDishData.meals)
    }

    useEffect(() => {
        getAllTheCategories()
        getOnlyOneDish()
    }, [])

    return (
        <div>
            <Header />
            <Hero />
            <AllMenus>
                <SpecialDishes />

                <FilteredDishes
                    menuCategories={category}
                    singleDish={singleDish}
                    setSingleDish={setSingleDish}
                />

            </AllMenus>
        </div>
    )
}

export default Menus