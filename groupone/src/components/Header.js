import React from 'react'

// Header component for displaying the search bar on home
function Header(props) {
    // Destructure props to get the necessary values
    const { search, onInputChange, onSearchClick } = props;

    // Render the header content
    return (
        <div className="jumbotron mb-0">
            <div className="container text-center">
                <form className="form-inline justify-content-center">
                    <div> {/* Wrap the Food Recipe and image inside a div */}
                        <h1 className="Food-title">Food Recipe</h1>
                    </div>
                    <img src="logo-food.png" alt="FoodLogo" className="brand-icon mb-2" style={{ width: '150px' }} />
                    <input
                        type="text"
                        className="form-control w-50 mr-sm-2"
                        placeholder="Search Your Recipe..."
                        value={search} // Value of the search input
                        onChange={onInputChange} // Function to handle input change
                    />
                    {/* Append the search button */}
                    <div className="input-group-append">
                        {/* Button to search for recipes */}
                        <button className="btn btn-dark btn-outline-light" onClick={onSearchClick}>
                            Search Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Header