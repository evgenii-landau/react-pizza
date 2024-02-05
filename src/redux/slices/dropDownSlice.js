import {createSlice} from "@reduxjs/toolkit";

const initialState = {   //STORE
	isDropDownOpen: false,
	selectItems: [
		{type: 'price', name: 'цене (возр.)', value: 'asc'},
		{type: 'price', name: 'цене (убыв.)', value: 'desc'},
		{type: 'title', name: 'алфавиту'},
		{type: 'rating', name: 'популярности (возр.)', value: 'asc'},
		{type: 'rating', name: 'популярности (убыв.)', value: 'desc'}
	],
	sortType: {
		name: 'популярности',
		type: 'rating'
	}
}

export const dropDownSlice = createSlice({
	name: 'dropDown',    //ТИП
	initialState,
	reducers: {
		choseSelectItem: (state, action) => {   //ЭКШЕНЫ
			state.sortType = action.payload
			state.isDropDownOpen = !state.isDropDownOpen
		},
		openDropDown: (state) => {
			state.isDropDownOpen = !state.isDropDownOpen
		}
	}
})

export const {choseSelectItem, openDropDown} = dropDownSlice.actions

export default dropDownSlice.reducer
