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

// <li onClick={() => setIsActive(0)} className={isActive === 0 ? classes.active : null}>
// 	Все
// </li>
// <li onClick={() => setIsActive(1)} className={isActive === 1 ? classes.active : null}>
// 	Мясные
// </li>
// <li onClick={() => setIsActive(2)} className={isActive === 2 ? classes.active : null}>
// 	Вегетарианская
// </li>
// <li onClick={() => setIsActive(3)} className={isActive === 3 ? classes.active : null}>
// 	Гриль
// </li>
// <li onClick={() => setIsActive(4)} className={isActive === 4 ? classes.active : null}>
// 	Острые
// </li>
// <li onClick={() => setIsActive(5)} className={isActive === 5 ? classes.active : null}>
// 	Закрытые
// </li>