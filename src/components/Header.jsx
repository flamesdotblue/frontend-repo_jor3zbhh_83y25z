import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 text-white">
      <div className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
            <Rocket className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <h1 className="text-2xl font-semibold">Bonjour, le monde !</h1>
            <p className="text-white/80 text-sm">Une petite démo en français</p>
          </div>
        </div>
        <a
          href="https://fr.wikipedia.org/wiki/Bonjour"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          En savoir plus
        </a>
      </div>
    </header>
  );
}
