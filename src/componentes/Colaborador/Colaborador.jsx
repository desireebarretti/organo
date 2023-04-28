import './Colaborador.css'

const Colaborador = (props) => {

    const card = [
        {
            nomeColaborador: 'Renata Vasconcelos',
            cargoColaborador: 'Programadora'
        },
        {
            nomeColaborador: 'Willian Bonner',
            cargoColaborador: 'CEO'
        },
        {
            nomeColaborador: 'Leonardo Barretti',
            cargoColaborador: 'Programador'
        },
        {
            nomeColaborador: 'Fátima Bernardes',
            cargoColaborador: 'Designer'
        },
        {
            nomeColaborador: 'Luciano Hulk',
            cargoColaborador: 'Gestor'
        }
    ]
    
    return (
        <div className='colaboradores'>
            <div className='cabecalho' style={{
                // backgroundColor: props.corPrimaria
            }}>
                <img src='../imagens/eu.jpeg' alt='Imagem do colaborador'className='div-img'></img>
            </div>
            <div className='rodape'>
                <h4>Desirée Rossi{props.nomeColaborador}</h4>
                <h5>Desenvolvedora{props.cargoColaborador}</h5>
            </div>
        </div>
    )
}

export default Colaborador