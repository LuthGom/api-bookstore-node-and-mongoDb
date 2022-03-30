import mongoose from "mongoose";

mongoose.connect("mongodb+srv://LuthGom:SenhaMongoDb.500@cluster0.t36cv.mongodb.net/bookstore-api");

let db = mongoose.connection;

export default db;