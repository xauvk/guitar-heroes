import React from "react";

function Search ({handleSearch, sort, toggleSort}) {
    
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
            <input checked={sort} onClick={toggleSort} type="checkbox" />
        </div>
    )
}

export default Search;