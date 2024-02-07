import classes from './Categories.module.scss';
import {useDispatch} from "react-redux";
import {setCategoryId} from "../../redux/slices/filterSlice.js";


const categories = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
]

export const Categories = ({categoryId}) => {
	const dispatch = useDispatch()


	return (
		<ul className={classes.categories}>
			{categories.map((item, index) => (
				<li key={index}
					onClick={() => dispatch(setCategoryId(index))}
					className={categoryId === index ? classes.active : null}>
					{item}
				</li>
			))}
		</ul>
	)
}
