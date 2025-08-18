const mongoose = require('mongoose');
const Live_url="mongodb+srv://himanshu:himanshu91@cluster0.tnpsfnu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
    return mongoose.connect(Live_url)

        .then(() =>{
            console.log('MongoDB connected successfully');
        } 
        ).catch((error) => {
            console.error('MongoDB connection error:', error);
        });
    };
module.exports = connectDB;
