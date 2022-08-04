import React from "react";

function Search ({handleSearch, toggleSort}) {
    
    const onSearch = (e) => handleSearch(e.target.value);
    
    return (
        <div className="input-icons">
            <form className="box">
                {/* <label htmlFor="search" className="search-label">Lookup Guitar: </label> */}
                <i class="fa fa-search icon"></i>
                <input className="search-bar"
                onChange={onSearch}
                type="text"
                placeholder="Search for a guitar..."
                />
            </form>
            <br></br>
            <label className="sort">Lowest to Highest Price</label>
            <input className="sort-input" name="price-sort" value="lowtohigh" onClick={toggleSort} type="radio" />
            <label className="sort">Highest to Lowest Price</label>
            <input className="sort-input" name="price-sort" value="hightolow" onClick={toggleSort} type="radio" />
        </div>
    )
}

export default Search;