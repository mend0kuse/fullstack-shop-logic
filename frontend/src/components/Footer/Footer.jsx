import React from 'react'
import styles from './Footer.module.css';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../img/logo.svg'
import { ReactComponent as VK } from '../../img/vk.svg'
import { ReactComponent as Inst } from '../../img/inst.svg'
import { ReactComponent as Google } from '../../img/google.svg'
import { ReactComponent as Youtube } from '../../img/youtube.svg'


export function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.column}>
					<Link to={'/'} >
						<Logo />
					</Link>
				</div>
				<div className={styles.column}>
					<Link to={'##'} >
						О компании
					</Link>
				</div>
				<div className={styles.column}>
					<Link to={'##'} >
						Помощь
					</Link>
				</div>
				<div className={styles.column}>
					Контакты
					<div className={styles.socials}>
						<Link to={'##'}>
							<VK />
						</Link>
						<Link to={'##'}>
							<Inst />
						</Link>
						<Link to={'##'}>
							<Google />
						</Link>
						<Link to={'##'}>
							<Youtube />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
