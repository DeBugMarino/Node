import pgPromise from "pg-promise";

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

const database = pgPromise()({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "postgres",
});

export default database;

const setupDatabase = async () => {
  await database.none(
    `DROP TABLE IF EXISTS planets;
    
    CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
    )
    `
  );
  await database.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await database.none(`INSERT INTO planets (name) VALUES ('mars')`);
};

setupDatabase();

export const getAll = async (req, res) => {
  const planets = await database.many(`SELECT * FROM planets`);

  res.status(200).json(planets);
};

export const getOneById = async (req, res) => {
  const { id } = req.params;
  const planets = await database.many(`SELECT * FROM planets WHERE id=$1`, id);
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
