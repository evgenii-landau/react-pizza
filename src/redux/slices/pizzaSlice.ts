import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";


const URL = 'https://65bb5de852189914b5bbdf1e.mockapi.io/items?'

type FetchPizzasArgs = {
	categoryId: number
	type: string
	value: string
	currentPage: number
}

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasArgs>(
	'pizza/fetchPizzasStatus',
	async (params) => {
		const {categoryId, type, value, currentPage} = params
		try {
			const {data} = await axios<Pizza[]>({
				url: `${URL}${+categoryId !== 0 ? `category=${categoryId}` : ''}&sortBy=${type}&order=${value}&page=${currentPage}&limit=4`
			})
			return categoryId === 0 ? data : data.filter((obj) => obj.category === categoryId)
		} catch (error) {
			console.error('Error fetching pizzas:', error);
			throw error;
		}
	}
)

type Pizza = {
	category: number
	id: number,
	title: string,
	price: number,
	imageUrl: string,
	types: number[],
	sizes: number[],
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

interface PizzaSliceState {
	items: Pizza[]
	status: Status
}

const initialState: PizzaSliceState = {
	items: [],
	status: Status.LOADING
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzas.pending, (state) => {
				state.status = Status.LOADING
				state.items = []
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.items = action.payload
				state.status = Status.SUCCESS
			})
			.addCase(fetchPizzas.rejected, (state) => {
				state.status = Status.ERROR
				state.items = []
			});
	},
})

export const selectPizzaData = (state: RootState) => state.pizza

export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer