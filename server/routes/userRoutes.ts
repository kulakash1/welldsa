import { Router } from 'express';
import { getAllUsers, createUser, verifyPassword, resetPassword, updatePassword, updateUserDetails } from '../controllers/userController';

const router = Router();

router.get('/', getAllUsers);
router.post('/signup', createUser);
router.post('/verify-password', verifyPassword);
router.post('/reset-password', resetPassword);
router.post('/update-password', updatePassword);
router.post('/update-details', updateUserDetails);

export default router;
