import styles from "./ProductList.module.scss";
import ProductCard from "./../../components/ProductCard";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext/DataContext";
import { SearchContext } from "../../context/SearchContext/SearchContext";

const ProductList = () => {
	const { filteredProducts, products, getProducts } = useContext(DataContext);
	const { search } = useContext(SearchContext);
	let toShow = search === "" ? products : filteredProducts;
	useEffect(() => {
		getProducts();
		toShow = search === "" ? products : filteredProducts;
	}, []);
	return (
		<div className={styles.ProductList}>
			{toShow.length > 0 ? (
				toShow.map((product, index) => {
					return <ProductCard product={product} key={index} />;
				})
			) : (
				<p>No results to display.</p>
			)}
		</div>
	);
};

export default ProductList;
