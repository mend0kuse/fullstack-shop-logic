import React from 'react'
import styles from './Product.module.css';
import { Link } from 'react-router-dom'

export function Product(props) {
	const { title, price, img, link } = props
	return (
		<Link to={link} className={styles.product}>
			<img src={img} alt={title} className={styles.img} />
			<div className={styles.footer}>
				<p className={styles.title}>{title}</p>
				<p className={styles.price}>{price}</p>
			</div>
		</Link>
	)
}
