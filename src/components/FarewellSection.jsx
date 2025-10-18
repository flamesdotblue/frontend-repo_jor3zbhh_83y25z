export default function FarewellSection() {
  const goodbyes = [
    {
      title: 'Au revoir',
      desc: 'Formule standard pour prendre congé poliment.'
    },
    {
      title: 'À bientôt',
      desc: 'Sous-entend que vous reverrez la personne prochainement.'
    },
    {
      title: 'Bonne journée',
      desc: 'Souhait cordial pour le reste de la journée.'
    },
    {
      title: 'Salut',
      desc: 'Peut servir à dire bonjour comme au revoir, de manière familière.'
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-6 md:py-10">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Dire au revoir en français</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {goodbyes.map((g) => (
          <div key={g.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="text-sm font-semibold text-emerald-700 bg-emerald-50 inline-flex px-2 py-1 rounded">{g.title}</div>
            <p className="mt-3 text-gray-700 leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
