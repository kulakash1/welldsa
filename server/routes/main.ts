import { Router } from 'express';
import { createCourse, createDocument, createVideo } from '../controllers/main';

const router = Router();

router.post('/course', createCourse);
router.post('/video', createVideo);
router.post('/document', createDocument);

export default router;