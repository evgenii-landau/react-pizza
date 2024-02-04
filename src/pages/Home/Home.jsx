import React from "react";
import classes from './Home.module.scss';
import {PizzaItem} from '../../components/PizzaItem/PizzaItem.jsx';
import {Categories} from '../../components/Categories/Categories.jsx';
import {DropDown} from '../../components/DropDown/DropDown.jsx';
import {Skeleton} from "../../components/PizzaItem/Skeleton.jsx";
import {PizzaItemsService} from "../../services /PizzaItemsService.js";
import {Search} from "../../components/Search/Search.jsx";


export const Home = () => {
	const [pizzaItems, setPizzaItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(false)
	const [categoryId, setCategoryId] = React.useState(0)
	const [sortType, setSortType] = React.useState({name: 'популярности', type: 'rating'})
	const [searchValue, setSearchValue] = React.useState('')

	React.useEffect(() => {
		setIsLoading(true)
		async function fetchDataPizzaItems() {
			try {
				const data = await PizzaItemsService.getAllPizza([categoryId, sortType.type, sortType.value])
				setPizzaItems(data)
			} catch (error) {
				alert('Error')
				console.log(`Error: ${error}`)
			}
			setIsLoading(false)
		}
		fetchDataPizzaItems()
	}, [categoryId, sortType]);

	return (
		<div>
			<div className={classes.contentTop}>
				<Categories categoryId={categoryId} onCategoryClick={(id) => setCategoryId(id)}/>
				<DropDown setSortType={setSortType} sortType={sortType}/>
			</div>
			<div className={classes.contentMiddle}>
				<h1>
					Все пиццы
				</h1>
				<Search setSearchValue={(value) => setSearchValue(value)}/>
			</div>
			<div>
				<ul className={classes.contentItems}>
					{isLoading ?
						[...new Array(12)].map((_, i) => <Skeleton key={i}/>)
						:
						pizzaItems.filter(obj => obj.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())).map(obj => <PizzaItem key={obj.id} obj={obj}/>)
					}
				</ul>
			</div>
		</div>
	)
}