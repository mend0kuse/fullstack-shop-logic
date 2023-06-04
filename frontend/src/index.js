import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Корневой файл, тут код встраивается в html

// pages = Страницы
// api = Запросы на сервер
// router = Определяет, что из папки pages отрисовывается на определенные маршруты
// components = кирпичи, из которых состоит приложение 
// context = информация и функции, которые нужны на нескольких страницах одновременно 
