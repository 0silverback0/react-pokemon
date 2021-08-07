import Pokecard from './Pokecard'
import './Pokedex.css'

const Pokedex = (props) => {
    return (
        <div className="Pokedex row justify-content-center">
            {props.pokemon.map(p => {
                return (
                <Pokecard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    img={p.img}
                    type={p.type}
                    base_experience={p.base_experience}
                />
                )
            })}
        </div>
    )
}

export default Pokedex