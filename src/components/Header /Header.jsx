import classes from './Header.module.scss'

export const Header = () => {
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
					520 ₽
				</span>
				<div>
					|
				</div>
				<img width={16} height={16} src="img/cart.svg" alt="cart"/>
				<span>3</span>
			</div>
		</div>
	)
}