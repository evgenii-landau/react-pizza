import {Header} from "../components/Header /Header.jsx";
import {Outlet} from "react-router-dom";


export const MainLayouts = () => {
	return (
		<div className='wrapper'>
			<Header/>
			<Outlet></Outlet>
		</div>
	)
}