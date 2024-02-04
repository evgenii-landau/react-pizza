import classes from './Search.module.scss';

export const Search = ({setSearchValue}) => {

	return (
		<input onChange={(e) => setSearchValue(e.target.value)} placeholder='Найти пиццу...'/>
	)
}