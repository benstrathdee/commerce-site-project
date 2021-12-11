import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { updateProduct } from "../../services/products";
import { DataContext } from "../../context/DataContext/DataContext";

const ProductCard = ({ product }) => {
	const { getData } = useContext(DataContext);
	const iconClass = product.isFav
		? styles.ProductCard_Heart__Fav
		: styles.ProductCard_Heart;

	const handleClick = async () => {
		product.isFav = !product.isFav;
		const { id, ...record } = product;
		await updateProduct(id, record, "products");
		console.log(product.isFav);
	};

	useEffect(() => {
		getData();
	}, [product]);

	return (
		<div className={styles.ProductCard}>
			<Link to={`product/${product.id}`}>
				<img
					src={product.ref_image}
					alt=""
					className={styles.ProductCard_Image}
				/>
			</Link>
			<h5 className={styles.ProductCard_Name}>
				{product.name}
				<FontAwesomeIcon
					icon={faHeart}
					className={iconClass}
					onClick={handleClick}
				/>
			</h5>
			<p className={styles.ProductCard_Subtitle}>{product.subtitle}</p>
			<h4 className={styles.ProductCard_Price}>
				${product.price_per_unit}
			</h4>
		</div>
	);
};

export default ProductCard;
