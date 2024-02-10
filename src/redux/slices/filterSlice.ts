import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";


interface FilterSliceState {
	searchValue: string
	categoryId: number
	sortType: TypeSort
	currentPage: number
}

type TypeSort = { // Можно заменить в Drop Down есть такой же тип.
	name: string
	type: string
	value: string
}

const initialState: FilterSliceState = {
	searchValue: '',
	//Category
	categoryId: 0,
	//DropDown
	sortType: {
		name: 'популярности (возр.)',
		type: 'rating',
		value: 'asc'
	},
	//Pagination
	currentPage: 1
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		//Category
		setCategoryId: (state, action: PayloadAction<number>) => {
			state.categoryId = action.payload
		},
		//DropDown
		choseSelectItem: (state, action: PayloadAction<TypeSort>) => {
			state.sortType = action.payload
		},
		//Pagination
		setPages(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		}
	}
})

export const selectFilter = (state: RootState) => state.filter

export const {setCategoryId, choseSelectItem, setPages, setSearchValue} = filterSlice.actions

export default filterSlice.reducer