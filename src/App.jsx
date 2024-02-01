import React from "react";
import {Header} from "./components/Header /Header.jsx";
import {Categories} from "./components/Categories/Categories.jsx";
import {DropDown} from "./components/DropDown/DropDown.jsx";
import {Home} from "./pages/Home/Home.jsx";
import {PizzaItemsService} from "./services /PizzaItemsService.js";


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
				<div className='selectSection'>
					<Categories/>
					<DropDown/>
				</div>
				<Home pizzaItems={pizzaItems}/>
			</div>
		</>
	)
}

export default App
