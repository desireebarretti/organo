import './CampoTexto.css';
import Formulario from '../Formulario/Formulario';

const CampoTexto = (props) => {
    let valor = ''
    const digitar = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }
    
    return (
        <div className='campo-texto'> 
            <label>{props.legenda}</label>
            <input placeholder={props.place} required={props.obrigatorio} onChange={digitar}/>
        </div>
    )
}

export default CampoTexto;