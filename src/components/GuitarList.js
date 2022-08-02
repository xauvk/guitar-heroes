import React from "react";
import GuitarCard from "./GuitarCard"

function GuitarList ({guitarData, addToCart, removeFromCart}) {

    const guitarComponents = guitarData.map(guitar => {
        return <GuitarCard guitar={guitar} key={guitar.id} addToCart={addToCart} removeFromCart={removeFromCart}/>
    }) 

    return (
        <div>
            {guitarComponents}
        </div>
    )
}

export default GuitarList;