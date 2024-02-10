import classes from './CartItem.module.scss';
import {plusItem, minusItem, removeItem} from "../../redux/slices/cartSlice.js";
import {useDispatch} from "react-redux";

type CartItemProps = {
	id: number;
	title: string;
	price: number;
	imageUrl: string;
	type: string;
	size: number;
	count: number;
}

export const CartItem: React.FC<CartItemProps> = ({id, title, price, imageUrl, type, size, count}) => {
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
					<button className={count === 1 ? classes.disabled : ''} disabled={count === 1} onClick={() => dispatch(minusItem(id))}>
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