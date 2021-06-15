
import { useSelector, useDispatch } from 'react-redux';
import {  set_counter_async } from './actions/actions-types';
import './App.css';


const App = () => {
    const {count} = useSelector( state => state );
    const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Counter : {count} </p>
      <div>
        <button onClick={() => dispatch(set_counter_async())}>Counter Async</button>
      </div>
    </div>
  );
}

export default App;
