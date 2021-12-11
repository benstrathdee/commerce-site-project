import styles from "./FeaturedCarousel.module.scss";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext/DataContext";

const FeaturedCarousel = () => {
	const { products } = useContext(DataContext);
	const [carouselNum, setCarouselNum] = useState(1);

	const featuredProducts = products
		.filter((product) => product.isFeatured === true)
		.slice(carouselNum * 3 - 3, carouselNum * 3);

	const handleClick = () => {
		if (carouselNum === 3) {
			setCarouselNum(1);
		} else {
			setCarouselNum(carouselNum + 1);
		}
	};

	return (
		<div className={styles.FeaturedCarousel}>
			<div className={styles.FeaturedCarousel_Prev} onClick={handleClick}>
				&#10094;
			</div>
			{featuredProducts.map((product, index) => {
				return (
					<CarouselCard key={index} product={product} index={index} />
				);
			})}
			<div className={styles.FeaturedCarousel_Next} onClick={handleClick}>
				&#10095;
			</div>
		</div>
	);
};

export default FeaturedCarousel;
