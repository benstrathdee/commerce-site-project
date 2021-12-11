import styles from "./ProductList.module.scss";
import ProductCard from "./../../components/ProductCard";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext/DataContext";
import { SearchContext } from "../../context/SearchContext/SearchContext";

const ProductList = () => {
	const { filteredProducts, products, getData } = useContext(DataContext);
	const { search } = useContext(SearchContext);
	let toShow = search === "" ? products : filteredProducts;
	useEffect(() => {
		getData();
		toShow = search === "" ? products : filteredProducts;
	}, []);
	return (
		<div className={styles.ProductList}>
			{toShow.map((product, index) => {
				return <ProductCard product={product} key={index} />;
			})}
		</div>
	);
};

export default ProductList;
