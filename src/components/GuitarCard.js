import React, {useEffect, useState} from "react";

function GuitarCard ({guitar, handleCart}) {
    const [inCart, setInCart]   = useState(false)
    const handleClick = () => {
     setInCart((cart) => !cart);
     handleCart(guitar)
    }

    return (
        <div>
            <h1>{guitar.brand}</h1>
            <img src={guitar.image} alt={guitar.brand} className="image"/>
            <h4>{guitar.condition}</h4>
            <p>${guitar.price}</p>
            {inCart ? (<button onClick={handleClick}>Remove from Cart</button>) : (<button onClick={handleClick}>Add to Cart</button>)}
        </div>
    )
}

export default GuitarCard;