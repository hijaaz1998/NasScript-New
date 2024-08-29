import express from "express";
import env from "dotenv";
import cors from "cors";
import Routes from "./routes/Routes.js";
import { corsOptions } from "./config/clodinary.js";
import { connectDB } from "./config/databace.js";

const app = express();
env.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use('/uploads', express.static('uploads')); 

connectDB();

app.use("/", Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
