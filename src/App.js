import './App.css';
import UseEffect from './hooks/UseEffect';
import UseImperativeHandle from './hooks/UseImperativeHandle/UseImperativeHandle';
import UseLayoutEffect from './hooks/UseLayoutEffect';
import UseReducer from './hooks/UseReducer';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <UseImperativeHandle />
    </div>
  );
}

export default App;
