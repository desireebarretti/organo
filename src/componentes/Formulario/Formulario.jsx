import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botão/Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        
        // limpando o formulario
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario-card'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card do colaborador</h2>

                <CampoTexto
                    legenda="Nome"
                    place={'Digite seu nome'} obrigatorio={true}
                    valor={nome}
                    alterado={valor => setNome(valor)} />

                <CampoTexto
                    legenda="Cargo"
                    place={'Digite seu cargo'} obrigatorio={true}
                    valor={cargo}
                    alterado={valor => setCargo(valor)} />

                <CampoTexto
                    legenda="Imagem"
                    place={'Escolha sua foto'}
                    valor={imagem}
                    alterado={valor => setImagem(valor)} />

                <ListaSuspensa
                    label="Escolha seu time" obrigatorio={true}
                    valor={time} 
                    alterado={valor => setTime(valor)}/>

                <Botao txt='Criar Card' />
            </form>
        </section>
    )
}

export default Formulario;