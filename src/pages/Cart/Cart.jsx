import classes from './Cart.module.scss';

export const Cart = () => {
	return (
		<div className={classes.cart}>
			<div className={classes.cart__cartTop}>
				<div className={classes.cart__leftRow}>
					<svg className={classes.cart__cartImg} width="29.383301" height="29.383316"
						 viewBox="0 0 29.3833 29.3833" fill="none"
						 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<desc>
							Created with Pixso.
						</desc>
						<defs/>
						<rect id="iconfinder_shopping-cart_2561279 1" width="29.000000" height="29.000000"
							  transform="translate(0.191772 0.191650)" fill="#FFFFFF" fill-opacity="0"/>
						<path id="Vector"
							  d="M9.8584 27.9833C8.5238 27.9833 7.44177 26.9013 7.44177 25.5667C7.44177 24.232 8.5238 23.15 9.8584 23.15C11.1931 23.15 12.2751 24.232 12.2751 25.5667C12.2751 26.9013 11.1931 27.9833 9.8584 27.9833Z"
							  stroke="#3F3F3F" stroke-opacity="1.000000" stroke-width="2.800000"
							  stroke-linejoin="round"/>
						<path id="Vector"
							  d="M24.3584 27.9833C23.0238 27.9833 21.9418 26.9013 21.9418 25.5667C21.9418 24.232 23.0238 23.15 24.3584 23.15C25.6931 23.15 26.7751 24.232 26.7751 25.5667C26.7751 26.9013 25.6931 27.9833 24.3584 27.9833Z"
							  stroke="#3F3F3F" stroke-opacity="1.000000" stroke-width="2.800000"
							  stroke-linejoin="round"/>
						<path id="Vector"
							  d="M7.04297 7.44167L27.9834 7.44167L25.9534 17.5796C25.8429 18.1359 25.5402 18.6356 25.0984 18.9913C24.6566 19.3469 24.1038 19.5359 23.5367 19.525L10.7646 19.525C10.1746 19.53 9.60303 19.319 9.15784 18.9317C8.71277 18.5443 8.42468 18.0076 8.3479 17.4225L6.51123 3.50249C6.43506 2.92157 6.15051 2.38811 5.71045 2.00134C5.27026 1.61458 4.70471 1.40088 4.11877 1.39999L1.40002 1.39999"
							  stroke="#3F3F3F" stroke-opacity="1.000000" stroke-width="2.800000" stroke-linejoin="round"
							  stroke-linecap="round"/>
					</svg>
					<h1>Корзина</h1>
				</div>
				<div className={classes.cart__rightRow}>
					<svg className={classes.cart__trashImg} width="20.000000" height="20.000000" viewBox="0 0 20 20"
						 fill="none"
						 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<desc>
							Created with Pixso.
						</desc>
						<defs>
							<clipPath id="clip8_426">
								<rect width="20.000000" height="20.000000" fill="white" fill-opacity="0"/>
							</clipPath>
						</defs>
						<rect width="20.000000" height="20.000000" fill="#FFFFFF" fill-opacity="0"/>
						<g clip-path="url(#clip8_426)">
							<path d="M2.5 5L4.16663 5L17.5 5" stroke="#B6B6B6" stroke-opacity="1.000000"
								  stroke-width="1.200000" stroke-linejoin="round" stroke-linecap="round"/>
							<path
								d="M15.8334 16.6667C15.8334 17.1087 15.6578 17.5326 15.3452 17.8452C15.0327 18.1577 14.6088 18.3333 14.1667 18.3333L5.83337 18.3333C5.39136 18.3333 4.96741 18.1577 4.65491 17.8452C4.34229 17.5326 4.16675 17.1087 4.16675 16.6667L4.16675 4.99998L15.8334 4.99998L15.8334 16.6667ZM6.66675 4.99998L6.66675 3.33333C6.66675 2.8913 6.84229 2.46738 7.15491 2.15482C7.46741 1.84225 7.89136 1.66666 8.33337 1.66666L11.6667 1.66666C12.1088 1.66666 12.5327 1.84225 12.8452 2.15482C13.1578 2.46738 13.3334 2.8913 13.3334 3.33333L13.3334 4.99998"
								stroke="#B6B6B6" stroke-opacity="1.000000" stroke-width="1.200000"
								stroke-linejoin="round" stroke-linecap="round"/>
							<path d="M8.33325 9.16666L8.33325 14.1667" stroke="#B6B6B6" stroke-opacity="1.000000"
								  stroke-width="1.200000" stroke-linejoin="round" stroke-linecap="round"/>
							<path d="M11.6667 9.16666L11.6667 14.1667" stroke="#B6B6B6" stroke-opacity="1.000000"
								  stroke-width="1.200000" stroke-linejoin="round" stroke-linecap="round"/>
						</g>
					</svg>
					<button className={classes.cart__clearCartBtn}>Очистить корзину</button>
				</div>
			</div>

			<ul className={classes.cart__list}>
				<li className={classes.cart__item}>
					<div className={classes.cart__itemLeftRow}>
						<img className={classes.cart__itemImg} width={80} height={80} src="img/pizza-1.png"
							 alt="pizza"/>
						<div className={classes.cart__info}>
							<h3 className={classes.cart__itemTitle}>Сырный цыпленок</h3>
							<span className={classes.cart__itemDescription}>тонкое тесто, 26 см.</span>
						</div>
					</div>
					<div className={classes.cart__itemRightRow}>
						<div className={classes.cart__buttons}>
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
				<li className={classes.cart__item}>
					<div className={classes.cart__itemLeftRow}>
						<img className={classes.cart__itemImg} width={80} height={80} src="img/pizza-1.png"
							 alt="pizza"/>
						<div className={classes.cart__info}>
							<h3 className={classes.cart__itemTitle}>Сырный цыпленок</h3>
							<span >тонкое тесто, 26 см.</span>
						</div>
					</div>
					<div className={classes.cart__itemRightRow}>
						<div className={classes.cart__buttons}>
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
				<li className={classes.cart__item}>
					<div className={classes.cart__itemLeftRow}>
						<img className={classes.cart__itemImg} width={80} height={80} src="img/pizza-1.png"
							 alt="pizza"/>
						<div className={classes.cart__info}>
							<h3 className={classes.cart__itemTitle}>Сырный цыпленок</h3>
							<span>тонкое тесто, 26 см.</span>
						</div>
					</div>
					<div className={classes.cart__itemRightRow}>
						<div className={classes.cart__buttons}>
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
			</ul>
			<div className={classes.cart__total}>
				<span className={classes.cart__count}>Всего пицц: <b>3 шт.</b></span>
				<span className={classes.cart__price}>Сумма заказа: <b>900 ₽</b></span>
			</div>
		</div>
	)
}