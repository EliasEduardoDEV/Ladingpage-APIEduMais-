"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type Plataforma = {
  id: number;
  nome: string;
  link: string;
  descricao: string;
};

export default function Plataformas() {
  const [plataformas, setPlataformas] = useState<Plataforma[]>([]);

  useEffect(() => {
    axios.get("https://api-edumais.vercel.app/plataformas-gratuitas")
      .then(res => setPlataformas(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-16 px-6 bg-white" id="plataformas">
      <h2 className="text-3xl font-bold mb-8 text-center">🌐 Plataformas Gratuitas</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {plataformas.map(p => (
          <div key={p.id} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold">{p.nome}</h3>
            <p className="text-sm text-gray-600">{p.descricao}</p>
            <a href={p.link} target="_blank" className="text-blue-500 mt-2 block hover:underline">Acessar</a>
          </div>
        ))}
      </div>
    </section>
  );
}