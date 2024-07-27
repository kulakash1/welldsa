import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Other routes

export default router;
