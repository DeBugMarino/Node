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
    name TEXT NOT NULL,
    image TEXT
    )

    DROP TABLE IF EXISTS users;

    CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  token TEXT
)  `
  );
  await database.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await database.none(`INSERT INTO planets (name) VALUES ('mars')`);
  await database.none(
    `INSERT INTO  users (username, password) VALUES ('ok', 'boomer')`
  );
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

export const createImage = async (req, res) => {
  console.log(req.file);
  res.status(201).json({ msg: "immagine caricata con successo" });

  if (fileName) {
    db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [id, fileName]);
    res.status(201).json({ msg: "Planet image uploaded successfully" });
  } else {
    res.status(400).json({ msg: "planet image failed to upload" });
  }
};
