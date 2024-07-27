import mongoose from 'mongoose';

// const dbURI = 'mongodb://localhost:27017/wellprog';
const dbURI = process.env.ATLAS_URI;

if (!dbURI) {
  throw new Error('ATLAS_URI environment variable is not defined');
}
// const dbURI = process.env.ATLAS_URI || "";
// const dbURI = 'mongodb+srv://akash:akash@wellprog.vg3thwx.mongodb.net/';
// 'mongodb+srv://akash:akash@cluster0.5j82gar.mongodb.net/moviecritic

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};

// let db = mongoose.connection;
// let db = connectDB.db("wellprog");

// export default db;
export default connectDB;