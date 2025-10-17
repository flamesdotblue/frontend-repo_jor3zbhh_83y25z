export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          Fait avec <span className="text-rose-600">♥</span> en français.
        </p>
        <p className="text-gray-500">© {new Date().getFullYear()} Bonjour le monde</p>
      </div>
    </footer>
  );
}
