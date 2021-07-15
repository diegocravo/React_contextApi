import React from 'react';
import { useToggle } from '../context/ToggleProvider';

function ComponenteFilho() {

    const {estadoFilho, handleClickEstadoFilho} = useToggle()

  return (
      <div>
        <div>
            <h1>Componente Filho</h1>
            <button onClick={handleClickEstadoFilho}>Clique aqui</button>
            {estadoFilho && <p>aberto</p>}
        </div>
      </div>
  );
}

export default ComponenteFilho;