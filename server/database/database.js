import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("Connected To Database!")
    } catch (error) {
        console.error(error);
    }
};

export default connectToDB;