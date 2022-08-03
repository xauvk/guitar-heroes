import React, { useState } from "react";
import {useHistory} from "react-router-dom";

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

    let history = useHistory();

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
            history.push("/");
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <label className="label" htmlFor="brand">Brand/Model: </label>
                <br></br>
                <input className="form-input" onChange={handleForm} type="text" name="brand"  required/>
                <br></br>
                <label className="label" htmlFor="condition">Condition: </label>
                <br></br>
                <input className="form-input" onChange={handleForm} type="text" name="condition" required/>
                <br></br>
                <label className="label" htmlFor="price">Price: </label>
                <br></br>
                <input className="form-input" onChange={handleForm} type="number" name="price" step='0.01' required/>
                <br></br>
                <label className="label" htmlFor="brand">Image of Guitar: </label>
                <br></br>
                <input className="form-input" onChange={handleForm} type="text" name="image" required/>
                <br></br>
                <label className="label" htmlFor="electric">Type of Guitar: </label>
                <br></br>
                <select onChange={handleForm} name="electric">
                    <option value={'electric'}>Electric</option>
                    <option value={'acoustic'}>Acoustic</option>
                </select>
                <br></br>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default Form;