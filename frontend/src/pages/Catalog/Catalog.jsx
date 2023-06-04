import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Context } from '../../context/context'
import { productApi } from '../../api/productApi'
import { Product } from '../../components/Product/Product'
import { CreateTovar } from '../../components/CreateTovar/CreateTovar'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import styles from './Catalog.module.css';

export function Catalog() {

	const { user } = useContext(Context)

	const [products, setProducts] = useState([])
	const [filteredProducts, setFilteredProducts] = useState([])

	const [open, setOpen] = useState(false)

	const [search, setSearch] = useState('')

	const getProducts = () => {
		productApi.getAllProducts()
			.then(res => setProducts(res))
			.catch(err => console.log(err))
	}

	const createProduct = ({ title, price, desc, imgSrc, category }) => {
		productApi.createProduct({ title, price, desc, imgSrc, category }).then(() => getProducts())
		setOpen(false)
	}

	useEffect(() => {
		setFilteredProducts(products.filter(item => item.title.includes(search)))
	}, [products, search])

	useEffect(() => {
		getProducts()
	}, [])

	const onBtnClick = () => {
		setOpen(true)
	}

	return (
		<>
			<Header />
			<div className='page'>
				{user?.role === 'Admin' && <button onClick={onBtnClick}>Создать товар</button>}
				<input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Найти товар' />
				<div className={styles.inner}>
					{filteredProducts.map((item) => (
						<Product title={item.title} link={'/product/' + item._id} key={item._id} price={item.price} img={item.imgSrc} />
					))}
					{filteredProducts.length === 0 && <p>Товары не найдены</p>}
				</div>
				<CreateTovar createProduct={createProduct} open={open} setOpen={setOpen} />
			</div>
			<Footer />
		</>
	)
}
