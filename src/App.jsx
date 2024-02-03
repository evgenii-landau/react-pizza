import {Routes, Route} from "react-router-dom";
import {Header} from "./components/Header /Header.jsx";
import {Home} from "./pages/Home/Home.jsx";
import {Cart} from "./pages/Cart/Cart.jsx";
// import {CartItemsServices} from "./services /CartItemsServices.js";
// import axios from "axios";


function App() {
	return (
		<>
			<div className='wrapper'>
				<Header/>
				<Routes>
					<Route
						path='/'
						element={<Home/>}>
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

// const [cartItems, setCartItems] = React.useState([])

// const onAddToCart = (obj) => {
// 	if (cartItems.some(item => item.title === obj.title)) {
// 		const deleteCartItem = async () => {
// 			await axios({
// 				url: `https://65bb5de852189914b5bbdf1e.mockapi.io/cart/${obj.title}`,
// 				method: 'delete',
// 			})
// 			setCartItems(prev => prev.filter(item => item.title !== obj.title))
// 		}
// 		deleteCartItem()
// 	} else {
// 		const postCartItems = async () => {
// 			axios({
// 				url: 'https://65bb5de852189914b5bbdf1e.mockapi.io/cart',
// 				method: 'post',
// 				data: obj
// 			})
// 			setCartItems(prev => [...prev, obj])
// 		}
// 		postCartItems()
// 	}
// 	console.log(cartItems)
// }