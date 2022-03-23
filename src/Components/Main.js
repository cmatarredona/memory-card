import React, { useEffect, useState } from "react";
import Cards from "./Cards";
const Main=()=>{
    const [pokemons,setPokemons]=useState([]);
    const [difficult,setDifficult]=useState(1);
    const [selectedPokemons,setSelectedPokemons]=useState([]);
    const [record,setRecord]=useState(0);
    const checkSelection=(selection)=>{
        const selected=selectedPokemons.filter(pokemon=>pokemon==selection);
        if(selected.length==0)setSelectedPokemons([...selectedPokemons,selection]);
        else loseMatch();
        if(pokemons.length==selectedPokemons.length)winLevel();
    }
    const winLevel=()=>{
        setSelectedPokemons([]);
        setDifficult(difficult+1);
    }
    const loseMatch=()=>{
        setSelectedPokemons([]);
        if(record<difficult)setRecord(difficult-1);
        setDifficult(1);
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
    useEffect(()=>{
        setPokemons(shuffleArray(pokemons));
    },[selectedPokemons])
    return(
        <React.Fragment>
            <h1>Memory card</h1>
            <h3>Récord {record}</h3>
            <h3>Dificultad {difficult}</h3>
            <Cards pokemons={pokemons} check={checkSelection}></Cards>
        </React.Fragment>
    );
}
export default Main;