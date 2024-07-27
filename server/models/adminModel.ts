import mongoose, { Schema, Document } from 'mongoose';

export interface Admin extends Document {
  username: string;
  email: string;
  password: string;
  role: string; // For admin-specific role
}

const adminSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }
});

export default mongoose.model<Admin>('Admin', adminSchema);
