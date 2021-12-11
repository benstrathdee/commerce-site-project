import { useEffect, useState, createContext, useContext } from "react";
import { getProducts } from "./../../services/products";
import { SearchContext } from "../../context/SearchContext/SearchContext";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const { search } = useContext(SearchContext);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const getData = async () => {
		const data = await getProducts();
		setProducts(data);
	};

	const filterData = async (searchTerm = "") => {
		await getData();
		const filteredData =
			searchTerm === ""
				? products
				: products.filter((product) =>
						product.name
							.toLowerCase()
							.includes(searchTerm.toLowerCase())
				  );
		setFilteredProducts(filteredData);
	};

	useEffect(() => {
		getData();
		filterData(search);
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		filterData(search);
	}, [search]);

	const data = { products, setProducts, filteredProducts, getData };

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
