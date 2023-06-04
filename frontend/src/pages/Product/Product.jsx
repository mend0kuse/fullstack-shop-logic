import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { productApi } from '../../api/productApi'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import styles from './Product.module.css'
import { cartApi } from '../../api/cartApi';
import { useContext } from 'react';
import { Context } from '../../context/context';
import { UpdateProduct } from '../../components/UpdateProduct/UpdateProduct';

export function Product() {
	const params = useParams();
	const navigate = useNavigate();

	const { user } = useContext(Context)
	const [product, setProduct] = useState({})
	const [updateOpen, setUpdateOpen] = useState(false)

	const fetchProduct = () => {
		productApi.getProductById(params.id).then((res) => setProduct(res)).catch(err => console.log(err))
	}

	useEffect(() => {
		fetchProduct()
	}, [])

	const addProduct = () => {
		cartApi.addProduct(user._id, product._id).then(() => alert('Успешно'))

	}

	const deleteProduct = () => {
		productApi.deleteProduct(product._id).then(() => navigate('/catalog'))

	}

	const updateProduct = (newProduct) => {
		productApi.updateProduct(product._id, newProduct).then(() => fetchProduct())
	}

	return (
		<>
			<Header />
			<div className='page'>
				<div className={styles.product}>
					<img src={product.imgSrc} className={styles.img} alt={product.title} />
					<div>
						<p>{product.title}</p>
						<p>{product.price}</p>
						<p>{product.desc}</p>
						{user?._id && <button onClick={addProduct}>В корзину</button>}
						{user?.role === 'Admin' && <>
							<button onClick={() => setUpdateOpen(true)}>Редактировать товар</button>
							<button onClick={deleteProduct}>Удалить товар</button>
						</>}
					</div>
				</div>
			</div>
			{product && <UpdateProduct open={updateOpen} setOpen={setUpdateOpen} update={updateProduct} product={product} />}
			<Footer />
		</>
	)
}
