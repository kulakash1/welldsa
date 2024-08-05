// models/courseModel.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the course document
export interface document extends Document {
  courseId: string;
  title: string;
  link: string,
  details: Schema.Types.Mixed,
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const documentSchema: Schema = new Schema({
  courseId: { type: String},
  title: { type: String, required: true },
  link: { type: String},
  details: { type: Schema.Types.Mixed}
});

// Create the model
const DocumentModel = mongoose.model<document>('document', documentSchema);

export default DocumentModel;
