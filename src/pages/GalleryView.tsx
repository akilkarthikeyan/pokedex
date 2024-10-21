import { PokemonDetail } from "../types";
import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import PokemonCardContainer from "../components/PokemonCardContainer";
import { useEffect, useState } from "react";

const uniqueTypes = [
    "grass", "poison", "fire", "flying", "water", "bug", 
    "normal", "electric", "ground", "fairy", "fighting", 
    "psychic", "rock", "steel", "ice", "ghost"
  ];
  
const typeColors: Record<string, string> = {
    grass: "#78C850", 
    poison: "#A040A0",
    fire: "#F08030",
    flying: "#A890F0",
    water: "#6890F0",
    bug: "#A8B820",
    normal: "#A8A878",
    electric: "#F8D030",
    ground: "#E0C068",
    fairy: "#EE99AC",
    fighting: "#C03028",
    psychic: "#F85888",
    rock: "#B8A038",
    steel: "#B8B8D0",
    ice: "#98D8D8",
    ghost: "#705898"
};

export default function GalleryView({ pokemons }: { pokemons: PokemonDetail[] }) {
    const [filter, setFilter] = useState("all");
    const [currPokemons, setCurrPokemons] = useState(pokemons);

    useEffect(() => {
        if (filter === "all") {
            setCurrPokemons(pokemons);
        } else {
            setCurrPokemons(pokemons.filter(pokemon => pokemon.types.some(x => x.type.name === filter)));
        }
    }, [pokemons, filter]);

    return (
        <div>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "black",
                    boxShadow: "none",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Toolbar>
                <Stack direction="row" spacing={2}>
                    <Button id="all" onClick={() => setFilter("all")} sx={{ backgroundColor: "grey", color: "white" }}>All</Button>
                    {uniqueTypes.map((type) => (
                        <Button 
                            key={type} 
                            id={type} 
                            sx={{ backgroundColor: typeColors[type], color: "white" }}
                            onClick={() => setFilter(type)}    
                        >
                            {type}
                        </Button>
                    ))}
                </Stack>
                </Toolbar>
            </AppBar>
            <PokemonCardContainer pokemons={currPokemons} />
        </div>
    );
}