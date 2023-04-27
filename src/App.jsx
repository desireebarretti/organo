import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';

export default function App() {

  const [colaboradores, setColaboradores] = useState([])

  const adicionar = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">  
      <Banner />
      <Formulario colaboradorCadastrado={colaborador => adicionar(colaborador)}/>
    </div>
  );
}

