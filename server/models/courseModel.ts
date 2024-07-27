// models/courseModel.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the course document
export interface ICourse extends Document {
  name: string;
  description: string;
  // Add other fields here
}

// Define the schema
const CourseSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  // Add other fields here
});

// Create the model
const CourseModel = mongoose.model<ICourse>('Course', CourseSchema);

export default CourseModel;
