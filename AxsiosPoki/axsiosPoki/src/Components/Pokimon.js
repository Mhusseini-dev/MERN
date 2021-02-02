import React, {useState } from 'react';
import axios from 'axios';



const Pokimon = () => {
    const [pokimon, setPokimon] = useState([]);

    const clickHandler = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPokimon(response.data.results))
            }
    return (
        <>
        <button onClick={clickHandler}>fetch Pokimon</button>
        <ul>
            {pokimon.length > 0 && pokimon.map((pokimon, i)=>{
                return (<li key={i}>{pokimon.name}</li>)
            })}
        </ul>
        </>
    )
}
export default Pokimon;
