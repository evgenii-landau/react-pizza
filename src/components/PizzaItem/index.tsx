import React from "react";
import classes from './PizzaItem.module.scss';
import {addItem, selectCartItemById} from "../../redux/slices/cartSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {CartItem} from "../../redux/slices/cartSlice";

type TypePizzaItemProps = {
	id: number,
	title: string,
	price: number,
	imageUrl: string,
	types: number[],
	sizes: number[],
}

const typeNames = ['тонкое', 'традиционное']

export const PizzaItem: React.FC <TypePizzaItemProps> = ({id, title, price, imageUrl, types, sizes}) => {
	const [activeType, setActiveType] = React.useState(0)
	const [activeSize, setActiveSize] = React.useState(0)
	const dispatch = useDispatch()
	const cartItem = useSelector(selectCartItemById(id))
	const count = cartItem ? cartItem.count : 0


	const onClickAdd = () => {
		const item: CartItem = {
			id,
			title,
			price,
			imageUrl,
			type: typeNames[activeType],
			size: sizes[activeSize],
			count: 0
		}
		dispatch(addItem(item))
	}

	return (
		<li className={classes.itemList}>
			<div className={classes.item}>
				<Link to={`/item/${id}`}>
					<img className={classes.pizzaImg} width={260} height={260} src={imageUrl} alt="Pizza"/>
				</Link>
				<h3>
					{title}
				</h3>
				<div className={classes.select}>
					<div className={classes.selectRowOne}>
						{types.map(typeId => (
							<span key={typeId} onClick={() => setActiveType(typeId)}
								  className={activeType === typeId ? classes.active : ''}>{typeNames[typeId]}</span>
						))}
					</div>
					<div className={classes.selectRowTwo}>
						{sizes.map((size, i) => (
							<span key={i} onClick={() => setActiveSize(i)}
								  className={activeSize === i ? classes.active : ''}>{size} см.</span>
						))}
					</div>
				</div>
				<div className={classes.choose}>
					<span className={classes.price}>{price} ₽</span>
					<div onClick={() => {
						onClickAdd()
					}}>
						<button>Добавить</button>
						{count > 0 && <span>{count}</span>}
					</div>
				</div>
			</div>
		</li>
	)
}