import { ContextProvider } from "../../App"
import { useContext } from "react"


const Pokemon = ({pokemon, quant}) => {

    const {cart,setCart, pokemons} = useContext(ContextProvider)
    
    
    const handleClick = (e) => {
        
        if(cart[pokemon.id]){
            pokemon.quantity += 1
        }else{
            cart[pokemon.id] = pokemon
        }
        setCart(cart)
        
    }
    return (
        <div>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <img src={pokemon.img} alt="" />
            <button onClick={handleClick}>Add</button>
            {
                quant ? <p>Cantidad : {pokemon.quantity}</p> : null
            }
        </div>
    )
}

export default Pokemon