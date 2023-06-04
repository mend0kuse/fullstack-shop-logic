import React, { useState } from 'react'
import styles from './CreateTovar.module.css'
import cn from 'classnames'

export function CreateTovar(props) {
	const { open, setOpen, createProduct } = props;

	const [title, setTitle] = useState('')
	const [price, setPrice] = useState()
	const [desc, setDesc] = useState('')
	const [imgSrc, setImg] = useState('')
	const [category, setCategory] = useState('')

	const cleanFields = () => {
		setTitle('')
		setPrice(1)
		setDesc('')
		setImg('')
		setCategory('')
	}

	const onBtnClick = () => {
		createProduct({ title, price, desc, imgSrc, category });
		cleanFields()
	}

	return (
		<div className={cn(styles.modal, { [styles.open]: open })}>
			<div className={styles.content}>
				<button onClick={() => setOpen(false)}>Закрыть</button>
				<input
					className={styles.input}
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder='Название'
					type="text"
				/>
				<input
					className={styles.input}
					value={price}
					onChange={e => setPrice(e.target.value)}
					placeholder='Цена'
					type="number"
				/>
				<input
					className={styles.input}
					value={desc}
					onChange={e => setDesc(e.target.value)}
					placeholder='Описание'
					type="text"
				/>
				<input
					className={styles.input}
					value={imgSrc} onChange={e => setImg(e.target.value)}
					placeholder='Ссылка на картинку'
					type="text"
				/>
				<input
					className={styles.input}
					value={category}
					onChange={e => setCategory(e.target.value)}
					placeholder='Категория'
					type="text"
				/>
				<button onClick={onBtnClick}>Создать</button>
			</div>
		</div>
	)
}
