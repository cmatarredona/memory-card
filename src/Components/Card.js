import React from "react";
import "./cardStyle.css";
const Card=({pokemon, check})=>{
    return(
        <React.Fragment>
            {/* Añadir al onclick función para comprobar si ha sido pulsado */}
            <div className="pokemonCard" onClick={()=>{check(pokemon)}}>
                <img src={pokemon.sprites.front_shiny}></img>
                <p>{pokemon.name}</p>
            </div>
        </React.Fragment>
    );
}
export default Card;