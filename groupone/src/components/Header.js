import React from 'react'

function Header(props) {
    const { search, onInputChange, onSearchClick } = props;
    return (
        <div className="jumbotron mb-0">
            <div className="container text-center">
                <form className="form-inline justify-content-center">
                    <div> {/* Wrap the Food Recipe and image inside a div */}
                        <h1 className="Food-title">Food Recipe</h1>
                    </div>
                    <img src="logo-food.jpg" alt="FoodLogo" className="brand-icon mb-2" style={{ width: '150px' }} />
                    <input
                        type="text"
                        className="form-control w-50 mr-sm-2"
                        placeholder="Search Your Recipe..."
                        value={search}
                        onChange={onInputChange}
                    />
                    <div className="input-group-append">
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