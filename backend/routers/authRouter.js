import Router from 'express';
import AuthController from '../controllers/authController.js'
export const routerAuth = new Router();

routerAuth.post('/reg', AuthController.registration)
routerAuth.post('/login', AuthController.login)