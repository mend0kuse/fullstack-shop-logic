import React from 'react'
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/context';
import { ReactComponent as Logo } from '../../img/logo.svg';

export function Header() {
	const { user, setUser } = useContext(Context)
	const navigate = useNavigate()

	const onLogout = () => {
		setUser(null)
		navigate('/registration')
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Link to={'/'} className={styles.logo}><Logo /></Link>
				<div className={styles.btns}>
					{user
						?
						<>
							<Link to={'/cart'}>Корзина</Link>
							<button onClick={onLogout}>Выйти</button>
							<Link to='/profile'>Профиль</Link>
						</>
						:
						<Link to='/login'>Войти</Link>}
					<Link to={'/catalog'}>Каталог</Link>
				</div>
			</div>
		</div>
	)
}
