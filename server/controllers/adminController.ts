import { Request, Response } from 'express';
import UserModel from '../models/userModel';  // Ensure the path and name are correct
import CourseModel from '../models/courseModel';  // Ensure the path and name are correct
import { IUser } from '../types/userType';
import { ICourse } from '../types/courseType';

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserModel.find();  // Use UserModel to find users
        res.status(200).json(users);
    } catch (error) {
        // TypeScript needs to know that 'error' is of type 'Error'
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const getAllCourses = async (req: Request, res: Response): Promise<void> => {
    try {
        const courses = await CourseModel.find();  // Use CourseModel to find courses
        res.status(200).json(courses);
    } catch (error) {
        // TypeScript needs to know that 'error' is of type 'Error'
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
