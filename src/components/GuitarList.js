import React from "react";
import GuitarCard from "./GuitarCard"

function GuitarList ({guitarData, handleCart}) {

    const guitarComponents = guitarData.map(guitar => {
        return <GuitarCard guitar={guitar} key={guitar.id} handleCart={handleCart} />
    }) 

    return (
        <div>
            {guitarComponents}
        </div>
    )
}

export default GuitarList;