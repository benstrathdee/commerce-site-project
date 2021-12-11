import styles from "./ProductPage.module.scss";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { updateProduct } from "../../services/products";

const ProductPage = () => {
	let params = useParams();
	const { products, getData } = useContext(DataContext);
	const [product, setProduct] = useState(
		products.find((product) => product.id === params.id)
	);
	const productImages = product.product_images.concat(product.ref_image);
	const [mainImage, setMainImage] = useState(product.ref_image);

	const handleHover = (event) => {
		setMainImage(event.target.src);
	};

	let iconClass = product.isFav
		? styles.InfoWrapper_Heart__Fav
		: styles.InfoWrapper_Heart;

	const handleClick = async () => {
		product.isFav = !product.isFav;
		const { id, ...record } = product;
		await updateProduct(id, record, "products");
		await getData();
		setProduct(products.find((product) => product.id === params.id));
		console.log(product.isFav);
	};

	useEffect(() => {
		getData();
		setProduct(products.find((product) => product.id === params.id));
	}, [product]);

	useEffect(() => {
		window.scrollTo(0, 0);
		getData();
		setProduct(products.find((product) => product.id === params.id));
	}, []);

	return (
		<div className={styles.ProductPage}>
			<img
				src={mainImage}
				alt=""
				className={styles.ProductPage_MainImage}
			/>
			<div className={styles.InfoWrapper}>
				<div className={styles.InfoWrapper__Mini}>
					<h1 className={styles.InfoWrapper__Mini}>{product.name}</h1>
					<p className={styles.InfoWrapper__Mini}>
						{product.subtitle}
					</p>
				</div>
				<div className={styles.InfoWrapper__Mini}>
					<h4 className={styles.ProductPage_Price}>
						${product.price_per_unit}
					</h4>
					<FontAwesomeIcon
						icon={faHeart}
						className={iconClass}
						onClick={handleClick}
					/>
				</div>
				<div className={styles.ShoppingWrapper}>
					<select
						name="variants"
						className={styles.ShoppingWrapper_Variants}
					>
						{product.variants.map((variant, index) => {
							return (
								<option value={variant} key={index}>
									{variant}
								</option>
							);
						})}
					</select>
					<input
						type="number"
						min="1"
						max={product.quantity}
						defaultValue="1"
						className={styles.ShoppingWrapper_Amount}
					/>
					<button className={styles.ShoppingWrapper_Cart}>
						Add to cart
					</button>
				</div>
			</div>
			<div className={styles.ImageWrapper}>
				{productImages.map((image, index) => {
					return (
						<img
							src={image}
							alt=""
							className={styles.ImageWrapper_Image}
							key={index}
							value={image}
							onMouseOver={handleHover}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProductPage;
