import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import Home from "./containers/Home";
import ProductPage from "./containers/ProductPage";
import { SearchProvider } from "./context/SearchContext/SearchContext";
import { DataProvider } from "./context/DataContext/DataContext";

function App() {
	return (
		<div className={styles.App}>
			<SearchProvider>
				<Router>
					<Navbar />
					<DataProvider>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								path="product/:id"
								element={<ProductPage />}
							/>
						</Routes>
					</DataProvider>
				</Router>
			</SearchProvider>
		</div>
	);
}

export default App;
