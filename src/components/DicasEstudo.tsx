"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type Dica = {
  id: number;
  titulo: string;
  descricao: string;
};

export default function DicasEstudo() {
  const [dicas, setDicas] = useState<Dica[]>([]);

  useEffect(() => {
    axios.get("https://api-edumais.vercel.app/dicas-estudo")
      .then(res => setDicas(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="dicas" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">📚 Dicas de Estudo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dicas.map(dica => (
          <div key={dica.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{dica.titulo}</h3>
            <p className="text-gray-700">{dica.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}