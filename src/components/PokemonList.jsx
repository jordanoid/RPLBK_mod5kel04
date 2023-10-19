import { useContext, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import './PokemonList.css'; // Import a CSS file for styling

function PokemonList() {
    const { pokemonList } = useContext(PokemonContext);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const totalPages = Math.ceil(pokemonList.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="centered-content">
            <h1 className="judul">Tugas Modul 5 Kelompok 4 Praktikum RPBLK</h1>
            <h1 className="judul">Pokemon Page {currentPage}</h1>
            <div className="card-container">
                {pokemonList.slice(startIndex, endIndex).map((pokemon, index) => (
                    <div className="card" key={index}>
                        {pokemon.name}
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next Page
                </button>
            </div>
        </div>
    );
}

export default PokemonList;
