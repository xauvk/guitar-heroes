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
    const [ sortLowToHigh, setSortLowToHigh] = useState(false);
    const [ sortHighToLow, setSortHighToLow ] = useState(false);
    
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

    const toggleSort = (event) => {
        if (event.target.value === "lowtohigh"){
            setSortLowToHigh(sortLowToHigh => !sortLowToHigh)
            setSortHighToLow(false)
        } else {
            setSortLowToHigh(false)
            setSortHighToLow(sortHighToLow => !sortHighToLow)
        }
    }

    const sortedGuitars = () => {
        if (sortLowToHigh === true) {
            return filteredGuitars.sort( (objA, objB) =>  objA.price - objB.price
        )} else if (sortHighToLow === true) {
            return filteredGuitars.sort( (objA, objB) =>  objB.price - objA.price
        )} else return filteredGuitars
    }

    

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
        <div>
            <Header />
            <Switch />
                <Route exact path="/">
                    <div>
                        <NavBar />
                        <Search handleSearch={handleSearch} toggleSort={toggleSort} />
                        <GuitarList guitarData={sortedGuitars()} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
                    </div>
                </Route>
                <Route path="/form">
                    <NavBar />
                    <Form addGuitar={addGuitar}/>
                </Route>
                <Route path="/cart">
                    <div>
                        <NavBar />
                        <Cart cart={cartItems}/>
                    </div>
                </Route>
            <Switch />
        </div>
    )
}

export default Home