import axios from "axios";

const URL = 'https://65bb5de852189914b5bbdf1e.mockapi.io/items?'

export const PizzaItemsService = {
	async getAllPizza(id, type, value, page) {
		const response = await axios({
			url: `${URL}${id !== 0 ? `category=${id}` : ''}&sortBy=${type}&order=${value}&page=${page}&limit=4`
		})
		return id === 0 ? response.data : response.data.filter(el => el.category === id)
	}
}