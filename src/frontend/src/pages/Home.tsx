import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { Specialties } from '../components/Specialties';
import { ReservationInfo } from '../components/ReservationInfo';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy via-navy-light to-crimson">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <Specialties />
        <ReservationInfo />
      </main>
      <Footer />
    </div>
  );
}
