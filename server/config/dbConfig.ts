import mongoose from 'mongoose';

// const dbURI = 'mongodb://localhost:27017/wellprog';
const dbURI = 'mongodb+srv://akash:aka098765@wellprog.vg3thwx.mongodb.net/';

const connectDB = async () => {
    try {
      await mongoose.connect(dbURI, {
        // The deprecated options are now enabled by default
      });
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection failed', error);
      process.exit(1);
    }
  };
  
  export default connectDB;