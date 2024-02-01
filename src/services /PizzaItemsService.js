import axios from "axios";

export const PizzaItemsService = {
	async getAllPizza() {
		const response = await axios({
			url: 'https://65bb5de852189914b5bbdf1e.mockapi.io/items'
		})
		return response.data
	}
}