import express from 'express';
import connectDB from './config/dbConfig';
import userRoutes from './routes/userRoutes';
import courseRoutes from './routes/courseRoutes';
import adminRoutes from './routes/adminRoutes';
import { authenticateToken } from './utils/middleware';

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(authenticateToken); // Apply authentication middleware

// Routes
app.use('/api', userRoutes);
app.use('/api', courseRoutes);
app.use('/api', adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
