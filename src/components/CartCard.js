import React, {useEffect, useState} from "react";

function CartCard ( {guitar} ) {

    return (
        <div>
            <h1>{guitar.brand}</h1>
            <img src={guitar.image} alt={guitar.brand} className="image"/>
            <h4>{guitar.condition}</h4>
            <p>{guitar.price}</p>
        </div>
    )
}

export default CartCard;