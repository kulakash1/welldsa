// models/userModel.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser {
    id: string;
    name: string;
    email: string;
    // Add other fields as necessary
}


const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default UserType;

// types/userType.ts
export interface UserType {
    username: string;
    email: string;
    password: string;
  }
  

// controllers/userController.ts
import { Request, Response } from 'express';
import User, { IUser } from '../models/userModel'; // Correct import for model
import { User as UserType } from '../types/userType'; // Importing the type with an alias

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
