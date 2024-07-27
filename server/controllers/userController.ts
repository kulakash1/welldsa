// controllers/userController.ts
import { Request, Response } from 'express';
import User, { IUser } from '../models/userModel'; // Import model
import { UserType } from '../types/userType'; // Import renamed type

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser: IUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user' });
  }
};
