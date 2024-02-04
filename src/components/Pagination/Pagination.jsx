import classes from './Pagination.module.scss';
export const Pagination = ({page, setPage}) => {
	const pages = [1, 2, 3]

	const onCheckPage = (item) => {
		pages.includes(item) && setPage(item)
	}

	return (
		<div className={classes.pagination}>
			<img onClick={() => onCheckPage(page - 1)} className={classes.arrowPrev} src='img/pagination.svg' alt="arrow"/>
			{pages.map((num, i) => (
				<span key={i} className={page === i + 1 && classes.active} onClick={() => setPage(num)}>{num}</span>
			))}
			<img onClick={() => onCheckPage(page + 1)} src='img/pagination.svg' alt="arrow"/>
		</div>
	)
}
