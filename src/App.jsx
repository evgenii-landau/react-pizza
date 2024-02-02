import React from "react";
import {Routes, Route} from "react-router-dom";
import {Header} from "./components/Header /Header.jsx";
import {Home} from "./pages/Home/Home.jsx";
import {PizzaItemsService} from "./services /PizzaItemsService.js";
import {Cart} from "./pages/Cart/Cart.jsx";


function App() {
	const [pizzaItems, setPizzaItems] = React.useState([])

	React.useEffect(() => {
		async function fetchDataPizzaItems() {
			try {
				const data = await PizzaItemsService.getAllPizza()
				setPizzaItems(data)
			} catch (error) {
				alert('Error')
				console.log(`Error: ${error}`)
			}
		}

		fetchDataPizzaItems()
	}, []);

	return (
		<>
			<div className='wrapper'>
				<Header/>
				<Routes>
					<Route
						path='/'
						element={<Home pizzaItems={pizzaItems}/>}>
					</Route>
					<Route
						path='/cart'
						element={<Cart/>}>
					</Route>
				</Routes>
			</div>
		</>
	)
}

export default App
