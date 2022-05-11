import mongoose from "mongoose";
import config from "../config";
import Movie from "../models/Movie";
import Review from "../models/Review";

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);

        mongoose.set('autoCreate', true);

        console.log("Mongoose Connected ...");

        Movie.createCollection().then(collections => console.log("Movie collection created"));
        Review.createCollection().then(collections => console.log("Review collection created"));
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
