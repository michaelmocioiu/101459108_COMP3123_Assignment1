const express = require('express');
const connectDB = require('./config/db');  // Import the MongoDB connection function

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Define a test route
app.get('/', (req, res) => {
    res.send('MongoDB connection test successful!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));