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
        <div className="card">
            <h3>{guitar.brand}</h3>
            <img src={guitar.image} alt={guitar.brand} className="image" />
            <div className="container">
                <h4>Condition: {guitar.condition}</h4>
                <p>Price: ${guitar.price}</p>
                {inCart ? (<button className="button-on" onClick={handleClick}>Remove from Cart</button>) : (<button className="button-off" onClick={handleClick}>Add to Cart</button>)}
            </div>
        </div>
    )
}

export default GuitarCard;