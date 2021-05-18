import logo from './logo.svg';
import './App.css';

// importer le store et les actions

import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  // Hooks de Redux
  const { numbers } = useSelector( state => state ); // lire le store
  const dispatch = useDispatch(); // lancer une action dans le reducer Redux

  return (
    <div className="App">
     { numbers.length > 0 && (
        <ul>
          { numbers.map((number, i) => <li key={i}>{number}</li>) }
        </ul>
     )}
     <button onClick={() => dispatch({type : "SHUFFLE"}) } >Afficher les nombres</button>
     {/** affichez simplement les nombres du store ul li */}
    </div>
  );
}

export default App;
