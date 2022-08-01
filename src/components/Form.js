import React, { useState } from "react";

function Form () {
    const [form, setForm] = useState({})

    const handleForm = (e) => {
        setForm(form => {
            if (e.target.name === 'electric') {
                if (e.target.value === 'electric') {
                    return { ...form, [e.target.name] : true }
                    } else return { ...form, [e.target.name] : false }
            }
            return { ...form, [e.target.name] : e.target.value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
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