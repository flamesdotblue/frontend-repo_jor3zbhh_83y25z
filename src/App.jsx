import Header from './components/Header';
import GreetingCard from './components/GreetingCard';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="py-16">
        <GreetingCard />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}
