import styles from "./Home.module.scss";
import ProductList from "./../../containers/ProductList";
import FeaturedCarousel from "./../../containers/FeaturedCarousel";
import { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={styles.Home}>
			<FeaturedCarousel />
			<ProductList />
		</div>
	);
};

export default Home;
