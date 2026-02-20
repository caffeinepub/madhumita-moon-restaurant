import { Moon, Utensils } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-golden/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Moon className="w-8 h-8 text-golden animate-pulse" />
              <Utensils className="w-4 h-4 text-golden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
              <h1 className="text-2xl font-display text-golden tracking-wide">
                Madhumita Moon
              </h1>
              <p className="text-xs text-golden/70 font-light tracking-widest">RESTAURANT</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-cream hover:text-golden transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('specialties')}
              className="text-cream hover:text-golden transition-colors font-medium"
            >
              Specialties
            </button>
            <button
              onClick={() => scrollToSection('reservation')}
              className="px-6 py-2 bg-golden text-navy rounded-full hover:bg-golden-light transition-all shadow-lg hover:shadow-golden/50"
            >
              Reserve
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
