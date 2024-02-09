import React from 'react';
import classes from './PizzaInfo.module.scss';
import {useParams} from 'react-router-dom';
import {pizzaDescriptions} from '../../pizzaDescriptions..js';
import axios from "axios";

type TypePizzaInfo = {
	imageUrl: string;
	title: string;
	price: number;
}

export const PizzaInfo: React.FC = () => {
	const {id} = useParams()
	const [pizzaInfo, setPizzaInfo] = React.useState<TypePizzaInfo | undefined>()
	

	React.useEffect(() => {
		async function fetchDataPizzaInfo() {
			try {
				const {data} = await axios({
					url: `https://65bb5de852189914b5bbdf1e.mockapi.io/items?id=${id}`
				})
				setPizzaInfo(data[0])
			} catch (error) {
				alert(error)
				console.log(`Error: ${error}}`)
			}

		}

		fetchDataPizzaInfo()

	}, [])

	if (!pizzaInfo) {
		return (
			<div style={{width: '5px', margin: '0 auto', padding: '350px',}}>
				Loading...
			</div>
		)
	}

	return (
		<div className={classes.pizzaInfo}>
			<img src={pizzaInfo.imageUrl} alt="pizza"/>
			<h1>{pizzaInfo.title}</h1>
			<p>
				<b>Описание:</b> {pizzaDescriptions[id].desc}
			</p>
			<p>
				<b>Ингридиенты:</b> {pizzaDescriptions[id].product}
			</p>
			<ul>
				<li>
					<b>Тесто:</b> Тонкое тексто.
				</li>
				<li>
					<b>Цена:</b> {pizzaInfo.price} руб.
				</li>
			</ul>
		</div>
	)
}