import logo from './logo.svg';
import './App.css';

// importer le store et les actions

import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  const { numbers } = useSelector( state => state ); // lire le store
  const dispatch = useDispatch(); // lancer une action dans le reducer Redux

  return (
    <div className="App">
     <button>Afficher les nombres</button>
     {/** affichez simple les nombres du store */}
    </div>
  );
}

export default App;
