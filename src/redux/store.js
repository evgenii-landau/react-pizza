import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './slices/categoriesSlice.js'
import dropDownReducer from './slices/dropDownSlice.js';


export const store = configureStore({
	reducer: {
		categoriesReducer,
		dropDownReducer,
	},
})