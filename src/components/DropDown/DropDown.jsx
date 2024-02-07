import classes from './DropDown.module.scss'
import {useDispatch} from "react-redux";
import {choseSelectItem, openDropDown} from "../../redux/slices/filterSlice.js";
import React from "react";


const selectItems = [
	{type: 'price', name: 'цене (возр.)', value: 'asc'},
	{type: 'price', name: 'цене (убыв.)', value: 'desc'},
	{type: 'title', name: 'алфавиту'},
	{type: 'rating', name: 'популярности (возр.)', value: 'asc'},
	{type: 'rating', name: 'популярности (убыв.)', value: 'desc'}
]

export const DropDown = ({isOpen, name}) => {
	const dropDownRef = React.useRef()
	const dispatch = useDispatch()


	React.useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.composedPath().includes(dropDownRef.current)) {
				dispatch(openDropDown(false))
			}
		}

		document.body.addEventListener('click', handleClickOutside)

		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<div ref={dropDownRef} onClick={(e) => e}>
			<div className={classes.dropDown}>
				<svg className={isOpen && classes.rotate} width="10" height="6" viewBox="0 0 10 6"
					 fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="#2C2C2C"/>
				</svg>
				<b>Cортировка по:</b>
				<span onClick={() => dispatch(openDropDown(true))}>{name}</span>
			</div>
			{isOpen &&
				<div>
					<ul className={classes.select}>
						{selectItems.map((obj, i) => (
							<li key={i} onClick={() => dispatch(choseSelectItem(obj))}>{obj.name}</li>
						))}
					</ul>
				</div>
			}
		</div>
	)
}
