import classes from './Categories.module.scss';
import React from "react";

export const Categories = () => {
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
		<ul className={classes.sorted}>
			{categories.map((el, index) => (
				<li key={index} onClick={() => setIsActive(index)} className={isActive === index ? classes.active : null}>
					{el}
				</li>
			))}
		</ul>
	)
}
