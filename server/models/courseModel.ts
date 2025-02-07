// models/courseModel.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the course document
export interface ICourse extends Document {
  userId: string;
  courseId: string;
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
const CourseSchema: Schema = new Schema({
  id: { type: String, required: false },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: false },
  name: { type: String, required: true },
  title: { type: String, required: false },
  description: { type: String, required: true },
  category: { type: String, required: false },
  duration: { type: Number, required: false },
  // Add other fields here
});

// Create the model
const CourseModel = mongoose.model<ICourse>('Course', CourseSchema);

export default CourseModel;
