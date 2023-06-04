import Router from 'express';

import OrdersController from '../controllers/ordersController.js';

export const ordersRouter = new Router();

ordersRouter.get('/', OrdersController.getAll);
ordersRouter.get('/user/:id', OrdersController.getByUserId);
ordersRouter.delete('/:id', OrdersController.deleteOrder);
ordersRouter.post('/', OrdersController.createOrder);


