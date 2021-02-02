import React, {useState , useEffect} from 'react'
const Pokimon = () => {
    const [pokimon ,setPokimon] = useState([]);
    const onClickHandler = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokimon(response.results))
    }
    return (
        <div>
            <button onClick={onClickHandler}>GET POKEMON</button>
            {pokimon.length > 0 && pokimon.map((pokimon, index)=>{
                return (<div key={index}>{pokimon.name}</div>)
            })}
        </div>
    )
}

export default Pokimon
