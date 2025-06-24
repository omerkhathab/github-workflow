import express, { Request, Response } from "express";

const PORT = 3000;
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({
        message : "hello there"
    });
});

app.listen(PORT, ()=>{
    console.log("Server running on port: " + PORT);
});