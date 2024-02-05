import classes from './Categories.module.scss';
import {useDispatch} from "react-redux";
import {setCategoryId} from "../../redux/slices/categoriesSlice.js";

export const Categories = ({categoryState}) => {
	const dispatch = useDispatch()

	return (
		<ul className={classes.categories}>
			{categoryState.categories.map((item, index) => (
				<li key={index}
					onClick={() => dispatch(setCategoryId(index))}
					className={categoryState.categoryId === index ? classes.active : null}>
					{item}
				</li>
			))}
		</ul>
	)
}
