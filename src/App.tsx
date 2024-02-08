import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx";
import {Cart} from "./pages/Cart/Cart.jsx";
import {PizzaInfo} from "./components/PizzaInfo/PizzaInfo.js";
import {MainLayouts} from "./layouts/MainLayouts.jsx";


function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayouts/>}>
					<Route
						path='/'
						element={<Home/>}>
					</Route>
					<Route
						path='/cart'
						element={<Cart/>}>
					</Route>
					<Route path='item/:id'
						   element={<PizzaInfo/>}>
					</Route>
				</Route>
			</Routes>
		</>
	)
}

export default App