import React from "react";
import Card from "./Card";
import "./cardsStyles.css"
const Cards=({pokemons, check})=>{
    return(
        <React.Fragment>
            <div className="flexCards">
            {pokemons.map((pokemon)=>{
                return <Card pokemon={pokemon} check={check}></Card>
            })}
            </div>
        </React.Fragment>
    );
}
export default Cards;