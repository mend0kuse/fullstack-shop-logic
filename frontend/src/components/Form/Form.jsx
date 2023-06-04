import React, { useState } from 'react'
import styles from './Form.module.css';

export function Form(props) {
	const { onButtonClick, title, btnText, redirectLink } = props
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className={styles.form}>
			<p>{title}</p>
			<input value={username} onChange={e => setUsername(e.target.value)} placeholder='Логин' />
			<input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Пароль' />
			<button onClick={() => onButtonClick({ username, password })}>{btnText}</button>
			{redirectLink}
		</div>
	)
}
