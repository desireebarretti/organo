import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <div>
            <label>{props.label}</label>

            <select
                required={props.required}
                value={props.valor}
                onChange={evento => props.alterado(evento.target.value)}>
                    <option value=" "></option>
                {times.map(times =>
                    <option key={times}>{times}</option>
                )}
            </select>
        </div>
    )
}

export default ListaSuspensa;