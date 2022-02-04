import './App.css';
import UseEffect from './hooks/UseEffect';
import UseReducer from './hooks/UseReducer';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer />
      <UseEffect />
    </div>
  );
}

export default App;
