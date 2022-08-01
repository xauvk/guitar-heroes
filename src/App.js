import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import NavBar from './components/NavBar';
import GuitarList from './components/GuitarList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <NavBar />
      <GuitarList />
      <Form />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
