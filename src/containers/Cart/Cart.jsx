import styles from "./Cart.module.scss";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext/DataContext";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
	const { cartItems } = useContext(DataContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [cartItems]);

	return (
		<div className={styles.Cart}>
			{cartItems.length > 0 ? (
				<>
					{cartItems.map((item, index) => {
						return <CartItem item={item} key={index} />;
					})}
					<div className={styles.TotalWrapper}>
						<div className={styles.TotalWrapper_Total}>
							Total: $
							{cartItems.reduce((price, item) => {
								return (price +=
									item.units * item.price_per_unit);
							}, 0)}
						</div>
						<button className={styles.TotalWrapper_Checkout}>
							Proceed to checkout
						</button>
					</div>
				</>
			) : (
				<p>Your cart is empty.</p>
			)}
		</div>
	);
};

export default Cart;
