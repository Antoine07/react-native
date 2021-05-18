import logo from './logo.svg';
import './App.css';

// importer le store et les actions

import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  // Hooks de Redux
  const { numbers, number1, number2  } = useSelector( state => state ); // lire le store
  const dispatch = useDispatch(); // lancer une action dans le reducer Redux

  const handleChange = e => {
    const { name, value } = e.target;

    dispatch({type:"SET_NUMBER", name, value }) ;
  }
 
  return (
    <div className="App">
     { numbers.length > 0 && (
        <ul>
          { numbers.map((number, i) => <li key={i}>{number}</li>) }
        </ul>
     )}
     <button onClick={() => dispatch({type : "SHUFFLE"}) } >Afficher les nombres</button>
     {/** affichez simplement les nombres du store ul li */}

     <div>
       {/** onChange se fait maintenant dans le reducer algo  */}
       Number 1 :
       <input type="text" name="number1" onChange={handleChange} value={number1} />
     </div>
     <div>
       {/** onChange se fait maintenant dans le reducer algo  */}
       Number 2 :
       <input type="text" name="number2" onChange={ handleChange }  value={number2} />
     </div>
    </div>
  );
}

export default App;
