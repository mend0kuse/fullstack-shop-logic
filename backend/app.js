import { routerAuth } from './routers/authRouter.js'

import express from "express"
import bodyParser from "body-parser"
import mongoose from 'mongoose'
import cors from 'cors'

import { productRouter } from "./routers/productRouter.js"
import { ordersRouter } from './routers/ordersRouter.js'
import { cartRouter } from './routers/cartRouter.js'

const app = express();
const PORT = 5000;

// Настройки сервера
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ extended: true }))


// Обработка запросов к серверу 
// http://localhost:5000/tovars будет обрабатывать tovarRouter и т.д
app.use("/product", productRouter);
app.use("/auth", routerAuth);
app.use("/orders", ordersRouter);
app.use("/cart", cartRouter);

async function databaseConnect() {
	try {
		await mongoose.connect('mongodb://0.0.0.0:27017/jazz');
	} catch (error) {
		console.log(error);
	}
}

// Запуск сервера, при запуске подключаемся к базе
app.listen(PORT, databaseConnect)


// routers = Определяют какая функция на какой маршрут будет вызываться из контроллеров
// controllers = Набор функций, которые вызываются в роутерах
// models = Описывают то, что хранится в бд, аналог таблиц в sql 