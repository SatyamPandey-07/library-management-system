import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connection successful", connection.connection.host);
        
    } catch (error) {
        console.log("Error in connecting to databse", error);
        process.exit(1)
        
    }
}

export default connectDB