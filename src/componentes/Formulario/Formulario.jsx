import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botão/Botao';

const Formulario = () => {
  
    return (
        <section className='formulario-card'>
            <form>
                <h2>Preencha os dados para criar um card do colaborador</h2>
                <CampoTexto legenda="Nome" place={'Digite seu nome'} />
                <CampoTexto legenda="Cargo" place={'Digite seu cargo'} />
                <CampoTexto legenda="Imagem" place={'Escolha sua foto'} />
                <ListaSuspensa label="Escolha seu time"/>
                <Botao txt='Criar Card'/>
            </form>
        </section>
    )
}

export default Formulario;