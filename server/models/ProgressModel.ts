// models/ProgressModel.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IProgress extends Document {
  userId: string;
  courseId: string;
  status: 'not started' | 'in progress' | 'completed';
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
  // Add other fields here
}


// Define the schema
const ProgressSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  status: { type: String, required: true },
  id: { type: String, required: false },
  name: { type: String, required: true },
  title: { type: String, required: false },
  description: { type: String, required: true },
  category: { type: String, required: false },
  duration: { type: Number, required: false },
  // Add other fields here
});

// Create the model
const ProgressModel = mongoose.model<IProgress>('Progress', ProgressSchema);

export default ProgressModel;
