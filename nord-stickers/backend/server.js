import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import stickerRoutes from './routes/stickerRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use('/api/stickers', stickerRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on Port ${PORT}`));
