// routes/courseRoutes.ts
import { Router } from 'express';
import {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
} from '../controllers/courseController';

const router: Router = Router();

// Route to get all courses
router.get('/courses', getCourses);

// Route to create a new course
router.post('/create', createCourse);

router.get('/:id', getCourseById);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);
export default router;
