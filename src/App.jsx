
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokemonProvider } from "./components/PokemonContext";
import PokemonList from "./components/PokemonList";

function App() {
	return (
		<>
			<div className="container">
				<PokemonProvider>
					<div className="content">
						<Router>
							<Routes>
								<Route path="/" element={<PokemonList />} />
							</Routes>
						</Router>
					</div>
				</PokemonProvider>
			</div>
		</>
	);
}

export default App;