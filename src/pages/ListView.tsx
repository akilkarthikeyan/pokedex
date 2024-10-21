import PokemonCardContainer from "../components/PokemonCardContainer";
import { PokemonDetail } from "../types";
import { AppBar, Toolbar, TextField, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useEffect, useState } from "react";

export default function ListView({ pokemons }: { pokemons: PokemonDetail[] }) {
    const [sortBy, setSortBy] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currPokemons, setCurrPokemons] = useState(pokemons);
    const [prefix, setPrefix] = useState("");

    useEffect(() => {  
        const sortedPokemons = [...pokemons].filter(a => a.name.startsWith(prefix.toLocaleLowerCase())).sort((a, b) => {
            if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            } else if (sortBy === "height") {
                return a.height - b.height;
            } else {
                return a.weight - b.weight;
            }
        });
        if (sortOrder === "desc") {
            sortedPokemons.reverse();
        }
        setCurrPokemons(sortedPokemons);
    }, [pokemons,sortBy, sortOrder, prefix]);

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
                    <TextField
                        variant="standard"
                        placeholder="Search"
                        onChange={(event) => setPrefix(event.target.value)}
                        sx={{
                            backgroundColor: "white",
                            width: "40%",
                            borderRadius: "40px",
                            paddingLeft: "10px",
                            '& .MuiInput-underline:before': {
                                borderBottom: 'none !important',
                            },
                            '& .MuiInput-underline:hover:before': {
                                borderBottom: 'none !important',
                            },
                            '& .MuiInput-underline:hover': {
                                borderBottom: 'none !important',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottom: 'none !important',
                            },
                            '& .MuiInputBase-input': {
                                borderBottom: 'none !important'
                            },
                        }}
                    />
                    
                    <Typography sx={{ paddingLeft: "30px", fontWeight: "bold", color: "white" }}>
                        Sort By:
                    </Typography>
                    <RadioGroup
                        row
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}
                        name="sort-by-group"
                        aria-labelledby="sort-by-label"
                        sx={{
                            paddingLeft: "20px"
                        }}
                    >
                        <FormControlLabel
                            value="name"
                            control={<Radio size="small" sx={{ color: "white", '&.Mui-checked': { color: "white" } }} />}
                            label={<Typography sx={{ color: "white" }}>Name</Typography>}
                        />
                        <FormControlLabel
                            value="height"
                            control={<Radio size="small" sx={{ color: "white", '&.Mui-checked': { color: "white" } }} />}
                            label={<Typography sx={{ color: "white" }}>Height</Typography>}
                        />
                        <FormControlLabel
                            value="weight"
                            control={<Radio size="small" sx={{ color: "white", '&.Mui-checked': { color: "white" } }} />}
                            label={<Typography sx={{ color: "white" }}>Weight</Typography>}
                        />
                    </RadioGroup>

                    <Typography sx={{ paddingLeft: "30px", fontWeight: "bold", color: "white" }}>
                        Sort Order:
                    </Typography>
                    <RadioGroup
                        row
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                        name="sort-order-group"
                        aria-labelledby="sort-order-label"
                        sx={{
                            paddingLeft: "20px"
                        }}
                    >
                        <FormControlLabel
                            value="asc"
                            control={<Radio size="small" sx={{ color: "white", '&.Mui-checked': { color: "white" } }} />}
                            label={<Typography sx={{ color: "white" }}>Asc</Typography>}
                        />
                        <FormControlLabel
                            value="desc"
                            control={<Radio size="small" sx={{ color: "white", '&.Mui-checked': { color: "white" } }} />}
                            label={<Typography sx={{ color: "white" }}>Desc</Typography>}
                        />
                    </RadioGroup>
                </Toolbar>
            </AppBar>
            <PokemonCardContainer pokemons={currPokemons} />
        </div>
    );
}