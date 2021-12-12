import styles from "./ProductPage.module.scss";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { updateData, createData, deleteData } from "../../services/data";

const ProductPage = () => {
	let params = useParams();
	const { products, getProducts, getCartItems, cartItems } =
		useContext(DataContext);
	const [product, setProduct] = useState(
		products.find((product) => product.id === params.id)
	);
	const [units, setUnits] = useState(1);
	const [mainImage, setMainImage] = useState(product.ref_image);
	const productImages = product.product_images.concat(product.ref_image);
	const iconClass = product.isFav
		? styles.InfoWrapper_Heart__Fav
		: styles.InfoWrapper_Heart;

	const currentCartItem = cartItems.find(
		(item) => item.name === product.name
	);
	const defaultValue =
		currentCartItem === undefined ? 1 : currentCartItem.units;

	const handleHover = (event) => {
		setMainImage(event.target.src);
	};

	const handleChange = (event) => {
		if (event.target.value > product.quantity) {
			event.target.value = product.quantity;
		} else if (event.target.value === NaN || event.target.value < 1) {
			event.target.value = 1;
		}
		setUnits(event.target.value);
	};

	const addToCart = () => {
		const {
			id,
			product_images,
			isFav,
			isFeatured,
			quantity,
			...strippedProduct
		} = product;
		const record = new Object(strippedProduct);
		record.units = units;
		currentCartItem === undefined
			? createData(record, "cart")
			: updateCart();
		getCartItems();
	};

	const updateCart = async () => {
		const { id, ...record } = currentCartItem;
		record.units = units;
		await updateData(id, record, "cart");
	};

	const removeFromCart = async () => {
		if (window.confirm("Remove from cart?")) {
			await deleteData(currentCartItem.id, "cart");
			getCartItems();
		}
	};

	const handleClick = async () => {
		product.isFav = !product.isFav;
		const { id, ...record } = product;
		await updateData(id, record, "products");
		getProducts();
	};

	useEffect(() => {
		window.scrollTo(0, 0);
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
						defaultValue={defaultValue}
						className={styles.ShoppingWrapper_Amount}
						onChange={handleChange}
					/>
					{product.quantity > 0 ? (
						<div className={styles.CartWrapper}>
							<button
								className={styles.ShoppingWrapper_Cart}
								onClick={addToCart}
							>
								{currentCartItem === undefined
									? "Add to cart"
									: "Update cart"}
							</button>
							{currentCartItem === undefined ? null : (
								<FontAwesomeIcon
									icon={faTrash}
									onClick={removeFromCart}
								/>
							)}
						</div>
					) : (
						<button
							className={styles.ShoppingWrapper_Cart__OOS}
							disabled
						>
							Out of stock
						</button>
					)}
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
