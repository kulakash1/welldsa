import { Router } from 'express';
import { getProgressByUser, updateProgress } from '../controllers/progressController';

const router = Router();

router.get('/:userId', getProgressByUser);
router.put('/:userId/:courseId', updateProgress);

export default router;
