import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import router from './routes/requirement.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true
}));

await connectDB();

app.use("/api/requirements", router);

app.get("/", (req, res) => {
    res.json("Server is started!");
});

app.listen(port, () => {
    console.log("Server is running");
})