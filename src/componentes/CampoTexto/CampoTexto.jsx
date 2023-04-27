import './CampoTexto.css';
import Formulario from '../Formulario/Formulario';
import { useState } from 'react';

const CampoTexto = (props) => {
    const digitar = (evento) => {
        props.alterado(evento.target.value)
    }

    return (
        <div className='campo-texto'> 

            <label>{props.legenda}</label>
           
            <input 
            placeholder={props.place} 
            required={props.obrigatorio} 
            value={props.valor} 
            onChange={digitar}/>

        </div>
    )
}

export default CampoTexto;