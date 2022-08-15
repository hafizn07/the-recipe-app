import React, { useEffect, useState } from 'react'
import Loader from './Loader'

export const AllMenuContext = React.createContext() // Creating a global context that can be shared to its children

export const AllMenus = (props) => {

    //states
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    //Get all the menus
    async function getAllTheMenus() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URL);
        let data = await response.json();
        setMenu(data.meals)
        setLoading(false)
    }

    useEffect(() => {
        getAllTheMenus()
    }, [])

    return (
        <AllMenuContext.Provider value={menu}>
            {!loading ? props.children : <Loader />}
        </AllMenuContext.Provider>
    )
}
