import express from "express";

import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === id);
  res.status(200).json(planet);
});

app.post("/api/planets", (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: "il pianeta è creato" });
});

app.put("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === id ? { ...p, name } : p));
  res.status(200).json({ msg: "i pianeti sono aggiornati" });
});

app.delete("/api/planet/:id", (req, res) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== id);

  res.status(200).json({ msg: "il pianeta è stato eliminato " });
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
