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
            <select>
                {times.map(times =>
                    <option key={times}>{times}</option>
                )}
            </select>
        </div>
    )
}

export default ListaSuspensa;