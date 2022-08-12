import React, { useState, useEffect } from 'react'
import FilteredDishes from './FilteredDishes';
import Hero from './Hero';
import Loader from './Loader';
import SpecialDishes from './SpecialDishes';

const Menus = () => {

    const [menu, setMenu] = useState([])
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)

    async function getAllTheMenus() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URL);
        let data = await response.json();
        setMenu(data.meals)
        setLoading(false)
    }
    async function getAllTheCategories() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(API_URL);
        let categoryData = await response.json();
        setCategory(categoryData.categories)
    }

    useEffect(() => {
        getAllTheMenus()
        getAllTheCategories()
    }, [])

    return (
        <div>
            <Hero />
            {!loading ? <SpecialDishes specialMenu={menu} /> : <Loader /> }
            {!loading ? <FilteredDishes menuCategories={category} allMenus={menu} /> : null}
        </div>
    )
}

export default Menus