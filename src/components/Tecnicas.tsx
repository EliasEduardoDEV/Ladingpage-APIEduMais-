"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type Tecnica = {
  id: number;
  nome: string;
  descricao: string;
};

export default function Tecnicas() {
  const [tecnicas, setTecnicas] = useState<Tecnica[]>([]);

  useEffect(() => {
    axios.get("https://api-edumais.vercel.app/tecnicas-memorizacao")
      .then(res => setTecnicas(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="tecnicas" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">🧠 Técnicas de Memorização</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tecnicas.map(t => (
          <div key={t.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{t.nome}</h3>
            <p className="text-gray-700">{t.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}