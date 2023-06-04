import Router from 'express';

import ProductController from "../controllers/productController.js"

export const productRouter = new Router();

productRouter.get('/', ProductController.getAll);
productRouter.post('/', ProductController.createProduct);

productRouter.delete('/:id', ProductController.deleteById);
productRouter.get('/:id', ProductController.getById);
productRouter.put('/:id', ProductController.updateById);


