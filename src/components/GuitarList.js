import React from "react";
import GuitarCard from "./GuitarCard"

function GuitarList ({guitarData, addToCart, removeFromCart, cartItems}) {

    const guitarComponents = guitarData.map(guitar => {
        return <GuitarCard guitar={guitar} key={guitar.id} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
    }) 

    return (
        <div className="grid-container">
            {guitarComponents}
        </div>
    )
}

export default GuitarList;