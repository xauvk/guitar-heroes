import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <NavBar />
    </div>   
  )
}

export default App;
