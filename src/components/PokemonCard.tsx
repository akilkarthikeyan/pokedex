import { Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import type { PokemonDetail } from '../types';
import { useNavigate } from 'react-router-dom';

export default function PokemonCard({ pokemon, size }: {pokemon: PokemonDetail, size: number}) {
    const navigate = useNavigate();

    return (
        <Grid2 size = {size}>
            <Card 
                onClick={() => {navigate(`/pokedex/detail/${pokemon.id}`)}} 
                sx={{ 
                    backgroundColor: 'lightyellow', 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-around",
                    cursor: 'pointer'
                }}
            >
                <CardMedia>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </CardMedia>
                <CardContent sx={{ alignSelf: "flex-end" }}>
                    <Typography variant="h5" component="div">
                        {pokemon.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Height: {pokemon.height}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Weight: {pokemon.weight}
                    </Typography>
                </CardContent>
            </Card>
        </Grid2>
    );
}