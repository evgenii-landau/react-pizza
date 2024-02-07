import {Link} from "react-router-dom";
import classes from './Header.module.scss'
import {useSelector} from "react-redux";
import {selectCart} from "../../redux/slices/cartSlice.js";

export const Header = () => {
	const {totalPrice, items} = useSelector(selectCart)

	return (
		<div className={classes.header}>

			<div className={classes.headerLeft}>
				<a href="/">
					<img src="img/logo.png" alt="Logo"/>
				</a>
				<div>
					<h2>
						react pizza
					</h2>
					<p>
						самая вкусная пицца во вселенной
					</p>
				</div>
			</div>
			<div className={classes.headerRight}>
				<span>
					{totalPrice} ₽
				</span>
				<div>
					|
				</div>
				<Link to='/cart'>
					<img width={16} height={16} src="img/cart.svg" alt="cart"/>
				</Link>
				<span>{items.length}</span>
			</div>
		</div>
	)
}