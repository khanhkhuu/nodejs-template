import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: 'runring.'
  });
});


app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
