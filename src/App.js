import logo from './images/logo.svg';
import './styles/custom.scss';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Texas ASL!</span>
      </header>
    </div>
  );
}

export default App;
