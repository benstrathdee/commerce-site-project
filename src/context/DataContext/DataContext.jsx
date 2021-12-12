import { useEffect, useState, createContext, useContext } from "react";
import { getData } from "../../services/data";
import { SearchContext } from "../../context/SearchContext/SearchContext";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const { search } = useContext(SearchContext);
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const getProducts = async () => {
		const data = await getData("products");
		setProducts(data);
	};

	const filterData = async (searchTerm = "") => {
		await getProducts();
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

	const getCartItems = async () => {
		const data = await getData("cart");
		setCartItems(data);
	};

	useEffect(() => {
		getProducts();
		getCartItems();
		filterData(search);
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		filterData(search);
	}, [search]);

	const data = {
		getProducts,
		setProducts,
		products,
		filteredProducts,
		getCartItems,
		setCartItems,
		cartItems,
	};

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
