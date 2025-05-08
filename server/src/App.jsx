import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/dati")
      .then((res) => res.json())
      .then((dati) => setData(dati));
  }, []);

  return (
    <>
      <p>{data.nome}</p>
      <p>{data.cognome}</p>
      <p>{data.eta}</p>
    </>
  );
}

export default App;
