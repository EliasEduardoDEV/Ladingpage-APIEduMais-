export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">EduMais</h1>
      <p className="text-xl max-w-xl">Sua central de estudos inteligente com dicas, técnicas de memorização e plataformas gratuitas!</p>
      <a href="#dicas" className="mt-6 bg-white text-blue-800 px-6 py-2 rounded-full hover:scale-105 transition">Começar</a>
    </section>
  );
}