import React from 'react';
import classes from './Home.module.scss';
import {PizzaItem} from '../../components/PizzaItem';
import {Categories} from '../../components/Categories';
import {DropDown} from '../../components/DropDown';
import {Skeleton} from '../../components/PizzaItem/Skeleton';
import {Search} from '../../components/Search';
import {Pagination} from "../../components/Pagination";
import {useDispatch, useSelector} from 'react-redux';
import {fetchPizzas, selectPizzaData} from "../../redux/slices/pizzaSlice.js";
import {selectFilter} from "../../redux/slices/filterSlice.js";

export const Home: React.FC = () => {
	const {searchValue, categoryId, currentPage, sortType: {type, value, name}} = useSelector(selectFilter)
	const {items, status} = useSelector(selectPizzaData)
	const dispatch = useDispatch()


	React.useEffect(() => {
		async function getPizzas() {
			dispatch(fetchPizzas({categoryId, type, value, currentPage}))
		}

		getPizzas()
	}, [categoryId, type, value, currentPage]);

	return (
		<div>
			<div className={classes.contentTop}>
				<Categories categoryId={categoryId}/>
				<DropDown name={name}/>
			</div>
			<div className={classes.contentMiddle}>
				<h1>
					Все пиццы
				</h1>
				<Search searchValue={searchValue}/>
			</div>
			<div>
				<ul className={classes.contentItems}>
					{status === 'loading' ?
						[...new Array(4)].map((_, i) => <Skeleton key={i}/>)
						:
						items.filter(obj => obj.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())).map(obj =>
							<PizzaItem key={obj.id} {...obj}/>)
					}
				</ul>
			</div>
			<Pagination currentPage={currentPage}/>
		</div>
	)
}