import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev')); // Use 'dev' for development logging

// Routes
app.use('/api/v1/auth', authRoutes); // Prefix all routes in authRoutes with '/api/v1/auth'

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
