import Header from './Header';
import Search from './Search';
import GuitarList from './GuitarList';
import Form from './Form';
import Cart from './Cart';
import { Route, Switch } from "react-router-dom";


function Home() {
    return (
        <>
            <Header />
            <Search />
            <GuitarList />
            <Switch />
                <Route path="/form">
                    <Form />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            <Switch />
        </>
    )
}

export default Home