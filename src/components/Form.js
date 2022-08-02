import React, { useState } from "react";

function Form ({addGuitar}) {
    const [form, setForm] = useState({'electric':true})

    const handleForm = (e) => {
        setForm(form => {
            if (e.target.name === 'electric') {
                if (e.target.value === 'electric') {
                    return { ...form, 'electric' : true }
                    } else return { ...form, 'electric' : false }
            }
            return { ...form, [e.target.name] : e.target.value }
        })
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        fetch('http://localhost:3000/guitars',
        {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(form)
        })
            .then(addGuitar(form))
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input onChange={handleForm} type="text" name="brand" placeholder="Brand/Model"/>
                <input onChange={handleForm} type="text" name="condition" placeholder="Condition of guitar"/>
                <input onChange={handleForm} type="number" name="price" step='0.01' placeholder="Price"/>
                <input onChange={handleForm} type="text" name="image" placeholder="Link to Image"/>
                <select onChange={handleForm} name="electric">
                    <option value={'electric'}>Electric</option>
                    <option value={'acoustic'}>Acoustic</option>
                </select>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;