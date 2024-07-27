// controllers/courseController.ts
import { Request, Response } from 'express';
import CourseModel, { ICourse } from '../models/courseModel'; // Import the model with type

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses: ICourse[] = await CourseModel.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {
    const newCourse = new CourseModel(req.body); // Use the model directly
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create course' });
  }
};
