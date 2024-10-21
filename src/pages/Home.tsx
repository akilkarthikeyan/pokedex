import { PokemonDetail, Pokemon } from "../types";
import ListView from "./ListView";
import { AppBar, Toolbar, Stack, Typography, Button} from "@mui/material";
import CatchingPokemon from "@mui/icons-material/CatchingPokemon";
import { useState, useEffect } from "react";
import axios from "axios";
import GalleryView from "./GalleryView";

export default function Home() {
    const [showListView, setShowListView] = useState(true);
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => {
                const temp: Pokemon[] = response.data.results;
                const requests = temp.map(pokemon => axios.get(pokemon.url));
                Promise.all(requests)
                    .then(responses => {
                        const newPokemonDetails = responses.map(res => res.data);
                        setPokemonDetails(newPokemonDetails.sort((a, b) => a.name.localeCompare(b.name)));
                    });
            });
    }, []);

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: "red", boxShadow: "none", height: "60px", display: "flex",  justifyContent: "center"}}>
                <Toolbar>
                    <CatchingPokemon />
                    <Typography variant="h6" component="div" sx={{ paddingLeft: 1, flexGrow: 1}}>
                        Pokédex
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit" onClick={() => {setShowListView(true)}}>List</Button>
                        <Button color="inherit"  onClick={() => {setShowListView(false)}}>Gallery</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
            {showListView && <ListView pokemons={pokemonDetails} />}
            {!showListView && <GalleryView pokemons={pokemonDetails} />}
        </div>
    );
}