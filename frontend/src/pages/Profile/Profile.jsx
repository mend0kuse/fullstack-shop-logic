import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { ordersApi } from '../../api/orderApi';
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Context } from '../../context/context';
import styles from './Profile.module.css';

export function Profile() {
	const [orders, setOrders] = useState([]);


	const { user } = useContext(Context)

	useEffect(() => {
		if (user?.role === 'User') {
			ordersApi.getOrdersByUserId(user?._id)
				.then(res => setOrders(res))
				.catch()
		} else {
			ordersApi.getAllOrders()
				.then(res => setOrders(res))
				.catch()
		}
	}, [user])

	return (
		<>
			<Header />
			<div className='page'>
				<>
					ЛОгин:{user?.username}
				</>
				<>
					<table className={styles.table}>
						<caption>
							{user?.role === 'User' ? <p>Мои заказы</p> : <p>Все заказы</p>}
						</caption>
						<thead>
							<tr>
								<th>Номер</th>
								<th>Дата</th>
								<th>Сумма заказа</th>
							</tr>
						</thead>
						<tbody>
							{orders.map(item => (
								<tr>
									<td>{item._id}</td>
									<td> {new Date(item.createdAt).toLocaleDateString()}</td>
									<td>{item.price}</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			</div>
			<Footer />
		</>
	)
}
