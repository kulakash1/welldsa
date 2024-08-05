// models/courseModel.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the course document
export interface Video extends Document {
  courseId: Schema.Types.ObjectId;
  title: string;
  link: string,
  details: Schema.Types.Mixed,
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const VideoSchema: Schema = new Schema({
  courseId: { type: String },
  title: { type: String, required: true },
  link: { type: String, required: false },
  details: { type: Schema.Types.Mixed}
});

// Create the model
const VideoModel = mongoose.model<Video>('Video', VideoSchema);

export default VideoModel;
