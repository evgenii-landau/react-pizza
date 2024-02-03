import classes from './CartItem.module.scss';

export const CartItem = () => {
	return (
		<li className={classes.item}>
			<div className={classes.leftColumn}>
				<img width={80} height={80} src="img/pizza-1.png"
					 alt="pizza"/>
				<div>
					<h3>Сырный цыпленок</h3>
					<span >тонкое тесто, 26 см.</span>
				</div>
			</div>
			<div className={classes.rightColumn}>
				<div>
					<button>
						<img src="img/remove-btn.png" alt="Remove Button"/>
					</button>
					<b>2</b>
					<button>
						<img src="img/add-btn.png" alt="Add button"/>
					</button>
				</div>
				<b>770 ₽ </b>
				<button>
					<img src="img/remove-item-btn.png" alt="Remove Item Button"/>
				</button>
			</div>
		</li>
	)
}