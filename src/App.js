import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
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
      <footer className="App-footer">
        This project was coded by Roya Almasimehr and is{" "}
        <a href="https://github.com/RoyaAlmasimehr/dictionary-project">
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a href="https://dictionary-project200.netlify.app/">
          hosted on Netlify{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
