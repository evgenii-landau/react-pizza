import React from "react";
import classes from './Home.module.scss';
import {PizzaItem} from '../../components/PizzaItem/PizzaItem.jsx';
import {Categories} from '../../components/Categories/Categories.jsx';
import {DropDown} from '../../components/DropDown/DropDown.jsx';
import {Skeleton} from "../../components/PizzaItem/Skeleton.jsx";
import {PizzaItemsService} from "../../services /PizzaItemsService.js";

export const Home = () => {
	const [pizzaItems, setPizzaItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	const [categoryId, setCategoryId] = React.useState(0)

	React.useEffect(() => {
		async function fetchDataPizzaItems() {
			try {
				const data = await PizzaItemsService.getAllPizza(categoryId)
				setPizzaItems(data)
			} catch (error) {
				alert('Error')
				console.log(`Error: ${error}`)
			}
			setIsLoading(false)
		}
		fetchDataPizzaItems()
	}, [categoryId]);

	return (
		<div>
			<div className={classes.contentTop}>
				<Categories setCategoryId={setCategoryId}/>
				<DropDown/>
			</div>
			<h1>
				Все пиццы
			</h1>
			<div>
				<ul className={classes.contentItems}>
					{isLoading ?
						[...new Array(12)].map((_, i) => <Skeleton key={i}/>)
						:
						pizzaItems.map(obj => <PizzaItem key={obj.id} obj={obj}/>)
					}
				</ul>
			</div>
		</div>
	)
}