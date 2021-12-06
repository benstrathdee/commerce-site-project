import styles from "./Navbar.module.scss";
import Search from "./../../components/Search";

const Navbar = () => {
	return (
		<div className={styles.Navbar}>
			<Search />
		</div>
	);
};

export default Navbar;
