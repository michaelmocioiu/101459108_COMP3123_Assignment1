const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@101459108comp3123assign.savwj.mongodb.net/?retryWrites=true&w=majority&appName=101459108comp3123assignment1', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log("MongoDB Connection Successful")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;