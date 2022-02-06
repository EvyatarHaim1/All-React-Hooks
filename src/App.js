import './App.css';
import UseContext from './hooks/UseContext/UseContext';
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
      <UseContext />
    </div>
  );
}

export default App;
