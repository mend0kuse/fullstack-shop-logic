import './App.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { ContextProvider } from './context/context';

export function App() {
  return (
    <ContextProvider> {/* Делает контекст доступным всем страницам */}
      <div className='wrapper'>
        <RouterProvider router={router} /> {/* Благодаря этому работает переход по страницам */}
      </div>
    </ContextProvider>
  );
}
