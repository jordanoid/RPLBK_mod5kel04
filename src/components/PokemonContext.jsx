import React, { useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = React.createContext();

export function PokemonProvider({ children }) {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
				setPokemonList(response.data.results);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<PokemonContext.Provider value={{ pokemonList }}>
			{children}
		</PokemonContext.Provider>
	);
}