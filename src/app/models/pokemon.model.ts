export interface ListaPokemon {
  count: number;
  results: PokemonBasico[];
}

export interface PokemonBasico {
  name: string;
  url: string;
}

export interface PokemonDetalle {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: { slot: number; type: { name: string } }[];
  weight: number;
  height: number;
}
