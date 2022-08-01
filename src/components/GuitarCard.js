import React, {useState} from "react";

function GuitarCard ({id, name, image, brand, electric, price, condition}) {
    const [inCart, setInCart]   = useState(false)
    const handleClick = () => setInCart((cart) => !cart)

    return (
        <div>
            <h1>{name}</h1>
            <h3>{brand}</h3>
            <img src={image} alt={name} className="image"/>
            <h4>{condition}</h4>
            <p>{price}</p>
            {inCart ? (<button onClick={handleClick}>Remove from Cart</button>) : (<button onClick={handleClick}>Add to Cart</button>)}
        </div>
    )
}

export default GuitarCard;