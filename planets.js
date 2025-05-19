import express from "express";

import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json(planets);
});

app.listen(port, () => {
  console.log(`sta ascoltando http://localhost:${port}`);
});

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];
