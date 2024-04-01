import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Carousel() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Function to fetch recipes from the Edamam API
        const fetchRecipes = async () => {
            const response = await Axios.get('https://api.edamam.com/search?q=tasty&app_id=4419edfb&app_key=62c8cbd071f043a3c93dc204394210eb');
            setRecipes(response.data.hits);
        };
        fetchRecipes(); // Call the fetchRecipes function when the component mounts
    },
        []
    );

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                {/* Carousel Indicators */}
                <ol className="carousel-indicators">
                    {/* Map through recipes to create carousel indicators */}
                    {recipes.map((index) => (
                        <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                    ))}
                </ol>
                {/* Carousel Items */}
                <div className="carousel-inner">
                    {/* Map through recipes to create carousel items */}
                    {recipes.map((recipe, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={recipe.recipe.image} alt={recipe.recipe.label} style={{ height: '300px', objectFit: 'cover' }} />
                            </a>
                        </div>
                    ))}
                </div>
                {/* Carousel Controls */}
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Carousel;
