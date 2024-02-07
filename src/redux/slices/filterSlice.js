import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	searchValue: '',
	//Category
	categoryId: 0,
	//DropDown
	isDropDownOpen: false,
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
		setCategoryId: (state, action) => {
			state.categoryId = action.payload
		},
		//DropDown
		choseSelectItem: (state, action) => {
			state.sortType = action.payload
			state.isDropDownOpen = !state.isDropDownOpen
		},
		openDropDown: (state, action) => {
			state.isDropDownOpen = action.payload
		},
		//Pagination
		setPages(state, action) {
			state.currentPage = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		}
	}
})

export const selectFilter = (state) => state.filter

export const { setCategoryId, choseSelectItem, openDropDown, setPages, setSearchValue } = filterSlice.actions

export default filterSlice.reducer