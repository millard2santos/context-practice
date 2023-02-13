import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../App";
import Pokemon from "../components/Pokemon/Pokemon";
const Cart = () => {

    const { cart, setCart, pokemons } = useContext(ContextProvider)

    console.log(cart)
   
    return (
        <>
            <Link to="/">Pokedex</Link>
            <div>
                {
                    Object.values(cart).map((pokemon,i)=> <Pokemon key={i} pokemon={pokemon} quant={true}/>)
                }
            </div>
        </>
    )
}

export default Cart