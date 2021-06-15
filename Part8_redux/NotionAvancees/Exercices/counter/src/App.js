import { useSelector, useDispatch } from "react-redux";
import { set_counter, set_counter_async } from "./actions/actions-types";
import "./App.css";

const App = () => {
  const { countA, count, message } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Counter async : {countA} </p>
      <p>Counter : {count} </p>
      <div>
        <button onClick={() => dispatch(set_counter())}>Counter</button>
      </div>
      <div>
        <button onClick={() => dispatch(set_counter_async())}>
          Counter Async
        </button>
      </div>
      {message.length > 0 && (
        <ul>
          {message.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
