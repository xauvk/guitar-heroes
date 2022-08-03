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
    const [sort, setSort] = useState(false);
    
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

    const toggleSort = () => {
        setSort(sort => !sort)
    }

    const sortedGuitars = filteredGuitars.sort( (objA, objB) => 
        sort ? objA.price - objB.price : 0
    )

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
        <div className='whole-app'>
            <Switch />
                <Route className="home" exact path="/">
                    <div className="home">
                        <Header />
                        <NavBar />
                        <Search handleSearch={handleSearch} sort={sort} toggleSort={toggleSort} />
                        <GuitarList guitarData={sortedGuitars} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
                    </div>
                </Route>
                <Route path="/form">
                    <NavBar />
                    <Form addGuitar={addGuitar}/>
                </Route>
                <Route path="/cart">
                    <div className="home">
                        <NavBar />
                        <Cart cart={cartItems}/>
                    </div>
                </Route>
            <Switch />
        </div>
    )
}

export default Home