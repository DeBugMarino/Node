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

export const getAll = (req, res) => {
  res.status(200).json(planets);
};

export const gerOneById = (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === id);
  res.status(200).json(planet);
};

export const create = (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];
  res.status(201).json({ msg: "il pianeta è creato" });
};

export const updateById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === id ? { ...p, name } : p));
  res.status(200).json({ msg: "i pianeti sono aggiornati" });
};

export const deleteById = (req, res) => {
  const { id } = req.params;
  planets = planets.filter((p) => p.id !== id);

  res.status(200).json({ msg: "il pianeta è stato eliminato " });
};
