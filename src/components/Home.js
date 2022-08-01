import Header from './Header';
import Search from './Search';
import GuitarList from './GuitarList';
import Form from './Form';
import Cart from './Cart';
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom";
import {useState, useEffect} from 'react'

function Home() {
    const [guitarData, setGuitarData] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/guitars')
         .then((response) => response.json())
         .then((data) => {setGuitarData(data)})
        }, [])
    
    
    const [searchString, setSearchString] = useState('')
    const handleSearch = (string) => {
        setSearchString(string)
    }
    const filteredGuitars = guitarData.filter(guitar => guitar.brand.toLowerCase().includes(searchString.toLowerCase()))


    const handleCart = guitar => {
        setCartItem([...cartItem, guitar]);
    }

    return (
        <>
            <Header />
            <NavBar />
            <Switch />
                <Route exact path="/">
                    <Search handleSearch={handleSearch} />
                    <GuitarList guitarData={filteredGuitars} handleCart={handleCart}/>
                </Route>
                <Route path="/form">
                    <Form />
                </Route>
                <Route path="/cart">
                    <Cart cart={cartItem}/>
                </Route>
            <Switch />
        </>
    )
}

export default Home