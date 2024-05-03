import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.get("/", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
