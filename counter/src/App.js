import './App.css';
import Counter from './counter.jsx'
import todo from './components/todo';

function App() {
  return (
    <div className="App">
        <Counter initialValue={1000} />
    </div>
  );
}

export default App;


