import React from 'react'

function SearchBar(props) {
    const { search, onInputChange, onSearchClick } = props;
    return (
        <div>
            {/* search bar to search recipe */}
            <form class="form-inline my-2 my-lg-0">
                <input
                    type="search"
                    className="form-control mr-sm-2"
                    placeholder="Search Your Recipe..."
                    value={search}
                    onChange={onInputChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-dark" onClick={onSearchClick}>
                        Search Recipe
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar