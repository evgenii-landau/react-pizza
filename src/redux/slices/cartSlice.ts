import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";


interface CartSliceState {
	totalPrice: number;
	items: CartItem[];
}

export type CartItem = {
	id: number
	title: string
	price: number
	imageUrl: string
	type: string
	size: number
	count: number
}

const initialState: CartSliceState = {
	totalPrice: 0,
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<CartItem>) {
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
		removeItem(state, action: PayloadAction<number>) {
			const answer = confirm('Are you really want to delete your product?')
			if (answer) state.items = state.items.filter((item) => item.id !== action.payload)
			state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0)
		},
		clearCart(state) {
			const answer = confirm('Are you really want to clear all cart?')
			if (answer) state.items = []
		},
		plusItem(state, action: PayloadAction<number>) {
			const findItem = state.items.find(item => item.id === action.payload)
			if (findItem) findItem.count++
			state.totalPrice = state.items.reduce((sum, obj) => sum + (obj.price * obj.count), 0)
		},
		minusItem(state, action: PayloadAction<number>) {
			const findItem = state.items.find(item => item.id === action.payload)

			if (findItem) {
				findItem.count--
			} else {
				state.items = state.items.filter(obj => obj.id !== action.payload)
			}
			state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
		}
	}
})

export const selectCart = (state: RootState) => state.cart
export const selectCartItemById = (id: number) => (state: RootState) => state.cart.items.find(obj => obj.id === id)

export const {addItem, removeItem, clearCart, plusItem, minusItem, setCartItems} = cartSlice.actions
export default cartSlice.reducer