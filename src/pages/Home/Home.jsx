import classes from './Home.module.scss';
import {PizzaItem} from '../../components/PizzaItem/PizzaItem.jsx';
import {Categories} from '../../components/Categories/Categories.jsx';
import {DropDown} from '../../components/DropDown/DropDown.jsx';

export const Home = ({pizzaItems}) => {
	return (
		<div className={classes.home}>
			<div className={classes.home__categories}>
				<Categories/>
				<DropDown/>
			</div>
			<h1>
				Все пиццы
			</h1>
			<div>
				<ul className={classes.home__list}>
					{pizzaItems.map(obj => (
						<PizzaItem key={obj.id} {...obj}/>
					))}
				</ul>
			</div>
		</div>
	)
}