import styles from "./CarouselCard.module.scss";
import { Link } from "react-router-dom";

const CarouselCard = ({ product }) => {
	return (
		<div className={styles.CarouselCard}>
			<div className={styles.ImageWrapper}>
				<img
					src={product.product_images[0]}
					alt=""
					className={styles.ImageWrapper_Image}
				/>
			</div>
			<Link
				to={`product/${product.id}`}
				className={styles.CarouselCard_Link}
			>
				<div className={styles.InfoWrapper}>
					<h5 className={styles.InfoWrapper_Content}>
						{product.name}
					</h5>
					<h6 className={styles.InfoWrapper_Content}>
						${product.price_per_unit}
					</h6>
				</div>
			</Link>
		</div>
	);
};

export default CarouselCard;
