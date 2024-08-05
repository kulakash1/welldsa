// models/courseModel.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the course document
export interface Course extends Document {
  name: string;
  domain: string;
  track: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const CourseSchema: Schema = new Schema({
  name: { type: String, required: true },
  domain: { type: String, required: true },
  track: { type: String, required: true },  // Add this line if you need a description field
}, {
  timestamps: true // This will add createdAt and updatedAt fields automatically
});

// Create the model
const CourseModel = mongoose.model<Course>('CourseNew', CourseSchema);

export default CourseModel;
