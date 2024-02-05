import React from 'react';
import classes from './Home.module.scss';
import {PizzaItem} from '../../components/PizzaItem/PizzaItem.jsx';
import {Categories} from '../../components/Categories/Categories.jsx';
import {DropDown} from '../../components/DropDown/DropDown.jsx';
import {Skeleton} from '../../components/PizzaItem/Skeleton.jsx';
import {PizzaItemsService} from '../../services /PizzaItemsService.js';
import {Search} from '../../components/Search/Search.jsx';
import {Pagination} from '../../components/Pagination/Pagination.jsx';

import {useSelector} from 'react-redux';

export const Home = () => {
	const [pizzaItems, setPizzaItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')
	const [page, setPage] = React.useState(1)

	const categoryState = useSelector((state) => state.categoriesReducer)
	const dropDownState = useSelector((state) => state.dropDownReducer)

	React.useEffect(() => {
		setIsLoading(true)
		async function fetchDataPizzaItems() {
			try {
				const data = await PizzaItemsService.getAllPizza(categoryState.categoryId, dropDownState.sortType.type, dropDownState.sortType.value, page)
				setPizzaItems(data)
			} catch (error) {
				alert('Error')
				console.log(`Error: ${error}`)
			}
			setIsLoading(false)
		}
		fetchDataPizzaItems()
	}, [categoryState, dropDownState.sortType, page]);

	return (
		<div>
			<div className={classes.contentTop}>
				<Categories categoryState={categoryState}/>
				<DropDown dropDownState={dropDownState}/>
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
						pizzaItems.filter(obj => obj.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())).map(obj =>
							<PizzaItem key={obj.id} obj={obj}/>)
					}
				</ul>
			</div>
			<Pagination page={page} setPage={setPage}/>
		</div>
	)
}