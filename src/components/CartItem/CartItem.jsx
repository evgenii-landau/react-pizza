import classes from './CartItem.module.scss';
import {useDispatch} from "react-redux";
import {plusItem, minusItem, removeItem} from "../../redux/slices/cartSlice.js";

export const CartItem = ({id, title, price, imageUrl, type, size, count}) => {
	const dispatch = useDispatch()

	return (
		<li className={classes.item}>
			<div className={classes.leftColumn}>
				<img width={80} height={80} src={imageUrl}
					 alt="pizza"/>
				<div>
					<h3>{title}</h3>
					<span>{type} {size} см.</span>
				</div>
			</div>
			<div className={classes.rightColumn}>
				<div>
					<button onClick={() => dispatch(minusItem(id))}>
						<img src="img/remove-btn.svg" alt="Remove Button"/>
					</button>
					<b>{count}</b>
					<button onClick={() => dispatch(plusItem(id))}>
						<img src="img/add-btn.svg" alt="Add button"/>
					</button>
				</div>
				<b>{price * count} ₽</b>
				<button onClick={() => dispatch(removeItem(id))}>
					<img src="img/remove-item-btn.svg" alt="Remove Item Button"/>
				</button>
			</div>
		</li>
	)
}