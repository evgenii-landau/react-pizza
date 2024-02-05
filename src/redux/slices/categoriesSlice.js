import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	categoryId: 0,
	categories: [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]
}

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategoryId: (state, action) => {
			state.categoryId = action.payload
		}
	}
})

export const { setCategoryId } = categoriesSlice.actions

export default categoriesSlice.reducer

