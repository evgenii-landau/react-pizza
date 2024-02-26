import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import '.index.css'
import '.fonts.css'
import {HashRouter} from 'react-router-dom';
import {store} from './redux/store'
import {Provider} from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</HashRouter>
	</React.StrictMode>
)
