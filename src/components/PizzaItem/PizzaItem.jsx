import React, {useState} from "react";
import classes from './PizzaItem.module.scss';

export const PizzaItem = ({title, imageUrl, types, sizes, price}) => {
	const [activeType, setActiveType] = useState(0)
	const [activeSize, setActiveSize] = useState(0)
	const typeNames = ['тонкое', 'традиционное']

	return (
		<li>
			<div className={classes.item}>
				<img width={260} height={260} className={classes.img} src={imageUrl} alt="Pizza"/>
				<h3 className={classes.title}>
					{title}
				</h3>
				<div className={classes.select}>
					<div className={classes.selectRowOne}>
						{types.map(typeId => (
							<span key={typeId} onClick={() => setActiveType(typeId)} className={activeType === typeId ? classes.active : null}>{typeNames[typeId]}</span>
						))}
					</div>
					<div className={classes.selectRowTwo}>
						{sizes.map((size, i) => (
							<span key={i} onClick={() => setActiveSize(i)} className={activeSize === i ? classes.active : null}>{size} см.</span>
						))}
					</div>
				</div>
				<div className={classes.choose}>
					<span className={classes.price}>{price} ₽</span>
					<div>
						<img width={12} height={12} src="/img/add.png" alt="Add"/>
						<button>Добавить</button>
						<span className={classes.count}>0</span>
					</div>
				</div>
			</div>
		</li>
	)
}