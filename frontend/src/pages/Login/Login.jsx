import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authApi } from '../../api/authApi'
import { Footer } from '../../components/Footer/Footer'
import { Form } from '../../components/Form/Form'
import { Header } from '../../components/Header/Header'
import { Context } from '../../context/context'

export function Login() {

	const { setUser } = useContext(Context)

	const navigate = useNavigate()

	const onButtonClick = (user) => {
		authApi.login(user)
			.then(res => {
				setUser(res);
				navigate('/profile')
			})
			.catch((err) => { alert(err.response.data.message) })
	}

	return (
		<>
			<Header />
			<div className='page'>
				<Form
					onButtonClick={onButtonClick}
					title='Вход'
					btnText='Войти'
					redirectLink={<Link to={'/registration'}>Нет аккаунта?</Link>}
				/>
			</div>
			<Footer />
		</>

	)
}
