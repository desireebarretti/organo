import './Botao.css'

const Botao = (props) => {
    return (
        <div className='div-button'>
            <button className='button'>{props.txt}</button>
        </div>
    )
}

export default Botao;