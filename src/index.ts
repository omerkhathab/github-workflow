import express, { Request, Response } from "express";

const PORT = 3000;
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({
        message : "hello there"
    });
});

app.post("/echo", (req: Request, res: Response) => {
    const data = req.body;
    res.json({
        message : "data received successfully",
        data: data
    });
});

app.listen(PORT, ()=>{
    console.log("Server running on port: " + PORT);
});