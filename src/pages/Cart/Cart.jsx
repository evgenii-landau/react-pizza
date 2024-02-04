import classes from './Cart.module.scss';
import {CartItem} from "../../components/CartItem/CartItem.jsx";
import {Link} from "react-router-dom";

export const Cart = () => {
	return (
		<div className={classes.cart}>
			<div className={classes.cartTop}>
				<div className={classes.leftRow}>
					<img src="img/cart-big.svg" alt="Cart"/>
					<h1>Корзина</h1>
				</div>
				<div className={classes.rightRow}>
					<img src="img/trash.svg" alt="Trash"/>
					<button>Очистить корзину</button>
				</div>
			</div>

			<ul>
				<CartItem/>
			</ul>
			<div className={classes.orderInfo}>
				<span>Всего пицц: <b>3 шт.</b></span>
				<span>Сумма заказа: <b>900 ₽</b></span>
			</div>
			<div className={classes.paySection}>
				<Link to='/'>
					<button className={classes.btnBack}>Вернуться назад</button>
				</Link>
				<button className={classes.btnPay}>Оплатить сейчас</button>
			</div>

			{/*<div className={classes.emptyCart}>*/}
			{/*	<h2>Корзина пустая </h2>*/}
			{/*	<p>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</p>*/}
			{/*	<img src="img/emptyCart.svg" alt="Empty Cart"/>*/}
			{/*	<Link to='/'>*/}
			{/*		<button>Вернуться назад</button>*/}
			{/*	</Link>*/}
			{/*</div>*/}
		</div>
	)
}