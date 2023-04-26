import './CampoTexto.css';
import Formulario from '../Formulario/Formulario';

const CampoTexto = (props) => {
    return (
        <div className='campo-texto'> 
            <label>{props.legenda}</label>
            <input placeholder={props.place} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto;