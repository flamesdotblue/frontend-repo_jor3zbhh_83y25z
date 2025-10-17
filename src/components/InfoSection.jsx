export default function InfoSection() {
  const phrases = [
    {
      title: 'Bonjour',
      desc: 'Formule polie et universelle pour dire « hello ».'
    },
    {
      title: 'Salut',
      desc: 'Plus familier, parfait entre amis ou collègues.'
    },
    {
      title: 'Coucou',
      desc: 'Très familier et affectueux, souvent utilisé avec les proches.'
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {phrases.map((p) => (
          <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="text-sm font-semibold text-indigo-700 bg-indigo-50 inline-flex px-2 py-1 rounded">{p.title}</div>
            <p className="mt-3 text-gray-700 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
