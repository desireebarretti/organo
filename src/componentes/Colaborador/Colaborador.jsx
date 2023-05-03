import './Colaborador.css'

const Colaborador = (props) => {

    return (
        <section className='section-colaboradores'>
            <div className='colaboradores'>
                <div className='cabecalho' style={{
                    // backgroundColor: props.corPrimaria
                }}>
                    <img src={props.imagem} alt={props.nome}className='div-img'></img>
                </div>

                <div className='rodape'>
                    <h4>{props.nome}</h4>
                    <h5>{props.cargo}</h5>
                </div>
            </div>
        </section>
    )
}

export default Colaborador