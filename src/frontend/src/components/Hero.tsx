import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Moonlight effect */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-golden/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-crimson/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-golden/10 border border-golden/30 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-golden" />
          <span className="text-golden text-sm font-medium tracking-wide">
            Authentic Assamese & Fusion Cuisine
          </span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-display text-golden mb-6 tracking-wide leading-tight">
          Madhumita Moon
        </h2>
        
        <p className="text-xl md:text-2xl text-cream/90 mb-4 font-light max-w-3xl mx-auto leading-relaxed">
          Where tradition meets innovation under the moonlit sky
        </p>
        
        <p className="text-base md:text-lg text-cream/70 mb-12 max-w-2xl mx-auto">
          Experience the rich flavors of Assam blended with contemporary culinary artistry. 
          Each dish tells a story of heritage, passion, and exquisite taste.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-golden text-navy rounded-full font-semibold hover:bg-golden-light transition-all shadow-xl hover:shadow-golden/50 hover:scale-105"
          >
            Explore Our Menu
          </button>
          <button
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border-2 border-golden text-golden rounded-full font-semibold hover:bg-golden/10 transition-all"
          >
            Make a Reservation
          </button>
        </div>
      </div>
    </section>
  );
}
