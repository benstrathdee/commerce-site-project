import styles from "./Navbar.module.scss";
import Search from "./../../components/Search";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<div className={styles.Navbar}>
			<Link to="/" className={styles.Navbar_Link}>
				<div className={styles.Navbar_Logo}>
					<div className={styles.Navbar_Logo__Inner}>CHAIRS</div>
				</div>
			</Link>
			<Search />
			<FontAwesomeIcon
				icon={faShoppingCart}
				className={styles.Navbar_Cart}
			/>
		</div>
	);
};

export default Navbar;
