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
    const [cartItems, setCartItems] = useState([]);
    
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


    const removeFromCart = (id) => {
        const cartList = cartItems.filter(
            item => item.id !== id
        )
        setCartItems(cartList)
    }

    const addToCart = guitar => {
        setCartItems([...cartItems, guitar]);
    }

    const addGuitar = newGuitar => {
        setGuitarData(guitar => [...guitar, newGuitar])
    }

    return (
        <div className='home'>
            <Header />
            <NavBar />
            <Switch />
                <Route exact path="/">
                    <Search handleSearch={handleSearch} />
                    <GuitarList guitarData={filteredGuitars} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
                </Route>
                <Route path="/form">
                    <Form addGuitar={addGuitar}/>
                </Route>
                <Route path="/cart">
                    <Cart cart={cartItems}/>
                </Route>
            <Switch />
        </div>
    )
}

export default Home