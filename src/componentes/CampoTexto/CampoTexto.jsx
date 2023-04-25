import './CampoTexto.css';

const CampoTexto = (props) => {
    return (
        <div className='campo-texto'> 
            <label>{props.legenda}</label>
            <input placeholder={props.place}/>
        </div>
    )
}

export default CampoTexto;