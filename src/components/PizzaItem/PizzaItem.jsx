import React from "react";
import classes from './PizzaItem.module.scss';

export const PizzaItem = ({obj}) => {
	const [activeType, setActiveType] = React.useState(0)
	const [activeSize, setActiveSize] = React.useState(0)
	const typeNames = ['тонкое', 'традиционное']



	return (
		<li className={classes.itemList}>
			<div className={classes.item}>
				<img className={classes.pizzaImg} width={260} height={260} src={obj.imageUrl} alt="Pizza"/>
				<h3>
					{obj.title}
				</h3>
				<div className={classes.select}>
					<div className={classes.selectRowOne}>
						{obj.types.map(typeId => (
							<span key={typeId} onClick={() => setActiveType(typeId)} className={activeType === typeId ? classes.active : null}>{typeNames[typeId]}</span>
						))}
					</div>
					<div className={classes.selectRowTwo}>
						{obj.sizes.map((size, i) => (
							<span key={i} onClick={() => setActiveSize(i)} className={activeSize === i ? classes.active : null}>{size} см.</span>
						))}
					</div>
				</div>
				<div className={classes.choose}>
					<span className={classes.price}>{obj.price} ₽</span>
					<div>
						<img src='img/add-black.svg' alt="Add Button"/>
						<button>Добавить</button>
						<span>0</span>
					</div>
				</div>
			</div>
		</li>
	)
}