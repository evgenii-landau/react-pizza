import {createSlice} from "@reduxjs/toolkit";


const initialState = {
	totalPrice: 0,
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id)

			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1
				})
			}

			state.totalPrice = state.items.reduce((sum, obj) => sum + (obj.price * obj.count), 0)
		},
		removeItem(state, action) {
			const answer = confirm('Are you really want to delete your product?')
			if (answer) state.items = state.items.filter((item) => item.id !== action.payload)
			state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0)
		},
		clearCart(state) {
			const answer = confirm('Are you really want to clear all cart?')
			if (answer) state.items = []
		},
		plusItem(state, action) {
			const findItem = state.items.find(item => item.id === action.payload)
			findItem.count++
			state.totalPrice = state.items.reduce((sum, obj) => sum + (obj.price * obj.count), 0)
		},
		minusItem(state, action) {
			const findItem = state.items.find(item => item.id === action.payload)

			if (findItem.count > 1) {
				findItem.count--
			} else {
				state.items = state.items.filter(obj => obj.id !== action.payload)
			}
			state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
		}
	}
})

export const selectCart = (state) => state.cart
export const selectCartItemById = (id) => (state => state.cart.items.find(item => item.id === id))

export const {addItem, removeItem, clearCart, plusItem, minusItem} = cartSlice.actions
export default cartSlice.reducer