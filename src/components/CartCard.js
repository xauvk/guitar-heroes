import React from "react";

function CartCard ( {guitar} ) {

    return (
        <div className="card">
            <h3>{guitar.brand}</h3>
            <img src={guitar.image} alt={guitar.brand} className="image"/>
            <div className="container">
                <h4>Condition: {guitar.condition}</h4>
                <p>Price: ${guitar.price}</p>
            </div>
        </div>
    )
}

export default CartCard;