import express from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.post('/register', userController.registerUser.bind(userController));
router.post('/login', userController.loginUser.bind(userController));

export default router;
