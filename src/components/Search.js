import React from "react";

function Search ({handleSearch}) {
    
    const onSearch = (e) => handleSearch(e.target.value);
    
    return (
        <div >
            <label htmlFor="search">Lookup Guitar: </label>
            <input className="search-bar"
                onChange={onSearch}
                type="text"
                placeholder="Search..."
            />
        </div>
    )
}

export default Search;