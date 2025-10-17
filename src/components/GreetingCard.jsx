import { useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function GreetingCard() {
  const greetings = [
    'Bonjour le monde',
    'Salut tout le monde',
    'Coucou le monde',
    'Allô le monde',
  ];

  const [index, setIndex] = useState(0);

  const today = useMemo(() => {
    try {
      return new Intl.DateTimeFormat('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date());
    } catch {
      return new Date().toLocaleDateString();
    }
  }, []);

  const cycleGreeting = () => setIndex((i) => (i + 1) % greetings.length);

  return (
    <section className="max-w-5xl mx-auto px-6 -mt-8">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 via-sky-50 to-emerald-50" />
        <div className="relative p-8 md:p-12 grid gap-6 md:gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 text-indigo-700 px-3 py-1 text-xs font-medium">
              <Sparkles className="h-4 w-4" />
              100% en français
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              {greetings[index]} 👋
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ceci est une application d'exemple minimaliste qui dit « Bonjour » en français.
              Appuyez sur le bouton pour découvrir d'autres façons amicales de saluer.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={cycleGreeting}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 active:scale-[0.99] transition"
              >
                Changer la salutation
              </button>
              <span className="text-sm text-gray-500">Nous sommes le {today}.</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/3] w-full rounded-xl bg-white/80 ring-1 ring-black/5 p-6 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-6xl">🇫🇷</div>
                <p className="text-gray-700 font-medium">La langue de Molière</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
