const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Routes
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Routes
app.use('/api/auth', authRoutes); // Ensure this route is connected to a valid router
app.use('/api/books', bookRoutes); // Ensure this route is connected to a valid router

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
