import React from "react";
import GuitarCard from "./GuitarCard"

function GuitarList ({guitarData}) {

    const guitarComponents = guitarData.map(guitar => {
        return <GuitarCard {... guitar} key={guitar.key} />
    }) 

    return (
        <div>
            {guitarComponents}
        </div>
    )
}

export default GuitarList;