import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const URL = 'https://65bb5de852189914b5bbdf1e.mockapi.io/items?'

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
		const [id, type, value, page] = params
		const {data} = await axios({
			url: `${URL}${id !== 0 ? `category=${id}` : ''}&sortBy=${type}&order=${value}&page=${page}&limit=4`
		})
		return id === 0 ? data : data.filter(el => el.category === id)
	}
)

const initialState = {
	items: [],
	status: 'loading'
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
				state.status = 'loading'
				state.items = []
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.items = action.payload
				state.status = 'success'
			})
			.addCase(fetchPizzas.rejected, (state) => {
				state.status = 'error'
				state.items = []
			});
	},
})

export const selectPizzaData = (state) => state.pizza

export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer