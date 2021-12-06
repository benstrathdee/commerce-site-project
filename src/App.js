import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, seedProducts } from "./services/products";
import Navbar from "./containers/Navbar";
import Home from "./containers/Home";
import ProductPage from "./containers/ProductPage";

function App() {
	const [products, setProducts] = useState([]);

	const getData = async () => {
		const data = await getProducts();
		setProducts(data);
	};

	useEffect(() => {
		getData();
		console.log(products);
	}, []);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:productID" element={<ProductPage />} />
			</Routes>
		</Router>
	);
}

export default App;
