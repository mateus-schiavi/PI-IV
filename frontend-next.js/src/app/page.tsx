"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [frase, setFrase] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/frase")
      .then((res) => res.text())
      .then((data) => setFrase(data))
      .catch(() => setFrase("Erro ao buscar frase"));
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Frase do backend Java:</h1>
      <p>{frase}</p>
    </main>
  );
}
