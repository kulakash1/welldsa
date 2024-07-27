// routes/courseRoutes.ts
import { Router } from 'express';
import { getAllCourses, createCourse } from '../controllers/courseController';

const router: Router = Router();

// Route to get all courses
router.get('/courses', getAllCourses);

// Route to create a new course
router.post('/courses', createCourse);

export default router;
