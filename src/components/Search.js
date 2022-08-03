import React from "react";

function Search ({handleSearch, toggleSort}) {
    
    const onSearch = (e) => handleSearch(e.target.value);
    
    return (
        <div>
            <label htmlFor="search" className="search-label">Lookup Guitar: </label>
            <input className="search-bar"
                onChange={onSearch}
                type="text"
                placeholder="Search..."
            />
            <br></br>
            <label>Price: Lowest to Highest</label>
            <input name="pricesort" value="lowtohigh" onClick={toggleSort} type="checkbox" />
            <br></br><br></br>
            <label>Price: Highest to Lowest</label>
            <input name="pricesort" value="hightolow" onClick={toggleSort} type="checkbox" />
        </div>
    )
}

export default Search;