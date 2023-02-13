import { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from './pages/Pokedex'
import Cart from './pages/Cart'


export const ContextProvider = createContext()


function App() {


  const [cart, setCart] = useState({})

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then((res) => Promise.all(res.results.map((e,i) => fetch(e.url).then(res => res.json()).then(res => {
        const result = {}
        result.id = res.id
        result.name = res.name
        result.img = res.sprites.front_default
        result.quantity = 1
        return result
           
        
      }))).then(res => setPokemons(res)))
      

  }, [])


  return (


    // {/* <CounterProvider.Provider value={{counter,setCounter, background, setBackground}}>
    //   <PrevBtn />
    //   <Counter />
    //   <NextBtn />
    //   <Color/>
    //  </CounterProvider.Provider> */}
    < BrowserRouter >
      <ContextProvider.Provider value={{ setCart, cart, pokemons, setPokemons }}>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ContextProvider.Provider>
    </BrowserRouter >


  );
}

export default App;
