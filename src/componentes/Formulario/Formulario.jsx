import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';

const Formulario = () => {
    return (
        <section>
            <form className='formulario-card'>
                <h2>Preencha os dados para criar um card do colaborador</h2>
                <CampoTexto legenda="Nome" place={'Digite seu nome'} />
                <CampoTexto legenda="Cargo" place={'Digite seu cargo'} />
                <CampoTexto legenda="Imagem" place={'Escolha sua foto'} />
            </form>
        </section>
    )
}

export default Formulario;