import classes from './Pagination.module.scss';
import {useDispatch} from "react-redux";
import {setPages} from "../../redux/slices/filterSlice.js";
import React from "react";

const pages = [1, 2, 3]

type TypePaginationProps = {
	currentPage: number
}

export const Pagination: React.FC <TypePaginationProps> = React.memo(({currentPage}) => {
	const dispatch = useDispatch()

	const onCheckPage = (item: number) => {
		pages.includes(item) && dispatch(setPages(item))
	}

	return (
		<div className={classes.pagination}>
			<img onClick={() => onCheckPage(currentPage - 1)} className={classes.arrowPrev} src='img/pagination.svg' alt="arrow"/>
			{pages.map((num, i) => (
				<span key={i} className={currentPage === i + 1 ? classes.active : ''} onClick={() => dispatch(setPages(num))}>{num}</span>
			))}
			<img onClick={() => onCheckPage(currentPage + 1)} src='img/pagination.svg' alt="arrow"/>
		</div>
	)
})
