import styles from "./Navbar.module.scss";
import Search from "./../../components/Search";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../context/DataContext/DataContext";
import { useContext } from "react";

const Navbar = () => {
	const { cartItems } = useContext(DataContext);
	return (
		<div className={styles.Navbar}>
			<Link to="/" className={styles.Navbar_Link}>
				<div className={styles.Navbar_Logo}>
					<div className={styles.Navbar_Logo__Inner}>CHAIRS</div>
				</div>
			</Link>
			<Search />
			<Link to="cart" className={styles.CartWrapper}>
				<FontAwesomeIcon
					icon={faShoppingCart}
					className={styles.CartWrapper_Cart}
				/>
				<div className={styles.CartWrapper_Units}>
					{cartItems.reduce((totalUnits, item) => {
						return (totalUnits += parseInt(item.units));
					}, 0)}
				</div>
				<div className={styles.CartWrapper_Total}>
					{cartItems.length > 0
						? "$" +
						  cartItems.reduce((price, item) => {
								return (price +=
									item.units * item.price_per_unit);
						  }, 0)
						: null}
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
