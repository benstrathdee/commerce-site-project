import styles from "./Home.module.scss";
import ProductList from "./../../containers/ProductList";
import FeaturedCarousel from "./../../containers/FeaturedCarousel";
import { DataContext } from "../../context/DataContext/DataContext";
import { useEffect, useContext } from "react";

const Home = () => {
	const { getData } = useContext(DataContext);
	useEffect(() => {
		window.scrollTo(0, 0);
		getData();
	}, []);
	return (
		<div className={styles.Home}>
			<FeaturedCarousel />
			<ProductList />
		</div>
	);
};

export default Home;
