import { useEffect, useState } from "react";
import axios from "axios";
import './PokemonList.css';

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage - 1) * 10}&limit=10`);
                setPokemonList(response.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container">
            <h1 className="judul">Kelompok 4 Praktikum RPLBK</h1>
            <h1 className="judul">Pokemon List Page : {currentPage}</h1>
            <div className="card-container">
                {pokemonList.map((pokemon, index) => (
                    <div className="card" key={index}>
                        {pokemon.name}
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <button onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
    );
}

export default PokemonList;
