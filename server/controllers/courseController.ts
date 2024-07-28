// controllers/courseController.ts
import { Request, Response } from 'express';
import CourseModel, { ICourse } from '../models/courseModel'; // Import the model with type

export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses: ICourse[] = await CourseModel.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {
    const newCourse = new CourseModel(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await CourseModel.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course', error });
  }
};


export const updateCourse = async (req: Request, res: Response) => {
  try {
    const updatedCourse = await CourseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const deletedCourse = await CourseModel.findByIdAndDelete(req.params.id);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error });
  }
};
