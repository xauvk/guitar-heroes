import Header from './components/Header';
import Search from './components/Search';
import GuitarList from './components/GuitarList';
import Form from './components/Form';
import { Route, Switch } from "react-router-dom";
import Cart from './components/Cart';


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