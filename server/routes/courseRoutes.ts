import { Router } from 'express';
import { getCourses, addCourse } from '../controllers/courseController';

const router = Router();

router.get('/', getCourses);
router.post('/', addCourse);

// Other routes

export default router;
