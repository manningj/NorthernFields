import logo from './heraldry.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome Northen Fields: A Winnipeg based LARPing group. 
        </p>
        <a
          className="App-link"
          href="https://discord.gg/ynnNdGejKG"
          target="_blank"
          rel="noopener noreferrer"
        >
          JOIN OUR DISCORD
        </a>
      </header>
    </div>
  );
}

export default App;
