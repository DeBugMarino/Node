import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
const obj = {
  nome: "franco",
  cognome: "franchini",
  eta: 44,
};

const libri = [
  {
    id: 1,
    titolo: "1984",
    autore: "George Orwell",
  },
  {
    id: 2,
    titolo: "paradise",
    autore: "milton",
  },
];

app.use(express.json());
app.use(cors());
app.get("/errore", (req, res) => {
  res.status(404).send("errore la pagina non è stata trovata");
});

app.get("/libri", (req, res) => {
  res.json(libri);
});

app.get("/libri/:id", (req, res) => {
  const libro = libri.find((libro) => libro.id == req.params.id); //perchè è una stringa
  if (libro) {
    return res.json(libro);
  } else {
    return res.status(404).send("libro non trovato");
  }
});

app.get("/dati", (req, res) => {
  res.json(obj);
});

app.get("/", (req, res) => {
  res.send("ciao belli");
});

app.post("/libri", (req, res) => {
  const newBook = req.body;
  libri.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`avviato il server su http://localhost:${PORT} `);
});
