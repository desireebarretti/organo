import './Time.css'
import Colaborador from '../Colaborador/Colaborador'

const Time = (props) => {

    return (
        // condição para aparecer os cards
        (props.colaboradores.length > 0) && 
        <section className='time'
            style={{
                backgroundColor: props.corSecundaria
            }}>

            <h3 style={{
                borderColor: props.corPrimaria
            }}>{props.nome}</h3>

            <div className='colaboradores-div'>
                {props.colaboradores.map(colaborador => <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}

            </div>
        </section>
    )
}

export default Time