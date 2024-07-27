import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modules: [{
    title: String,
    progress: { type: Number, default: 0 },
  }],
});

export default mongoose.model('Course', courseSchema);
