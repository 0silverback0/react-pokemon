import './Pokecard.css'

const PokeCard = (props) => {
    return (
        <div className="Pokecard col-2">
            <p className="Pokecard-name">{props.name}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt=""/>
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_experience}</p>
        </div>
    )
}

export default PokeCard