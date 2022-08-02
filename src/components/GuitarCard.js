import React, {useEffect, useState} from "react";

function GuitarCard ({guitar, addToCart, removeFromCart, cartItems}) {
    const [inCart, setInCart]   = useState(cartItems.includes(guitar))
    const handleClick = () => {
     setInCart((cart) => !cart)
    }

    useEffect(() => {
        inCart ?  addToCart(guitar) : removeFromCart(guitar.id)
    }, [inCart])
    
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