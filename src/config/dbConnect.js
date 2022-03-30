import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB);

let db = mongoose.connection;

export default db;