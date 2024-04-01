import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Recipes from "./Recipes";
import Header from "./Header";

// Home component for displaying the home page
function Home() {
    // State variables for search term and recipes
    const [search, setSearch] = useState('Search'); // State for the search term, default value is 'Search'
    const [recipes, setRecipes] = useState([]); // State for the recipes, initially empty

    // Edamam API credentials
    const APP_ID = "4419edfb";
    const APP_KEY = "62c8cbd071f043a3c93dc204394210eb";

    // Function to fetch recipes from the Edamam API
    const getRecipes = async () => {
        const res = await Axios.get( // Make a GET request to the API
            `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        setRecipes(res.data.hits); // Set the recipes state with the fetched data
    };

    // useEffect hook to fetch recipes when the search term changes
    useEffect(
        () => {
            getRecipes(); // Call the getRecipes function
        },
        [search] // Dependency array, re-run the effect when 'search' changes
    );

    // Function to handle input change in the search input
    const onInputChange = (e) => {
        setSearch(e.target.value); // Update the 'search' state with the new value
    };

    // Function to handle search button click
    const onSearchClick = (e) => {
        e.preventDefault(); // Prevent the default form submission
        getRecipes(search); // Call the getRecipes function with the current search term
        setSearch(''); // Reset the search input value to empty
    };

    // Render the header and recipes components
    return (
        <div>
            {/* Header component with search input */}
            <Header
                search={search}
                onInputChange={onInputChange}
                onSearchClick={onSearchClick} />
            <div className="container">
                {/* Recipes component to display the fetched recipes */}
                <Recipes recipes={recipes} />
            </div>
        </div>
    )
}

export default Home