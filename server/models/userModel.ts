import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  id: { type: String, required: false },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: false },
});

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default User;
