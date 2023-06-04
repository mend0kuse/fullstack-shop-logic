import Router from 'express';
import CartController from '../controllers/cartController.js'
export const cartRouter = new Router();

cartRouter.post('/:userId/:productId', CartController.addProduct)
cartRouter.put('/clear/:userId', CartController.clear)
cartRouter.delete('/:userId/:productId', CartController.deleteProduct)
cartRouter.get('/:id', CartController.getByUserId)
