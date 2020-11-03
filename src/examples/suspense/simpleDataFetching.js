import * as React from 'react';
import { PokemonDataView, fetchPokemon } from './tools/pokemon';

let pokemon;
let pokemonPromise = fetchPokemon('pikachu', 0).then((resolvedValue) => (pokemon = resolvedValue));

function PokemonInfo() {
    if (!pokemon) {
        throw pokemonPromise;
    }
    return (
        <div>
            <div className="pokemon-info__img-wrapper">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <PokemonDataView pokemon={pokemon} />
        </div>
    );
}

export function SimpleDataFetching() {
    return (
        <>
            <div className="pokemon-info-app">
                <div className="pokemon-info">
                    {/* 🐨 Wraps the PokemonInfo component with a React.Suspense component with a fallback */}
                    <React.Suspense fallback={<div>loading...</div>}>
                        <PokemonInfo />
                    </React.Suspense>
                </div>
            </div>
            <button onClick={() => alert('Still interactive!')}>Click me hard</button>
        </>
    );
}
