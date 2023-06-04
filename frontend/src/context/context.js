import { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = (props) => {
	const [user, setUser] = useState(); /* Залогиненный пользователь */

	return (
		<Context.Provider value={{
			user, setUser
		}}>
			{props.children}
		</Context.Provider>
	)
}