import express from 'express';
import cors from "cors";
// import dotenv from 'dotenv';
require("dotenv").config();
import connectDB from './config/dbConfig';

// import db from './config/dbConfig';
import userRoutes from './routes/userRoutes';
// import courseRoutes from './routes/courseRoutes';
// import adminRoutes from './routes/adminRoutes';
// import { authenticateToken } from './utils/middleware';

const port = process.env.PORT || 5050;
const app = express();
app.use(cors());

// Connect to the database
connectDB();
// db();

// Middleware
app.use(express.json());


// app.use(authenticateToken); // Apply authentication middleware

// Routes
app.use('/userapi', userRoutes);
// app.use('/courseapi', courseRoutes);
// app.use('/adminapi', adminRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Server is running at http://localhost:${port}`);
});