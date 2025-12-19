import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js"
import connectDB from "../server/config/db.js"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express()
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://think-board-one.vercel.app"],
    credentials: true
}));
app.use(rateLimiter);

app.use("/api/notes", routes);


connectDB().then(() => {
    app.listen(5000, () => {
        console.log(`server started on http://localhost:${port}`)
    });
});

