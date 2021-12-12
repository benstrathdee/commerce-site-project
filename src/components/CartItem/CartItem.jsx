import styles from "./CartItem.module.scss";
import { deleteData, updateData } from "../../services/data";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext/DataContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item }) => {
	const { products, getCartItems } = useContext(DataContext);
	const currentItem = products.find((product) => product.name === item.name);

	const handleChange = async (event) => {
		if (event.target.value > currentItem.quantity) {
			event.target.value = currentItem.quantity;
		} else if (event.target.value === NaN || event.target.value < 1) {
			event.target.value = 1;
		}
		item.units = event.target.value;
		const { id, ...record } = item;
		await updateData(id, record, "cart");
		getCartItems();
	};

	const handleClick = async () => {
		if (window.confirm("Remove from cart?")) {
			await deleteData(item.id, "cart");
			getCartItems();
		}
	};

	return (
		<div className={styles.CartItem}>
			<Link to={`/product/${currentItem.id}`}>
				<img
					src={item.ref_image}
					alt=""
					className={styles.CartItem_Image}
				/>
			</Link>
			<div className={styles.InfoWrapper}>
				<h5 className={styles.InfoWrapper_Name}>{item.name}</h5>
				<p className={styles.InfoWrapper_Subtitle}>{item.subtitle}</p>
				<h4 className={styles.InfoWrapper_Price}>
					${item.price_per_unit}
				</h4>
			</div>
			<div className={styles.UnitsWrapper}>
				<input
					type="number"
					defaultValue={item.units}
					min="1"
					max={currentItem.quantity}
					onChange={handleChange}
					className={styles.UnitsWrapper_Units}
				/>
				<FontAwesomeIcon
					icon={faTrash}
					className={styles.UnitsWrapper_Delete}
					onClick={handleClick}
				/>
			</div>
			<div className={styles.CartItem_Total}>
				${item.price_per_unit * item.units}
			</div>
		</div>
	);
};

export default CartItem;
