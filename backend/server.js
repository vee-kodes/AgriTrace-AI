const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db.js');

// Import Routes
const authRoutes = require('./routes/authRoutes.js');
const farmerRoutes = require('./routes/farmerRoutes.js');
const activityRoutes = require('./routes/activityRoutes.js');
const collectionRoutes = require('./routes/collectionRoutes.js');
const aiRoutes = require('./routes/aiRoutes.js');

// Config
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Security headers
app.use(helmet());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/farmers', farmerRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/ai', aiRoutes);

// Health check 
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'AgriTrace AI backend is running!',
    timestamp: new Date().toISOString()
  });
});

// Listener
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));