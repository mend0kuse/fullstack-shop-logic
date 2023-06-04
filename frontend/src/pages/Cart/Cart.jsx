import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { cartApi } from '../../api/cartApi'
import { Context } from '../../context/context'
import { Product } from '../../components/Product/Product'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { ordersApi } from '../../api/orderApi'
import { useNavigate } from 'react-router-dom'
import styles from './Cart.module.css';

export function Cart() {
	const { user } = useContext(Context)
	const navigate = useNavigate()

	const [products, setProducts] = useState([])
	const fetchCart = () => {
		cartApi
			.getCartByUserId(user._id)
			.then(res => { setProducts(res.virtualProducts) })
			.catch(err => console.log(err))
	}

	useEffect(() => {
		fetchCart()
	}, [])

	const deleteFromCart = (productId) => {
		cartApi
			.deleteProduct(user._id, productId)
			.then(() => fetchCart())
			.catch(err => console.log(err))
	}

	const createOrder = () => {
		ordersApi
			.createOrder(user._id, products.reduce((acc, item) => acc += item.price, 0), products)
			.then()
			.catch()

		cartApi
			.clearCart(user._id)
			.then(res => { setProducts(res.virtualProducts) })

		navigate('/profile')
	}

	return (
		<>
			<Header />
			<div className='page'>
				<div>
					{products && products.map(item => (
						<div key={item._id} className={styles.item}>
							<Product title={item.title} link={'/product/' + item._id} price={item.price} img={item.imgSrc} />
							<button onClick={() => { deleteFromCart(item._id) }}>Удалить из корзины</button>
						</div>
					))}
				</div>
				{products?.length > 0 ?
					<>
						<p>Общая стоимоить: {products.reduce((acc, item) => acc += item.price, 0)}</p>
						<button onClick={createOrder}>Оформить заказ</button>
					</>
					: <p>{'Пусто)'}</p>
				}

			</div>
			<Footer />
		</>
	)
}
