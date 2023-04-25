import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';

export default function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto legenda="Nome" place={'Digite seu nome'}/>
      <CampoTexto legenda="Cargo" place={'Digite seu cargo'}/>
      <CampoTexto legenda="Imagem" place={'Escolha sua foto'}/>
    </div>
  );
}

