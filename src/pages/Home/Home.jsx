import classes from './Home.module.scss';
import {PizzaItem} from "../../components/PizzaItem/PizzaItem.jsx";

export const Home = ({pizzaItems}) => {
	return (
		<div className={classes.home}>
			<h1>
				Все пиццы
			</h1>
			<div>
				<ul>
					{pizzaItems.map(obj => (
						<PizzaItem key={obj.id} {...obj}/>
					))}
				</ul>
			</div>
		</div>
	)
}