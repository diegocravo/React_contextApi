import './App.css';
import ComponenteFilho from './components/ComponenteFilho';
import { useToggle } from './context/ToggleProvider';

function App() {

  const {estadoPai, handleClickEstadoPai} = useToggle();

  return (
    <div className="App">
      <div>
        <h1>Componente Pai</h1>
        <button onClick={handleClickEstadoPai}>Clique aqui</button>
        {estadoPai && <p>aberto</p>}
        <ComponenteFilho />
      </div>
    </div>
  );
}

export default App;
