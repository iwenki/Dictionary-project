import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to my Dictionary book
        </a>
        <button type="button" class="btn btn-primary">
          dictionary
        </button>
      </header>
      <footer> Coded by K. Vanessa Iwen </footer>
    </div>
    </div>
  );
}

export default App;
