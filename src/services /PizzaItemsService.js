import axios from "axios";

export const PizzaItemsService = {
	async getAllPizza([id, type, value]) {
		const response = await axios({
			url: `https://65bb5de852189914b5bbdf1e.mockapi.io/items?${id !== 0 ? `category=${id}` : ''}&sortBy=${type}&order=${value}`
		})
		return id === 0 ? response.data : response.data.filter(el => el.category === id)
	}
}