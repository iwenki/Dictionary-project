import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <p>
        Dictionary Book
        </p>
        <button type="button" class="btn btn-primary">
          dictionary
        </button>
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="App-footer"> Coded by K. Vanessa Iwen </footer>
    </div>
    </div>
  );
}

export default App;
