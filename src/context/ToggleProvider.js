import React, {createContext, useContext, useState} from 'react';

const ToggleContext = createContext(); // const para criar o contexto (encapsular todo o contexto)

function ToggleProvider({children}) {

    const [ estadoPai, setEstadoPai ] = useState(false)
    const [estadoFilho, setEstadoFilho ] = useState(false)

    const handleClickEstadoPai = () => {
        setEstadoPai(pState => !pState)
    }

    const handleClickEstadoFilho = () => {
        setEstadoFilho(pState => !pState)
    }

  return (
    <ToggleContext.Provider 
        value={{
            estadoPai,
            estadoFilho,
            handleClickEstadoPai,
            handleClickEstadoFilho
        }}
    >
        {children}
    </ToggleContext.Provider>
  );
}

function useToggle() {
    const context = useContext(ToggleContext);
    return context;
}

export {ToggleProvider, useToggle};