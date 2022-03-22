import React, { useEffect, useState } from "react";
import Cards from "./Cards";
const Main=()=>{
    const [pokemons,setPokemons]=useState([]);
    const [difficult,setDifficult]=useState(1);
    const [selectedPokemons,setSelectedPokemons]=useState([]);
    //REVISAR
    const checkSelection=(selection)=>{
        var selected=false;
        if(selectedPokemons.length!=0){
            console.log("R");
            selected=selectedPokemons.reduce((prev,cur)=>{
                return cur==selection?true:false;
            });
            console.log("aa")
            console.log(selected);
            console.log("aa")
        }
        console.log(selectedPokemons);
        console.log("---")
        console.log(selected);
        if(!selected)setSelectedPokemons([...selectedPokemons,selection]);
        if(selected)console.log("Ya está seleccionado")
        else console.log("Aún no está seleccionado")
        //if()
    }
    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5)
    }
    const fetchPokemon=async(id)=>{
        let pok=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return await pok.json();
    }
    useEffect(async()=>{
        var pokemons=[];
        for (let i = 1; i <= difficult*3; i++) {
            const pokemon=await fetchPokemon(i);
            pokemons.push(pokemon);
        }
        setPokemons(shuffleArray(pokemons));
    },[difficult]);
    return(
        <React.Fragment>
            <button onClick={()=>{setDifficult(difficult+1)}}>asa</button>
            <Cards pokemons={pokemons} check={checkSelection}></Cards>
        </React.Fragment>
    );
}
export default Main;