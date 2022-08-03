import React from "react";

function CartCard ( {guitar} ) {

    return (
        <div className="card">
            <h3>{guitar.brand}</h3>
            <img src={guitar.image} alt={guitar.brand} className="image"/>
            <div className="container">
                <h4>Condition: {guitar.condition}</h4>
                <h4>Price: ${guitar.price}</h4>
            </div>
        </div>
    )
}

export default CartCard;