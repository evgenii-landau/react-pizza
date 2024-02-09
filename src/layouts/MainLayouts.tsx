import {Header} from "../components/Header ";
import {Outlet} from 'react-router-dom';


export const MainLayouts = () => {
	return (
		<div className='wrapper'>
			<Header/>
			<Outlet/>
		</div>
	)
}