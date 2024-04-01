import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Recipes from "./Recipes";
import Header from "./Header";

function Home() {
    const [search, setSearch] = useState('Search');
    const [recipes, setRecipes] = useState([]);

    const APP_ID = "4419edfb";
    const APP_KEY = "62c8cbd071f043a3c93dc204394210eb";

    const getRecipes = async () => {
        const res = await Axios.get(
            `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        setRecipes(res.data.hits);
    };

    useEffect(
        () => {
            getRecipes();
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [search]
    );

    const onInputChange = (e) => {
        setSearch(e.target.value);
    };

    const onSearchClick = (e) => {
        e.preventDefault();
        getRecipes(search);
        setSearch('')
    };

    return (
        <div className="home">
            <Header
                search={search}
                onInputChange={onInputChange}
                onSearchClick={onSearchClick} />
            <div className="container">
                <Recipes recipes={recipes} />
            </div>
        </div>
    )
}

export default Home