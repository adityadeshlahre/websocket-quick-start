import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { User, UserSchema } from "@repo/types/src/index";

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

app.get("/", (res: Response) => {
  res.json({ message: "Hello World!" });
});

app.post("/user", (req: Request, res: Response) => {
  const parsed = UserSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors });
  }

  const user: User = parsed.data;

  res.json({ user });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
