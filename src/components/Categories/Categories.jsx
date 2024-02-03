import classes from './Categories.module.scss';
import React from "react";

export const Categories = ({setCategoryId}) => {
	const [isActive, setIsActive] = React.useState(false)

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
			{categories.map((el, index) => (
				<li key={index} onClick={() => {
					setIsActive(index)
					setCategoryId(index)
				}} className={isActive === index ? classes.active : null}>
					{el}
				</li>
			))}
		</ul>
	)
}
