import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  const backendUrl = "http://rickandmorty-service.develop.svc.cluster.local:3000";

  useEffect(() => {
    axios.get(`${backendUrl}/characters`)
      .then(res => setCharacters(res.data.slice(0, 5)))
      .catch(() => setError("❌ Error comunicando con el backend"));
  }, [backendUrl]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Rick and Morty - Frontend React</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {characters.map(c => (
          <li key={c.id}>
            <img src={c.image} alt={c.name} width="50" style={{ marginRight: "10px" }} />
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
