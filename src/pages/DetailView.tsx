import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid2, Stack } from '@mui/material';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';
import { useNavigate, useParams } from 'react-router-dom';
import { PokemonDetail } from '../types';
import axios from 'axios';
import './DetailView.css';  // Import the CSS file

export default function DetailView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                setPokemonDetail(response.data);
            });
    }, [id]);

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: "red", boxShadow: "none", height: "60px", display: "flex", justifyContent: "center"}}>
                <Toolbar>
                    <CatchingPokemon />
                    <Typography variant="h6" component="div" sx={{ paddingLeft: 1, flexGrow: 1}}>
                        Pokédex
                    </Typography>
                    <Button color="inherit" onClick={() => {navigate("/pokedex")}}>Home</Button>
                </Toolbar>
            </AppBar>
            <Grid2 sx={{ height: 'calc(100vh - 60px)' }}>
                <Grid2 container size={6} sx={{height: "100%"}}>
                    <Grid2 container size={6}>
                        <Grid2 size={6} display="flex" justifyContent="center" alignItems="center">
                            <img src={pokemonDetail?.sprites.front_default} alt="" className="pokemon-image" />
                        </Grid2>
                        <Grid2 size={6} display="flex" justifyContent="center" alignItems="center">
                            <img src={pokemonDetail?.sprites.front_shiny} alt="" className="pokemon-image" />
                        </Grid2>
                        <Grid2 size={6} display="flex" justifyContent="center" alignItems="center">
                            <img src={pokemonDetail?.sprites.back_default} alt="" className="pokemon-image" />
                        </Grid2>
                        <Grid2 size={6} display="flex" justifyContent="center" alignItems="center">
                            <img src={pokemonDetail?.sprites.back_shiny} alt="" className="pokemon-image" />
                        </Grid2>
                    </Grid2>
                    <Grid2 container size={6}>
                        <Grid2 size={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <table className="pokemon-table">
                                <thead>
                                    <tr>
                                        <th className="table-cell attribute-column">Attribute</th>
                                        <th className="table-cell">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-cell">Name:</td>
                                        <td className="table-cell">{pokemonDetail?.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="table-cell">ID:</td>
                                        <td className="table-cell">{pokemonDetail?.id}</td>
                                    </tr>
                                    <tr>
                                        <td className="table-cell">Height:</td>
                                        <td className="table-cell">{pokemonDetail?.height}</td>
                                    </tr>
                                    <tr>
                                        <td className="table-cell">Weight:</td>
                                        <td className="table-cell">{pokemonDetail?.weight}</td>
                                    </tr>
                                    <tr>
                                        <td className="table-cell">Types:</td>
                                        <td className="table-cell">{pokemonDetail?.types.map(type => type.type.name).join(", ")}</td>
                                    </tr>
                                    <tr>
                                        <td className="table-cell">Abilities:</td>
                                        <td className="table-cell">{pokemonDetail?.abilities.map(ability => ability.ability.name).join(", ")}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Stack direction="row" padding={5}>
                                <Button color="inherit" 
                                    onClick={() => {
                                        if (pokemonDetail) {
                                            const prevId = pokemonDetail.id === 1 ? 100 : pokemonDetail.id - 1;
                                            navigate(`/pokedex/detail/${prevId}`);
                                        }
                                    }}
                                    sx={{backgroundColor: "red", width: "100px", marginRight: "20px"}}
                                >
                                    Previous
                                </Button>
                                <Button color="inherit" 
                                    onClick={() => {
                                        if (pokemonDetail) {
                                            const nextId = pokemonDetail.id === 100 ? 1 : pokemonDetail.id + 1;
                                            navigate(`/pokedex/detail/${nextId}`);
                                        }
                                    }}
                                    sx={{backgroundColor: "red", width: "100px", marginLeft: "20px"}}
                                >
                                    Next
                                </Button>
                            </Stack> 
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </div>
    );
}