import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { updateData } from "../../services/data";
import { DataContext } from "../../context/DataContext/DataContext";

const ProductCard = ({ product }) => {
	const { getProducts } = useContext(DataContext);
	const [mainImage, setMainImage] = useState(product.ref_image);
	const iconClass = product.isFav
		? styles.ProductCard_Heart__Fav
		: styles.ProductCard_Heart;

	const handleClick = async () => {
		product.isFav = !product.isFav;
		const { id, ...record } = product;
		await updateData(id, record, "products");
		getProducts();
	};

	const handleHoverOn = () => {
		setMainImage(product.product_images[0]);
	};
	const handleHoverOff = () => {
		setMainImage(product.ref_image);
	};

	return (
		<div className={styles.ProductCard}>
			<Link to={`product/${product.id}`}>
				<img
					src={mainImage}
					alt=""
					className={styles.ProductCard_Image}
					onMouseEnter={handleHoverOn}
					onMouseLeave={handleHoverOff}
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
