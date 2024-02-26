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
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="12" height="12" fill="#E5E5E5"/>
							<g id="Desktop - 1">
								<rect width="1440" height="1515" transform="translate(-254 -806)" fill="#FFDF8C"/>
								<g id="Rectangle 1" filter="url(#filter0_d_0_1)">
									<rect x="-197" y="-763" width="1328" height="1409" rx="10" fill="white"/>
								</g>
								<g id="Group 18">
									<g id="Group 19">
										<rect id="Rectangle 3" x="-16.5" y="-13.5" width="154" height="39" rx="19.5"
											  fill="white" stroke="#EB5A1E"/>
										<path id="Vector"
											  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
											  fill="#EB5A1E"/>
									</g>
								</g>
							</g>
							<defs>
								<filter id="filter0_d_0_1" x="-217" y="-768" width="1368" height="1449"
										filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix"/>
									<feColorMatrix in="SourceAlpha" type="matrix"
												   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												   result="hardAlpha"/>
									<feOffset dy="15"/>
									<feGaussianBlur stdDeviation="10"/>
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"/>
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1"
											 result="shape"/>
								</filter>
							</defs>
						</svg>
						<button>Добавить</button>
						{count > 0 && <span>{count}</span>}
					</div>
				</div>
			</div>
		</li>
	)
}