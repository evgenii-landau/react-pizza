import classes from './Categories.module.scss';

export const Categories = ({onCategoryClick, categoryId}) => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]

	return (
		<ul className={classes.categories}>
			{categories.map((item, index) => (
				<li key={index}
					onClick={() => onCategoryClick(index)}
					className={categoryId === index ? classes.active : null}>
					{item}
				</li>
			))}
		</ul>
	)
}
