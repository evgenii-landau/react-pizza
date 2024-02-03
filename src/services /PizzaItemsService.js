import axios from "axios";

export const PizzaItemsService = {
	async getAllPizza(id) {
		let sort = 'rating'
		const response = await axios({
			url: `https://65bb5de852189914b5bbdf1e.mockapi.io/items?sortBy=catigory&order=asc`
		})
		return id === 0 ? response.data : response.data.filter(el => el.category === id)
	}
}