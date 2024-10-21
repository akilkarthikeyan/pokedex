import { PokemonDetail } from "../types";
import PokemonCard from "./PokemonCard";
import { Grid2 } from '@mui/material';

export default function PokemonCardContainer({pokemons}: {pokemons: PokemonDetail[]}) {
    return (
        <Grid2 container spacing={2} sx= {{
            padding: "20px"
        }}>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} size={3}/>
            ))}
        </Grid2>
    );
}