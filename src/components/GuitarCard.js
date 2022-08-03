import React, {useEffect, useState} from "react";

function GuitarCard ({guitar, addToCart, removeFromCart, cartItems}) {
    const [inCart, setInCart] = useState(cartItems.includes(guitar))
    const [ showDescription, setShowDescription ] = useState(false)

    const handleClick = () => {
     setInCart((cart) => !cart)
    }

    const toggleImage = () => {
        setShowDescription(showDescription => !showDescription)
    }

    const detailsDisplay = (
            <>
            <h4>Condition: {guitar.condition}</h4>
            <h4>Price: ${guitar.price}</h4>
            </>
    )

    const detailsDescription = <p>Description:<br/><br/>{guitar.description}</p>

    useEffect(() => {
        inCart ?  addToCart(guitar) : removeFromCart(guitar.id)
    }, [inCart])
    
    return (
        <div className="card">
            <h3>{guitar.brand}</h3>
            <img src={guitar.image} onClick={toggleImage} alt={guitar.brand} className="image" />
            <div className = "container">
            {showDescription ? detailsDescription : detailsDisplay}
            {inCart ? (<button className="button-on" onClick={handleClick}>Remove from Cart</button>) : (<button className="button-off" onClick={handleClick}>Add to Cart</button>)}
            </div>
        </div>
    )
}

export default GuitarCard;