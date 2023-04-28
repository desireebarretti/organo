import './Colaborador.css'

const Colaborador = (props) => {
    // const card = [
    //     {
    //         imagem: 
    //         nomeColaborador: 
    //         cargo: 
    //     }
    // ]
    return (
        <div>
            <div className='div-img' style={{
                backgroundColor: props.corPrimaria
            }}>
                <img src='../imagens/eu.jpeg' alt='Imagem do colaborador'></img>
            </div>
            <div>
                <h4>{props.nomeColaborador}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador