import React, { useState, useEffect } from 'react'
import FilteredDishes from './FilteredDishes';
import Hero from './Hero';
import Loader from './Loader';
import SpecialDishes from './SpecialDishes';

const Menus = () => {

    const [menu, setMenu] = useState([])
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)
    const [singleDish, setSingleDish] = useState([])

    //Get all the menus
    async function getAllTheMenus() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URL);
        let data = await response.json();
        setMenu(data.meals)
        setLoading(false)
    }

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
        getAllTheMenus()
        getAllTheCategories()
        getOnlyOneDish()
    }, [])

    return (
        <div>
            <Hero />
            {!loading ? <SpecialDishes specialMenu={menu} /> : <Loader />}
            {!loading ?
                <FilteredDishes
                    menuCategories={category}
                    allMenus={menu}
                    singleDish={singleDish}
                    setSingleDish={setSingleDish}
                />
                : null}
        </div>
    )
}

export default Menus