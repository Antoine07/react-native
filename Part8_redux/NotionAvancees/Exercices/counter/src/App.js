
import { useSelector, useDispatch } from 'react-redux';
import { set_counter } from './actions/actions-types';
import './App.css';


const App = () => {
    const {count} = useSelector( state => state );
    const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Counter : {count} </p>
    </div>
  );
}

export default App;
