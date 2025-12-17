import  express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js"
import connectDB from "../server/config/db.js"
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express()
const port = process.env.PORT || 5000

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", routes);


connectDB().then(() => {
    app.listen(5000, () => {
    console.log(`server started on http://localhost:${port}`)
    });
});

