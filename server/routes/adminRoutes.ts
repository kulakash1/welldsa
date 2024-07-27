import { Router } from 'express';
import { adminLogin } from '../controllers/adminController';

const router = Router();

router.post('/login', adminLogin);

// Other routes

export default router;