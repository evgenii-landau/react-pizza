import React from "react";
import classes from './Search.module.scss';
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/slices/filterSlice.js";


type TypeSearchProps = {
	searchValue: string
}


export const Search: React.FC <TypeSearchProps> = ({searchValue}) => {
	const dispatch = useDispatch()
	const inputRef = React.useRef<HTMLInputElement>(null)

	const onClickClear = () => {
		dispatch(setSearchValue(''))
		inputRef.current?.focus()
	}

	return (
		<div className={classes.searchWrapper}>
			<img className={classes.searchIcon} src="/img/search-icon.svg" alt="Search-icon"/>
			<input ref={inputRef} onChange={(e) => dispatch(setSearchValue(e.target.value))} value={searchValue} placeholder='Найти пиццу...'/>
			{searchValue && <img className={classes.closeSearchBtn} src='/img/close-search-btn.svg' alt='Close Search Button' onClick={onClickClear}></img>}
		</div>
	)
}