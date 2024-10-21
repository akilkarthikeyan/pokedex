export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetail {
    name: string;
    id: number;
    height: number;
    order: number;
    weight: number;
    abilities: { ability: { name: string } }[];
    sprites: { front_default: string, back_default: string , front_shiny: string, back_shiny: string };
    types: { type: { name: string } }[];
    moves: { move: { name: string } }[];
}