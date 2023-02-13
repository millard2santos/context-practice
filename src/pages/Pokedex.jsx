import { useContext } from "react"
import { ContextProvider } from "../App"
import { Link } from "react-router-dom";
import Pokemon from '../components/Pokemon/Pokemon'

const Pokedex = () => {

    const {pokemons} = useContext(ContextProvider)
    
      
    
    return (
        <>
        <Link to="/cart">Cart</Link>
        <div>
            {
                pokemons.map((pokemon,i) => <Pokemon key={i} pokemon={pokemon}/>)
            }
        
        </div>
        </>
    )
}

export default Pokedex