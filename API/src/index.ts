import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.message) {
        res.status(500).json({ error: err.message });
    }
});