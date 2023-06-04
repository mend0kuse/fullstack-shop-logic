import React, { useState } from 'react'
import styles from './UpdateProduct.module.css'
import cn from 'classnames'
import { useEffect } from 'react';

export function UpdateProduct(props) {
	const { open, setOpen, update, product } = props;

	const [newProduct, setNewProduct] = useState(product)

	useEffect(() => {
		setNewProduct(product)
	}, [product])

	const onBtnClick = () => {
		update(newProduct)
		setOpen(false)
	}

	return (
		<div className={cn(styles.modal, { [styles.open]: open })}>
			<div className={styles.content}>
				<button onClick={() => setOpen(false)}>Закрыть</button>
				<input
					className={styles.input}
					value={newProduct.title}
					onChange={e => setNewProduct({ ...newProduct, title: e.target.value })}
					placeholder='Название'
					type="text"
				/>
				<input
					className={styles.input}
					value={newProduct.price}
					onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
					placeholder='Цена'
					type="number"
				/>
				<input
					className={styles.input}
					value={newProduct.desc}
					onChange={e => setNewProduct({ ...newProduct, desc: e.target.value })}
					placeholder='Описание'
					type="text"
				/>
				<input
					className={styles.input}
					value={newProduct.imgSrc}
					onChange={e => setNewProduct({ ...newProduct, imgSrc: e.target.value })}
					placeholder='Ссылка на картинку'
					type="text"
				/>
				<input
					className={styles.input}
					value={newProduct.category}
					onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
					placeholder='Категория'
					type="text"
				/>
				<button onClick={onBtnClick}>Обновить</button>
			</div>
		</div>
	)
}
