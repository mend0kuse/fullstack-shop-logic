import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authApi } from '../../api/authApi'
import { Footer } from '../../components/Footer/Footer'
import { Form } from '../../components/Form/Form'
import { Header } from '../../components/Header/Header'

export function Registration() {
	const navigate = useNavigate()

	const onButtonClick = (user) => {
		authApi.registration(user)
			.then(res => navigate('/login'))
	}

	return (
		<>
			<Header />
			<div className="page">
				<Form
					onButtonClick={onButtonClick}
					title='Регистрация'
					btnText='Зарегестрироваться'
					redirectLink={<Link to={'/login'}>Уже есть аккаунт</Link>}
				/>
			</div>
			<Footer />
		</>
	)
}
