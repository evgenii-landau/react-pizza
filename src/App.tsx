import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {PizzaInfo} from "./components/PizzaInfo";
import {MainLayouts} from "./layouts/MainLayouts.tsx";


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