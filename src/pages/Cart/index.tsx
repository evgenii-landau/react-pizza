import classes from './Cart.module.scss';
import {CartItem} from '../../components/CartItem';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../../redux/slices/cartSlice.js';
import {selectCart} from '../../redux/slices/cartSlice.js';
import React from "react";

export const Cart: React.FC = () => {
	const dispatch = useDispatch()
	const {totalPrice, items} = useSelector(selectCart)


	return (
		<div className={classes.cart}>
			{items.length ? (
				<>
					<div className={classes.cartTop}>
						<div className={classes.leftRow}>
							<img src="img/cart-big.svg" alt="Cart"/>
							<h1>Корзина</h1>
						</div>
						<div onClick={() => dispatch(clearCart())} className={classes.rightRow}>
							<img src="img/trash.svg" alt="Trash"/>
							<button>Очистить корзину</button>
						</div>
					</div>

					<ul>
						{items.map(item => (
							<CartItem key={item.id} {...item}></CartItem>
						))}
					</ul>
					<div className={classes.orderInfo}>
						<span>Всего пицц: <b>{items.length} шт.</b></span>
						<span>Сумма заказа: <b>{totalPrice} ₽</b></span>
					</div>
					<div className={classes.paySection}>
						<Link to='/'>
							<button className={classes.btnBack}>Вернуться назад</button>
						</Link>
						<button className={classes.btnPay}>Оплатить сейчас</button>
					</div>
				</>
				) : (
					<>
						<div className={classes.emptyCart}>
							<h2>Корзина пустая </h2>
							<p>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
								главную
								страницу.</p>
							<img src="img/emptyCart.svg" alt="Empty Cart"/>
							<Link to='/'>
								<button>Вернуться назад</button>
							</Link>
						</div>
					</>
				)
			}
		</div>
	)
}