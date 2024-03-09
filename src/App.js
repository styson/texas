import './App.css';
import { Navigation } from './components/navigation';

function App() {
  return (
    <div class="App">
      <div class="bg-white dark:bg-slate-800">
        <Navigation />
        <header class="App-header">
          <p class="text-white dark:text-slate-400">
            Welcome to Texas ASL!
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;